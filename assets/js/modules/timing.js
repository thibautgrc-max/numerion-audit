// assets/js/modules/timing.js
(function () {
  "use strict";

  function computeTimingIndex(data) {
    const m = data.TIMING_MARKET_SCORE ?? 60;
    const macro = data.TIMING_MACRO_SCORE ?? 55;
    const e = data.TIMING_ENTERPRISE_SCORE ?? 70;
    return Math.round(0.5 * m + 0.3 * macro + 0.2 * e);
  }

  function timingComment(score) {
    if (score >= 75) return "Fenêtre favorable : déploiement progressif + gouvernance verrouillée.";
    if (score >= 55) return "Contexte intermédiaire : pilote recommandé (KPIs + comités).";
    if (score >= 35) return "Fenêtre prudente : priorité gouvernance/risques, allocation bornée.";
    return "Contexte défavorable : focus liquidité et réduction du risque.";
  }

  function renderTiming(data) {
    const idx = computeTimingIndex(data);

    const scoreEl = document.getElementById("timing-index-score");
    if (scoreEl) scoreEl.textContent = `${idx}/100`;

    const barEl = document.getElementById("timing-index-bar");
    if (barEl) barEl.style.width = `${Math.max(0, Math.min(100, idx))}%`;

    const commentEl = document.getElementById("timing-index-comment");
    if (commentEl) commentEl.textContent = timingComment(idx);

    const set = (scoreId, val, commentId, comment) => {
      const s = document.getElementById(scoreId);
      if (s) s.textContent = `${val}/100`;
      const c = document.getElementById(commentId);
      if (c && comment) c.textContent = comment;
    };

    set("timing-market-score", data.TIMING_MARKET_SCORE, "timing-market-comment", data.TIMING_MARKET_COMMENT);
    set("timing-macro-score", data.TIMING_MACRO_SCORE, "timing-macro-comment", data.TIMING_MACRO_COMMENT);
    set("timing-enterprise-score", data.TIMING_ENTERPRISE_SCORE, "timing-enterprise-comment", data.TIMING_ENTERPRISE_COMMENT);

    return idx;
  }

  window.AUDIT_TIMING = { renderTiming, computeTimingIndex };
})();
