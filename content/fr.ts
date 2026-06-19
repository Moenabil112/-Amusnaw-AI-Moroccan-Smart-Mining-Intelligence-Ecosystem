import type { SiteContent } from "./types";

// Français — structurellement complet ; à affiner avec un éditeur métier.
export const fr: SiteContent = {
  meta: {
    name: "Amusnaw AI",
    tagline: "Écosystème marocain d'intelligence minière intelligente",
    description:
      "Une fenêtre numérique structurée pour l'intelligence minière, la gouvernance et la décision stratégique.",
  },
  nav: {
    brand: "Amusnaw AI",
    enter: "Entrer dans l'écosystème",
    progressLabel: "Fenêtre",
    items: [
      { label: "Écosystème", href: "/ecosystem" },
      { label: "Minéraux", href: "/minerals" },
      { label: "Valeur de marché", href: "/market-value" },
      { label: "QASSAS", href: "/qassas" },
      { label: "Aguelmous", href: "/aguelmous" },
      { label: "Isseksi", href: "/isseksi" },
      { label: "HYRION", href: "/hyrion" },
      { label: "ZYNTRA", href: "/zyntra" },
      { label: "AKANIL", href: "/akanil" },
      { label: "Flux", href: "/workflow" },
      { label: "Parties prenantes", href: "/stakeholders" },
      { label: "Salle de données", href: "/data-room" },
      { label: "Entrée stratégique", href: "/strategic-entry" },
    ],
  },
  preloader: {
    booting: "Initialisation de l'écosystème",
    system: "Amusnaw AI · Intelligence minière marocaine",
    ready: "Système prêt",
  },
  global: {
    ecosystemSentence:
      "QASSAS génère l'intelligence d'exploration. Aguelmous démontre la R&D marocaine sur les failles intelligentes. Isseksi prouve la maturité de terrain et industrielle. HYRION gouverne les preuves et la logique de valeur. ZYNTRA active la pile technologique. AKANIL encadre la passerelle institutionnelle. Amusnaw AI les relie en un seul écosystème marocain d'intelligence minière.",
    disclaimer:
      "Tous les prix des minéraux et indicateurs de valeur sont uniquement des références de marché indicatives. Ils ne représentent ni une évaluation de réserves, ni une évaluation d'actifs, ni des revenus, ni un rendement d'investissement. Tout scénario de valeur requiert un tonnage, une teneur, une récupération, des facteurs de paiement, des CAPEX/OPEX, un statut légal vérifiés et la gouvernance des preuves HYRION.",
    notAssetValuation: "Référence de marché indicative — pas une évaluation d'actifs.",
    poweredByHyrion: "Propulsé par HYRION",
    explore: "Ouvrir la fenêtre",
    role: "Rôle",
    learnMore: "En savoir plus",
    backToEcosystem: "Retour à l'écosystème",
  },
  governanceLabels: {
    marketReference: "Référence de marché",
    evidenceLinked: "Lié aux preuves",
    assaySupported: "Soutenu par analyses",
    resourceModelPending: "Modèle de ressources en attente",
    recoveryPending: "Récupération en attente",
    costModelPending: "Modèle de coûts en attente",
    notReserveValuation: "Pas une évaluation de réserves",
    decisionReady: "Prêt pour décision",
  },
  evidenceLabels: {
    fieldLinked: "Lié au terrain",
    assaySupported: "Soutenu par analyses",
    pendingModel: "Modèle en attente",
    indicator: "Indicateur",
    sourceRequired: "Source requise",
  },
  accessLabels: {
    publicPreview: "Aperçu public",
    ndaRequired: "NDA requis",
    restricted: "Restreint",
    partnerOnly: "Partenaires uniquement",
    governanceLayer: "Couche de gouvernance",
    decisionLayer: "Couche de décision",
  },
  familyLabels: {
    base: "Métaux de base",
    precious: "Métaux précieux",
    battery: "Métaux de batterie",
    rareEarth: "Terres rares / métaux d'aimant",
    moroccanStrategic: "Minéraux stratégiques marocains",
    technology: "Minéraux liés à la technologie",
  },
  windows: {
    boot: {
      id: "00",
      question: "Dans quoi suis-je en train d'entrer ?",
      title: "Démarrage du système",
      answer:
        "Amusnaw AI est un écosystème marocain d'intelligence minière — pas un site web.",
      message:
        "Amusnaw AI est une fenêtre numérique structurée pour l'intelligence minière, la gouvernance et la décision stratégique.",
    },
    ecosystem: {
      id: "01",
      question: "Quels sont les composants de l'écosystème, et qui fait quoi ?",
      title: "Carte de l'écosystème",
      answer:
        "Six couches spécialisées orbitent autour d'un hub central. Survolez un nœud pour révéler son rôle et ses connexions.",
    },
    problem: {
      id: "02",
      question: "Quel problème l'écosystème résout-il ?",
      title: "Couche du problème",
      answer:
        "Les preuves de terrain sont dispersées, la connaissance minérale non structurée, et le lien entre géologie et décision institutionnelle est faible.",
      message:
        "Amusnaw AI convertit les preuves minières dispersées en une intelligence minérale structurée, gouvernée et prête pour la décision.",
      steps: [
        "Preuves de terrain dispersées",
        "Connaissance minérale non structurée",
        "Lien faible entre géologie et décision institutionnelle",
        "Intelligence minérale gouvernée",
      ],
    },
    minerals: {
      id: "03",
      question: "Quelles ressources minérales l'écosystème couvre-t-il ?",
      title: "Univers minéral",
      answer:
        "L'intelligence minérale est structurée sur six familles stratégiques — Amusnaw AI ne se limite pas à un seul minéral.",
      message:
        "Amusnaw AI structure l'intelligence minérale sur le cuivre, les métaux précieux, les métaux de batterie, les terres rares et les minéraux stratégiques marocains.",
    },
    marketValue: {
      id: "04",
      question: "Quelle est la pertinence financière de marché des minéraux ciblés ?",
      title: "Tableau de valeur de marché",
      answer:
        "Une console de référence de marché indicative — pas une fenêtre d'évaluation d'actifs. Les valeurs sont des espaces réservés jusqu'à connexion à une source.",
      cardLabels: {
        unit: "Unité de référence",
        marketReference: "Référence de marché",
        strategicUse: "Usage stratégique",
        linkedLayer: "Couche liée",
        evidence: "Statut des preuves",
        governance: "Statut de gouvernance",
        lastChecked: "Dernière vérification",
      },
    },
    qassas: {
      id: "05",
      question: "Comment l'écosystème génère-t-il l'intelligence d'exploration ?",
      title: "Moteur de ciblage QASSAS",
      answer: "QASSAS est le moteur d'intelligence d'exploration.",
      message:
        "QASSAS transforme le contexte géologique, l'imagerie satellite, les observations de terrain et le savoir des experts en signaux d'exploration structurés et couches de ciblage prêtes pour la décision.",
      targets: [
        "Or et minéraux lourds dans les vallées",
        "Zones d'altération du cuivre",
        "Indicateurs or / argent liés aux failles",
        "Zones potentielles nickel / cobalt / manganèse",
        "Indicateurs d'anomalies de terres rares",
        "Couche de possibilité lithium / pegmatite",
        "Minéraux industriels et observations de terrain",
      ],
      pipeline: [
        "Ingestion de données géologiques",
        "Lecture de l'imagerie satellite",
        "Intelligence du terrain et du drainage",
        "Détection de failles / linéaments",
        "Inférence de signature minérale",
        "Scoring des cibles",
        "Planification des levés de terrain",
        "Retour d'expert humain",
      ],
    },
    aguelmous: {
      id: "06",
      question: "Où la R&D marocaine apparaît-elle dans l'écosystème ?",
      title: "Aguelmous R&D failles intelligentes",
      answer: "Aguelmous est le démonstrateur R&D d'exploration des failles intelligentes.",
      message:
        "Aguelmous démontre comment la géologie marocaine contrôlée par les failles peut devenir un modèle d'exploration assisté par IA à pertinence de marché mesurable.",
      targets: [
        "Or",
        "Cuivre",
        "Argent",
        "Plomb-Zinc",
        "Métaux critiques possibles selon les preuves de failles / géochimiques",
      ],
      modules: [
        "Couche de terrain",
        "Couche de modèle de failles",
        "Couche de signal de télédétection",
        "Couche de ciblage IA",
        "Itinéraire de validation de terrain",
        "Porte de décision R&D",
      ],
      licenseCard: {
        label: "Référence de licence interne — Couche salle de données",
        note: "Détail restreint. Disponible uniquement dans la salle de données gouvernée.",
      },
    },
    isseksi: {
      id: "07",
      question: "Quelle est la preuve de terrain / industrielle prête dans l'écosystème ?",
      title: "Produit de valeur cuivre Isseksi",
      answer:
        "Isseksi est le produit d'intelligence minière et de gouvernance prêt, axé sur l'intelligence du cuivre et la validation de terrain.",
      targets: [
        "Cuivre comme produit primaire",
        "Indicateurs de zinc lorsque les preuves le soutiennent",
        "Indicateurs de nickel lorsque les preuves le soutiennent",
        "Indicateurs de fer lorsque les preuves le soutiennent",
        "Indicateurs d'or lorsque les preuves le soutiennent",
      ],
      modules: [
        "Preuves de terrain",
        "Intelligence du cuivre",
        "MVP de traitement mobile",
        "Lixiviation en cuve et colonne en boucle fermée",
        "Logique du cuivre cément",
        "ESG et récupération de l'eau",
        "Tableau de gouvernance",
        "Porte de validation",
      ],
      valueLogic: {
        steps: [
          "Prix de référence du cuivre",
          "× cuivre contenu",
          "× hypothèse de récupération",
          "× facteur payable",
        ],
        result: "= Valeur métallique brute indicative",
        note: "Tout scénario de production ou de valeur reste indicatif jusqu'à confirmation par un tonnage, une teneur, une récupération, des coûts d'exploitation, des facteurs payables et une validation légale / technique vérifiés.",
      },
    },
    hyrion: {
      id: "08",
      question: "Comment le système empêche-t-il les affirmations financières exagérées ?",
      title: "Gouvernance de valeur HYRION",
      answer: "HYRION est la couche de contrôle de gouvernance, des preuves et de la confiance.",
      message:
        "HYRION sépare les références de valeur de marché de l'évaluation d'actifs vérifiée et gouverne la chaîne de preuves derrière chaque décision.",
      statuses: [
        { key: "marketReference", meaning: "Référence de matière première uniquement" },
        { key: "evidenceLinked", meaning: "Lié à des preuves terrain / labo / documents" },
        { key: "assaySupported", meaning: "Soutenu par des analyses de laboratoire" },
        { key: "resourceModelPending", meaning: "Pas encore de modèle de ressources conforme" },
        { key: "recoveryPending", meaning: "Récupération de traitement non entièrement validée" },
        { key: "costModelPending", meaning: "CAPEX / OPEX non finalisés" },
        { key: "notReserveValuation", meaning: "Ne doit pas être interprété comme valeur de réserve" },
        { key: "decisionReady", meaning: "Adapté à l'examen institutionnel après vérification des preuves" },
      ],
    },
    zyntra: {
      id: "09",
      question: "Quelle technologie active l'écosystème ?",
      title: "Pile d'intelligence ZYNTRA",
      answer: "ZYNTRA est la couche d'activation technologique et IA.",
      message:
        "ZYNTRA fournit la couche d'activation technique qui rend l'écosystème opérationnel, évolutif et prêt pour les interfaces.",
      modules: [
        "Modèles IA",
        "Préparation RAG / base de connaissances privée",
        "Interfaces sécurisées",
        "Intelligence géospatiale",
        "Pipelines de données",
        "Couche d'automatisation",
        "Architecture frontend / UI",
        "Structure prête pour API",
        "Future intégration Supabase / Auth",
      ],
    },
    akanil: {
      id: "10",
      question: "Qui crée et encadre l'écosystème de manière institutionnelle ?",
      title: "Passerelle stratégique AKANIL",
      answer: "AKANIL est l'initiateur stratégique et la passerelle institutionnelle.",
      message:
        "AKANIL crée, encadre et positionne l'écosystème pour l'entrée institutionnelle et le partenariat stratégique.",
      modules: [
        "Origination stratégique",
        "Positionnement institutionnel marocain",
        "Intelligence de terrain africaine",
        "Structuration des partenaires",
        "Récit de gouvernance",
        "Logique de corridor stratégique",
        "Accès institutionnel contrôlé",
      ],
    },
    workflow: {
      id: "11",
      question: "Comment les couches fonctionnent-elles ensemble ?",
      title: "Flux intégré",
      answer:
        "Ce n'est pas une collection de projets déconnectés. C'est un écosystème séquencé de l'intelligence à la gouvernance.",
      message:
        "Ce n'est pas une collection de projets déconnectés. C'est un écosystème séquencé de l'intelligence à la gouvernance.",
      steps: [
        { code: "QASSAS", action: "génère l'intelligence d'exploration" },
        { code: "Aguelmous", action: "teste la logique R&D des failles intelligentes" },
        { code: "Isseksi", action: "prouve la maturité de terrain et industrielle" },
        { code: "HYRION", action: "gouverne les preuves, références de valeur et accès" },
        { code: "ZYNTRA", action: "active les interfaces techniques et systèmes IA" },
        { code: "AKANIL", action: "encadre l'entrée institutionnelle" },
        { code: "Amusnaw AI", action: "présente la couche de décision stratégique marocaine" },
      ],
    },
    matrix: {
      id: "12",
      question: "Pourquoi ces minéraux comptent-ils stratégiquement ?",
      title: "Matrice des minéraux stratégiques",
      answer:
        "Chaque minéral ciblé correspond à une pertinence stratégique, industrielle ou de transition énergétique concrète.",
    },
    stakeholders: {
      id: "13",
      question: "Que gagne chaque partie prenante ?",
      title: "Réponses aux parties prenantes",
      answer: "Chaque partie prenante reçoit une réponse sérieuse de niveau institutionnel.",
    },
    dataRoom: {
      id: "14",
      question: "Quels documents et preuves sont disponibles ?",
      title: "Aperçu de la salle de données sécurisée",
      answer:
        "Une couche documentaire gouvernée avec des statuts d'accès contrôlés — propulsée par HYRION.",
    },
    strategicEntry: {
      id: "15",
      question: "Comment une institution ou un partenaire entre-t-il dans l'écosystème ?",
      title: "Fenêtre d'entrée stratégique",
      answer:
        "Entrée stratégique, accès institutionnel et co-construction — via un examen gouverné, sous NDA.",
      fields: {
        name: "Nom",
        institution: "Institution",
        role: "Rôle",
        email: "E-mail",
        layer: "Couche d'intérêt",
        message: "Message",
        requestNda: "Demander un NDA",
        requestReview: "Demander un examen stratégique",
      },
      submit: "Demander un accès stratégique",
      success: "Demande reçue. La couche de gouvernance examinera votre entrée stratégique.",
      noFunding:
        "Ceci est une fenêtre de co-construction de l'infrastructure nationale de données minérales — pas une demande de financement.",
    },
  },
  stakeholders: [
    {
      id: "moroccan-institutions",
      label: "Institutions marocaines",
      answer:
        "Infrastructure structurée de données minérales et intelligence minière prête pour la gouvernance, alignée sur les priorités stratégiques nationales.",
    },
    {
      id: "cdg-strategic-capital",
      label: "CDG / Capital stratégique",
      answer:
        "Une fenêtre de co-construction de l'infrastructure nationale de données minérales — un positionnement stratégique, pas une demande de financement pour une expérience.",
    },
    {
      id: "mining-operators",
      label: "Opérateurs miniers",
      answer:
        "Une méthode pour convertir les preuves de terrain en décisions opérationnelles et itinéraires de validation gouvernés.",
    },
    {
      id: "technology-partners",
      label: "Partenaires technologiques",
      answer:
        "Une couche claire d'IA, géospatiale, RAG, interface sécurisée et pipeline de données prête à l'intégration.",
    },
    {
      id: "industrial-partners",
      label: "Partenaires industriels",
      answer:
        "Une visibilité sur les minéraux pertinents pour les VE, data centers, électrification, chaînes de batteries et fabrication stratégique.",
    },
    {
      id: "governance-partners",
      label: "Partenaires de gouvernance",
      answer:
        "Preuves, accès, portes de validation et registres de décision contrôlés par HYRION.",
    },
  ],
};
