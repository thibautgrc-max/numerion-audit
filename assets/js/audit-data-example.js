// Exemple de données injectées pour un dossier client
window.AUDIT_DATA = {
  NOM_ENTREPRISE: "Numérion Education",
  HORIZON_ANALYSE: 12,
  ALLOCATION_CIBLE: 3,
  SECTEUR: "Technologie",
  TAILLE_ENTREPRISE: "< 50 salariés",
  REFERENTIEL_COMPTABLE: "IFRS",
  DATE_AUDIT: "25 novembre 2025",
  ID_DOSSIER: "2025-NE-001",

  // Trésorerie & poche
  TRESORERIE_DISPONIBLE: 5000000,     // brut, formaté en € par le moteur
  MONTANT_POCHE: 150000,              // 3% de 5M
  RENDEMENT_CIBLE: 10,                // % / an cible central
  SCORE_MATURITE: 60,
  PROFIL_MATURITE: "Maturité intermédiaire structurable",

  READINESS_GLOBAL_LABEL: "Structurable à court terme",
  RECOMMANDATION_GLOBALE: "Validation d’une poche numérique prudente à 3 % de la trésorerie, avec montée en puissance progressive sous contrôle du board.",
  SYNTHESE_COURTE: "Le profil de trésorerie, la gouvernance et le référentiel IFRS permettent d’envisager une poche numérique limitée mais significative, sous réserve de formaliser les procédures et la documentation audit.",

  OBJECTIF_PRIORITAIRE: "Réduire l’érosion de trésorerie (inflation)",
  JURIDICTION: "France (zone euro)",
  CA_ANNUEL: "< 5 M€",
  PERIMETRE_AUDIT: "Entité seule",
  CONTEXTE_LIBRE: "Inflation sur le cash, volonté de diversifier une petite poche de trésorerie vers le numérique avec un cadre de gouvernance solide.",

  // Benchmark
  BENCH_ALLOC_RANGE: "1 % – 5 %",
  BENCH_HORIZON_RANGE: "24–36 mois",
  BENCH_MODE_CONSERVATION: "PSAN régulé AMF avec comptes ségrégués",
  BENCH_POSITIONING: "prudente mais alignée avec les bonnes pratiques",
  BENCH_ALLOC_MIN: 1,
  BENCH_ALLOC_MAX: 5,

  // Scénarios rendements (pédagogiques)
  SCENARIO_PRUDENT_REND: 4,
  SCENARIO_CENTRAL_REND: 8,
  SCENARIO_OFFENSIF_REND: 15,

  // Stress tests
  STRESS_CHOC_IMPACT_EURO: 45000,
  STRESS_CHOC_IMPACT_PCT: 0.9, // % de la trésorerie totale
  STRESS_LATERAL_COMMENT: "Poche numérique sans contribution significative au résultat, mais jouant un rôle de diversification.",
  STRESS_CYCLE_COMMENT: "Poche numérique pouvant générer un surplus de rendement significatif sur le cycle, à encadrer par une politique claire de prise de profits.",

  // Risques
  PROBA_VOLATILITE: "Élevée (actifs très volatils)",
  IMPACT_VOLATILITE: "Modéré à significatif selon l’allocation max retenue",
  PROBA_CUSTODY: "Faible à moyenne (PSAN régulé)",
  IMPACT_CUSTODY: "Significatif (risque opérationnel / contrepartie)",
  PROBA_COMPTABLE: "Moyenne",
  IMPACT_COMPTABLE: "Modéré, dépendant du traitement IFRS retenu",
  PROBA_CYBER: "Moyenne",
  IMPACT_CYBER: "Élevé (perte potentielle irréversible des actifs)",

  // Readiness (classes: vert / orange / rouge)
  READINESS_GOUV_CLASS: "orange",
  READINESS_GOUV: "Gouvernance partiellement formalisée",
  READINESS_TECH_CLASS: "orange",
  READINESS_TECH: "Infrastructure technique en cours de définition",
  READINESS_COMPTA_CLASS: "orange",
  READINESS_COMPTA: "Traitement comptable à valider précisément avec le CAC",

  MODE_CONSERVATION: "PSAN agréé AMF",
  NIVEAU_MICA: "Partielle",
  COMMENTAIRE_MICA: "Certaines briques de gouvernance sont en place, mais la documentation MiCA reste à consolider.",

  NOMBRE_SIGNATAIRES: "1 (décisionnaire unique)",
  PORTEE_DECISION: "Exploration / cadrage",

  AVIS_GLOBAL: "favorable dans un cadre prudent",

  // IFRS
  IFRS_TREATMENT_LABEL: "Crypto-actifs classés comme immobilisations incorporelles (IAS 38)",
  IFRS_TREATMENT_COMMENT: "En l’absence de cadre pleinement stabilisé, les crypto-actifs sont généralement comptabilisés en immobilisations incorporelles, avec tests de dépréciation.",
  IFRS_IMPACT_LABEL: "Impact principalement sur le bilan (juste valeur / dépréciations)",
  IFRS_IMPACT_COMMENT: "Les variations de juste valeur peuvent se traduire par des dépréciations ; la communication en annexe est clé pour les auditeurs.",
  IFRS_DISCLOSURE_LABEL: "Note dédiée en annexe et suivi de la juste valeur",
  IFRS_DISCLOSURE_COMMENT: "Suivi des quantités, des prix de référence, des justes valeurs et des méthodes retenues, en cohérence avec l’information destinée au marché.",

  // Signatures
  NOM_SIGNATAIRE_CLIENT: "T. Garcia",
  FONCTION_SIGNATAIRE_CLIENT: "Direction générale (DG / CEO)",
  NOM_CONSULTANT_NUMERION: "Consultant Numérion Éducation™",

  DATE_FORMULAIRE: "25 novembre 2025"
};
