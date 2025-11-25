// assets/js/audit-engine.js
(function () {
  "use strict";

  const data = window.AUDIT_DATA || {};

  /* ------------------- INJECTION PLACEHOLDERS ------------------- */
  function injectPlaceholders() {
    document.querySelectorAll("body *").forEach((el) => {
      if (el.children.length === 0 && el.textContent.includes("__")) {
        el.innerHTML = el.innerHTML.replace(/__([A-Z0-9_]+)__/g, (_, key) =>
          key in data ? data[key] : ""
        );
      }
    });
  }

  /* ------------------- BARRE DE MATURITÉ ------------------- */
  function syncMaturityBar() {
    const score = parseFloat(data.SCORE_MATURITE || 0);
    const bar = document.querySelector(".maturity-bar-fill");
    if (bar) bar.style.width = Math.min(score, 100) + "%";
  }

  /* ------------------- TOOLBAR NAVIGATION ------------------- */
  function initToolbar() {
    const buttons = document.querySelectorAll(".toolbar-link[data-scroll-to]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const section = document.getElementById(btn.dataset.scrollTo);
        if (section)
          window.scrollTo({ top: section.offsetTop - 70, behavior: "smooth" });
        buttons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
      });
    });
  }

  /* ------------------- ACCORDÉONS ------------------- */
  function initAccordion() {
    document.querySelectorAll("[data-accordion] .accordion-header").forEach((h) => {
      h.addEventListener("click", () => {
        const p = h.nextElementSibling;
        h.classList.toggle("is-open");
        if (p) p.style.maxHeight = h.classList.contains("is-open")
          ? p.scrollHeight + "px"
          : "0";
      });
    });
  }

  /* ------------------- BOUTON HAUT DE PAGE ------------------- */
  function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;
    window.addEventListener("scroll", () => {
      btn.style.display = window.scrollY > 250 ? "flex" : "none";
    });
    btn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  /* ------------------- ANALYSE STRATÉGIQUE IA ------------------- */
  function initStrategicAnalysis() {
    // Parsing des données clés (avec fallback robuste)
    const treasury = parseFloat(
      String(data.TRESORERIE_DISPONIBLE || "0").replace(/[^\d]/g, "")
    );
    const allocation = parseFloat(String(data.ALLOCATION_CIBLE || "0"));
    const maturity = parseFloat(data.SCORE_MATURITE || 0);
    const rendement = parseFloat(
      String(data.RENDEMENT_CIBLE || "0").replace(/[^\d]/g, "")
    );

    // Scores dimensionnels (0–100)
    const scoreAllocation = allocation >= 2 && allocation <= 5 ? 90 : 70;
    const scoreGouv = Math.max(0, Math.min(maturity, 100));
    const scoreRend = rendement >= 8 && rendement <= 15 ? 85 : 70;
    const scoreConf = data.REFERENTIEL_COMPTABLE === "IFRS" ? 90 : 60;

    // Score global pondéré
    const global = Math.round(
      scoreAllocation * 0.25 +
      scoreGouv * 0.35 +
      scoreRend * 0.25 +
      scoreConf * 0.15
    );

    const setScore = (id, value) => {
      const el = document.getElementById(`score-${id}`);
      if (el) el.textContent = `${value} / 100`;
    };

    setScore("allocation", scoreAllocation);
    setScore("gouvernance", scoreGouv);
    setScore("rendement", scoreRend);
    setScore("conformite", scoreConf);

    const globalBar = document.getElementById("score-global");
    if (globalBar) globalBar.style.width = `${global}%`;

    const comment = document.getElementById("comment-global");
    if (comment) {
      let msg;
      if (global >= 85) {
        msg =
          "Excellente cohérence stratégique : allocation optimale, gouvernance solide et conformité avancée. Dossier prêt pour présentation board.";
      } else if (global >= 70) {
        msg =
          "Cohérence satisfaisante : structuration MiCA en cours, ajustements ciblés à finaliser avant validation board.";
      } else {
        msg =
          "Alignement partiel : prioriser la formalisation des politiques internes, la gouvernance et le cadrage comptable avant déploiement.";
      }
      comment.textContent = msg;
    }

    // Logging debug si besoin
    console.info("[Numérion IA] Scores stratégiques calculés :", {
      treasury,
      allocation,
      maturity,
      rendement,
      scoreAllocation,
      scoreGouv,
      scoreRend,
      scoreConf,
      global
    });
  }

  /* ------------------- INIT GLOBAL ------------------- */
  function init() {
    injectPlaceholders();
    syncMaturityBar();
    initToolbar();
    initAccordion();
    initBackToTop();
    initStrategicAnalysis();
    console.info("✅ Audit Numérion gth injecté avec hyperpuissance stratégique.");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
