// ─── i18n.js — Automatikus nyelvfelismerés + manuális toggle ─────────────────
// Használat: <script src="i18n.js"></script> a </body> előtt
// HTML elemekre: data-i18n="kulcs" attribútum
// HTML elemekre (placeholder): data-i18n-placeholder="kulcs"
// HTML elemekre (innerHTML): data-i18n-html="kulcs"

const TRANSLATIONS = {
  hu: {
    // NAV
    nav_projektek:      'Projektek',
    nav_szolgaltatasok: 'Szolgáltatások',
    nav_rolunk:         'Rólunk',
    nav_kapcsolat:      'Kapcsolat',

    // HERO
    hero_eyebrow:  'Web & app fejlesztés — Budapest',
    hero_h1_span1: 'Ahol az',
    hero_h1_em:    'ötletek',
    hero_h1_span2: 'appokká válnak.',
    hero_desc:     'Kis csapat, nagy álmok. Weboldalakat és mobilappokat építünk startupoknak és kisvállalkozásoknak — szívvel-lélekkel.',
    hero_btn1:     'Projektjeink →',
    hero_btn2:     'Dolgozzunk együtt',
    hero_stamp:    'EST. 2024 — BUDAPEST',

    // STEPS
    steps_label:      'Hogyan működik',
    step1_title_html: 'Elküldöd<br><em>a kérésed</em>',
    step1_desc:       'Írd le, mi jár a fejedben — akár egy mondat is elég. Nincs sablon, nincs formanyomtatvány.',
    step1_arrow:      '→ hello@dantechlabs.hu',
    step2_title_html: 'Mi<br><em>válaszolunk</em>',
    step2_desc:       '24 órán belül visszajelzünk. Ha nem tudod pontosan mit akarsz — semmi gond, felmérjük és adunk egy ingyenes visszajelzést.',
    step2_arrow:      '→ 24h-n belül',
    step3_title_html: 'Megyünk<br><em>tovább</em>',
    step3_desc:       'Ha minden egyezik, elkezdünk dolgozni. Lépésről lépésre, együtt — amíg el nem jutunk oda, ahova szeretnél.',
    step3_arrow:      '→ kezdjük el',
    steps_cta:        'Küldd el a kérésed most →',

    // DIVIDERS
    div_projektek:      'Projektek & munkáink',
    div_szolgaltatasok: 'Szolgáltatások',
    div_csapat:         'A csapat',
    div_kapcsolat:      'Kapcsolat',

    // PROJECTS SECTION
    proj_heading: 'Amiket eddig csináltunk',
    proj_sub:     'Kattints bármelyik polaroidra — megtudod, mi van mögötte.',

    // SERVICES
    svc1_title_html: 'Weboldal &amp;<br>Webapplikáció',
    svc1_desc:       'Modern, gyors és egyedi weboldalakat és webappokat építünk — a landing page-től az e-commerce rendszerig.',
    svc1_li1: 'Egyedi weboldal fejlesztés',
    svc1_li2: 'E-commerce & webshop',
    svc1_li3: 'Webalkalmazás (SaaS, dashboard)',
    svc1_li4: 'Landing page & konverzió-optimalizálás',
    svc1_li5: 'API fejlesztés & integrációk',
    svc1_li6: 'Karbantartás & továbbfejlesztés',

    svc2_title_html: 'Mobilalkalmazás &amp;<br>fejlesztés',
    svc2_desc:       'iOS és Android appokat fejlesztünk egyetlen kódbázisból. Ötlettől az App Store-ig, végig velünk.',
    svc2_li1: 'iOS & Android alkalmazás',
    svc2_li2: 'Cross-platform fejlesztés (Flutter, React Native)',
    svc2_li3: 'UI/UX tervezés',
    svc2_li4: 'Push értesítések & valós idejű funkciók',
    svc2_li5: 'App Store & Play Store megjelenés',
    svc2_li6: 'Folyamatos frissítés & support',

    // ABOUT
    about_h2_html: 'Nem korporáció.<br><em>Egy kis csapat.</em>',
    about_p:       'A Next Step Projekt mögött szenvedélyes emberek állnak, akik szeretik, amit csinálnak. Nem dobozos megoldásokban gondolkodunk — minden ügyféllel együtt alakítunk ki valamit, ami valóban működik.',
    val1_title: 'Személyes kapcsolat',
    val1_desc:  'Nem vagy egy ticket-szám. Minden projektet úgy kezelünk, mintha a miénk lenne.',
    val2_title: '100% szenvedély',
    val2_desc:  'Ha vállalunk valamit, mindent beleadunk. Nincs félmunka.',
    val3_title: 'Hosszú táv',
    val3_desc:  'Nem az egyszeri megrendelés érdekel, hanem a tartós együttműködés.',
    stat_projekt: 'Projekt',
    stat_tag:     'Tag',

    // CONTACT
    contact_h2_html:  'Van egy<br><em>ötleted?</em>',
    contact_p:        'Mesélj róla. Nem harapunk — és általában 24 órán belül visszajelzünk.',
    form_label_name:  'Neved',
    form_placeholder_name:  'Kovács Bence',
    form_label_email: 'Email',
    form_placeholder_email: 'bence@email.hu',
    form_label_tema:  'Téma',
    form_opt_choose:  'Válassz...',
    form_opt1: 'Weboldal fejlesztés',
    form_opt2: 'Mobilalkalmazás',
    form_opt3: 'Webalkalmazás',
    form_opt4: 'Egyéb',
    form_label_msg:   'Üzeneted',
    form_placeholder_msg: 'Meséld el az ötleted...',
    form_submit: 'Küldés →',
    form_sent:   'Elküldve ✓',

    contact_deco: 'SZIA',
    cr_email:       'Email',
    cr_instagram:   'Instagram',
    cr_elerhetoseg: 'Elérhetőség',
    cr_hours:       'H–P, 09:00–18:00',
    cr_helyszin:    'Helyszín',
    cr_meeting:     'Meeting',
    cr_meeting_val: 'Kávézó, mindig OK ☕',

    // FOOTER
    footer_copy: '© 2025 — Szeretettel készítve, Budapest',

    // LANG TOGGLE
    lang_toggle: 'EN',
  },

  en: {
    nav_projektek:      'Projects',
    nav_szolgaltatasok: 'Services',
    nav_rolunk:         'About',
    nav_kapcsolat:      'Contact',

    hero_eyebrow:  'Web & app development — Budapest',
    hero_h1_span1: 'Where',
    hero_h1_em:    'ideas',
    hero_h1_span2: 'become apps.',
    hero_desc:     'Small team, big dreams. We build websites and mobile apps for startups and small businesses — with heart and soul.',
    hero_btn1:     'Our Projects →',
    hero_btn2:     'Work with us',
    hero_stamp:    'EST. 2024 — BUDAPEST',

    steps_label:      'How it works',
    step1_title_html: 'Send us<br><em>your request</em>',
    step1_desc:       'Tell us what\'s on your mind — even a single sentence will do. No template, no forms.',
    step1_arrow:      '→ hello@dantechlabs.hu',
    step2_title_html: 'We<br><em>get back to you</em>',
    step2_desc:       'We respond within 24 hours. Not sure exactly what you want? No problem — we\'ll assess it and give you free feedback.',
    step2_arrow:      '→ within 24h',
    step3_title_html: 'We<br><em>move forward</em>',
    step3_desc:       'If everything aligns, we start working. Step by step, together — until we get you where you want to be.',
    step3_arrow:      '→ let\'s begin',
    steps_cta:        'Send us your request now →',

    div_projektek:      'Projects & our work',
    div_szolgaltatasok: 'Services',
    div_csapat:         'The team',
    div_kapcsolat:      'Contact',

    proj_heading: 'What we\'ve built so far',
    proj_sub:     'Click on any polaroid — find out what\'s behind it.',

    svc1_title_html: 'Websites &amp;<br>Web Apps',
    svc1_desc:       'We build modern, fast, and custom websites and web apps — from landing pages to full e-commerce systems.',
    svc1_li1: 'Custom website development',
    svc1_li2: 'E-commerce & online stores',
    svc1_li3: 'Web applications (SaaS, dashboards)',
    svc1_li4: 'Landing page & conversion optimization',
    svc1_li5: 'API development & integrations',
    svc1_li6: 'Maintenance & ongoing development',

    svc2_title_html: 'Mobile App<br>&amp; Development',
    svc2_desc:       'We build iOS and Android apps from a single codebase. From idea to the App Store, with us every step of the way.',
    svc2_li1: 'iOS & Android applications',
    svc2_li2: 'Cross-platform development (Flutter, React Native)',
    svc2_li3: 'UI/UX design',
    svc2_li4: 'Push notifications & real-time features',
    svc2_li5: 'App Store & Play Store publishing',
    svc2_li6: 'Ongoing updates & support',

    about_h2_html: 'Not a corporation.<br><em>A small team.</em>',
    about_p:       'Behind Next Step Project stand passionate people who love what they do. We don\'t think in boxed solutions — with every client we shape something that truly works.',
    val1_title: 'Personal connection',
    val1_desc:  'You\'re not a ticket number. We treat every project as if it were our own.',
    val2_title: '100% passion',
    val2_desc:  'When we commit to something, we give everything. No half-measures.',
    val3_title: 'Long term',
    val3_desc:  'We\'re not interested in one-off orders — we care about lasting partnerships.',
    stat_projekt: 'Projects',
    stat_tag:     'Members',

    contact_h2_html:  'Got an<br><em>idea?</em>',
    contact_p:        'Tell us about it. We don\'t bite — and we usually get back to you within 24 hours.',
    form_label_name:  'Your name',
    form_placeholder_name:  'John Smith',
    form_label_email: 'Email',
    form_placeholder_email: 'john@email.com',
    form_label_tema:  'Topic',
    form_opt_choose:  'Choose...',
    form_opt1: 'Website development',
    form_opt2: 'Mobile application',
    form_opt3: 'Web application',
    form_opt4: 'Other',
    form_label_msg:   'Your message',
    form_placeholder_msg: 'Tell us about your idea...',
    form_submit: 'Send →',
    form_sent:   'Sent ✓',

    contact_deco: 'HI',
    cr_email:       'Email',
    cr_instagram:   'Instagram',
    cr_elerhetoseg: 'Availability',
    cr_hours:       'Mon–Fri, 09:00–18:00',
    cr_helyszin:    'Location',
    cr_meeting:     'Meeting',
    cr_meeting_val: 'Coffee shop, always OK ☕',

    footer_copy: '© 2025 — Made with love, Budapest',

    lang_toggle: 'HU',
  }
};

// ─── STATE ────────────────────────────────────────────────────────────────────
let currentLang = 'hu';

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS['hu'][key] || key;
}

// ─── APPLY TRANSLATIONS ───────────────────────────────────────────────────────
function applyTranslations() {
  document.documentElement.lang = currentLang;

  // Plain text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  // innerHTML (for <br>, <em>, &amp; etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  // Lang toggle button label
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.textContent = t('lang_toggle');

  // Update submit button if not disabled (don't overwrite "Sent ✓")
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn && !submitBtn.disabled) {
    submitBtn.textContent = t('form_submit');
  }

  // Save preference
  localStorage.setItem('nsp_lang', currentLang);
}

// ─── TOGGLE ───────────────────────────────────────────────────────────────────
function toggleLang() {
  currentLang = currentLang === 'hu' ? 'en' : 'hu';
  applyTranslations();
}

// ─── INJECT TOGGLE BUTTON INTO NAV ───────────────────────────────────────────
function injectLangToggle() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  const btn = document.createElement('button');
  btn.id = 'lang-toggle-btn';
  btn.className = 'lang-toggle';
  btn.setAttribute('aria-label', 'Switch language');
  btn.textContent = t('lang_toggle');
  btn.addEventListener('click', toggleLang);

  // Insert before hamburger (or at end of nav)
  const ham = document.getElementById('hamburger');
  if (ham) {
    nav.insertBefore(btn, ham);
  } else {
    nav.appendChild(btn);
  }
}

// ─── INJECT STYLE ─────────────────────────────────────────────────────────────
function injectStyle() {
  const style = document.createElement('style');
  style.textContent = `
    .lang-toggle {
      background: transparent;
      border: 1.5px solid currentColor;
      color: inherit;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      padding: 4px 10px;
      cursor: pointer;
      border-radius: 3px;
      opacity: 0.7;
      transition: opacity 0.2s, background 0.2s, color 0.2s;
      margin-right: 8px;
      flex-shrink: 0;
    }
    .lang-toggle:hover {
      opacity: 1;
      background: currentColor;
      color: var(--bg, #0a0a0a);
    }
  `;
  document.head.appendChild(style);
}

// ─── IP DETECTION ─────────────────────────────────────────────────────────────
async function detectLang() {
  // 1. Ha a felhasználó már manuálisan választott → azt használjuk
  const saved = localStorage.getItem('nsp_lang');
  if (saved === 'hu' || saved === 'en') {
    currentLang = saved;
    return;
  }

  // 2. IP-alapú geolokáció (ingyenes, kulcs nélkül)
  try {
    const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      const data = await res.json();
      currentLang = (data.country_code === 'HU') ? 'hu' : 'en';
      return;
    }
  } catch (_) { /* timeout vagy hálózati hiba */ }

  // 3. Fallback: böngésző language header
  const browserLang = (navigator.language || navigator.userLanguage || 'hu').toLowerCase();
  currentLang = browserLang.startsWith('hu') ? 'hu' : 'en';
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
(async () => {
  injectStyle();
  injectLangToggle();
  await detectLang();
  applyTranslations();
})();
