let PROJECTS = [];
async function loadProjects() {
    try {
        const res = await fetch('projects.json');
        PROJECTS = await res.json();
        buildPolaroids();
        buildModals();
    } catch (err) {
        console.error('Hiba a projektek betöltésekor:', err);
    }
}

// ─── LINK IKONOK (SVG) ─────────────────────────────────────────────────────────
const LINK_ICONS = {
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>`,
    tiktok:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.95a8.16 8.16 0 0 0 4.78 1.52V7.02a4.85 4.85 0 0 1-1.01-.33z"/></svg>`,
    weboldal:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
};

function getLinkIcon(name) {
    const n = name.toLowerCase();
    if (n.includes('instagram')) return LINK_ICONS.instagram;
    if (n.includes('tiktok'))    return LINK_ICONS.tiktok;
    return LINK_ICONS.weboldal;
}
function getLinkLabel(name) {
    const n = name.toLowerCase();
    if (n.includes('instagram')) return 'Instagram';
    if (n.includes('tiktok'))    return 'TikTok';
    return 'Weboldal';
}

// ─── POLAROID GENERÁLÁS ────────────────────────────────────────────────────────
const ROTATIONS  = [-4, 3, -6, 5, -3, 4, -2, 6, -5, 2];
const STATUS_CLS = { done: 'done', active: 'concept', beta: 'concept', wip: 'concept' };

function buildPolaroids() {
    const row = document.getElementById('polaroids-row');
    if (!row) return;
    row.innerHTML = PROJECTS.map((p, i) => {
        const rot = ROTATIONS[i % ROTATIONS.length];
        const stCls = STATUS_CLS[p.status] || '';
        const imgHtml = p.logo
            ? `<img src="${p.logo}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;object-position:center;">`
            : p.emoji;
        return `
      <a class="polaroid" href="#" style="transform:rotate(${rot}deg)" onclick="openModal('${p.id}'); return false;">
        <div class="pol-tape"></div>
        <div class="pol-img">${imgHtml}</div>
        <span class="pol-status ${stCls}"></span>
        <div class="pol-caption">${p.title}</div>
      </a>`;
    }).join('');
}

// ─── MODAL GENERÁLÁS ───────────────────────────────────────────────────────────
function buildModals() {
    const container = document.getElementById('modal-container');
    if (!container) return;
    container.innerHTML = PROJECTS.map(p => {
        const paragraphs = p.description.split('\n\n').map(t => `<p>${t}</p>`).join('');
        const tags       = p.technologies.map(t => `<span class="modal-tag">${t}</span>`).join('');
        const logoHtml   = p.logo
            ? `<img src="${p.logo}" alt="${p.title} logo" class="modal-logo-img">`
            : `<span class="modal-emoji-inner">${p.emoji}</span>`;
        const links = (p.links && p.links.length)
            ? `<div class="modal-links">${p.links.map(l => `
            <a href="${l.url}" target="_blank" rel="noopener" class="modal-link" title="${getLinkLabel(l.name)}">
              <span class="modal-link-icon">${getLinkIcon(l.name)}</span>
              <span class="modal-link-label">${getLinkLabel(l.name)}</span>
            </a>`).join('')}</div>`
            : '';
        return `
      <div id="m-${p.id}" class="proj-modal" onclick="closeIfBack(event,'${p.id}')">
        <div class="modal-inner">
          <div class="modal-top">
            <div class="modal-emoji-box">${logoHtml}</div>
            <div class="modal-title-box">
              <h2>${p.title}</h2>
              <span class="modal-status">${p.statusLabel}</span>
            </div>
            <button class="modal-close" onclick="closeModal('${p.id}')">✕</button>
          </div>
          <div class="modal-body">
            ${paragraphs}
            <div class="modal-tags">${tags}</div>
            ${links}
          </div>
        </div>
      </div>`;
    }).join('');
}

// ─── MODAL MŰVELETEK ───────────────────────────────────────────────────────────
function openModal(id) {
    const el = document.getElementById('m-' + id);
    if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
    const el = document.getElementById('m-' + id);
    if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
}
function closeIfBack(e, id) {
    if (e.target === e.currentTarget) closeModal(id);
}
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.proj-modal.open').forEach(m => m.classList.remove('open'));
        document.body.style.overflow = '';
    }
});

// ─── FORM ─────────────────────────────────────────────────────────────────────
function handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    // Use translated "sent" text if available
    const sentText = (typeof TRANSLATIONS !== 'undefined' && typeof currentLang !== 'undefined')
        ? TRANSLATIONS[currentLang].form_sent
        : 'Elküldve ✓';
    btn.textContent = sentText;
    btn.disabled = true;
    setTimeout(() => {
        const submitText = (typeof TRANSLATIONS !== 'undefined' && typeof currentLang !== 'undefined')
            ? TRANSLATIONS[currentLang].form_submit
            : 'Küldés →';
        btn.textContent = submitText;
        btn.disabled = false;
        e.target.reset();
    }, 3000);
}

// ─── NAV + HEADER OFFSET ──────────────────────────────────────────────────────
function setHeaderOffset() {
    const nav = document.querySelector('nav');
    document.documentElement.style.setProperty('--header-offset', (nav ? nav.offsetHeight : 0) + 'px');
}
setHeaderOffset();
window.addEventListener('resize', setHeaderOffset);

const ham   = document.getElementById('hamburger');
const navEl = document.getElementById('navLinks');
ham.addEventListener('click', () => navEl.classList.toggle('mob'));
navEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navEl.classList.remove('mob')));

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); }
    });
}, { threshold: 0.1 });

// ─── INIT ─────────────────────────────────────────────────────────────────────
loadProjects();
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));