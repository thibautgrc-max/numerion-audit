(function () {
  "use strict";

  function enterBoardMode() {
    document.documentElement.setAttribute("data-mode", "board");

    // cacher les sections longues
    document.querySelectorAll(
      "#section-profil, #section-risques, #section-roadmap, #section-annexes"
    ).forEach(el => el.style.display = "none");

    // focus synthèse + scoring + timing
    document.querySelectorAll(
      "#section-synthese, #section-analyse-strategique"
    ).forEach(el => el.style.display = "block");

    console.info("🧠 Board Mode activé");
  }

  function exitBoardMode() {
    document.documentElement.removeAttribute("data-mode");
    document.querySelectorAll(".audit-section").forEach(el => el.style.display = "");
  }

  function init() {
    window.NUMERION_BOARD = {
      enter: enterBoardMode,
      exit: exitBoardMode
    };
  }

  init();
})();
