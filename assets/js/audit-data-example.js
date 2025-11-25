// assets/js/audit-data-gth.js
// Données d’audit générées à partir du formulaire Numérion pour l’entreprise “gth”.

window.AUDIT_DATA = {
  // Identité & paramètres de base
  NOM_ENTREPRISE: "gth",
  HORIZON_ANALYSE: "12",                       // Horizon financier : 12 mois
  ALLOCATION_CIBLE: "3",                       // 3 % (poche stratégique)
  REFERENTIEL_COMPTABLE: "IFRS",
  SECTEUR: "Technologie",
  TAILLE_ENTREPRISE: "< 50 salariés",
  CA_ANNUEL: "< 5 M€",
  PERIMETRE_AUDIT: "Entité seule",
  JURIDICTION: "France (zone euro)",
  DATE_AUDIT: "25/11/2025",                    // Date d’émission du rapport
  ID_DOSSIER: "2025-NE-001",                   // ID libre, tu peux l’ajuster

  // Objectifs et contexte
  OBJECTIF_PRIORITAIRE: "Réduire l’érosion de trésorerie (inflation)",
  CONTEXTE_LIBRE:
    "Phase d’exploration de la trésorerie numérique pour limiter l’érosion inflationniste, avec des ressources internes limitées (manque de temps / ressources internes).",

  // Trésorerie & allocation (on prend la borne basse de la tranche > 5 M€ pour la simulation)
  // Trésorerie disponible déclarée : > 5 M€  → base de travail : 5 000 000 €
  TRESORERIE_DISPONIBLE: "5000000",
  // Allocation 3 % → 150 000 €
  MONTANT_POCHE: "150000",

  // Cible de rendement (fourchette déclarée 10–15 % → scénario central à 12 %)
  RENDEMENT_CIBLE: "12",

  // Scénarios pédagogiques (tu peux les ajuster si besoin)
  SCENARIO_PRUDENT_REND: "5",   // % / an
  SCENARIO_CENTRAL_REND: "12",  // % / an
  SCENARIO_OFFENSIF_REND: "18", // % / an

  // Risques (valeurs descriptives, à adapter si tu veux les chiffrer finement)
  PROBA_VOLATILITE: "Moyenne",
  IMPACT_VOLATILITE: "Important",
  PROBA_CUSTODY: "Faible",
  IMPACT_CUSTODY: "Important",
  PROBA_COMPTABLE: "Moyenne",
  IMPACT_COMPTABLE: "Moyen",
  PROBA_CYBER: "Moyenne",
  IMPACT_CYBER: "Élevé",

  // Maturité & gouvernance
  SCORE_MATURITE: "60", // Score maturité transmis par le wizard
  PROFIL_MATURITE: "Organisation en phase d’exploration structurée, avec premiers éléments de gouvernance en place.",

  MODE_CONSERVATION: "PSAN agréé AMF",        // Mode de conservation
  NIVEAU_MICA: "Partielle",                   // Conformité MiCA : Partielle
  COMMENTAIRE_MICA:
    "Premiers éléments de conformité présents (politique d’investissement déjà validée), politique de trésorerie à formaliser.",
  NOMBRE_SIGNATAIRES: "1 (décisionnaire unique)",
  PORTEE_DECISION: "Exploration / cadrage",

  // Recommandation globale
  RECOMMANDATION_GLOBALE:
    "Mettre en place une poche numérique prudente de 3 % sur 12 mois, avec montée en puissance progressive et revue régulière.",
  SYNTHese_COURTE:
    "Démarrer par une exposition BTC / ETH + stablecoins, en plusieurs paliers, avec suivi trimestriel et formalisation progressive des procédures internes.",
  AVIS_GLOBAL:
    "cohérente avec une phase d’exploration structurée pour une petite entreprise technologique.",

  // Signataires
  NOM_SIGNATAIRE_CLIENT: "gth",
  FONCTION_SIGNATAIRE_CLIENT: "Direction générale (DG / CEO)",
  NOM_CONSULTANT_NUMERION: "Numérion Éducation™ — Équipe Audit",

  // Formulaire & trace
  DATE_FORMULAIRE: "25/11/2025",
  SOURCE: "Site Numérion Éducation",
  WIZARD_VERSION: "V4.1 board-ready",

  // Benchmark marché (adapté à petite structure tech)
  BENCH_ALLOC_RANGE: "1–3 %",
  BENCH_HORIZON_RANGE: "12–24 mois",
  BENCH_MODE_CONSERVATION: "PSAN régulé + éventuellement cold wallet pour une partie des avoirs",
  BENCH_POSITIONING:
    "alignée avec les pratiques prudentes observées pour des petites structures technologiques en phase d’exploration.",

  // Stress tests — on part de la poche 150 000 €
  // Choc -60 % sur la poche ≈ 90 000 € de drawdown
  STRESS_CHOC_IMPACT_EURO: "90000",
  // 90 000 / 5 000 000 ≈ 1,8 %
  STRESS_CHOC_IMPACT_PCT: "1,8",
  STRESS_LATERAL_COMMENT:
    "En cas de marché latéral, l’impact principal est un coût d’opportunité par rapport à d’autres supports, sans dégradation significative du capital global.",
  STRESS_CYCLE_COMMENT:
    "En cas de cycle haussier complet, la poche numérique peut délivrer un rendement annualisé supérieur au scénario central, sous réserve de prises de profits structurées.",

  // Readiness global & tricolore
  READINESS_GLOBAL_LABEL:
    "Profil global : phase d’exploration structurée, gouvernance à formaliser et sécuriser.",
  READINESS_GOUV: "Orange",
  READINESS_GOUV_CLASS: "orange",
  READINESS_TECH: "Orange",
  READINESS_TECH_CLASS: "orange",
  READINESS_COMPTA: "Orange",
  READINESS_COMPTA_CLASS: "orange"
};
