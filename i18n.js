/**
 * Auto i18n — Hydration Calc
 * Detects browser language on load and translates key UI text.
 * Supports: en, ko, ja, zh, es, fr, de, pt
 */
(function () {
  'use strict';

  const translations = {
    en: {
      navCalc: 'Calculator',
      navAbout: 'About',
      navHowTo: 'How to Use',
      navPrivacy: 'Privacy Policy',
      navTerms: 'Terms of Service',
      heroTitle: 'Water Intake Calculator & Daily Hydration Tracker',
      heroSubtitle: 'Find out exactly how much water your body needs — then track every glass.',
      calcHeading: 'Calculate Your Daily Water Intake',
      calcBtn: 'Calculate My Water Intake',
      unitKg: 'kg',
      unitLbs: 'lbs',
      activityLabel: 'Activity Level',
      climateLabel: 'Climate / Environment',
      resultHeading: 'Your Daily Water Goal',
      dashboardHeading: 'Track Your Hydration Today',
      streakHeading: 'Your Hydration Streak',
      feedbackBtn: '💬 Feedback',
      feedbackSubject: 'Feedback - Hydration Calc',
    },
    ko: {
      navCalc: '계산기',
      navAbout: '소개',
      navHowTo: '사용 방법',
      navPrivacy: '개인정보처리방침',
      navTerms: '이용약관',
      heroTitle: '수분 섭취 계산기 & 일일 수화 추적기',
      heroSubtitle: '몸에 필요한 정확한 수분량을 알아보고 매 잔을 추적하세요.',
      calcHeading: '일일 수분 섭취량 계산',
      calcBtn: '수분 섭취량 계산하기',
      unitKg: 'kg',
      unitLbs: '파운드',
      activityLabel: '활동 수준',
      climateLabel: '기후 / 환경',
      resultHeading: '일일 수분 목표량',
      dashboardHeading: '오늘의 수분 섭취 추적',
      streakHeading: '수분 섭취 연속 기록',
      feedbackBtn: '💬 피드백',
      feedbackSubject: '피드백 - 수분 계산기',
    },
    ja: {
      navCalc: '計算機',
      navAbout: '概要',
      navHowTo: '使い方',
      navPrivacy: 'プライバシーポリシー',
      navTerms: '利用規約',
      heroTitle: '水分摂取量計算機 & 日常水分補給トラッカー',
      heroSubtitle: '体に必要な正確な水分量を把握し、毎杯を記録しましょう。',
      calcHeading: '1日の水分摂取量を計算',
      calcBtn: '水分摂取量を計算する',
      unitKg: 'kg',
      unitLbs: 'ポンド',
      activityLabel: '活動レベル',
      climateLabel: '気候 / 環境',
      resultHeading: '1日の水分目標',
      dashboardHeading: '今日の水分補給を追跡',
      streakHeading: '水分補給の連続記録',
      feedbackBtn: '💬 フィードバック',
      feedbackSubject: 'フィードバック - 水分計算機',
    },
    zh: {
      navCalc: '计算器',
      navAbout: '关于',
      navHowTo: '使用方法',
      navPrivacy: '隐私政策',
      navTerms: '服务条款',
      heroTitle: '水分摄入计算器和每日补水追踪器',
      heroSubtitle: '了解您的身体需要多少水，然后追踪每一杯。',
      calcHeading: '计算您的每日水分摄入量',
      calcBtn: '计算我的水分摄入量',
      unitKg: '千克',
      unitLbs: '磅',
      activityLabel: '活动水平',
      climateLabel: '气候 / 环境',
      resultHeading: '您的每日水分目标',
      dashboardHeading: '追踪今日补水情况',
      streakHeading: '补水连续记录',
      feedbackBtn: '💬 反馈',
      feedbackSubject: '反馈 - 水分计算器',
    },
    es: {
      navCalc: 'Calculadora',
      navAbout: 'Acerca de',
      navHowTo: 'Cómo usar',
      navPrivacy: 'Política de privacidad',
      navTerms: 'Términos de servicio',
      heroTitle: 'Calculadora de ingesta de agua y rastreador diario de hidratación',
      heroSubtitle: 'Descubre exactamente cuánta agua necesita tu cuerpo, luego registra cada vaso.',
      calcHeading: 'Calcula tu ingesta diaria de agua',
      calcBtn: 'Calcular mi ingesta de agua',
      unitKg: 'kg',
      unitLbs: 'libras',
      activityLabel: 'Nivel de actividad',
      climateLabel: 'Clima / Entorno',
      resultHeading: 'Tu objetivo diario de agua',
      dashboardHeading: 'Rastrea tu hidratación hoy',
      streakHeading: 'Tu racha de hidratación',
      feedbackBtn: '💬 Comentarios',
      feedbackSubject: 'Comentarios - Hydration Calc',
    },
    fr: {
      navCalc: 'Calculateur',
      navAbout: 'À propos',
      navHowTo: 'Comment utiliser',
      navPrivacy: 'Politique de confidentialité',
      navTerms: 'Conditions d\'utilisation',
      heroTitle: 'Calculateur d\'apport en eau & suivi d\'hydratation quotidien',
      heroSubtitle: 'Découvrez exactement de quelle quantité d\'eau votre corps a besoin, puis suivez chaque verre.',
      calcHeading: 'Calculez votre apport quotidien en eau',
      calcBtn: 'Calculer mon apport en eau',
      unitKg: 'kg',
      unitLbs: 'livres',
      activityLabel: 'Niveau d\'activité',
      climateLabel: 'Climat / Environnement',
      resultHeading: 'Votre objectif quotidien en eau',
      dashboardHeading: 'Suivez votre hydratation aujourd\'hui',
      streakHeading: 'Votre série d\'hydratation',
      feedbackBtn: '💬 Retour d\'info',
      feedbackSubject: 'Retour - Hydration Calc',
    },
    de: {
      navCalc: 'Rechner',
      navAbout: 'Über uns',
      navHowTo: 'Verwendung',
      navPrivacy: 'Datenschutzrichtlinie',
      navTerms: 'Nutzungsbedingungen',
      heroTitle: 'Wasserbedarf-Rechner & täglicher Hydrations-Tracker',
      heroSubtitle: 'Finden Sie heraus, wie viel Wasser Ihr Körper braucht, und verfolgen Sie jedes Glas.',
      calcHeading: 'Berechnen Sie Ihren täglichen Wasserbedarf',
      calcBtn: 'Wasserbedarf berechnen',
      unitKg: 'kg',
      unitLbs: 'Pfund',
      activityLabel: 'Aktivitätsniveau',
      climateLabel: 'Klima / Umgebung',
      resultHeading: 'Ihr tägliches Wasserziel',
      dashboardHeading: 'Verfolgen Sie Ihre Flüssigkeitszufuhr heute',
      streakHeading: 'Ihre Hydrations-Serie',
      feedbackBtn: '💬 Feedback',
      feedbackSubject: 'Feedback - Hydration Calc',
    },
    pt: {
      navCalc: 'Calculadora',
      navAbout: 'Sobre',
      navHowTo: 'Como usar',
      navPrivacy: 'Política de Privacidade',
      navTerms: 'Termos de Serviço',
      heroTitle: 'Calculadora de ingestão de água e rastreador diário de hidratação',
      heroSubtitle: 'Descubra exatamente quanta água seu corpo precisa — depois registre cada copo.',
      calcHeading: 'Calcule sua ingestão diária de água',
      calcBtn: 'Calcular minha ingestão de água',
      unitKg: 'kg',
      unitLbs: 'libras',
      activityLabel: 'Nível de atividade',
      climateLabel: 'Clima / Ambiente',
      resultHeading: 'Sua meta diária de água',
      dashboardHeading: 'Acompanhe sua hidratação hoje',
      streakHeading: 'Sua sequência de hidratação',
      feedbackBtn: '💬 Feedback',
      feedbackSubject: 'Feedback - Hydration Calc',
    },
  };

  function getLang() {
    const raw = navigator.language || navigator.userLanguage || 'en';
    const code = raw.toLowerCase().split('-')[0];
    return translations[code] ? code : 'en';
  }

  function applyTranslations(lang) {
    if (lang === 'en') return; // Default already in HTML
    const t = translations[lang];
    if (!t) return;

    function setText(selector, text) {
      const el = document.querySelector(selector);
      if (el) el.textContent = text;
    }

    // Nav links
    document.querySelectorAll('.nav-links a').forEach(function(a) {
      const href = (a.getAttribute('href') || '').replace(/^\//, '');
      if (href === '' || href === 'index.html') a.textContent = t.navCalc;
      else if (href === 'about') a.textContent = t.navAbout;
      else if (href === 'how-to-use') a.textContent = t.navHowTo;
    });

    // Footer nav links
    document.querySelectorAll('footer a').forEach(function(a) {
      const href = (a.getAttribute('href') || '').replace(/^\//, '');
      if (href === '' || href === '/') a.textContent = t.navCalc;
      else if (href === 'about') a.textContent = t.navAbout;
      else if (href === 'how-to-use') a.textContent = t.navHowTo;
      else if (href === 'privacy') a.textContent = t.navPrivacy;
      else if (href === 'terms') a.textContent = t.navTerms;
    });

    // Hero
    const h1 = document.querySelector('header h1');
    if (h1) h1.textContent = '\uD83D\uDCA7 ' + t.heroTitle;
    const heroP = document.querySelector('header p');
    if (heroP) heroP.textContent = t.heroSubtitle;

    // Calc section
    setText('#calc-heading', t.calcHeading);
    const calcBtn = document.getElementById('calc-btn');
    if (calcBtn) calcBtn.textContent = t.calcBtn + ' \uD83D\uDCA7';

    // Labels
    setText('#weight-label', 'Body Weight (' + (lang === 'ko' ? 'kg' : t.unitKg) + ')');
    setText('label[for="activity"]', t.activityLabel);
    setText('label[for="climate"]', t.climateLabel);

    // Unit toggle buttons
    setText('#unit-kg', t.unitKg);

    // Result / dashboard headings
    setText('#result-heading', '\uD83D\uDCCA ' + t.resultHeading);
    setText('#dashboard-heading', '\uD83E\uDD64 ' + t.dashboardHeading);
    setText('#streak-heading', '\uD83D\uDCC5 ' + t.streakHeading);

    // Feedback widget
    const fbBtn = document.getElementById('water-feedback-btn');
    if (fbBtn) fbBtn.textContent = t.feedbackBtn;
    const fbMailto = document.getElementById('water-feedback-mailto');
    if (fbMailto) {
      const subj = encodeURIComponent(t.feedbackSubject);
      fbMailto.href = 'mailto:taeshinkim11@gmail.com?subject=' + subj;
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const lang = getLang();
    applyTranslations(lang);
  });
})();
