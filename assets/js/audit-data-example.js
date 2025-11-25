// assets/js/audit-data-example.js
// ============================================================================
// Données d'exemple pour l'audit Numérion Éducation™
// ============================================================================

window.AUDIT_DATA = {
  /* ─────────────────────────────────────────────
   *  IDENTITÉ / PARAMÈTRES GÉNÉRAUX
   * ──────────────────────────────────────────── */

  NOM_ENTREPRISE: "gth",
  NOM_GROUPE: "Numérion Education",
  SECTEUR: "Technologie",
  TAILLE_ENTREPRISE: "< 50 salariés",
  CA_ANNUEL: "< 5 M€",
  FORME_JURIDIQUE: "SAS",
  PERIMETRE_AUDIT: "Entité seule",
  APPARTENANCE_GROUPE: "Indépendant",

  REFERENTIEL_COMPTABLE: "IFRS",
  JURIDICTION: "France (zone euro)",
  COMMISSAIRE_AUX_COMPTES: "Oui",
  FREQUENCE_REVUE_COMITE: "Au fil de l’eau",

  ROLE_CONTACT: "Direction générale (DG / CEO)",
  NOM_CONTACT: "gth",
  EMAIL_CONTACT: "gth@gmail.com",
  TELEPHONE_CONTACT: "+33 6 47 70 53 67",

  DATE_FORMULAIRE: "25 novembre 2025",
  DATE_AUDIT: "25 novembre 2025",
  ID_DOSSIER: "2025-001",
  SOURCE: "Site Numérion Éducation",
  WIZARD_VERSION: "V4.1 board-ready",

  /* ─────────────────────────────────────────────
   *  TRÉSORERIE & ALLOCATION
   * ──────────────────────────────────────────── */

  // Trésorerie déclarée : "> 5 M€" → on prend 5 000 000 € comme base pédagogique
  TRESORERIE_DISPONIBLE: 5000000,        // sera formaté en "5 000 000"
  ALLOCATION_CIBLE: 3,                   // 3 %
  HORIZON_ANALYSE: 12,                   // 12 mois
  RENDEMENT_CIBLE: 12,                   // 12 % / an (dans la fourchette 10–15 %)

  // Poche numérique (3 % de 5 000 000 € ≈ 150 000 €)
  MONTANT_POCHE: 150000,

  OBJECTIF_PRIORITAIRE: "Réduire l’érosion de trésorerie (inflation)",
  USAGE_PRINCIPAL: "Diversification de trésorerie",
  TOLERANCE_VOLATILITE:
    "Modérée (rendement / risque équilibré)",
  UNIVERS_ACTIFS:
    "BTC / ETH, Stablecoins (EUR / USD)",
  EXPOSITION_ACTUELLE:
    "Non renseignée via le formulaire",
  URGENCE: "Étude / cadrage interne",

  /* Benchmarks marché (texte pédagogique) */
  BENCH_ALLOC_RANGE: "1 à 5 % de la trésorerie",
  BENCH_HORIZON_RANGE: "24–36 mois",
  BENCH_MODE_CONSERVATION: "PSAN régulé + solutions de conservation renforcées",
  BENCH_POSITIONING: "dans une zone prudente mais cohérente avec le marché",

  /* ─────────────────────────────────────────────
   *  GOUVERNANCE, MICA & MATURITÉ
   * ──────────────────────────────────────────── */

  MODE_CONSERVATION: "PSAN agréé AMF",
  NIVEAU_MICA: "Partielle",
  COMMENTAIRE_MICA:
    "Les premiers travaux de cadrage sont engagés ; la formalisation de la politique et des procédures reste à approfondir.",

  NOMBRE_SIGNATAIRES: "1 (décisionnaire unique)",
  PORTEE_DECISION: "Exploration / cadrage",
  POLITIQUE_TRESORERIE: "Aucune",
  POLITIQUE_INVESTISSEMENT_RISQUE: "Oui",
  CONTRAINTES_INTERNES:
    "Manque de temps / ressources internes",

  SCORE_MATURITE: 60,
  PROFIL_MATURITE: "Maturité intermédiaire — bases en place, structuration à renforcer",

  // Label global de readiness (utilisé dans le snapshot)
  READINESS_GLOBAL_LABEL: "Prêt sous conditions (cadrage & gouvernance à consolider)",

  // Répartition par pilier (gouvernance / technique / comptable)
  READINESS_GOUV: "À structurer",
  READINESS_GOUV_CLASS: "orange",  // → .readiness-orange
  READINESS_TECH: "En cours de définition",
  READINESS_TECH_CLASS: "orange",
  READINESS_COMPTA: "Socle en place avec le CAC",
  READINESS_COMPTA_CLASS: "vert",

  /* ─────────────────────────────────────────────
   *  SYNTHÈSE & RECOMMANDATION GLOBALE
   * ──────────────────────────────────────────── */

  RECOMMANDATION_GLOBALE:
    "Avancer vers une poche numérique pilote de 3 % sous réserve de cadrage et de formalisation de la gouvernance.",

  // Attention : le placeholder HTML est __SYNTHese_COURTE__ (respecter la casse)
  SYNTHese_COURTE:
    "Compte tenu du profil « Technologie < 50 salariés », d’une trésorerie significative et d’un objectif clair de protection contre l’inflation, la mise en place progressive d’une poche numérique reste pertinente, à condition de documenter les règles de décision, les contrôles et le dialogue avec le commissaire aux comptes.",

  AVIS_GLOBAL:
    "raisonnable dans le cadre d’une expérimentation encadrée et documentée",

  CONTEXTE_LIBRE:
    "yesssouii (formulaire) — traduit la volonté d’explorer de nouveaux leviers de rendement et de protection contre l’inflation, tout en gardant un cadre professionnel autour de la trésorerie.",

  /* ─────────────────────────────────────────────
   *  SCÉNARIOS DE RENDEMENT (PÉDAGOGIQUES)
   * ──────────────────────────────────────────── */

  SCENARIO_PRUDENT_REND: 4,   // 4 % / an
  SCENARIO_CENTRAL_REND: 8,   // 8 % / an
  SCENARIO_OFFENSIF_REND: 18, // 18 % / an

  STRESS_CHOC_IMPACT_EURO: 75000, // choc -50/-60 % sur la poche (exemple)
  STRESS_CHOC_IMPACT_PCT: 1.5,    // ~1,5 % de la trésorerie totale

  STRESS_LATERAL_COMMENT:
    "Dans un scénario de marché latéral, la performance financière de la poche serait proche de 0 ; l’enjeu principal devient le coût d’opportunité par rapport à d’autres supports de trésorerie et la charge de suivi interne.",

  STRESS_CYCLE_COMMENT:
    "En cas de cycle haussier complet suivi d’une normalisation, la poche pourrait générer un surplus de performance significatif, à condition de respecter les limites d’allocation et un calendrier de prises de profits validé par le board.",

  /* ─────────────────────────────────────────────
   *  MATRICE DES RISQUES (NIVEAUX QUALITATIFS)
   * ──────────────────────────────────────────── */

  PROBA_VOLATILITE: "Élevée (structurelle au marché crypto)",
  IMPACT_VOLATILITE: "Modéré à significatif sur la poche (borné par 3 %)",

  PROBA_CUSTODY: "Faible à modérée (PSAN régulé, mais risques opérationnels)",
  IMPACT_CUSTODY: "Potentiellement élevé en cas de défaut de l’opérateur",

  PROBA_COMPTABLE: "Modérée",
  IMPACT_COMPTABLE:
    "Principalement sur la présentation des comptes et la lisibilité pour les auditeurs",

  PROBA_CYBER: "Modérée à élevée",
  IMPACT_CYBER:
    "Élevé si les accès ne sont pas correctement segmentés et sécurisés",

  /* ─────────────────────────────────────────────
   *  REPORTING TRIMESTRIEL (T1 → T4)
   * ──────────────────────────────────────────── */

  // Valeur de la poche numérique (€)
  REPORT_T1_VALEUR: "150 000",
  REPORT_T2_VALEUR: "153 500",
  REPORT_T3_VALEUR: "157 000",
  REPORT_T4_VALEUR: "163 000",

  // Rendement cumulé (%) vs objectif
  REPORT_T1_REND: "2,0 %",
  REPORT_T2_REND: "4,2 %",
  REPORT_T3_REND: "6,5 %",
  REPORT_T4_REND: "9,0 %",

  // Respect des limites d’allocation
  REPORT_T1_LIMITES: "OK (≤ 3 %)",
  REPORT_T2_LIMITES: "OK (≤ 3 %)",
  REPORT_T3_LIMITES: "OK (≤ 3 %)",
  REPORT_T4_LIMITES: "OK (≤ 3 %)",

  // Incidents / anomalies recensées
  REPORT_T1_INCIDENTS: "Aucun incident signalé",
  REPORT_T2_INCIDENTS: "Aucun incident signalé",
  REPORT_T3_INCIDENTS: "Aucun incident signalé",
  REPORT_T4_INCIDENTS: "Aucun incident signalé",

  /* ─────────────────────────────────────────────
   *  SIGNATURES & INTERLOCUTEURS
   * ──────────────────────────────────────────── */

  NOM_SIGNATAIRE_CLIENT: "gth",
  FONCTION_SIGNATAIRE_CLIENT: "Direction générale",
  NOM_CONSULTANT_NUMERION: "Consultant Numérion Éducation™",

  /* ─────────────────────────────────────────────
   *  LABELS / TEXTES COMPLÉMENTAIRES
   * ──────────────────────────────────────────── */

  POINTS_OUVERTS_TRANCHER:
    "Paramétrage des seuils de réduction automatique de la poche (prise de profits / réduction de l’exposition) et validation finale du périmètre de services PSAN.",
  KPI_RESPECT_PLAFOND:
    "Respect durable du plafond d’allocation de 3 % validé par le board.",
  KPI_SECURITE:
    "Aucun incident de sécurité ou d’accès non autorisé sur la période de suivi."
};
