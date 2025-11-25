// assets/js/audit-engine.js
(function () {
  "use strict";

  const data = window.AUDIT_DATA || {};

  // Injection placeholders
  function injectPlaceholders() {
    document.querySelectorAll("body *").forEach((el) => {
      if (el.children.length === 0 && el.textContent.includes("__")) {
        el.innerHTML = el.innerHTML.replace(/__([A-Z0-9_]+)__/g, (_, key) =>
          key in data ? data[key] : ""
        );
      }
    });
  }

  // Barre de maturité
  function syncMaturityBar() {
    const score = parseFloat(data.SCORE_MATURITE || 0);
    const bar = document.querySelector(".maturity-bar-fill");
    if (bar) bar.style.width = Math.min(score, 100) + "%";
  }

  // Toolbar navigation
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

  // Accordéons
  function initAccordion() {
    document.querySelectorAll("[data-accordion] .accordion-header").forEach((h) => {
      h.addEventListener("click", () => {
        const p = h.nextElementSibling;
        h.classList.toggle("is-open");
        if (p) p.style.maxHeight = h.classList.contains("is-open") ? p.scrollHeight + "px" : "0";
      });
    });
  }

  // Bouton top de page
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

  // Init
  function init() {
    injectPlaceholders();
    syncMaturityBar();
    initToolbar();
    initAccordion();
    initBackToTop();
    console.info("✅ Audit gth injecté avec succès.");
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
})();
