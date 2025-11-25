window.AUDIT_DATA = {
  /* ─────────────────────────
   *  IDENTITÉ & CONTEXTE
   * ───────────────────────── */
  NOM_ENTREPRISE: "gth",
  NOM_GROUPE: "Numérion Education",
  SECTEUR: "Technologie",
  SEGMENT: "Technologie — < 50 salariés",
  TAILLE_ENTREPRISE: "< 50 salariés",
  FORME_JURIDIQUE: "SAS",
  APPARTENANCE_GROUPE: "Indépendant",

  PAYS: "France (zone euro)",
  JURIDICTION: "France (zone euro)",
  REFERENTIEL_COMPTABLE: "IFRS",

  ROLE_CONTACT: "Direction générale (DG / CEO)",
  TELEPHONE_CONTACT: "+33647705367",
  EMAIL_CONTACT: "gth@gmail.com",

  SOURCE: "Site Numérion Éducation",
  DATE_FORMULAIRE: "25/11/2025",
  DATE_AUDIT: "25/11/2025",
  ID_DOSSIER: "2025-11-25-001",

  /* Commentaire libre du formulaire */
  CONTEXTE_LIBRE: "Commentaire formulaire : “yesssouii” (commentaire libre, à enrichir lors de la visio).",

  /* ─────────────────────────
   *  TRÉSORERIE & ALLOCATION
   * ───────────────────────── */
  // Trésorerie disponible déclarée : > 5 M€ → on prend un ordre de grandeur prudent pour la simulation
  TRESORERIE_DISPONIBLE: 5500000, // sera formaté en 5 500 000 €

  // Allocation envisagée : 3 % (poche stratégique)
  ALLOCATION_ENVISAGEE_LABEL: "3 % (poche stratégique)",
  ALLOCATION_CIBLE: 3, // le HTML ajoute lui-même " %"

  // Montant de la poche simulée : 3 % de 5,5 M€
  MONTANT_POCHE: 165000, // sera formaté en 165 000 €

  // Horizon financier : 12 mois
  HORIZON_ANALYSE: 12,

  // Rendement cible annuel : 10–15 % → on prend 12 % comme cible pédagogique
  RENDEMENT_CIBLE: 12,

  /* Chiffre d’affaires & périmètre */
  CA_ANNUEL: "< 5 M€",
  PERIMETRE_AUDIT: "Entité seule",

  /* Objectif & usage */
  OBJECTIF_PRIORITAIRE: "Réduire l’érosion de trésorerie (inflation)",
  USAGE_PRINCIPAL: "Diversification de trésorerie",
  URGENCE: "Étude / cadrage interne",

  /* Comités & fréquence */
  FREQUENCE_REVUE_COMITE: "Au fil de l’eau",
  JOUR_PREFERENCIEL: "Non renseigné (revue au fil de l’eau)",
  PLAGE_HORAIRE_PREFEREE: "Plage horaire préférée non précisée",

  /* Univers d’actifs & exposition actuelle */
  EXPOSITION_ACTUELLE: "Non renseignée (exposition numérique actuelle très limitée ou nulle).",
  UNIVERS_ACTIFS: "BTC / ETH, Stablecoins (EUR / USD)",
  MODE_CONSERVATION: "PSAN agréé AMF",

  /* Politiques internes */
  POLITIQUE_TRESORERIE: "Aucune politique de trésorerie formalisée à ce stade.",
  POLITIQUE_INVESTISSEMENT_RISQUE: "Oui, existence d’une politique d’investissement / risque.",
  CONTRAINTES_INTERNES: "Manque de temps / ressources internes.",
  COMMISSAIRE_AUX_COMPTES: "Oui",
  NIVEAU_CONFORT_AUDITEURS: "Présence d’un commissaire aux comptes (CAC) — à embarquer dès la phase de cadrage.",

  /* MiCA & conformité */
  NIVEAU_MICA: "Partielle",
  COMMENTAIRE_MICA: "Conformité MiCA partielle déclarée. Cadrage à renforcer avec l’expert-comptable, le CAC et les conseils habituels.",

  /* Décision & gouvernance */
  NOMBRE_SIGNATAIRES: "1 (décisionnaire unique)",
  PORTEE_DECISION: "Exploration / cadrage",
  TOLERANCE_VOLATILITE: "Modérée (rendement / risque équilibré)",

  /* ─────────────────────────
   *  MATURITÉ & READINESS
   * ───────────────────────── */
  SCORE_MATURITE: 60,
  PROFIL_MATURITE: "Intermédiaire — bases présentes, structuration à renforcer.",

  READINESS_GOUV_CLASS: "orange",
  READINESS_GOUV: "En structuration — politiques à formaliser, pouvoirs & seuils à cadrer.",

  READINESS_TECH_CLASS: "vert",
  READINESS_TECH: "Correcte — mode de conservation via PSAN agréé AMF, sécurisation cyber à détailler.",

  READINESS_COMPTA_CLASS: "orange",
  READINESS_COMPTA: "À consolider — IFRS, traitement comptable et échange structuré avec le CAC à organiser.",

  READINESS_GLOBAL_LABEL: "Profil équilibré mais à structurer (score 60/100).",

  /* ─────────────────────────
   *  SYNTHÈSE & RECO GLOBAL
   * ───────────────────────── */
  RECOMMANDATION_GLOBALE:
    "Mettre en place progressivement une poche stratégique de 3 % de la trésorerie (>5 M€) " +
    "via un PSAN agréé AMF, en formalisant les politiques de trésorerie, d’investissement et la gouvernance associée.",

  SYNTHese_COURTE:
    "Profil de maturité intermédiaire (60/100), tolérance à la volatilité modérée, " +
    "objectif clair de réduction de l’érosion monétaire. Recommandation : démarrer par une poche test de 3 % " +
    "avec un cadre gouvernance / comptable robuste pour rassurer CAC et comité d’audit.",

  AVIS_GLOBAL:
    "Compatible avec une approche prudente de diversification de trésorerie, sous réserve de formaliser les politiques " +
    "et de valider le traitement comptable avec les auditeurs.",

  /* ─────────────────────────
   *  BENCHMARK MARCHÉ
   * ───────────────────────── */
  BENCH_ALLOC_RANGE: "2–5 % de la trésorerie pour une poche numérique prudente.",
  BENCH_HORIZON_RANGE: "12–36 mois pour une logique non spéculative.",
  BENCH_MODE_CONSERVATION: "PSAN régulé AMF, avec éventuellement une garde complémentaire en cold wallet.",
  BENCH_POSITIONING: "Plutôt prudent, cohérent avec les pratiques observées pour des PME technologiques de taille comparable.",

  /* ─────────────────────────
   *  SCÉNARIOS DE RENDEMENT
   *  (calculés sur une poche de 165 000 €)
   * ───────────────────────── */
  // Taux annuels pédagogiques
  SCENARIO_PRUDENT_REND: 4,   // % / an
  SCENARIO_CENTRAL_REND: 10,  // % / an
  SCENARIO_OFFENSIF_REND: 18, // % / an

  // Valeurs d’illustration sur 12 mois
  SCENARIO_PRUDENT_VALEUR: 171600,  // 165 000 € × 1,04
  SCENARIO_CENTRAL_VALEUR: 181500,  // 165 000 € × 1,10
  SCENARIO_OFFENSIF_VALEUR: 194700, // 165 000 € × 1,18

  /* ─────────────────────────
   *  STRESS TESTS
   * ───────────────────────── */
  // Choc marché : BTC -50 %, ETH -60 % → impact ~ -55 % sur la poche
  STRESS_CHOC_IMPACT_EURO: 90750,   // ~ 55 % de 165 000 €
  STRESS_CHOC_IMPACT_PCT: 1.65,     // ~ 1,65 % de la trésorerie totale (> 5,5 M€)

  STRESS_LATERAL_COMMENT:
    "En cas de marché latéral (performance proche de 0 %), la poche numérique joue surtout un rôle de diversification, " +
    "avec un coût d’opportunité limité au regard du montant engagé (3 % de la trésorerie).",

  STRESS_CYCLE_COMMENT:
    "Dans un cycle complet haussier puis une consolidation maîtrisée, la poche peut contribuer de façon significative " +
    "à la performance globale de trésorerie, sous réserve de prises de profits progressives et de revues annuelles structurées.",

  /* ─────────────────────────
   *  MATRICE DES RISQUES
   * ───────────────────────── */
  PROBA_VOLATILITE: "Élevée (classe d’actifs intrinsèquement volatile).",
  IMPACT_VOLATILITE: "Important sur la poche, mais borné par le plafond d’allocation de 3 %.",

  PROBA_CUSTODY: "Modérée (PSAN régulé AMF).",
  IMPACT_CUSTODY: "Potentiellement élevé en cas de défaillance, d’où l’importance de la due diligence opérateur.",

  PROBA_COMPTABLE: "Modérée.",
  IMPACT_COMPTABLE:
    "Moyen à élevé si le traitement IFRS n’est pas cadré en amont avec l’expert-comptable et le CAC.",

  PROBA_CYBER: "Non négligeable (risque structurel sur les actifs numériques).",
  IMPACT_CYBER:
    "Important sur la poche numérique, mais limité au montant engagé ; doit être adressé par des dispositifs de sécurité forts.",

  /* ─────────────────────────
   *  REPORTING & SUIVI (optionnel)
   * ───────────────────────── */
  REPORT_T1_VALEUR: 165000,
  REPORT_T1_COMMENTAIRE:
    "T0 / T1 : mise en place de la poche numérique test (3 % de la trésorerie) auprès d’un PSAN agréé AMF.",
  REPORT_T2_VALEUR: 0, // à renseigner lors des premiers mois de suivi
  REPORT_T2_COMMENTAIRE:
    "T2 : à compléter après 6–12 mois de vie de la poche (performance, incidents, retour CAC).",

  /* ─────────────────────────
   *  DIVERS / MÉTADONNÉES
   * ───────────────────────── */
  WIZARD_VERSION: "V4.1 board-ready",
  URGENCE_LIBELLE: "Étude / cadrage interne (pas de décision immédiate imposée)."
};
