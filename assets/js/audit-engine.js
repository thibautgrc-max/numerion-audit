// assets/js/audit-engine.js
(function () {
  "use strict";

  const data = window.AUDIT_DATA || null;

  function injectPlaceholders() {
    if (!data) {
      console.warn("[Numérion] AUDIT_DATA non défini – aucun placeholder injecté.");
      return;
    }

    // On parcourt tous les nœuds texte (éléments sans enfants)
    const nodes = document.querySelectorAll("body *");
    nodes.forEach((el) => {
      if (el.children.length === 0 && el.innerHTML && el.innerHTML.includes("__")) {
        el.innerHTML = el.innerHTML.replace(/__([A-Z0-9_]+)__/g, (match, key) => {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            return data[key];
          }
          // Si aucune donnée pour ce placeholder, on le remplace par vide
          return "";
        });
      }
    });
  }

  function syncMaturityBar() {
    if (!data) return;
    const score = Number(data.SCORE_MATURITE || 0);
    const bar = document.querySelector(".maturity-bar-fill");
    if (bar && !isNaN(score)) {
      const safe = Math.max(0, Math.min(100, score));
      bar.style.width = safe + "%";
    }
  }

  function initToolbar() {
    const links = document.querySelectorAll(".toolbar-link[data-scroll-to]");
    if (!links.length) return;

    const sections = {};
    links.forEach((link) => {
      const id = link.getAttribute("data-scroll-to");
      const section = document.getElementById(id);
      if (section) sections[id] = section;

      link.addEventListener("click", () => {
        const target = sections[id];
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const offset = window.pageYOffset + rect.top - 72;
        window.scrollTo({ top: offset, behavior: "smooth" });

        links.forEach((l) => l.classList.remove("is-active"));
        link.classList.add("is-active");
      });
    });

    // Mise à jour de l’état actif au scroll
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY || window.pageYOffset;
      let currentId = null;

      Object.entries(sections).forEach(([id, section]) => {
        const top = section.offsetTop - 120;
        if (scrollPos >= top) currentId = id;
      });

      if (currentId) {
        links.forEach((l) => {
          l.classList.toggle(
            "is-active",
            l.getAttribute("data-scroll-to") === currentId
          );
        });
      }
    });
  }

  function initAccordions() {
    const accordions = document.querySelectorAll("[data-accordion]");
    accordions.forEach((acc) => {
      const items = acc.querySelectorAll(".accordion-item");
      items.forEach((item) => {
        const header = item.querySelector(".accordion-header");
        const panel = item.querySelector(".accordion-panel");
        if (!header || !panel) return;

        // Fermeture initiale
        panel.style.maxHeight = "0px";

        header.addEventListener("click", () => {
          const isOpen = header.classList.contains("is-open");

          // Fermer tous les autres
          items.forEach((it) => {
            const h = it.querySelector(".accordion-header");
            const p = it.querySelector(".accordion-panel");
            if (!h || !p) return;
            h.classList.remove("is-open");
            p.style.maxHeight = "0px";
          });

          // Ouvrir celui cliqué si besoin
          if (!isOpen) {
            header.classList.add("is-open");
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      });
    });
  }

  function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    const toggle = () => {
      const scrollPos = window.scrollY || window.pageYOffset;
      if (scrollPos > 220) {
        btn.classList.add("is-visible");
      } else {
        btn.classList.remove("is-visible");
      }
    };

    window.addEventListener("scroll", toggle);
    toggle(); // état initial

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function init() {
    injectPlaceholders();
    syncMaturityBar();
    initToolbar();
    initAccordions();
    initBackToTop();
    console.info("[Numérion] Audit dynamique initialisé.");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
