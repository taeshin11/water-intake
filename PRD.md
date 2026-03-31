# PRD.md — Water Intake Calculator & Log (Hydration Calc)

## 0. Project Meta

| Key | Value |
|---|---|
| Service Name | Water Intake Calculator & Log |
| Short Title | Hydration Calc |
| Folder | `water-intake` |
| Stack | HTML + Tailwind CSS + Vanilla JS (single-page, zero-framework) |
| Hosting | Vercel (free tier, CLI deploy) |
| Domain | Vercel auto-assigned domain (never expose GitHub username in public URLs) |
| Repo | Create via `gh repo create water-intake --public -d "Water Intake Calculator & Log"` |
| Ad Network | Adsterra (primary), Google AdSense (secondary/later) |
| Data Collection | Google Sheets via Apps Script webhook — silent POST on every calculation |
| Contact Email | spinaiceo@gmail.com |
| Brand | SPINAI |

---

## 1. Harness Architecture (Anthropic-Style)

This project follows the **Anthropic Harness Design** for autonomous Claude Code development. Four agent roles operate across sessions with three persistent handoff files.

### 1.1 Agent Roles

| Agent | Role |
|---|---|
| **Planner** | Expands this PRD into granular feature specs. Focuses on *what* to build, never *how*. |
| **Initializer** | First session only. Scaffolds repo, creates the three handoff files, sets up deployment pipeline. |
| **Builder** | Codes one feature per cycle. Reads handoff files → picks next feature → implements → tests → commits → updates progress. |
| **Reviewer** | After each feature, reviews code quality, UI/UX, SEO, accessibility, responsiveness. Files issues or fixes inline. |

### 1.2 Three Handoff Files (Created by Initializer)

| File | Purpose |
|---|---|
| `feature_list.json` | Ordered array of every feature with `id`, `title`, `status` (`pending` / `in-progress` / `done`), `priority` (1-5). |
| `claude-progress.txt` | Human-readable session log. Each entry: timestamp, feature worked on, outcome, blockers, next steps. |
| `init.sh` | One-command project bootstrap: installs deps, starts local dev server, opens browser preview. |

### 1.3 Session-Start Routine (Every Session)

```
1. Read `claude-progress.txt` → understand current state
2. Read `feature_list.json` → identify next pending feature
3. Run `init.sh` → verify project runs locally
4. Run existing tests → confirm nothing is broken
5. Pick highest-priority pending feature → implement
6. Test the feature
7. Git commit with descriptive message
8. Update `claude-progress.txt` and `feature_list.json`
9. If milestone reached → `git push origin main`
10. Move to next feature or end session
```

---

## 2. Product Vision

A **free, beautiful, mobile-first** web tool that:
1. Calculates personalized daily water intake based on body weight, activity level, and climate.
2. Provides a **visual hydration dashboard** where users tap/click cup icons to track glasses consumed throughout the day.
3. Shows progress toward daily goal with animated fill bars and motivational feedback.
4. Stores daily log in browser `localStorage` so users can see streak history.

---

## 3. Feature List (Ordered by Priority)

| # | Feature | Priority | Milestone? |
|---|---|---|---|
| F01 | Project scaffold + Vercel deploy pipeline | 1 | ✅ Git push |
| F02 | Responsive layout + soft background palette + SPINAI footer | 1 | |
| F03 | Weight & activity input form (metric + imperial toggle) | 1 | |
| F04 | Water intake calculation engine | 1 | ✅ Git push |
| F05 | Visual cup-grid dashboard (tap to fill) | 1 | ✅ Git push |
| F06 | Animated progress bar + motivational messages | 2 | |
| F07 | Google Sheets webhook integration (silent POST on calc) | 1 | ✅ Git push |
| F08 | Adsterra ad integration (banner + native) | 1 | ✅ Git push |
| F09 | SEO optimization (meta, OG, sitemap, robots, structured data) | 1 | ✅ Git push |
| F10 | Visitor counter (today + total) in footer | 2 | |
| F11 | localStorage daily log + streak tracker | 2 | |
| F12 | Feedback & Business inquiry mailto links | 2 | |
| F13 | Final QA: live site check, all functions, performance audit | 1 | ✅ Git push |

---

## 4. Detailed Feature Specs

### F01 — Project Scaffold + Deploy Pipeline

- Run `gh repo create water-intake --public -d "Water Intake Calculator & Log"` using gh CLI.
- Initialize with `index.html`, `style.css`, `script.js`, `README.md`.
- Tailwind via CDN (zero build step).
- Create `vercel.json` for single-page config.
- Deploy to Vercel via CLI: `npx vercel --prod`.
- **All deployment must be automated via CLI. No manual guides.**
- **Public URL must use Vercel domain only — never expose GitHub username.**
- **Milestone → git push after successful first deploy.**

### F02 — Responsive Layout + Soft Background + Branding

- Mobile-first responsive design (breakpoints: 320px, 768px, 1024px, 1440px).
- **Soft background palette**: use gentle gradients or muted tones.
  - Suggested: `#F0F4FF` (light blue-white) to `#E8F5E9` (light mint) gradient, or similar calming water-themed palette.
  - Card backgrounds: white with subtle shadow.
  - Text: dark gray `#333` primary, `#666` secondary.
  - Accent: ocean blue `#4A90D9` for buttons and interactive elements.
- **Modern, comfortable UI/UX**:
  - Generous padding and spacing.
  - Rounded corners (8-12px) on cards and buttons.
  - Smooth transitions (0.3s ease) on all interactive elements.
  - Clean sans-serif typography (Inter or system font stack).
  - No visual clutter — breathing room between sections.
- Footer contains:
  - "Built by SPINAI" with subtle branding (small logo or text).
  - Visitor counter (today / total) — non-intrusive, small text.
  - Copyright year.

### F03 — Input Form

- **Fields**:
  - Body weight (number input with unit toggle: kg / lbs).
  - Activity level (dropdown or segmented control): Sedentary / Lightly Active / Moderately Active / Very Active / Athlete.
  - Climate (optional): Temperate / Hot & Humid / Cold / High Altitude.
  - Cups already consumed today (optional, default 0).
- **UX**:
  - Large touch-friendly inputs for mobile.
  - Real-time validation (no negative numbers, reasonable weight range).
  - Single prominent "Calculate" CTA button.
  - Smooth scroll to results after calculation.

### F04 — Calculation Engine

- **Formula**:
  - Base: `weight_kg × 35 mL` (or `weight_lbs × 0.5 oz`).
  - Activity multiplier: Sedentary ×1.0, Lightly Active ×1.1, Moderate ×1.2, Very Active ×1.4, Athlete ×1.5.
  - Climate modifier: Temperate +0mL, Hot +500mL, Cold +250mL, High Altitude +500mL.
- Output: total daily mL and equivalent cups (1 cup = 250mL).
- Display result in a visually prominent result card.
- **Milestone → git push after calculation logic works end-to-end.**

### F05 — Visual Cup-Grid Dashboard

- After calculation, show a grid of cup icons matching the recommended number.
- Each cup is **tappable/clickable**.
- Tapping a cup fills it with a water animation (CSS transition: empty → blue fill from bottom).
- Filled cups show a checkmark overlay.
- Counter updates: "5 / 10 cups completed".
- Reset button to clear daily progress.
- **This is the hero feature — make it delightful.**
  - Add subtle ripple/wave animation on fill.
  - Use water-drop SVG icons.
  - Consider sound toggle (optional gentle water sound on mobile).
- **Milestone → git push after cup dashboard is fully interactive.**

### F06 — Progress Bar + Motivational Messages

- Horizontal animated progress bar below the cup grid.
- Fills proportionally as cups are tapped.
- Color gradient: light blue → deep blue as progress increases.
- Motivational messages based on progress:
  - 0%: "Let's start hydrating! 💧"
  - 25%: "Great start! Keep going! 🌊"
  - 50%: "Halfway there! You're doing amazing! 💪"
  - 75%: "Almost there! Your body thanks you! 🎯"
  - 100%: "🎉 Goal reached! You're fully hydrated today!"

### F07 — Google Sheets Webhook (Data Collection)

- **Set up Google Apps Script** that accepts POST requests and writes to a Sheet.
- Apps Script code (create and deploy via CLI or provide ready-to-paste script):

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.weight,
    data.unit,
    data.activity,
    data.climate,
    data.recommended_ml,
    data.recommended_cups,
    data.user_agent,
    data.referrer
  ]);
  return ContentService.createTextOutput("OK");
}
```

- On "Calculate" button click, silently POST the input data + result to the webhook URL.
- **Fire-and-forget**: do not block UI or show errors to user. Use `navigator.sendBeacon()` or `fetch` with no-await.
- **Do not just write a guide. Actually wire the POST call in the JS code. Leave webhook URL as a clearly marked placeholder constant at the top of script.js.**
- **Milestone → git push after webhook integration is confirmed.**

### F08 — Adsterra Ad Integration

- **Primary ad network: Adsterra** (faster approval than AdSense).
- **Placements** (non-intrusive, UX-friendly):
  - Top banner (728×90 desktop / 320×50 mobile) — above the fold but below header.
  - Native ad unit between result card and cup dashboard.
  - Sticky bottom banner on mobile (320×50).
- **Implementation**:
  - Add Adsterra script tags with placeholder `data-ad-slot` IDs.
  - Mark ad placement constants at the top of `index.html` for easy key replacement.
  - Comment: `<!-- ADSTERRA: Replace YOUR_AD_KEY with actual key from Adsterra dashboard -->`
- After Adsterra approval, replace placeholder keys with real ad unit keys.
- **Milestone → git push after ad placements are coded.**

### F09 — SEO & Traffic Maximization

- **On-Page SEO**:
  - `<title>`: "Free Water Intake Calculator — How Much Water Should I Drink Daily?"
  - `<meta description>`: compelling 155-char snippet with keywords.
  - `<h1>`: "Water Intake Calculator & Daily Hydration Tracker"
  - Semantic HTML5 (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`).
  - Alt text on every image/icon.
- **Technical SEO**:
  - `sitemap.xml` auto-generated.
  - `robots.txt` allowing all crawlers.
  - Canonical URL set.
  - JSON-LD structured data (WebApplication schema + FAQPage schema).
- **Open Graph + Twitter Cards**:
  - OG image (1200×630) — create a simple branded preview image.
  - OG title, description, URL.
  - Twitter card: summary_large_image.
- **Content SEO**:
  - FAQ section below the tool (5-8 questions):
    - "How much water should I drink per day?"
    - "Does coffee count as water intake?"
    - "How does exercise affect water needs?"
    - "What are signs of dehydration?"
    - "Is it possible to drink too much water?"
    - etc.
  - Short blog-style educational paragraph about hydration science (200-300 words).
  - Internal anchor links for smooth navigation.
- **Performance**:
  - Target Lighthouse score: 90+ on all metrics.
  - Minimize external requests. Inline critical CSS.
  - Lazy-load ad scripts.
- **Traffic Generation Tactics**:
  - Embed share buttons (Twitter, WhatsApp, copy-link) that share personalized result: "I need to drink X cups of water today! Check yours →".
  - "Share your goal" CTA after calculation.
  - PWA-ready: add `manifest.json` so users can install to home screen.
- **Milestone → git push after SEO layer is complete.**

### F10 — Visitor Counter

- **Non-intrusive placement**: small text in footer, e.g., "👀 Today: 42 | Total: 1,234".
- Use a **free counting service** or a lightweight serverless counter:
  - Option A: CountAPI (free, no signup).
  - Option B: A second Google Apps Script endpoint that increments a counter cell.
- Fetch count on page load, display in footer.
- Must not degrade page load performance.

### F11 — localStorage Daily Log + Streak

- Save each day's intake to `localStorage` as `{ date: "2025-06-15", cups_goal: 10, cups_done: 7 }`.
- Show a "📅 Your Hydration Streak" section:
  - Calendar-style heatmap or simple list of last 7 days.
  - Days where goal was met: green checkmark.
  - Days where goal was missed: gray.
  - Current streak count: "🔥 3-day streak!"
- Data persists across browser sessions (client-side only).

### F12 — Feedback & Business Inquiry

- **Feedback (for users)**:
  - Small "💬 Suggest an improvement" link in the footer.
  - Opens `mailto:spinaiceo@gmail.com?subject=Hydration%20Calc%20Feedback`.
- **Business Inquiry**:
  - "🤝 Business inquiries" link in footer.
  - Opens `mailto:spinaiceo@gmail.com?subject=Business%20Inquiry%20-%20Hydration%20Calc`.
- **Both must be subtle and non-intrusive.** Footer placement, small font, muted color.

### F13 — Final QA & Live Check

- **After deploying to Vercel, perform comprehensive checks:**
  1. Open live Vercel URL in both mobile and desktop viewport.
  2. Test weight input in kg and lbs.
  3. Test all activity levels and climates.
  4. Verify calculation accuracy against formula.
  5. Tap every cup — confirm fill animation and counter update.
  6. Confirm progress bar animates correctly.
  7. Check Google Sheets receives POST data after calculation.
  8. Verify Adsterra ad placeholders render (or load if keys are set).
  9. Check SEO: view page source for meta tags, OG tags, structured data.
  10. Run Lighthouse audit (target 90+ all categories).
  11. Verify sitemap.xml and robots.txt are accessible.
  12. Test share buttons.
  13. Verify visitor counter increments.
  14. Check localStorage log persists after browser refresh.
  15. Test feedback and business inquiry mailto links.
  16. Confirm "Built by SPINAI" is visible in footer.
  17. Confirm GitHub username is NOT visible in any public URL.
- **Fix any issues found.**
- **Milestone → final git push after all checks pass.**

---

## 5. Standing Constraints (Apply to ALL Features)

| # | Constraint |
|---|---|
| C01 | **Zero cost.** Use only free tiers: Vercel, GitHub, Google Sheets, Adsterra, CountAPI. No paid services. |
| C02 | **Adsterra first.** Integrate Adsterra as primary ad network for faster monetization. AdSense as future secondary. |
| C03 | **Google Sheets webhook.** Silent data collection on every calculation. Not a guide — wire it in code. |
| C04 | **CLI automation.** If a task can be done via CLI, do it via CLI. No manual steps, no step-by-step guides. Deploy via CLI, create repo via `gh` CLI, push via `git` CLI. |
| C05 | **No GitHub username exposure.** Public-facing URLs must be Vercel domains or short redirect links. |
| C06 | **Milestone git pushes.** Push to remote at every milestone (marked ✅ in feature table). Use descriptive commit messages. |
| C07 | **SEO-first.** Every page must be optimized for search. Meta tags, structured data, semantic HTML, fast load. |
| C08 | **Responsive.** Must look great on 320px mobile through 1440px desktop. Test at every breakpoint. |
| C09 | **Soft palette.** Background colors must be calming and soft. No harsh whites or saturated backgrounds. Water/nature theme. |
| C10 | **Modern UI/UX.** Comfortable, spacious, rounded, animated. Must feel premium despite being free. |
| C11 | **Visitor counter.** Today + Total in footer. Non-intrusive. |
| C12 | **Contact links.** Feedback + Business inquiry → spinaiceo@gmail.com. Footer placement. |
| C13 | **SPINAI branding.** "Built by SPINAI" in footer. Subtle but present. |
| C14 | **Live verification.** After deploy, check every feature on the live site. Fix issues before final push. |

---

## 6. File Structure

```
water-intake/
├── index.html          # Single-page app (all HTML)
├── style.css           # Custom styles + Tailwind overrides
├── script.js           # All JS: calc engine, cup dashboard, webhook, counter
├── manifest.json       # PWA manifest
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Crawler instructions
├── vercel.json         # Vercel deployment config
├── og-image.png        # Open Graph preview image (auto-generated or placeholder)
├── favicon.ico         # Favicon (water drop icon)
├── README.md           # Project description
├── feature_list.json   # Harness: feature tracking
├── claude-progress.txt # Harness: session progress log
├── init.sh             # Harness: project bootstrap script
└── .gitignore          # Standard ignores
```

---

## 7. Git Push Milestones

| Milestone | Trigger | Commit Message Format |
|---|---|---|
| M1 | F01 complete — scaffold + first deploy | `feat: initial scaffold and Vercel deploy` |
| M2 | F04 complete — calc engine works | `feat: water intake calculation engine` |
| M3 | F05 complete — cup dashboard interactive | `feat: visual cup-grid hydration dashboard` |
| M4 | F07 complete — webhook wired | `feat: Google Sheets webhook integration` |
| M5 | F08 complete — ads placed | `feat: Adsterra ad placements` |
| M6 | F09 complete — SEO layer done | `feat: SEO optimization complete` |
| M7 | F13 complete — all QA passed | `release: v1.0 — all features verified on live site` |

---

## 8. Session-Start Prompt for Claude Code

Paste this at the beginning of every Claude Code session:

```
Read `claude-progress.txt` and `feature_list.json` in the `water-intake` directory.
Understand current project state. Run `bash init.sh` to verify the project works.
Pick the next highest-priority pending feature from `feature_list.json`.
Implement it fully, test it, commit with a descriptive message.
Update `claude-progress.txt` with what you did and any blockers.
Update `feature_list.json` status to "done".
If this feature is a milestone (see PRD.md §7), run `git push origin main`.
Then move to the next feature. Repeat until the session ends or all features are done.
Always automate via CLI. Never output manual guides. Execute, don't document.
```

---

## 9. Acceptance Criteria (Definition of Done)

The project is complete when:

- [ ] Live Vercel URL loads with no errors on mobile and desktop.
- [ ] Water intake calculation is accurate for all input combinations.
- [ ] Cup dashboard is fully interactive with fill animations.
- [ ] Google Sheets receives data on every calculation.
- [ ] Adsterra ad slots are coded and ready for keys.
- [ ] SEO: Lighthouse ≥ 90 on Performance, SEO, Accessibility, Best Practices.
- [ ] Sitemap, robots.txt, structured data, OG tags all present and valid.
- [ ] Visitor counter shows today + total in footer.
- [ ] Share buttons work (Twitter, WhatsApp, copy link).
- [ ] localStorage streak tracker persists across sessions.
- [ ] Feedback + Business inquiry mailto links work.
- [ ] "Built by SPINAI" visible in footer.
- [ ] No GitHub username exposed in any public URL.
- [ ] All milestone git pushes completed.
- [ ] Final QA checklist (F13) passed on live site.