/**
 * Auto i18n — Hydration Calc
 * Detects browser language on load and translates all UI text via data-i18n attributes.
 * Supports: en, ko, ja, zh, es, fr, de, pt
 */
(function () {
  'use strict';

  const translations = {
    en: {
      // Nav
      navCalc: 'Calculator',
      navAbout: 'About',
      navHowTo: 'How to Use',
      navPrivacy: 'Privacy Policy',
      navTerms: 'Terms of Service',
      // Hero
      heroTitle: 'Water Intake Calculator & Daily Hydration Tracker',
      heroSubtitle: 'Find out exactly how much water your body needs — then track every glass.',
      // Calc section
      calcHeading: 'Calculate Your Daily Water Intake',
      calcBtn: 'Calculate My Water Intake 💧',
      unitKg: 'kg',
      unitLbs: 'lbs',
      weightLabel: 'Body Weight (kg)',
      weightLabelLbs: 'Body Weight (lbs)',
      weightPlaceholder: 'e.g. 70',
      activityLabel: 'Activity Level',
      actSedentary: 'Sedentary (little/no exercise)',
      actLightly: 'Lightly Active (1–3 days/week)',
      actModerately: 'Moderately Active (3–5 days/week)',
      actVery: 'Very Active (6–7 days/week)',
      actAthlete: 'Athlete (2× training per day)',
      climateLabel: 'Climate / Environment',
      climateTemperate: 'Temperate',
      climateHot: 'Hot & Humid',
      climateCold: 'Cold',
      climateAltitude: 'High Altitude',
      // Result
      resultHeading: '📊 Your Daily Water Goal',
      resultMlLabel: 'millilitres per day',
      resultCupsLabel: 'cups per day (250 mL each)',
      resultNote: 'Based on your weight, activity level, and climate. Spread intake throughout the day for best results.',
      shareGoal: 'Share your goal:',
      shareTwitter: '🐦 Twitter',
      shareWhatsapp: '💬 WhatsApp',
      shareCopy: '🔗 Copy Link',
      // Dashboard
      dashboardHeading: '🥤 Track Your Hydration Today',
      dashboardSubtitle: 'Tap each cup as you drink it. Fill them all to reach your goal!',
      cupGridLabel: 'Hydration cups',
      resetCups: '↺ Reset',
      // Streak
      streakHeading: '📅 Your Hydration Streak',
      streakHistoryLabel: '7-day hydration history',
      // Science section
      scienceHeading: '🔬 The Science of Hydration',
      scienceBody1: 'Water makes up about 60% of the adult human body and is involved in virtually every physiological process — from regulating body temperature and transporting nutrients to flushing out toxins and lubricating joints. Even mild dehydration of 1–2% of body weight can impair cognitive performance, reduce physical endurance, and cause headaches or fatigue.',
      scienceBody2: 'The widely cited "8 glasses a day" rule is a useful starting point, but optimal intake varies significantly with body weight, activity level, climate, and diet. Our calculator uses an evidence-based formula (35 mL per kg of body weight as a baseline, adjusted for activity and environment) to give you a personalized recommendation. Remember: fruits, vegetables, and other beverages also contribute to your daily fluid intake — listen to your body and drink when you\'re thirsty.',
      // Benefits section
      benefitsHeading: '10 Benefits of Drinking Enough Water Every Day',
      // FAQ
      faqHeading: '❓ Frequently Asked Questions',
      faq1q: 'How much water should I drink per day?',
      faq1a: 'A reliable formula is 35 mL per kg of body weight, adjusted for activity and climate. Our calculator does this automatically. The old "8 glasses a day" guideline is a good baseline but doesn\'t account for individual differences.',
      faq2q: 'Does coffee count toward my daily water intake?',
      faq2a: 'Moderate coffee consumption (1–3 cups/day) does contribute to your fluid intake. However, caffeine has a mild diuretic effect at higher amounts. Pure water remains the gold standard for hydration.',
      faq3q: 'How does exercise affect how much water I need?',
      faq3a: 'Exercise significantly increases fluid loss through sweat and respiration. For every hour of intense activity, you may need an additional 500–1000 mL. Our "Very Active" and "Athlete" settings account for this with a 1.4× and 1.5× multiplier respectively.',
      faq4q: 'What are the signs of dehydration?',
      faq4a: 'Early signs include dark yellow urine, dry mouth, thirst, and fatigue. Moderate dehydration adds headache, dizziness, and reduced cognitive performance. Severe dehydration (rapid heartbeat, confusion, no urination) requires medical attention immediately.',
      faq5q: 'Is it possible to drink too much water?',
      faq5a: 'Yes — hyponatremia (water intoxication) can occur when excessive water dilutes sodium levels in the blood. This is rare in everyday life but can occur during endurance events if you drink far beyond your thirst. Follow your body\'s signals.',
      faq6q: 'Why does climate affect water needs?',
      faq6a: 'Hot and humid environments increase sweat rate, while high altitude increases respiratory water loss. Cold climates also raise fluid needs due to dry air and elevated metabolic rate. Our calculator adds 250–500 mL for these conditions.',
      // Feedback
      feedbackTitle: 'Have a suggestion?',
      feedbackDesc: 'We\'d love to hear how we can improve Hydration Calc.',
      feedbackBtn: 'Send Feedback via Email',
      feedbackSubject: 'Feedback - Hydration Calc',
      // Footer
      footerCalc: 'Calculator',
      footerAbout: 'About',
      footerHowTo: 'How to Use & FAQ',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Terms of Service',
      footerFeedback: '💬 Feedback',
      footerBusiness: '🤝 Business',
      footerBuiltBy: 'Built by',
      footerTagline: 'Free tools for better living',
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
      calcBtn: '수분 섭취량 계산하기 💧',
      unitKg: 'kg',
      unitLbs: '파운드',
      weightLabel: '체중 (kg)',
      weightLabelLbs: '체중 (파운드)',
      weightPlaceholder: '예: 70',
      activityLabel: '활동 수준',
      actSedentary: '비활동적 (운동 거의 없음)',
      actLightly: '가볍게 활동 (주 1–3일)',
      actModerately: '보통 활동 (주 3–5일)',
      actVery: '활동적 (주 6–7일)',
      actAthlete: '운동선수 (하루 2회 훈련)',
      climateLabel: '기후 / 환경',
      climateTemperate: '온화한 기후',
      climateHot: '고온 다습',
      climateCold: '추운 기후',
      climateAltitude: '고지대',
      resultHeading: '📊 일일 수분 목표량',
      resultMlLabel: '밀리리터/일',
      resultCupsLabel: '잔/일 (250mL 기준)',
      resultNote: '체중, 활동 수준, 기후를 기반으로 계산되었습니다. 하루 동안 균등하게 나눠 마시면 효과적입니다.',
      shareGoal: '목표 공유하기:',
      shareTwitter: '🐦 트위터',
      shareWhatsapp: '💬 왓츠앱',
      shareCopy: '🔗 링크 복사',
      dashboardHeading: '🥤 오늘의 수분 섭취 추적',
      dashboardSubtitle: '마실 때마다 컵을 탭하세요. 모두 채우면 목표 달성!',
      cupGridLabel: '수분 섭취 컵',
      resetCups: '↺ 초기화',
      streakHeading: '📅 수분 섭취 연속 기록',
      streakHistoryLabel: '7일 수분 섭취 기록',
      scienceHeading: '🔬 수화의 과학',
      scienceBody1: '물은 성인 신체의 약 60%를 차지하며 체온 조절, 영양소 운반, 독소 배출, 관절 윤활 등 거의 모든 생리적 과정에 관여합니다. 체중의 1–2%에 해당하는 가벼운 탈수만으로도 인지 능력 저하, 신체 지구력 감소, 두통이나 피로를 유발할 수 있습니다.',
      scienceBody2: '널리 알려진 "하루 8잔" 규칙은 좋은 출발점이지만, 최적 섭취량은 체중, 활동 수준, 기후, 식단에 따라 크게 달라집니다. 저희 계산기는 근거 기반 공식(체중 kg당 35mL를 기준으로 활동과 환경에 따라 조정)을 사용하여 개인화된 권장량을 제공합니다. 과일, 채소, 기타 음료도 일일 수분 섭취에 기여한다는 점을 기억하세요.',
      benefitsHeading: '매일 충분한 물을 마시면 얻는 10가지 이점',
      faqHeading: '❓ 자주 묻는 질문',
      faq1q: '하루에 물을 얼마나 마셔야 하나요?',
      faq1a: '신뢰할 수 있는 공식은 체중 kg당 35mL입니다. 저희 계산기가 이를 자동으로 계산합니다.',
      faq2q: '커피도 수분 섭취에 포함되나요?',
      faq2a: '적당한 커피 섭취(하루 1–3잔)는 수분 섭취에 기여합니다. 그러나 카페인은 많은 양에서 가벼운 이뇨 효과가 있습니다.',
      faq3q: '운동이 수분 필요량에 어떤 영향을 미치나요?',
      faq3a: '운동은 땀과 호흡을 통한 수분 손실을 크게 증가시킵니다. 격렬한 활동 1시간당 500–1000mL가 추가로 필요할 수 있습니다.',
      faq4q: '탈수의 징후는 무엇인가요?',
      faq4a: '초기 징후로는 짙은 노란색 소변, 구강 건조, 갈증, 피로가 있습니다. 중등도 탈수는 두통, 어지러움, 인지 능력 저하를 동반합니다.',
      faq5q: '물을 너무 많이 마시는 것도 가능한가요?',
      faq5a: '네 — 과도한 물 섭취로 혈중 나트륨 수치가 희석되어 저나트륨혈증(수분 중독)이 발생할 수 있습니다.',
      faq6q: '기후가 수분 필요량에 영향을 미치는 이유는 무엇인가요?',
      faq6a: '고온 다습한 환경은 땀 분비를 증가시키고, 고지대는 호흡을 통한 수분 손실을 증가시킵니다.',
      feedbackTitle: '제안이 있으신가요?',
      feedbackDesc: 'Hydration Calc를 어떻게 개선할 수 있는지 알려주세요.',
      feedbackBtn: '이메일로 피드백 보내기',
      feedbackSubject: '피드백 - 수분 계산기',
      footerCalc: '계산기',
      footerAbout: '소개',
      footerHowTo: '사용 방법 & FAQ',
      footerPrivacy: '개인정보처리방침',
      footerTerms: '이용약관',
      footerFeedback: '💬 피드백',
      footerBusiness: '🤝 비즈니스',
      footerBuiltBy: '제작',
      footerTagline: '더 나은 삶을 위한 무료 도구',
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
      calcBtn: '水分摂取量を計算する 💧',
      unitKg: 'kg',
      unitLbs: 'ポンド',
      weightLabel: '体重 (kg)',
      weightLabelLbs: '体重 (ポンド)',
      weightPlaceholder: '例: 70',
      activityLabel: '活動レベル',
      actSedentary: '非活動的 (ほぼ運動なし)',
      actLightly: '軽度に活動的 (週1–3日)',
      actModerately: '中程度に活動的 (週3–5日)',
      actVery: '非常に活動的 (週6–7日)',
      actAthlete: 'アスリート (1日2回トレーニング)',
      climateLabel: '気候 / 環境',
      climateTemperate: '温帯気候',
      climateHot: '高温多湿',
      climateCold: '寒冷気候',
      climateAltitude: '高地',
      resultHeading: '📊 1日の水分目標',
      resultMlLabel: 'ミリリットル/日',
      resultCupsLabel: 'カップ/日 (250mL換算)',
      resultNote: '体重、活動レベル、気候に基づいて計算されています。1日を通じて均等に摂取するのが効果的です。',
      shareGoal: '目標をシェアする:',
      shareTwitter: '🐦 Twitter',
      shareWhatsapp: '💬 WhatsApp',
      shareCopy: '🔗 リンクをコピー',
      dashboardHeading: '🥤 今日の水分補給を追跡',
      dashboardSubtitle: '飲んだらカップをタップ。すべて満たして目標達成！',
      cupGridLabel: '水分補給カップ',
      resetCups: '↺ リセット',
      streakHeading: '📅 水分補給の連続記録',
      streakHistoryLabel: '7日間の水分補給履歴',
      scienceHeading: '🔬 水分補給の科学',
      scienceBody1: '水は成人の体の約60%を占め、体温調節、栄養素の輸送、毒素の排出、関節の潤滑など、ほぼすべての生理的プロセスに関与しています。体重の1〜2%に相当する軽度の脱水でさえ、認知能力の低下、身体的耐久性の低下、頭痛や疲労を引き起こす可能性があります。',
      scienceBody2: '広く引用される「1日8杯」のルールは良い出発点ですが、最適な摂取量は体重、活動レベル、気候、食事によって大きく異なります。私たちの計算機は、科学的根拠に基づく公式（体重kg当たり35mLを基準に、活動と環境に応じて調整）を使用して、個別の推奨量を提供します。',
      benefitsHeading: '毎日十分な水を飲む10の効果',
      faqHeading: '❓ よくある質問',
      faq1q: '1日にどれくらい水を飲むべきですか？',
      faq1a: '信頼できる公式は体重kg当たり35mLです。当計算機がこれを自動的に計算します。',
      faq2q: 'コーヒーも水分摂取に含まれますか？',
      faq2a: '適度なコーヒー摂取（1日1〜3杯）は水分摂取に貢献します。ただし、カフェインは多量摂取で軽度の利尿効果があります。',
      faq3q: '運動は水分必要量にどのような影響を与えますか？',
      faq3a: '運動は汗と呼吸による水分損失を大幅に増加させます。激しい活動1時間当たり、追加で500〜1000mLが必要になる場合があります。',
      faq4q: '脱水症状のサインは何ですか？',
      faq4a: '初期サインとしては、濃い黄色の尿、口の乾き、のどの渇き、疲労があります。',
      faq5q: '水の飲みすぎは可能ですか？',
      faq5a: 'はい — 過剰な水分摂取により血中ナトリウム濃度が薄まり、低ナトリウム血症が起こる可能性があります。',
      faq6q: '気候が水分必要量に影響する理由は？',
      faq6a: '高温多湿の環境は発汗率を高め、高地は呼吸による水分損失を増加させます。',
      feedbackTitle: 'ご提案はありますか？',
      feedbackDesc: 'Hydration Calcの改善についてご意見をお聞かせください。',
      feedbackBtn: 'メールでフィードバックを送る',
      feedbackSubject: 'フィードバック - 水分計算機',
      footerCalc: '計算機',
      footerAbout: '概要',
      footerHowTo: '使い方 & FAQ',
      footerPrivacy: 'プライバシーポリシー',
      footerTerms: '利用規約',
      footerFeedback: '💬 フィードバック',
      footerBusiness: '🤝 ビジネス',
      footerBuiltBy: '制作',
      footerTagline: 'より良い生活のための無料ツール',
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
      calcBtn: '计算我的水分摄入量 💧',
      unitKg: '千克',
      unitLbs: '磅',
      weightLabel: '体重 (千克)',
      weightLabelLbs: '体重 (磅)',
      weightPlaceholder: '例: 70',
      activityLabel: '活动水平',
      actSedentary: '久坐 (几乎不运动)',
      actLightly: '轻度活跃 (每周1–3天)',
      actModerately: '中度活跃 (每周3–5天)',
      actVery: '非常活跃 (每周6–7天)',
      actAthlete: '运动员 (每天训练2次)',
      climateLabel: '气候 / 环境',
      climateTemperate: '温带气候',
      climateHot: '高温潮湿',
      climateCold: '寒冷气候',
      climateAltitude: '高海拔',
      resultHeading: '📊 您的每日水分目标',
      resultMlLabel: '毫升/天',
      resultCupsLabel: '杯/天 (每杯250mL)',
      resultNote: '基于您的体重、活动水平和气候计算。每天均匀分配摄入量效果最佳。',
      shareGoal: '分享您的目标:',
      shareTwitter: '🐦 Twitter',
      shareWhatsapp: '💬 WhatsApp',
      shareCopy: '🔗 复制链接',
      dashboardHeading: '🥤 追踪今日补水情况',
      dashboardSubtitle: '每次喝水时点击一个杯子。填满所有杯子即达成目标！',
      cupGridLabel: '补水杯',
      resetCups: '↺ 重置',
      streakHeading: '📅 补水连续记录',
      streakHistoryLabel: '7天补水历史',
      scienceHeading: '🔬 补水的科学',
      scienceBody1: '水约占成人体重的60%，几乎参与每一个生理过程——从调节体温和运输营养物质到冲洗毒素和润滑关节。即使是相当于体重1-2%的轻度脱水也会损害认知能力、降低身体耐力，并导致头痛或疲劳。',
      scienceBody2: '广为引用的"每天8杯水"规则是一个有用的起点，但最佳摄入量因体重、活动水平、气候和饮食而显著不同。我们的计算器使用循证公式（以每公斤体重35毫升为基准，根据活动和环境进行调整）为您提供个性化建议。',
      benefitsHeading: '每天喝足够水的10个好处',
      faqHeading: '❓ 常见问题',
      faq1q: '每天应该喝多少水？',
      faq1a: '可靠的公式是每公斤体重35毫升。我们的计算器会自动进行计算。',
      faq2q: '咖啡算作每日水分摄入吗？',
      faq2a: '适量饮用咖啡（每天1-3杯）确实有助于液体摄入。但咖啡因在大量摄入时有轻度利尿作用。',
      faq3q: '运动如何影响所需水量？',
      faq3a: '运动会通过汗液和呼吸显著增加液体损失。每小时激烈运动可能需要额外补充500-1000毫升。',
      faq4q: '脱水的迹象有哪些？',
      faq4a: '早期迹象包括尿液深黄色、口干、口渴和疲劳。',
      faq5q: '是否可能喝太多水？',
      faq5a: '是的——过量饮水会稀释血液中的钠含量，导致低钠血症（水中毒）。',
      faq6q: '为什么气候会影响水分需求？',
      faq6a: '高温潮湿的环境会增加出汗率，而高海拔会增加呼吸中的水分流失。',
      feedbackTitle: '有建议吗？',
      feedbackDesc: '我们希望听到您对改进Hydration Calc的意见。',
      feedbackBtn: '通过邮件发送反馈',
      feedbackSubject: '反馈 - 水分计算器',
      footerCalc: '计算器',
      footerAbout: '关于',
      footerHowTo: '使用方法 & FAQ',
      footerPrivacy: '隐私政策',
      footerTerms: '服务条款',
      footerFeedback: '💬 反馈',
      footerBusiness: '🤝 商务',
      footerBuiltBy: '由...构建',
      footerTagline: '让生活更美好的免费工具',
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
      calcBtn: 'Calcular mi ingesta de agua 💧',
      unitKg: 'kg',
      unitLbs: 'libras',
      weightLabel: 'Peso corporal (kg)',
      weightLabelLbs: 'Peso corporal (libras)',
      weightPlaceholder: 'ej. 70',
      activityLabel: 'Nivel de actividad',
      actSedentary: 'Sedentario (poco/ningún ejercicio)',
      actLightly: 'Ligeramente activo (1–3 días/semana)',
      actModerately: 'Moderadamente activo (3–5 días/semana)',
      actVery: 'Muy activo (6–7 días/semana)',
      actAthlete: 'Atleta (2× entrenamiento por día)',
      climateLabel: 'Clima / Entorno',
      climateTemperate: 'Templado',
      climateHot: 'Caluroso y húmedo',
      climateCold: 'Frío',
      climateAltitude: 'Alta altitud',
      resultHeading: '📊 Tu objetivo diario de agua',
      resultMlLabel: 'mililitros por día',
      resultCupsLabel: 'vasos por día (250 mL cada uno)',
      resultNote: 'Basado en tu peso, nivel de actividad y clima. Distribuye la ingesta durante el día para mejores resultados.',
      shareGoal: 'Comparte tu objetivo:',
      shareTwitter: '🐦 Twitter',
      shareWhatsapp: '💬 WhatsApp',
      shareCopy: '🔗 Copiar enlace',
      dashboardHeading: '🥤 Rastrea tu hidratación hoy',
      dashboardSubtitle: '¡Toca cada vaso cuando lo bebas. ¡Lllénalos todos para alcanzar tu meta!',
      cupGridLabel: 'Vasos de hidratación',
      resetCups: '↺ Reiniciar',
      streakHeading: '📅 Tu racha de hidratación',
      streakHistoryLabel: 'Historial de hidratación de 7 días',
      scienceHeading: '🔬 La ciencia de la hidratación',
      scienceBody1: 'El agua constituye aproximadamente el 60% del cuerpo humano adulto y está involucrada en prácticamente todos los procesos fisiológicos. Incluso una deshidratación leve del 1-2% del peso corporal puede deteriorar el rendimiento cognitivo, reducir la resistencia física y causar dolores de cabeza o fatiga.',
      scienceBody2: 'La ampliamente citada regla de "8 vasos al día" es un buen punto de partida, pero la ingesta óptima varía significativamente con el peso corporal, nivel de actividad, clima y dieta. Nuestra calculadora usa una fórmula basada en evidencia (35 mL por kg de peso corporal como base, ajustada por actividad y entorno).',
      benefitsHeading: '10 beneficios de beber suficiente agua todos los días',
      faqHeading: '❓ Preguntas Frecuentes',
      faq1q: '¿Cuánta agua debo beber por día?',
      faq1a: 'Una fórmula confiable es 35 mL por kg de peso corporal. Nuestra calculadora lo hace automáticamente.',
      faq2q: '¿El café cuenta para mi ingesta diaria de agua?',
      faq2a: 'El consumo moderado de café (1-3 tazas/día) contribuye a tu ingesta de líquidos. Sin embargo, la cafeína tiene un efecto diurético leve.',
      faq3q: '¿Cómo afecta el ejercicio a mi necesidad de agua?',
      faq3a: 'El ejercicio aumenta significativamente la pérdida de líquidos. Por cada hora de actividad intensa, puedes necesitar 500-1000 mL adicionales.',
      faq4q: '¿Cuáles son las señales de deshidratación?',
      faq4a: 'Las señales tempranas incluyen orina amarilla oscura, boca seca, sed y fatiga.',
      faq5q: '¿Es posible beber demasiada agua?',
      faq5a: 'Sí — la hiponatremia puede ocurrir cuando el exceso de agua diluye los niveles de sodio en la sangre.',
      faq6q: '¿Por qué el clima afecta las necesidades de agua?',
      faq6a: 'Los entornos calurosos y húmedos aumentan la tasa de sudoración, mientras que las altitudes elevadas aumentan la pérdida de agua respiratoria.',
      feedbackTitle: '¿Tienes una sugerencia?',
      feedbackDesc: 'Nos encantaría saber cómo podemos mejorar Hydration Calc.',
      feedbackBtn: 'Enviar comentarios por correo',
      feedbackSubject: 'Comentarios - Hydration Calc',
      footerCalc: 'Calculadora',
      footerAbout: 'Acerca de',
      footerHowTo: 'Cómo usar & FAQ',
      footerPrivacy: 'Política de privacidad',
      footerTerms: 'Términos de servicio',
      footerFeedback: '💬 Comentarios',
      footerBusiness: '🤝 Negocios',
      footerBuiltBy: 'Creado por',
      footerTagline: 'Herramientas gratuitas para vivir mejor',
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
      calcBtn: 'Calculer mon apport en eau 💧',
      unitKg: 'kg',
      unitLbs: 'livres',
      weightLabel: 'Poids corporel (kg)',
      weightLabelLbs: 'Poids corporel (livres)',
      weightPlaceholder: 'ex. 70',
      activityLabel: 'Niveau d\'activité',
      actSedentary: 'Sédentaire (peu/pas d\'exercice)',
      actLightly: 'Légèrement actif (1–3 jours/semaine)',
      actModerately: 'Modérément actif (3–5 jours/semaine)',
      actVery: 'Très actif (6–7 jours/semaine)',
      actAthlete: 'Athlète (2× entraînement par jour)',
      climateLabel: 'Climat / Environnement',
      climateTemperate: 'Tempéré',
      climateHot: 'Chaud et humide',
      climateCold: 'Froid',
      climateAltitude: 'Haute altitude',
      resultHeading: '📊 Votre objectif quotidien en eau',
      resultMlLabel: 'millilitres par jour',
      resultCupsLabel: 'verres par jour (250 mL chacun)',
      resultNote: 'Basé sur votre poids, niveau d\'activité et climat. Répartissez la consommation tout au long de la journée.',
      shareGoal: 'Partagez votre objectif:',
      shareTwitter: '🐦 Twitter',
      shareWhatsapp: '💬 WhatsApp',
      shareCopy: '🔗 Copier le lien',
      dashboardHeading: '🥤 Suivez votre hydratation aujourd\'hui',
      dashboardSubtitle: 'Appuyez sur chaque verre quand vous le buvez. Remplissez-les tous pour atteindre votre objectif !',
      cupGridLabel: 'Verres d\'hydratation',
      resetCups: '↺ Réinitialiser',
      streakHeading: '📅 Votre série d\'hydratation',
      streakHistoryLabel: 'Historique d\'hydratation sur 7 jours',
      scienceHeading: '🔬 La science de l\'hydratation',
      scienceBody1: 'L\'eau représente environ 60% du corps humain adulte et est impliquée dans pratiquement tous les processus physiologiques. Même une légère déshydratation de 1 à 2% du poids corporel peut altérer les performances cognitives, réduire l\'endurance physique et provoquer des maux de tête ou de la fatigue.',
      scienceBody2: 'La règle des "8 verres par jour" est un bon point de départ, mais l\'apport optimal varie considérablement selon le poids, le niveau d\'activité, le climat et le régime alimentaire. Notre calculateur utilise une formule basée sur des preuves (35 mL par kg de poids corporel comme base).',
      benefitsHeading: '10 avantages de boire suffisamment d\'eau chaque jour',
      faqHeading: '❓ Questions Fréquentes',
      faq1q: 'Combien d\'eau devrais-je boire par jour ?',
      faq1a: 'Une formule fiable est 35 mL par kg de poids corporel. Notre calculateur le fait automatiquement.',
      faq2q: 'Le café compte-t-il pour mon apport en eau ?',
      faq2a: 'La consommation modérée de café (1-3 tasses/jour) contribue à votre apport en liquides. Cependant, la caféine a un léger effet diurétique.',
      faq3q: 'Comment l\'exercice affecte-t-il mes besoins en eau ?',
      faq3a: 'L\'exercice augmente considérablement les pertes de liquides. Pour chaque heure d\'activité intense, vous pourriez avoir besoin de 500-1000 mL supplémentaires.',
      faq4q: 'Quels sont les signes de déshydratation ?',
      faq4a: 'Les premiers signes incluent une urine jaune foncé, la bouche sèche, la soif et la fatigue.',
      faq5q: 'Est-il possible de boire trop d\'eau ?',
      faq5a: 'Oui — l\'hyponatrémie peut survenir lorsqu\'un excès d\'eau dilue les niveaux de sodium dans le sang.',
      faq6q: 'Pourquoi le climat affecte-t-il les besoins en eau ?',
      faq6a: 'Les environnements chauds et humides augmentent le taux de transpiration, tandis que les hautes altitudes augmentent la perte d\'eau respiratoire.',
      feedbackTitle: 'Vous avez une suggestion ?',
      feedbackDesc: 'Nous aimerions savoir comment améliorer Hydration Calc.',
      feedbackBtn: 'Envoyer des commentaires par e-mail',
      feedbackSubject: 'Retour - Hydration Calc',
      footerCalc: 'Calculateur',
      footerAbout: 'À propos',
      footerHowTo: 'Comment utiliser & FAQ',
      footerPrivacy: 'Politique de confidentialité',
      footerTerms: 'Conditions d\'utilisation',
      footerFeedback: '💬 Retour d\'info',
      footerBusiness: '🤝 Affaires',
      footerBuiltBy: 'Créé par',
      footerTagline: 'Outils gratuits pour mieux vivre',
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
      calcBtn: 'Wasserbedarf berechnen 💧',
      unitKg: 'kg',
      unitLbs: 'Pfund',
      weightLabel: 'Körpergewicht (kg)',
      weightLabelLbs: 'Körpergewicht (Pfund)',
      weightPlaceholder: 'z.B. 70',
      activityLabel: 'Aktivitätsniveau',
      actSedentary: 'Sitzend (wenig/keine Bewegung)',
      actLightly: 'Leicht aktiv (1–3 Tage/Woche)',
      actModerately: 'Mäßig aktiv (3–5 Tage/Woche)',
      actVery: 'Sehr aktiv (6–7 Tage/Woche)',
      actAthlete: 'Athlet (2× Training pro Tag)',
      climateLabel: 'Klima / Umgebung',
      climateTemperate: 'Gemäßigt',
      climateHot: 'Heiß & Feucht',
      climateCold: 'Kalt',
      climateAltitude: 'Hochgebirge',
      resultHeading: '📊 Ihr tägliches Wasserziel',
      resultMlLabel: 'Milliliter pro Tag',
      resultCupsLabel: 'Gläser pro Tag (250 mL je)',
      resultNote: 'Basierend auf Ihrem Gewicht, Aktivitätsniveau und Klima. Verteilen Sie die Einnahme über den Tag für beste Ergebnisse.',
      shareGoal: 'Ihr Ziel teilen:',
      shareTwitter: '🐦 Twitter',
      shareWhatsapp: '💬 WhatsApp',
      shareCopy: '🔗 Link kopieren',
      dashboardHeading: '🥤 Verfolgen Sie Ihre Flüssigkeitszufuhr heute',
      dashboardSubtitle: 'Tippen Sie jedes Glas an, wenn Sie trinken. Füllen Sie alle, um Ihr Ziel zu erreichen!',
      cupGridLabel: 'Trinkgläser',
      resetCups: '↺ Zurücksetzen',
      streakHeading: '📅 Ihre Hydrations-Serie',
      streakHistoryLabel: '7-Tage-Hydrations-Verlauf',
      scienceHeading: '🔬 Die Wissenschaft der Hydration',
      scienceBody1: 'Wasser macht etwa 60% des menschlichen Körpers aus und ist an nahezu jedem physiologischen Prozess beteiligt. Selbst eine leichte Dehydrierung von 1-2% des Körpergewichts kann die kognitive Leistung beeinträchtigen, die körperliche Ausdauer verringern und Kopfschmerzen oder Müdigkeit verursachen.',
      scienceBody2: 'Die weit verbreitete "8 Gläser täglich"-Regel ist ein nützlicher Ausgangspunkt, aber die optimale Aufnahme variiert erheblich mit Körpergewicht, Aktivitätsniveau, Klima und Ernährung. Unser Rechner verwendet eine evidenzbasierte Formel (35 mL pro kg Körpergewicht als Basis).',
      benefitsHeading: '10 Vorteile des ausreichenden Wassertrinkens täglich',
      faqHeading: '❓ Häufig gestellte Fragen',
      faq1q: 'Wie viel Wasser sollte ich pro Tag trinken?',
      faq1a: 'Eine zuverlässige Formel ist 35 mL pro kg Körpergewicht. Unser Rechner macht dies automatisch.',
      faq2q: 'Zählt Kaffee zur täglichen Wasseraufnahme?',
      faq2a: 'Moderater Kaffeekonsum (1-3 Tassen/Tag) trägt zur Flüssigkeitsaufnahme bei. Koffein hat jedoch bei größeren Mengen eine leicht harntreibende Wirkung.',
      faq3q: 'Wie beeinflusst Sport den Wasserbedarf?',
      faq3a: 'Sport erhöht den Flüssigkeitsverlust erheblich. Pro Stunde intensiver Aktivität können zusätzliche 500-1000 mL erforderlich sein.',
      faq4q: 'Was sind die Anzeichen von Dehydrierung?',
      faq4a: 'Frühe Anzeichen sind dunkelgelber Urin, trockener Mund, Durst und Müdigkeit.',
      faq5q: 'Ist es möglich, zu viel Wasser zu trinken?',
      faq5a: 'Ja — Hyponatriämie kann auftreten, wenn übermäßiges Wasser den Natriumspiegel im Blut verdünnt.',
      faq6q: 'Warum beeinflusst das Klima den Wasserbedarf?',
      faq6a: 'Heiße und feuchte Umgebungen erhöhen die Schweißrate, während Hochgebirge den Wasserverlust durch die Atmung steigert.',
      feedbackTitle: 'Haben Sie einen Vorschlag?',
      feedbackDesc: 'Wir würden gerne hören, wie wir Hydration Calc verbessern können.',
      feedbackBtn: 'Feedback per E-Mail senden',
      feedbackSubject: 'Feedback - Hydration Calc',
      footerCalc: 'Rechner',
      footerAbout: 'Über uns',
      footerHowTo: 'Verwendung & FAQ',
      footerPrivacy: 'Datenschutzrichtlinie',
      footerTerms: 'Nutzungsbedingungen',
      footerFeedback: '💬 Feedback',
      footerBusiness: '🤝 Geschäftlich',
      footerBuiltBy: 'Erstellt von',
      footerTagline: 'Kostenlose Tools für ein besseres Leben',
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
      calcBtn: 'Calcular minha ingestão de água 💧',
      unitKg: 'kg',
      unitLbs: 'libras',
      weightLabel: 'Peso corporal (kg)',
      weightLabelLbs: 'Peso corporal (libras)',
      weightPlaceholder: 'ex. 70',
      activityLabel: 'Nível de atividade',
      actSedentary: 'Sedentário (pouco/nenhum exercício)',
      actLightly: 'Levemente ativo (1–3 dias/semana)',
      actModerately: 'Moderadamente ativo (3–5 dias/semana)',
      actVery: 'Muito ativo (6–7 dias/semana)',
      actAthlete: 'Atleta (2× treino por dia)',
      climateLabel: 'Clima / Ambiente',
      climateTemperate: 'Temperado',
      climateHot: 'Quente e Úmido',
      climateCold: 'Frio',
      climateAltitude: 'Alta altitude',
      resultHeading: '📊 Sua meta diária de água',
      resultMlLabel: 'mililitros por dia',
      resultCupsLabel: 'copos por dia (250 mL cada)',
      resultNote: 'Com base no seu peso, nível de atividade e clima. Distribua a ingestão ao longo do dia para melhores resultados.',
      shareGoal: 'Compartilhe sua meta:',
      shareTwitter: '🐦 Twitter',
      shareWhatsapp: '💬 WhatsApp',
      shareCopy: '🔗 Copiar link',
      dashboardHeading: '🥤 Acompanhe sua hidratação hoje',
      dashboardSubtitle: 'Toque em cada copo ao bebê-lo. Preencha todos para atingir sua meta!',
      cupGridLabel: 'Copos de hidratação',
      resetCups: '↺ Redefinir',
      streakHeading: '📅 Sua sequência de hidratação',
      streakHistoryLabel: 'Histórico de hidratação de 7 dias',
      scienceHeading: '🔬 A ciência da hidratação',
      scienceBody1: 'A água constitui cerca de 60% do corpo humano adulto e está envolvida em praticamente todos os processos fisiológicos. Mesmo uma desidratação leve de 1-2% do peso corporal pode prejudicar o desempenho cognitivo, reduzir a resistência física e causar dores de cabeça ou fadiga.',
      scienceBody2: 'A amplamente citada regra de "8 copos por dia" é um bom ponto de partida, mas a ingestão ideal varia significativamente com o peso corporal, nível de atividade, clima e dieta. Nossa calculadora usa uma fórmula baseada em evidências (35 mL por kg de peso corporal como base).',
      benefitsHeading: '10 benefícios de beber água suficiente todos os dias',
      faqHeading: '❓ Perguntas Frequentes',
      faq1q: 'Quanta água devo beber por dia?',
      faq1a: 'Uma fórmula confiável é 35 mL por kg de peso corporal. Nossa calculadora faz isso automaticamente.',
      faq2q: 'O café conta para minha ingestão diária de água?',
      faq2a: 'O consumo moderado de café (1-3 xícaras/dia) contribui para sua ingestão de líquidos. No entanto, a cafeína tem um leve efeito diurético.',
      faq3q: 'Como o exercício afeta minha necessidade de água?',
      faq3a: 'O exercício aumenta significativamente a perda de líquidos. Para cada hora de atividade intensa, você pode precisar de 500-1000 mL adicionais.',
      faq4q: 'Quais são os sinais de desidratação?',
      faq4a: 'Os primeiros sinais incluem urina amarela escura, boca seca, sede e fadiga.',
      faq5q: 'É possível beber água demais?',
      faq5a: 'Sim — a hiponatremia pode ocorrer quando o excesso de água dilui os níveis de sódio no sangue.',
      faq6q: 'Por que o clima afeta as necessidades de água?',
      faq6a: 'Ambientes quentes e úmidos aumentam a taxa de suor, enquanto a alta altitude aumenta a perda de água pela respiração.',
      feedbackTitle: 'Tem uma sugestão?',
      feedbackDesc: 'Adoraríamos saber como podemos melhorar o Hydration Calc.',
      feedbackBtn: 'Enviar feedback por e-mail',
      feedbackSubject: 'Feedback - Hydration Calc',
      footerCalc: 'Calculadora',
      footerAbout: 'Sobre',
      footerHowTo: 'Como usar & FAQ',
      footerPrivacy: 'Política de Privacidade',
      footerTerms: 'Termos de Serviço',
      footerFeedback: '💬 Feedback',
      footerBusiness: '🤝 Negócios',
      footerBuiltBy: 'Criado por',
      footerTagline: 'Ferramentas gratuitas para uma vida melhor',
    },
  };

  function getLang() {
    const raw = navigator.language || navigator.userLanguage || 'en';
    const code = raw.toLowerCase().split('-')[0];
    return translations[code] ? code : 'en';
  }

  function t(lang, key) {
    const d = translations[lang];
    if (d && d[key] !== undefined) return d[key];
    return translations['en'][key] || key;
  }

  function applyTranslations(lang) {
    if (lang === 'en') return; // Default already in HTML
    const tr = translations[lang];
    if (!tr) return;

    // data-i18n attribute based (covers most elements)
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      const val = t(lang, key);
      if (val) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(lang, key);
      if (val) el.placeholder = val;
    });

    // Nav links
    document.querySelectorAll('.nav-links a').forEach(function(a) {
      const href = (a.getAttribute('href') || '').replace(/^\//, '');
      if (href === '' || href === 'index.html') a.textContent = t(lang, 'navCalc');
      else if (href === 'about') a.textContent = t(lang, 'navAbout');
      else if (href === 'how-to-use') a.textContent = t(lang, 'navHowTo');
    });

    // Footer nav links
    document.querySelectorAll('footer a').forEach(function(a) {
      const href = (a.getAttribute('href') || '').replace(/^\//, '');
      if (href === '' || href === '/') a.textContent = t(lang, 'navCalc');
      else if (href === 'about') a.textContent = t(lang, 'navAbout');
      else if (href === 'how-to-use') a.textContent = t(lang, 'navHowTo');
      else if (href === 'privacy') a.textContent = t(lang, 'navPrivacy');
      else if (href === 'terms') a.textContent = t(lang, 'navTerms');
    });

    // Hero
    const h1 = document.querySelector('header h1');
    if (h1) h1.textContent = '\uD83D\uDCA7 ' + t(lang, 'heroTitle');
    const heroP = document.querySelector('header p');
    if (heroP) heroP.textContent = t(lang, 'heroSubtitle');

    // Calc section
    const calcHeadingEl = document.getElementById('calc-heading');
    if (calcHeadingEl) calcHeadingEl.textContent = '\uD83E\uDDEE ' + t(lang, 'calcHeading');
    const calcBtn = document.getElementById('calc-btn');
    if (calcBtn) calcBtn.textContent = t(lang, 'calcBtn');

    // Labels
    const weightLabel = document.getElementById('weight-label');
    if (weightLabel) weightLabel.textContent = t(lang, 'weightLabel');
    const actLabel = document.querySelector('label[for="activity"]');
    if (actLabel) actLabel.textContent = t(lang, 'activityLabel');
    const climLabel = document.querySelector('label[for="climate"]');
    if (climLabel) climLabel.textContent = t(lang, 'climateLabel');

    // Unit toggle buttons
    const unitKgBtn = document.getElementById('unit-kg');
    if (unitKgBtn) unitKgBtn.textContent = t(lang, 'unitKg');
    const unitLbsBtn = document.getElementById('unit-lbs');
    if (unitLbsBtn) unitLbsBtn.textContent = t(lang, 'unitLbs');

    // Activity options
    const actSelect = document.getElementById('activity');
    if (actSelect) {
      const actKeys = ['actSedentary','actLightly','actModerately','actVery','actAthlete'];
      for (let i = 0; i < actSelect.options.length && i < actKeys.length; i++) {
        actSelect.options[i].textContent = t(lang, actKeys[i]);
      }
    }

    // Climate options
    const climSelect = document.getElementById('climate');
    if (climSelect) {
      const climKeys = ['climateTemperate','climateHot','climateCold','climateAltitude'];
      for (let i = 0; i < climSelect.options.length && i < climKeys.length; i++) {
        climSelect.options[i].textContent = t(lang, climKeys[i]);
      }
    }

    // Weight placeholder
    const weightInput = document.getElementById('weight');
    if (weightInput) weightInput.placeholder = t(lang, 'weightPlaceholder');

    // Result section
    const resultHeadingEl = document.getElementById('result-heading');
    if (resultHeadingEl) resultHeadingEl.textContent = t(lang, 'resultHeading');
    const mlLbl = document.querySelector('#result-ml ~ .lbl, .result-big .lbl');
    const allLbls = document.querySelectorAll('.result-big .lbl');
    if (allLbls[0]) allLbls[0].textContent = t(lang, 'resultMlLabel');
    if (allLbls[1]) allLbls[1].textContent = t(lang, 'resultCupsLabel');

    const resultNote = document.querySelector('#result-card > .card > p[style]');
    if (resultNote) resultNote.textContent = t(lang, 'resultNote');

    // Share buttons
    const twitterBtn = document.getElementById('share-twitter');
    if (twitterBtn) twitterBtn.textContent = t(lang, 'shareTwitter');
    const whatsappBtn = document.getElementById('share-whatsapp');
    if (whatsappBtn) whatsappBtn.textContent = t(lang, 'shareWhatsapp');
    const copyBtn = document.getElementById('share-copy');
    if (copyBtn) copyBtn.textContent = t(lang, 'shareCopy');

    // Dashboard
    const dashHeadingEl = document.getElementById('dashboard-heading');
    if (dashHeadingEl) dashHeadingEl.textContent = t(lang, 'dashboardHeading');
    const dashSubP = document.querySelector('#dashboard-section .card > p');
    if (dashSubP) dashSubP.textContent = t(lang, 'dashboardSubtitle');
    const resetCupsBtn = document.getElementById('reset-cups');
    if (resetCupsBtn) resetCupsBtn.textContent = t(lang, 'resetCups');

    // Streak
    const streakHeadingEl = document.getElementById('streak-heading');
    if (streakHeadingEl) streakHeadingEl.textContent = t(lang, 'streakHeading');

    // Science section
    const sciHeadingEl = document.getElementById('science-heading');
    if (sciHeadingEl) sciHeadingEl.textContent = t(lang, 'scienceHeading');

    // Benefits heading
    const benefitsHeadingEl = document.getElementById('benefits-heading');
    if (benefitsHeadingEl) benefitsHeadingEl.textContent = t(lang, 'benefitsHeading');

    // FAQ heading
    const faqHeadingEl = document.getElementById('faq-heading');
    if (faqHeadingEl) faqHeadingEl.textContent = t(lang, 'faqHeading');

    // FAQ questions/answers
    const faqQs = document.querySelectorAll('.faq-item h3');
    const faqAs = document.querySelectorAll('.faq-item p');
    const faqQKeys = ['faq1q','faq2q','faq3q','faq4q','faq5q','faq6q'];
    const faqAKeys = ['faq1a','faq2a','faq3a','faq4a','faq5a','faq6a'];
    faqQs.forEach(function(el, i) { if (faqQKeys[i]) el.textContent = t(lang, faqQKeys[i]); });
    faqAs.forEach(function(el, i) { if (faqAKeys[i]) el.textContent = t(lang, faqAKeys[i]); });

    // Feedback widget
    const fbTitle = document.querySelector('.feedback-title');
    if (fbTitle) fbTitle.textContent = t(lang, 'feedbackTitle');
    const fbDesc = document.querySelector('.feedback-desc');
    if (fbDesc) fbDesc.textContent = t(lang, 'feedbackDesc');
    const fbBtn = document.getElementById('water-feedback-btn');
    if (fbBtn) fbBtn.textContent = t(lang, 'feedbackBtn');
    const fbMailto = document.getElementById('water-feedback-mailto');
    if (fbMailto) {
      const subj = encodeURIComponent(t(lang, 'feedbackSubject'));
      fbMailto.href = 'mailto:taeshinkim11@gmail.com?subject=' + subj;
    }

    // Footer built-by
    const footerBuiltByEl = document.querySelector('footer p[style] span.spinai-brand');
    if (footerBuiltByEl && footerBuiltByEl.parentElement) {
      const p = footerBuiltByEl.parentElement;
      p.innerHTML = t(lang, 'footerBuiltBy') + ' <span class="spinai-brand">SPINAI</span> &mdash; ' + t(lang, 'footerTagline');
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const lang = getLang();
    applyTranslations(lang);
  });
})();
