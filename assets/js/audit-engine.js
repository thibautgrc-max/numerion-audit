// assets/js/audit-engine.js
(function () {
  "use strict";

  function formatByKey(key, value) {
    const eurKeys = new Set([
      "TRESORERIE_DISPONIBLE",
      "MONTANT_POCHE",
      "SCENARIO_PRUDENT_VALUE",
      "SCENARIO_CENTRAL_VALUE",
      "SCENARIO_OFFENSIF_VALUE",
      "STRESS_CHOC_IMPACT_EURO",
      "REPORT_T1_VALEUR",
    ]);

    if (eurKeys.has(key)) {
      const n = window.AUDIT_SCHEMA.toNumber(value);
      return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
    }
    return String(value ?? "");
  }

  function initUIBasics() {
    // Toolbar
    document.querySelectorAll(".toolbar-link[data-scroll-to]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const section = document.getElementById(btn.dataset.scrollTo);
        if (section) window.scrollTo({ top: section.offsetTop - 70, behavior: "smooth" });
        document.querySelectorAll(".toolbar-link").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
      });
    });

    // Accordéons
    document.querySelectorAll("[data-accordion] .accordion-header").forEach((h) => {
      h.addEventListener("click", () => {
        const p = h.nextElementSibling;
        h.classList.toggle("is-open");
        if (!p) return;
        p.style.maxHeight = h.classList.contains("is-open") ? p.scrollHeight + "px" : "0";
      });
    });

    // Back to top
    const topBtn = document.getElementById("back-to-top");
    if (topBtn) {
      const onScroll = () => topBtn.classList.toggle("is-visible", window.scrollY > 250);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
  }

  function renderStrategicScores(scoring) {
    const set = (id, value) => {
      const el = document.getElementById(`score-${id}`);
      if (el) el.textContent = `${value} / 100`;
    };
    set("allocation", scoring.dimensions.allocation);
    set("gouvernance", scoring.dimensions.governance);
    set("rendement", scoring.dimensions.risk);      // si tu as un bloc rendement, remappe ici
    set("conformite", scoring.dimensions.accounting);

    const bar = document.getElementById("score-global");
    if (bar) bar.style.width = `${scoring.global}%`;

    const comment = document.getElementById("comment-global");
    if (comment) {
      comment.textContent =
        scoring.global >= 85 ? "Board-ready : cohérence stratégique premium." :
        scoring.global >= 70 ? "Solide : quelques verrous à fermer avant arbitrage." :
        "Pilote : gouvernance/compta à cadrer avant déploiement.";
    }
  }

  function init() {
    const raw = window.AUDIT_DATA || {};
    const cfg = window.AUDIT_CONFIG;

    const data = window.AUDIT_SCHEMA.normalizeData(raw);
    const errors = window.AUDIT_SCHEMA.validateData(data);

    if (errors.length) {
      console.warn("[Numérion] Données incomplètes:", errors);
    }

    // Safe placeholder injection
    window.AUDIT_DOM.injectTextPlaceholders(data, formatByKey);

    // UI
    initUIBasics();

    // maturity bar
    const mBar = document.querySelector(".maturity-bar-fill");
    if (mBar) mBar.style.width = `${data.SCORE_MATURITE}%`;

    // scoring
    const scoring = window.AUDIT_SCORING.computeScores(data, cfg);
    renderStrategicScores(scoring);

    // timing
    window.AUDIT_TIMING.renderTiming(data);

    // IA insights
    const insights = window.AUDIT_INSIGHTS.buildInsights(data, scoring, cfg);
    window.AUDIT_INSIGHTS.renderInsights(insights, scoring);

    // export payload
    window.AUDIT_EXPORT.initExportButtons({
      meta: { generatedAt: new Date().toISOString(), configVersion: cfg.version },
      data,
      scoring,
      insights
    });

    console.info("✅ Numérion Audit OS chargé (single-run).", { scoring, errors });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
