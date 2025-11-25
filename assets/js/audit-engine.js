(function(){
  const data = window.AUDIT_DATA || null;

  // Remplacement de tous les __PLACEHOLDERS__
  function injectPlaceholders() {
    if (!data) {
      console.warn("[Numérion] AUDIT_DATA non défini. Aucun placeholder remplacé.");
      return;
    }

    let html = document.body.innerHTML;

    Object.entries(data).forEach(([key, value]) => {
      let v = String(value);

      if (key === "TRESORERIE_DISPONIBLE" || key === "MONTANT_POCHE") {
        v = formatEuro(value);
      }

      const placeholder = "__" + key + "__";
      if (html.includes(placeholder)) {
        html = html.split(placeholder).join(v);
      }
    });

    document.body.innerHTML = html;
  }

  function formatEuro(val) {
    const num = Number(String(val).replace(/\s/g, "").replace(",", "."));
    if (isNaN(num)) return String(val);
    return num.toLocaleString("fr-FR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }

  // Toolbar – scroll doux + état actif
  function initToolbar() {
    const links = document.querySelectorAll('.toolbar-link[data-scroll-to]');
    const sections = {};

    links.forEach(link => {
      const id = link.getAttribute('data-scroll-to');
      const section = document.getElementById(id);
      if (section) sections[id] = section;

      link.addEventListener('click', function(){
        const target = sections[id];
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const offset = window.pageYOffset + rect.top - 72;
        window.scrollTo({ top: offset, behavior: 'smooth' });

        links.forEach(l => l.classList.remove('is-active'));
        link.classList.add('is-active');
      });
    });

    window.addEventListener('scroll', function(){
      const scrollPos = window.scrollY || window.pageYOffset;
      let currentId = null;

      Object.entries(sections).forEach(([id, section]) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY - 100;
        if (scrollPos >= top) {
          currentId = id;
        }
      });

      if (currentId) {
        links.forEach(l => {
          l.classList.toggle('is-active', l.getAttribute('data-scroll-to') === currentId);
        });
      }
    });
  }

  // Accordéons des annexes
  function initAccordions() {
    const accordions = document.querySelectorAll('[data-accordion]');
    accordions.forEach(acc => {
      const items = acc.querySelectorAll('.accordion-item');
      items.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const panel = item.querySelector('.accordion-panel');
        if (!header || !panel) return;

        header.addEventListener('click', function(){
          const isOpen = header.classList.contains('is-open');

          items.forEach(it => {
            const h = it.querySelector('.accordion-header');
            const p = it.querySelector('.accordion-panel');
            if (!h || !p) return;
            h.classList.remove('is-open');
            p.style.maxHeight = null;
          });

          if (!isOpen) {
            header.classList.add('is-open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
          }
        });
      });
    });
  }

  // Barre de maturité visuelle
  function syncMaturityBar() {
    const d = window.AUDIT_DATA || null;
    if (!d) return;
    const score = Number(d.SCORE_MATURITE);
    if (isNaN(score)) return;

    const bar = document.querySelector('.maturity-bar-fill');
    if (bar) {
      const safeScore = Math.max(0, Math.min(100, score));
      bar.style.width = safeScore + '%';
    }
  }

  function init() {
    injectPlaceholders();
    initToolbar();
    initAccordions();
    syncMaturityBar();

    console.info("[Numérion] Audit dynamique initialisé.");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
