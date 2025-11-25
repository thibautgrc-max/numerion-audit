// assets/js/audit-data-example.js
window.AUDIT_DATA = {
  // Identité dossier / entreprise
  NOM_ENTREPRISE: "gth",
  NOM_GROUPE: "Numérion Éducation",
  DATE_AUDIT: "25/11/2025",
  DATE_FORMULAIRE: "25/11/2025",
  ID_DOSSIER: "2025-NE-001",

  // Rôle / contact
  ROLE_CONTACT: "Direction générale (DG / CEO)",
  NOM_SIGNATAIRE_CLIENT: "gth",
  FONCTION_SIGNATAIRE_CLIENT: "Direction générale",
  NOM_CONSULTANT_NUMERION: "Équipe Numérion Éducation™",

  // Profil entreprise
  SECTEUR: "Technologie",
  TAILLE_ENTREPRISE: "< 50 salariés",
  CA_ANNUEL: "< 5 M€",
  PERIMETRE_AUDIT: "Entité seule",
  JURIDICTION: "France (zone euro)",
  FORME_JURIDIQUE: "SAS",
  APPARTENANCE_GROUPE: "Indépendant",
  SOURCE: "Site Numérion Éducation",

  // Trésorerie & allocation (données gth)
  TRESORERIE_DISPONIBLE: 5500000,     // estimation pédagogique à partir de "> 5 M€"
  ALLOCATION_CIBLE: 3,                // 3 % (poche stratégique)
  HORIZON_ANALYSE: 12,                // 12 mois
  RENDEMENT_CIBLE: 12,                // cible centrale au sein de la fourchette 10–15 %
  UNIVERS_ACTIFS: "BTC / ETH, Stablecoins (EUR / USD)",
  USAGE_PRINCIPAL: "Diversification de trésorerie",
  TOLERANCE_VOLATILITE: "Modérée (rendement / risque équilibré)",

  // Poche numérique simulée
  MONTANT_POCHE: 165000,              // 3 % de 5 500 000 €

  // Objectifs & contexte
  OBJECTIF_PRIORITAIRE: "Réduire l’érosion de trésorerie (inflation)",
  URGENCE: "Étude / cadrage interne",
  PORTEE_DECISION: "Exploration / cadrage",
  FREQUENCE_COMITE: "Au fil de l’eau",
  POLITIQUE_TRESORERIE: "Aucune",
  POLITIQUE_INVEST: "Oui (politique d’investissement / risque existante)",
  CONTRAINTES_INTERNES: "Manque de temps / ressources internes",
  COMMENTAIRES_LIBRES: "yesssouii",
  CONTEXTE_LIBRE:
    "Première réflexion structurée sur une poche de trésorerie numérique, " +
    "avec volonté de protéger le cash contre l’inflation sans complexifier le quotidien des équipes.",

  // Gouvernance / MiCA
  MODE_CONSERVATION: "PSAN agréé AMF",
  NIVEAU_MICA: "Conformité partielle",
  COMMENTAIRE_MICA:
    "Certaines briques de gouvernance existent déjà, mais les procédures écrites et la cartographie des risques " +
    "doivent être complétées pour être pleinement alignées avec MiCA.",
  COMMISSAIRE_AUX_COMPTES: "Oui",
  NOMBRE_SIGNATAIRES: "1 (décisionnaire unique)",
  PORTEE_DECISION: "Décisionnaire unique, validation board recommandée",

  REFERENTIEL_COMPTABLE: "IFRS",
  VISIO_RESTITUTION: "Oui, visio 45 min",
  PLAGE_HORAIRE_PREF: "Créneaux de bureau à préciser",

  // Maturité & readiness
  SCORE_MATURITE: 60,
  PROFIL_MATURITE: "Organisation en structuration",

  READINESS_GOUV: "En cours de structuration",
  READINESS_GOUV_CLASS: "orange",
  READINESS_TECH: "Solide avec PSAN régulé",
  READINESS_TECH_CLASS: "vert",
  READINESS_COMPTA: "À cadrer avec l’expert-comptable / CAC",
  READINESS_COMPTA_CLASS: "orange",

  READINESS_GLOBAL_LABEL: "Poche numérique à déployer de façon progressive",
  RECOMMANDATION_GLOBALE:
    "Valider une poche numérique limitée à 3 % de la trésorerie puis la déployer en plusieurs paliers, " +
    "avec reporting trimestriel aux organes de gouvernance.",
  SYNTHESE_COURTE:
    "Avec une trésorerie supérieure à 5 M€ et un objectif de protection contre l’inflation, " +
    "une poche numérique de 3 % apparaît cohérente, sous réserve de formaliser les procédures internes " +
    "et d’embarquer vos auditeurs.",
  AVIS_GLOBAL: "cohérente avec un profil prudence / diversification",

  // Benchmarks (pédagogiques)
  BENCH_ALLOC_RANGE: "2–5 %",
  BENCH_HORIZON_RANGE: "12–36 mois",
  BENCH_MODE_CONSERVATION: "PSAN régulé + ségrégation des accès",
  BENCH_POSITIONING: "alignée avec les pratiques prudentes observées",

  // Scénarios (rendements annuels) – pédagogiques
  SCENARIO_PRUDENT_REND: 4,
  SCENARIO_CENTRAL_REND: 10,
  SCENARIO_OFFENSIF_REND: 18,

  // Valeurs projetées à 12 mois (poche 165 000 €)
  SCENARIO_PRUDENT_VALUE: 171600,   // 165 000 * 1.04
  SCENARIO_CENTRAL_VALUE: 181500,   // 165 000 * 1.10
  SCENARIO_OFFENSIF_VALUE: 194700,  // 165 000 * 1.18

  // Commentaires scénarios
  SCENARIO_PRUDENT_COMMENT:
    "Exposition majoritaire BTC/ETH, focus capital préservé, montées progressives " +
    "et révision régulière de la thèse de marché.",
  SCENARIO_CENTRAL_COMMENT:
    "Réalisation partielle de la thèse de marché, avec rééquilibrages périodiques et revue annuelle structurée.",
  SCENARIO_OFFENSIF_COMMENT:
    "Cycle haussier complet, utilisation progressive de produits de rendement (staking, etc.) " +
    "avec règles de prise de profits documentées.",

  // Stress tests (poche = 165 000 €)
  STRESS_CHOC_IMPACT_EURO: 90750,
  STRESS_CHOC_IMPACT_PCT: 1.65,
  STRESS_LATERAL_COMMENT:
    "Dans un marché globalement neutre, la poche numérique joue surtout un rôle de veille stratégique et " +
    "de diversification, avec un coût d’opportunité limité au regard du montant engagé.",
  STRESS_CYCLE_COMMENT:
    "Dans un cycle haussier complet puis consolidé, la poche peut contribuer de façon significative " +
    "à la performance globale de trésorerie, sous réserve d’une revue régulière du risque.",

  // Matrice des risques – textes
  PROBA_VOLATILITE: "Élevée (classe d’actifs intrinsèquement volatile)",
  IMPACT_VOLATILITE:
    "Important pour la poche numérique, mais borné par le plafond d’allocation de 3 %. ",
  PROBA_CUSTODY: "Modérée (PSAN régulé AMF)",
  IMPACT_CUSTODY:
    "Potentiellement élevé en cas de défaillance, d’où l’importance de la due diligence opérateur.",
  PROBA_COMPTABLE: "Modérée",
  IMPACT_COMPTABLE:
    "Moyen à élevé si le traitement IFRS n’est pas cadré en amont avec l’expert-comptable et le CAC.",
  PROBA_CYBER: "Non négligeable (risque structurel sur les actifs numériques)",
  IMPACT_CYBER:
    "Important sur la poche numérique, avec un impact limité au montant engagé si les dispositifs " +
    "de sécurité sont robustes.",

  // Indicateurs de succès & points ouverts (affichés dans la feuille de route)
  INDICATEURS_SUCCES:
    "Respect durable du plafond d’allocation validé par le board ; " +
    "aucun incident de sécurité ou de gouvernance significatif sur la période ; " +
    "feedback CAC cohérent avec la thèse initiale.",
  POINTS_OUVERTS:
    "Paramétrage définitif des seuils de réduction automatique et de prise de profits ; " +
    "choix final du PSAN / opérateur et périmètre exact des services utilisés ; " +
    "modalités d’intégration du reporting dans les instances existantes (board, comité d’audit, etc.).",

  // Reporting trimestriel standard (valeurs par défaut)
  REPORT_T1_VALEUR: 165000,
  REPORT_T2_VALEUR: "—",
  REPORT_T3_VALEUR: "—",
  REPORT_T4_VALEUR: "—",

  REPORT_T1_REND: "À compléter",
  REPORT_T2_REND: "—",
  REPORT_T3_REND: "—",
  REPORT_T4_REND: "—",

  REPORT_T1_LIMITES: "Allocation conforme (≤ 3 %)",
  REPORT_T2_LIMITES: "—",
  REPORT_T3_LIMITES: "—",
  REPORT_T4_LIMITES: "—",

  REPORT_T1_INCIDENTS: "Aucun incident déclaré",
  REPORT_T2_INCIDENTS: "—",
  REPORT_T3_INCIDENTS: "—",
  REPORT_T4_INCIDENTS: "—"
};
