(function () {
  const data = window.AUDIT_DATA || null;

  // Remplacement des __PLACEHOLDERS__
  function injectPlaceholders() {
    if (!data) {
      console.warn("[Numérion] AUDIT_DATA non défini. Aucun placeholder remplacé.");
      return;
    }

    let html = document.body.innerHTML;

    Object.entries(data).forEach(([key, value]) => {
      let v = String(value);

      if (key === "TRESORERIE_DISPONIBLE" || key === "MONTANT_POCHE" || key === "STRESS_CHOC_IMPACT_EURO") {
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

  // Toolbar – scroll & état actif
  function initToolbar() {
    const links = document.querySelectorAll(".toolbar-link[data-scroll-to]");
    const sections = {};

    links.forEach((link) => {
      const id = link.getAttribute("data-scroll-to");
      const section = document.getElementById(id);
      if (section) sections[id] = section;

      link.addEventListener("click", function () {
        const target = sections[id];
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const offset = window.pageYOffset + rect.top - 72;
        window.scrollTo({ top: offset, behavior: "smooth" });

        links.forEach((l) => l.classList.remove("is-active"));
        link.classList.add("is-active");
      });
    });

    window.addEventListener("scroll", function () {
      const scrollPos = window.scrollY || window.pageYOffset;
      let currentId = null;

      Object.entries(sections).forEach(([id, section]) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY - 110;
        if (scrollPos >= top) {
          currentId = id;
        }
      });

      if (currentId) {
        links.forEach((l) => {
          l.classList.toggle("is-active", l.getAttribute("data-scroll-to") === currentId);
        });
      }
    });
  }

  // Accordéons (annexes)
  function initAccordions() {
    const accordions = document.querySelectorAll("[data-accordion]");
    accordions.forEach((acc) => {
      const items = acc.querySelectorAll(".accordion-item");
      items.forEach((item) => {
        const header = item.querySelector(".accordion-header");
        const panel = item.querySelector(".accordion-panel");
        if (!header || !panel) return;

        header.addEventListener("click", function () {
          const isOpen = header.classList.contains("is-open");

          items.forEach((it) => {
            const h = it.querySelector(".accordion-header");
            const p = it.querySelector(".accordion-panel");
            if (!h || !p) return;
            h.classList.remove("is-open");
            p.style.maxHeight = null;
          });

          if (!isOpen) {
            header.classList.add("is-open");
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      });
    });
  }

  // Barre de maturité visuelle
  function syncMaturityBar() {
    if (!data) return;
    const score = Number(data.SCORE_MATURITE);
    if (isNaN(score)) return;

    const bar = document.querySelector(".maturity-bar-fill");
    if (bar) {
      const safeScore = Math.max(0, Math.min(100, score));
      bar.style.width = safeScore + "%";
    }
  }

  // Scénarios (barres horizontales)
  function initScenarioBars() {
    if (!data) return;

    const prudent = Number(data.SCENARIO_PRUDENT_REND) || 0;
    const central = Number(data.SCENARIO_CENTRAL_REND) || 0;
    const offensif = Number(data.SCENARIO_OFFENSIF_REND) || 0;
    const max = Math.max(prudent, central, offensif, 1);

    const map = {
      PRUDENT: prudent,
      CENTRAL: central,
      OFFENSIF: offensif
    };

    document.querySelectorAll("[data-scenario]").forEach((el) => {
      const key = el.getAttribute("data-scenario");
      const val = map[key] || 0;
      const pct = (val / max) * 100;
      el.style.width = pct + "%";
    });
  }

  // Benchmark (position de l’allocation client dans la bande 1–5% par ex.)
  function initBenchmarkBar() {
    if (!data) return;
    const min = Number(data.BENCH_ALLOC_MIN);
    const max = Number(data.BENCH_ALLOC_MAX);
    const alloc = Number(data.ALLOCATION_CIBLE);

    if (isNaN(min) || isNaN(max) || max <= min) return;

    const bar = document.querySelector("[data-bench-bar]");
    const marker = document.querySelector("[data-bench-client]");
    if (!bar || !marker) return;

    const clampedAlloc = Math.max(min, Math.min(max, alloc));
    const pos = ((clampedAlloc - min) / (max - min)) * 100;
    marker.style.left = pos + "%";
  }

  // Loader
  function hideLoader() {
    const loader = document.getElementById("auditLoader");
    if (!loader) return;
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 250);
  }

  function init() {
    injectPlaceholders();
    initToolbar();
    initAccordions();
    syncMaturityBar();
    initScenarioBars();
    initBenchmarkBar();
    hideLoader();

    console.info("[Numérion] Audit Premium V3 initialisé.");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
