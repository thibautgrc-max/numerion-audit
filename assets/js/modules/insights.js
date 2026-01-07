// assets/js/modules/insights.js
(function () {
  "use strict";

  function buildInsights(data, scoring, cfg) {
    const gaps = [];
    const wins = [];
    const risks = [];

    // Quick wins
    if (String(data.NOMBRE_SIGNATAIRES || "").includes("1")) {
      wins.push("Mettre en place une co-signature (2 signataires) + matrice de délégation.");
      gaps.push({ area: "Gouvernance", impact: "High", action: "Co-signature + séparation des accès" });
    }
    if (data.REFERENTIEL_COMPTABLE !== "IFRS") {
      wins.push("Cadrage comptable : note de position + validation expert-comptable/CAC.");
      gaps.push({ area: "Comptabilité", impact: "High", action: "Note de position + traitement crypto" });
    }
    if (!String(data.POLITIQUE_TRESORERIE || "").toLowerCase().includes("oui")) {
      wins.push("Créer une politique de trésorerie numérique : objectifs, limites, reporting, incidents.");
      gaps.push({ area: "Policy", impact: "Medium", action: "Policy treasury + reporting trimestriel" });
    }

    // Risques
    risks.push("Risque volatilité : seuils de réduction + règles de rebalancing.");
    risks.push("Risque custody : due diligence PSAN + SLA + plan de continuité.");
    risks.push("Risque cyber : MFA, whitelists, procédures d’urgence, audit accès.");

    // Plan 30/60/90
    const plan = {
      d30: [
        "Validation périmètre + objectifs + plafond d’allocation",
        "Choix PSAN shortlist + grille due diligence",
        "Draft policy + RACI + matrice de signature"
      ],
      d60: [
        "Cadrage comptable (note) + validation CAC",
        "Mise en place reporting KPI (valeur, limites, incidents)",
        "Pilote (1er palier) + check conformité MiCA interne"
      ],
      d90: [
        "Montée en charge par paliers + rebalancing",
        "Comité board : décision de scaling",
        "Industrialisation : runbook + audit trail complet"
      ]
    };

    // Narratif executive
    const global = scoring.global;
    let narrative =
      global >= cfg.thresholds.excellent
        ? "Positionnement premium : dossier prêt pour arbitrage board, focus scaling contrôlé."
        : global >= cfg.thresholds.good
        ? "Positionnement solide : quelques verrous à fermer pour passage board sans friction."
        : "Positionnement pilote : prioriser gouvernance, politique interne, cadrage comptable avant déploiement.";

    return { narrative, wins, gaps, risks, plan };
  }

  function renderInsights(insights, scoring) {
    const el = document.getElementById("ai-insights");
    if (!el) return;

    const li = (arr) => arr.map((x) => `<li>${x}</li>`).join("");

    el.innerHTML = `
      <div class="conclusion-box">
        <div class="conclusion-title">Numérion IA — Executive Intelligence</div>
        <div><strong>Score global :</strong> ${scoring.global}/100</div>
        <div>${insights.narrative}</div>
      </div>

      <div class="grid-2" style="margin-top:0.85rem">
        <div class="info-block">
          <div class="info-label">Quick wins (effet levier)</div>
          <ul style="margin:0.35rem 0 0 1.1rem">${li(insights.wins)}</ul>
        </div>
        <div class="info-block">
          <div class="info-label">Risques à verrouiller</div>
          <ul style="margin:0.35rem 0 0 1.1rem">${li(insights.risks)}</ul>
        </div>
      </div>

      <div class="checklist-block">
        <div class="checklist-title">Roadmap 30 / 60 / 90 jours</div>
        <div class="grid-3" style="margin-top:0.55rem">
          <div class="roadmap-step">
            <div class="roadmap-step-header">
              <div class="roadmap-step-title">D+30</div><div class="roadmap-chip">Setup</div>
            </div>
            <ul class="roadmap-list">${li(insights.plan.d30)}</ul>
          </div>
          <div class="roadmap-step">
            <div class="roadmap-step-header">
              <div class="roadmap-step-title">D+60</div><div class="roadmap-chip">Pilote</div>
            </div>
            <ul class="roadmap-list">${li(insights.plan.d60)}</ul>
          </div>
          <div class="roadmap-step">
            <div class="roadmap-step-header">
              <div class="roadmap-step-title">D+90</div><div class="roadmap-chip">Scale</div>
            </div>
            <ul class="roadmap-list">${li(insights.plan.d90)}</ul>
          </div>
        </div>
      </div>
    `;
  }

  window.AUDIT_INSIGHTS = { buildInsights, renderInsights };
})();
