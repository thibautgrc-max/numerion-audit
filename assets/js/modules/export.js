(function () {
  "use strict";

  function buildPayload(payload) {
    return {
      meta: payload.meta,
      enterprise: {
        name: payload.data.NOM_ENTREPRISE,
        sector: payload.data.SECTEUR,
        size: payload.data.TAILLE_ENTREPRISE,
        jurisdiction: payload.data.JURIDICTION
      },
      treasury: {
        available: payload.data.TRESORERIE_DISPONIBLE,
        allocationPct: payload.data.ALLOCATION_CIBLE,
        pocketAmount: payload.data.MONTANT_POCHE,
        horizonMonths: payload.data.HORIZON_ANALYSE
      },
      scoring: payload.scoring,
      insights: payload.insights
    };
  }

  function exportJSON(payload) {
    const blob = new Blob(
      [JSON.stringify(buildPayload(payload), null, 2)],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `numerion_audit_${payload.data.ID_DOSSIER}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function initExportButtons(payload) {
    window.NUMERION_EXPORT = {
      json: () => exportJSON(payload)
    };
  }

  window.AUDIT_EXPORT = { initExportButtons };
})();
