// assets/js/audit-schema.js
(function () {
  "use strict";

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  function toNumber(val) {
    if (typeof val === "number") return val;
    if (typeof val !== "string") return 0;
    const cleaned = val.replace(/[^\d.,-]/g, "");
    if (cleaned.includes(",") && !cleaned.includes(".")) {
      return parseFloat(cleaned.replace(/\./g, "").replace(",", ".")) || 0;
    }
    return parseFloat(cleaned.replace(/,/g, "")) || 0;
  }

  function normalizeData(raw) {
    const d = { ...(raw || {}) };

    d.TRESORERIE_DISPONIBLE = toNumber(d.TRESORERIE_DISPONIBLE);
    d.ALLOCATION_CIBLE = toNumber(d.ALLOCATION_CIBLE);
    d.RENDEMENT_CIBLE = toNumber(d.RENDEMENT_CIBLE);
    d.SCORE_MATURITE = clamp(toNumber(d.SCORE_MATURITE), 0, 100);

    d.TIMING_MARKET_SCORE = clamp(toNumber(d.TIMING_MARKET_SCORE || 60), 0, 100);
    d.TIMING_MACRO_SCORE = clamp(toNumber(d.TIMING_MACRO_SCORE || 55), 0, 100);
    d.TIMING_ENTERPRISE_SCORE = clamp(toNumber(d.TIMING_ENTERPRISE_SCORE || 70), 0, 100);

    // auto-calcul poche si absent
    if (!d.MONTANT_POCHE && d.TRESORERIE_DISPONIBLE && d.ALLOCATION_CIBLE) {
      d.MONTANT_POCHE = Math.round(d.TRESORERIE_DISPONIBLE * (d.ALLOCATION_CIBLE / 100));
    } else {
      d.MONTANT_POCHE = toNumber(d.MONTANT_POCHE);
    }

    // nettoyage doublons fréquents
    if (d.PORTEE_DECISION && Array.isArray(d.PORTEE_DECISION)) {
      d.PORTEE_DECISION = d.PORTEE_DECISION[0];
    }

    return d;
  }

  function validateData(d) {
    const errors = [];

    if (!d.NOM_ENTREPRISE) errors.push("NOM_ENTREPRISE manquant");
    if (!d.ID_DOSSIER) errors.push("ID_DOSSIER manquant");
    if (!d.DATE_AUDIT) errors.push("DATE_AUDIT manquant");
    if (!(d.TRESORERIE_DISPONIBLE > 0)) errors.push("TRESORERIE_DISPONIBLE invalide");
    if (!(d.ALLOCATION_CIBLE >= 0)) errors.push("ALLOCATION_CIBLE invalide");

    return errors;
  }

  window.AUDIT_SCHEMA = { normalizeData, validateData, toNumber, clamp };
})();
