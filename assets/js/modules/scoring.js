// assets/js/modules/scoring.js
(function () {
  "use strict";

  function scoreAllocation(data, cfg) {
    const a = data.ALLOCATION_CIBLE;
    const { min, max } = cfg.rules.allocation;
    if (a >= min && a <= max) return 90;
    if (a > 0 && a < min) return 75;
    if (a > max && a <= 10) return 65;
    return 55;
  }

  function scoreGovernance(data, cfg) {
    // base = maturité (0-100) + pénalité si 1 seul signataire
    let s = data.SCORE_MATURITE;
    const signers = String(data.NOMBRE_SIGNATAIRES || "");
    if (signers.includes("1")) s -= 10;
    return Math.max(0, Math.min(100, Math.round(s)));
  }

  function scoreAccounting(data) {
    return data.REFERENTIEL_COMPTABLE === "IFRS" ? 90 : 65;
  }

  function scoreCustody(data) {
    const mode = String(data.MODE_CONSERVATION || "").toLowerCase();
    if (mode.includes("psan")) return 88;
    return 70;
  }

  function scoreRisk(data) {
    // heuristique simple : volatilité élevée => risque plus “complexe”
    const vol = String(data.PROBA_VOLATILITE || "").toLowerCase();
    if (vol.includes("élevée") || vol.includes("elevee")) return 65;
    return 75;
  }

  function computeScores(data, cfg) {
    const s = {
      allocation: scoreAllocation(data, cfg),
      governance: scoreGovernance(data, cfg),
      accounting: scoreAccounting(data, cfg),
      custody: scoreCustody(data, cfg),
      risk: scoreRisk(data, cfg),
    };

    const w = cfg.weights;
    const global = Math.round(
      s.allocation * w.allocation +
      s.governance * w.governance +
      s.accounting * w.accounting +
      s.custody * w.custody +
      s.risk * w.risk
    );

    return { dimensions: s, global };
  }

  window.AUDIT_SCORING = { computeScores };
})();
