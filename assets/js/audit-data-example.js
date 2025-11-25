// assets/js/audit-data-example.js

window.AUDIT_DATA = {
  // --- IDENTITÉ & PARAMÈTRES GÉNÉRAUX --------------------------------------
  NOM_ENTREPRISE: "gth",
  SECTEUR: "Technologie",
  TAILLE_ENTREPRISE: "< 50 salariés",
  FORME_JURIDIQUE: "SAS",
  APPARTENANCE_GROUPE: "Indépendant",
  NOM_GROUPE: "Numérion Éducation",
  JURIDICTION: "France (zone euro)",
  REFERENTIEL_COMPTABLE: "IFRS",
  PERIMETRE_AUDIT: "Entité seule",
  ROLE_CONTACT: "Direction générale (DG / CEO)",

  DATE_FORMULAIRE: "25/11/2025",
  DATE_AUDIT: "25/11/2025",
  ID_DOSSIER: "2025-NE-001",

  SOURCE: "Site Numérion Éducation",
  WIZARD_VERSION: "V4.1 board-ready",

  // --- CHIFFRES & PARAMÈTRES FINANCIERS ------------------------------------
  // Trésorerie > 5 M€ → on fixe un ordre de grandeur pédagogique
  TRESORERIE_DISPONIBLE: 5000000,
  CA_ANNUEL: "< 5 M€",

  ALLOCATION_CIBLE: 3,              // 3 % de la trésorerie
  HORIZON_ANALYSE: 12,             // 12 mois
  RENDEMENT_CIBLE: 12,            // 12 % / an cible pédagogique

  // Poche numérique simulée : 3 % de 5 M€ = 150 000 €
  MONTANT_POCHE: 150000,

  // Tolérance & profil de risque
  TOLERANCE_VOLATILITE: "Modérée (rendement / risque équilibré)",
  OBJECTIF_PRIORITAIRE: "Réduire l’érosion de trésorerie (inflation)",
  USAGE_PRINCIPAL: "Diversification de trésorerie",
  UNIVERS_ACTIFS: "BTC / ETH, Stablecoins (EUR / USD)",

  // --- GOUVERNANCE / AUDIT / COMITÉS ---------------------------------------
  COMMISSAIRE_AUX_COMPTES: "Oui",
  POLITIQUE_TRESORERIE: "Aucune",
  POLITIQUE_INVESTISSEMENT: "Oui",
  FREQUENCE_REVUE_COMITE: "Au fil de l’eau",
  NOMBRE_SIGNATAIRES: "1 (décisionnaire unique)",
  PORTEE_DECISION: "Exploration / cadrage",

  MODE_CONSERVATION: "PSAN agréé AMF",
  NIVEAU_MICA: "Partielle",
  COMMENTAIRE_MICA:
    "Premiers travaux engagés, besoin de structurer la gouvernance, la documentation et les échanges avec les auditeurs.",

  URGENCE: "Étude / cadrage interne",
  VISIO_RESTITUTION: "Oui, visio 45 min",
  CONTRAINTES_INTERNES: "Manque de temps / ressources internes",
  COMMENTAIRES_LIBRES:
    "La direction souhaite tester une poche numérique limitée, avec un cadre de gouvernance clair et opposable aux auditeurs.",

  // --- SCORE & PROFIL DE MATURITÉ ------------------------------------------
  SCORE_MATURITE: 60,
  PROFIL_MATURITE: "Maturité intermédiaire — bases présentes, structuration à renforcer",

  READINESS_GLOBAL_LABEL: "Profil équilibré (modéré)",

  READINESS_GOUV_CLASS: "orange",
  READINESS_GOUV: "Gouvernance en structuration",
  READINESS_TECH_CLASS: "orange",
  READINESS_TECH: "Infrastructure technique en cours de définition",
  READINESS_COMPTA_CLASS: "orange",
  READINESS_COMPTA: "Traitement comptable à formaliser avec les auditeurs",

  // Recommandation globale & synthèse courte
  RECOMMANDATION_GLOBALE:
    "Mettre en place une poche numérique limitée (3 % de la trésorerie) avec un cadrage gouvernance + comptable renforcé.",
  SYNTHESE_COURTE:
    "Le profil de gth est compatible avec une expérimentation encadrée d’une poche numérique, à condition de formaliser la gouvernance, le traitement IFRS et les contrôles internes pour sécuriser le board et les auditeurs.",

  AVIS_GLOBAL:
    "pertinente dans une logique de diversification prudente, sous réserve d’un cadrage rigoureux avec les auditeurs",

  // --- BENCHMARK MARCHÉ -----------------------------------------------------
  BENCH_ALLOC_RANGE: "2–5 %",
  BENCH_HORIZON_RANGE: "12–36 mois",
  BENCH_MODE_CONSERVATION: "PSAN régulé + dispositifs internes renforcés",
  BENCH_POSITIONING:
    "cohérente, dans le bas de la fourchette observée pour des entreprises de taille et de secteur similaires",

  // --- SCÉNARIOS DE RENDEMENT PÉDAGOGIQUES ---------------------------------
  SCENARIO_PRUDENT_REND: 6,   // % / an
  SCENARIO_CENTRAL_REND: 12,  // % / an
  SCENARIO_OFFENSIF_REND: 20, // % / an

  // --- STRESS TESTS (ordres de grandeur pédagogiques) ----------------------
  // Choc marché : -50 / -60 % sur 150k€ ≈ -75k€
  STRESS_CHOC_IMPACT_EURO: 75000,
  // Impact sur la trésorerie totale : 75k / 5M = 1,5 %
  STRESS_CHOC_IMPACT_PCT: "1,5",

  STRESS_LATERAL_COMMENT:
    "Dans un scénario de marché globalement latéral, l’impact principal est un coût d’opportunité : la poche numérique ne détruit pas de valeur significative mais ne surperforme pas les alternatives de cash ou placements court terme.",
  STRESS_CYCLE_COMMENT:
    "Dans un cycle haussier complet, la poche numérique peut contribuer de manière significative à la protection contre l’inflation, à condition de sécuriser les prises de profits et la revue annuelle avec le board et les auditeurs.",

  // --- SENSIBILITÉ TAUX / INFLATION / TRÉSORERIE ---------------------------
  SENSI_TAUX_IMPACT: 15000,
  SENSI_TAUX_COMMENT:
    "Une hausse des taux sans risque rend le cash plus attractif. La poche numérique conserve du sens si la thèse long terme (protection contre l’inflation et la dépréciation monétaire) est maintenue et si le plafond d’allocation reste maîtrisé.",
  SENSI_INFLATION_IMPACT: 20000,
  SENSI_INFLATION_COMMENT:
    "Une inflation supérieure au scénario central renforce l’intérêt d’actifs à thèse de protection contre l’érosion monétaire (BTC/ETH), sous réserve d’une gouvernance robuste, d’un horizon suffisamment long et de limites d’allocation strictes.",
  SENSI_TRESO_BAISSE: 20, // en %
  SENSI_TRESO_IMPACT: 30000,
  SENSI_TRESO_COMMENT:
    "En cas de baisse de 20 % de la trésorerie disponible, une poche numérique de 3 % reste pilotable. Une règle écrite de réduction temporaire de la poche en cas de tension de liquidité peut être ajoutée à la politique de trésorerie.",

  // --- RISQUES & PROBABILITÉS / IMPACTS ------------------------------------
  PROBA_VOLATILITE: "Moyenne (3/5)",
  IMPACT_VOLATILITE: "Élevé (4/5)",
  PROBA_CUSTODY: "Faible à moyenne (2/5)",
  IMPACT_CUSTODY: "Élevé (4/5)",
  PROBA_COMPTABLE: "Moyenne (3/5)",
  IMPACT_COMPTABLE: "Moyen à élevé (3,5/5)",
  PROBA_CYBER: "Moyenne (3/5)",
  IMPACT_CYBER: "Très élevé (5/5)",

  // --- GOUVERNANCE : FRÉQUENCES & COMMENTAIRES -----------------------------
  GOUV_BOARD_FREQ: "Annuel / décision structurante",
  GOUV_BOARD_COMMENT:
    "Validation du principe de poche numérique, du plafond d’allocation (3 %) et de l’horizon de 12 mois.",
  GOUV_AUDIT_FREQ: "Annuel + ad hoc en cas de changement significatif",
  GOUV_AUDIT_COMMENT:
    "Revue de la cartographie des risques, des contrôles internes et du reporting lié à la poche numérique.",
  GOUV_DF_FREQ: "Trimestriel",
  GOUV_DF_COMMENT:
    "Suivi opérationnel de la poche, reporting de performance, vérification des limites et de la liquidité.",
  GOUV_CAC_FREQ: "À chaque clôture",
  GOUV_CAC_COMMENT:
    "Validation du traitement comptable, des justes valeurs et des disclosures dans les états financiers.",

  // --- JOURNAL / TRAÇABILITÉ ------------------------------------------------
  JOURNAL_PERIODE: "12–24 mois",
  JOURNAL_DECISIONS_BOARD:
    "Décision de principe sur la création d’une poche numérique de 3 % de la trésorerie, avec revues annuelles.",
  JOURNAL_MAJ_POCHE:
    "Éventuelles modifications du plafond d’allocation, du périmètre d’actifs ou du PSAN sélectionné.",
  JOURNAL_ECHANGES_CAC:
    "Points soulevés par les auditeurs sur le traitement IFRS, les justes valeurs et les disclosures.",
  JOURNAL_EVENTS_MARCHE:
    "Chocs de marché significatifs, décisions de réduction ou d’augmentation de la poche et justification associée.",

  // --- SIGNATAIRES ----------------------------------------------------------
  NOM_SIGNATAIRE_CLIENT: "gth",
  FONCTION_SIGNATAIRE_CLIENT: "Direction générale",
  NOM_CONSULTANT_NUMERION: "Équipe Numérion Éducation™",

  // --- CONTACT (EXEMPLE DATA FORMULAIRE) -----------------------------------
  EMAIL_CONTACT: "gth@gmail.com",
  TELEPHONE_CONTACT: "+33 6 47 70 53 67"
};
