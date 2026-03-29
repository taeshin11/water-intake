// ============================================================
// CONFIGURATION — replace placeholders before going live
// ============================================================
const GOOGLE_SHEETS_WEBHOOK_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL_HERE';
const COUNTAPI_NAMESPACE = 'hydration-calc-spinai';
const COUNTAPI_KEY = 'visitors';

// ============================================================
// Calculation Engine
// ============================================================
function calculateWaterIntake(weightKg, activityLevel, climate) {
  const activityMultipliers = {
    sedentary: 1.0,
    lightly_active: 1.1,
    moderately_active: 1.2,
    very_active: 1.4,
    athlete: 1.5,
  };
  const climateModifiers = {
    temperate: 0,
    hot_humid: 500,
    cold: 250,
    high_altitude: 500,
  };

  const base = weightKg * 35;
  const withActivity = base * (activityMultipliers[activityLevel] || 1.0);
  const totalMl = withActivity + (climateModifiers[climate] || 0);
  const cups = Math.ceil(totalMl / 250);
  return { totalMl: Math.round(totalMl), cups };
}

// ============================================================
// Google Sheets Webhook (fire-and-forget)
// ============================================================
function sendToWebhook(data) {
  if (!GOOGLE_SHEETS_WEBHOOK_URL || GOOGLE_SHEETS_WEBHOOK_URL.startsWith('YOUR_')) return;
  try {
    const payload = JSON.stringify({
      weight: data.weight,
      unit: data.unit,
      activity: data.activity,
      climate: data.climate,
      recommended_ml: data.recommended_ml,
      recommended_cups: data.recommended_cups,
      user_agent: navigator.userAgent,
      referrer: document.referrer || 'direct',
    });
    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: 'application/json' });
      navigator.sendBeacon(GOOGLE_SHEETS_WEBHOOK_URL, blob);
    } else {
      fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch (_) {}
}

// ============================================================
// Cup Dashboard
// ============================================================
let totalCups = 0;
let filledCups = 0;

function renderCupGrid(count) {
  totalCups = count;
  filledCups = 0;
  const grid = document.getElementById('cup-grid');
  grid.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const cup = document.createElement('button');
    cup.className = 'cup';
    cup.setAttribute('aria-label', `Cup ${i + 1}`);
    cup.dataset.index = i;
    cup.innerHTML = `
      <svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path class="cup-body" d="M6 8h28l-4 36H10L6 8z" stroke="currentColor" stroke-width="2" fill="none"/>
        <path class="cup-fill" d="M10 44h20l2-20H8l2 20z" fill="#4A90D9" opacity="0"/>
        <path class="cup-rim" d="M4 8h32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path class="cup-check" d="M14 26l5 5 8-9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
        <circle class="cup-ripple" cx="20" cy="30" r="0" fill="#4A90D9" opacity="0"/>
      </svg>
    `;
    cup.addEventListener('click', () => toggleCup(cup, i));
    grid.appendChild(cup);
  }
  updateCounter();
  updateProgressBar();
}

function toggleCup(cupEl, index) {
  const isFilled = cupEl.classList.contains('filled');
  if (isFilled) {
    cupEl.classList.remove('filled');
    filledCups = Math.max(0, filledCups - 1);
  } else {
    cupEl.classList.add('filled');
    filledCups++;
    animateRipple(cupEl);
  }
  updateCounter();
  updateProgressBar();
  saveDailyProgress();
}

function animateRipple(cupEl) {
  const ripple = cupEl.querySelector('.cup-ripple');
  if (!ripple) return;
  ripple.style.transition = 'none';
  ripple.setAttribute('r', '0');
  ripple.setAttribute('opacity', '0.4');
  requestAnimationFrame(() => {
    ripple.style.transition = 'r 0.4s ease-out, opacity 0.4s ease-out';
    ripple.setAttribute('r', '18');
    ripple.setAttribute('opacity', '0');
  });
}

function updateCounter() {
  const el = document.getElementById('cup-counter');
  if (el) el.textContent = `${filledCups} / ${totalCups} cups`;
}

function updateProgressBar() {
  const pct = totalCups > 0 ? (filledCups / totalCups) * 100 : 0;
  const bar = document.getElementById('progress-fill');
  const pctLabel = document.getElementById('progress-pct');
  if (bar) bar.style.width = `${pct}%`;
  if (pctLabel) pctLabel.textContent = `${Math.round(pct)}%`;
  updateMotivation(pct);
}

function updateMotivation(pct) {
  const el = document.getElementById('motivation-msg');
  if (!el) return;
  let msg = '';
  if (pct === 0) msg = "Let's start hydrating! \uD83D\uDCA7";
  else if (pct < 25) msg = 'Great start! Keep going! \uD83C\uDF0A';
  else if (pct < 50) msg = 'Keep it up! Every drop counts! \uD83D\uDCAA';
  else if (pct < 75) msg = 'Halfway there! You\'re doing amazing! \uD83D\uDCAA';
  else if (pct < 100) msg = 'Almost there! Your body thanks you! \uD83C\uDFAF';
  else msg = '\uD83C\uDF89 Goal reached! You\'re fully hydrated today!';
  el.textContent = msg;
}

// ============================================================
// Form & Calculate
// ============================================================
let currentUnit = 'kg';

document.addEventListener('DOMContentLoaded', () => {
  // Unit toggle
  document.getElementById('unit-kg').addEventListener('click', () => setUnit('kg'));
  document.getElementById('unit-lbs').addEventListener('click', () => setUnit('lbs'));

  // Calculate button
  document.getElementById('calc-btn').addEventListener('click', handleCalculate);

  // Reset cups
  document.getElementById('reset-cups').addEventListener('click', resetCups);

  // Share buttons
  document.getElementById('share-twitter').addEventListener('click', shareTwitter);
  document.getElementById('share-whatsapp').addEventListener('click', shareWhatsApp);
  document.getElementById('share-copy').addEventListener('click', copyLink);

  // Init visitor counter
  initVisitorCounter();

  // Restore streak
  renderStreak();

  // Show motivation default
  updateMotivation(0);
});

function setUnit(unit) {
  currentUnit = unit;
  const kgBtn = document.getElementById('unit-kg');
  const lbsBtn = document.getElementById('unit-lbs');
  const label = document.getElementById('weight-label');
  if (unit === 'kg') {
    kgBtn.classList.add('active');
    lbsBtn.classList.remove('active');
    label.textContent = 'Body Weight (kg)';
  } else {
    lbsBtn.classList.add('active');
    kgBtn.classList.remove('active');
    label.textContent = 'Body Weight (lbs)';
  }
}

function handleCalculate() {
  const weightInput = parseFloat(document.getElementById('weight').value);
  const activity = document.getElementById('activity').value;
  const climate = document.getElementById('climate').value;

  // Validation
  if (!weightInput || weightInput <= 0 || weightInput > 500) {
    showError('Please enter a valid weight (1–500).');
    return;
  }
  clearError();

  const weightKg = currentUnit === 'lbs' ? weightInput * 0.453592 : weightInput;
  const { totalMl, cups } = calculateWaterIntake(weightKg, activity, climate);

  // Show result
  document.getElementById('result-ml').textContent = totalMl.toLocaleString();
  document.getElementById('result-cups').textContent = cups;
  document.getElementById('result-card').classList.remove('hidden');
  document.getElementById('dashboard-section').classList.remove('hidden');
  document.getElementById('streak-section').classList.remove('hidden');

  // Render cup grid
  renderCupGrid(cups);

  // Smooth scroll to results
  document.getElementById('result-card').scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Webhook (fire-and-forget)
  sendToWebhook({
    weight: weightInput,
    unit: currentUnit,
    activity,
    climate,
    recommended_ml: totalMl,
    recommended_cups: cups,
  });

  // Update share text
  updateShareText(cups, totalMl);

  // Save today's goal for streak
  saveTodayGoal(cups);
}

function showError(msg) {
  const el = document.getElementById('weight-error');
  if (el) { el.textContent = msg; el.classList.remove('hidden'); }
}
function clearError() {
  const el = document.getElementById('weight-error');
  if (el) el.classList.add('hidden');
}

// ============================================================
// Reset cups
// ============================================================
function resetCups() {
  const cups = document.querySelectorAll('.cup.filled');
  cups.forEach(c => c.classList.remove('filled'));
  filledCups = 0;
  updateCounter();
  updateProgressBar();
  saveDailyProgress();
}

// ============================================================
// Share
// ============================================================
let shareText = '';
function updateShareText(cups, ml) {
  shareText = `I need to drink ${cups} cups (${ml} mL) of water today! Check how much you need →`;
}

function shareTwitter() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(shareText || 'Check your daily water intake!');
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent((shareText || 'Check your daily water intake!') + ' ' + window.location.href);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function copyLink() {
  const fullText = (shareText || 'Check your daily water intake!') + ' ' + window.location.href;
  navigator.clipboard.writeText(fullText).then(() => {
    const btn = document.getElementById('share-copy');
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = orig; }, 2000);
  }).catch(() => {});
}

// ============================================================
// localStorage — daily progress + streak
// ============================================================
function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function saveDailyProgress() {
  const key = getTodayKey();
  const existing = JSON.parse(localStorage.getItem('hydration_log') || '{}');
  existing[key] = Object.assign(existing[key] || {}, { cups_done: filledCups });
  localStorage.setItem('hydration_log', JSON.stringify(existing));
  renderStreak();
}

function saveTodayGoal(cups) {
  const key = getTodayKey();
  const existing = JSON.parse(localStorage.getItem('hydration_log') || '{}');
  existing[key] = Object.assign(existing[key] || {}, { cups_goal: cups });
  localStorage.setItem('hydration_log', JSON.stringify(existing));
  renderStreak();
}

function renderStreak() {
  const container = document.getElementById('streak-days');
  const streakCount = document.getElementById('streak-count');
  if (!container) return;

  const log = JSON.parse(localStorage.getItem('hydration_log') || '{}');
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const entry = log[key] || {};
    const met = entry.cups_goal && entry.cups_done >= entry.cups_goal;
    const label = d.toLocaleDateString('en-US', { weekday: 'short' });
    days.push({ key, met, label });
  }

  container.innerHTML = days.map(d => `
    <div class="streak-day ${d.met ? 'met' : ''}">
      <span class="streak-icon">${d.met ? '\u2705' : '\u25CB'}</span>
      <span class="streak-label">${d.label}</span>
    </div>
  `).join('');

  // Compute current streak
  let streak = 0;
  const allKeys = Object.keys(log).sort().reverse();
  for (const key of allKeys) {
    const e = log[key];
    if (e.cups_goal && e.cups_done >= e.cups_goal) streak++;
    else break;
  }
  if (streakCount) streakCount.textContent = streak > 0 ? `\uD83D\uDD25 ${streak}-day streak!` : 'No streak yet — start today!';
}

// ============================================================
// Visitor Counter (CountAPI)
// ============================================================
async function initVisitorCounter() {
  try {
    // Increment total
    const totalRes = await fetch(`https://api.countapi.xyz/hit/${COUNTAPI_NAMESPACE}/${COUNTAPI_KEY}`);
    const totalData = await totalRes.json();

    // Today counter
    const todayKey = `${COUNTAPI_KEY}-${getTodayKey()}`;
    const todayRes = await fetch(`https://api.countapi.xyz/hit/${COUNTAPI_NAMESPACE}/${todayKey}`);
    const todayData = await todayRes.json();

    const el = document.getElementById('visitor-counter');
    if (el) {
      el.textContent = `\uD83D\uDC41\uFE0F Today: ${(todayData.value || 0).toLocaleString()} | Total: ${(totalData.value || 0).toLocaleString()}`;
    }
  } catch (_) {
    const el = document.getElementById('visitor-counter');
    if (el) el.textContent = '';
  }
}
