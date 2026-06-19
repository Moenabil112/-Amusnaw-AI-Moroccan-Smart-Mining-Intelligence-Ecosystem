import type { SiteContent } from "./types";

// English — default locale. Source of truth for structure.
export const en: SiteContent = {
  meta: {
    name: "Amusnaw AI",
    tagline: "Moroccan Smart Mining Intelligence Ecosystem",
    description:
      "A structured digital window for mining intelligence, governance, and strategic decision-making.",
  },
  nav: {
    brand: "Amusnaw AI",
    enter: "Enter Ecosystem",
    progressLabel: "Window",
    items: [
      { label: "Ecosystem", href: "/ecosystem" },
      { label: "Minerals", href: "/minerals" },
      { label: "Market Value", href: "/market-value" },
      { label: "QASSAS", href: "/qassas" },
      { label: "Aguelmous", href: "/aguelmous" },
      { label: "Isseksi", href: "/isseksi" },
      { label: "HYRION", href: "/hyrion" },
      { label: "ZYNTRA", href: "/zyntra" },
      { label: "AKANIL", href: "/akanil" },
      { label: "Workflow", href: "/workflow" },
      { label: "Stakeholders", href: "/stakeholders" },
      { label: "Data Room", href: "/data-room" },
      { label: "Strategic Entry", href: "/strategic-entry" },
    ],
  },
  preloader: {
    booting: "Initializing ecosystem",
    system: "Amusnaw AI · Moroccan Smart Mining Intelligence",
    ready: "System ready",
  },
  global: {
    ecosystemSentence:
      "QASSAS generates the exploration intelligence. Aguelmous demonstrates Moroccan smart fault R&D. Isseksi proves field and industrial readiness. HYRION governs the evidence and value logic. ZYNTRA enables the technology stack. AKANIL frames the institutional gateway. Amusnaw AI connects them into one Moroccan smart mining intelligence ecosystem.",
    disclaimer:
      "All mineral prices and value indicators are indicative market references only. They do not represent reserve valuation, asset valuation, revenue, or investment return. Any value scenario requires verified tonnage, grade, recovery, payable factors, CAPEX/OPEX, legal status, and HYRION evidence governance.",
    notAssetValuation: "Indicative market reference — not asset valuation.",
    poweredByHyrion: "Powered by HYRION",
    explore: "Open window",
    role: "Role",
    learnMore: "Learn more",
    backToEcosystem: "Back to ecosystem",
  },
  governanceLabels: {
    marketReference: "Market Reference",
    evidenceLinked: "Evidence Linked",
    assaySupported: "Assay Supported",
    resourceModelPending: "Resource Model Pending",
    recoveryPending: "Recovery Pending",
    costModelPending: "Cost Model Pending",
    notReserveValuation: "Not Reserve Valuation",
    decisionReady: "Decision-Ready",
  },
  evidenceLabels: {
    fieldLinked: "Field-Linked",
    assaySupported: "Assay-Supported",
    pendingModel: "Pending Model",
    indicator: "Indicator",
    sourceRequired: "Source Required",
  },
  accessLabels: {
    publicPreview: "Public Preview",
    ndaRequired: "NDA Required",
    restricted: "Restricted",
    partnerOnly: "Partner Only",
    governanceLayer: "Governance Layer",
    decisionLayer: "Decision Layer",
  },
  familyLabels: {
    base: "Base Metals",
    precious: "Precious Metals",
    battery: "Battery Metals",
    rareEarth: "Rare Earth / Magnet Metals",
    moroccanStrategic: "Moroccan Strategic Minerals",
    technology: "Technology-Linked Minerals",
  },
  windows: {
    boot: {
      id: "00",
      question: "What am I entering?",
      title: "System Boot",
      answer:
        "Amusnaw AI is a Moroccan Smart Mining Intelligence Ecosystem — not a website.",
      message:
        "Amusnaw AI is a structured digital window for mining intelligence, governance, and strategic decision-making.",
    },
    ecosystem: {
      id: "01",
      question: "What are the components of the ecosystem, and who does what?",
      title: "Ecosystem Map",
      answer:
        "Six specialized layers orbit a central intelligence hub. Hover a node to reveal its role and connections.",
    },
    problem: {
      id: "02",
      question: "What problem does the ecosystem solve?",
      title: "The Problem Layer",
      answer:
        "Mining evidence is scattered, mineral knowledge is unstructured, and geology is weakly linked to institutional decisions.",
      message:
        "Amusnaw AI converts scattered mining evidence into structured, governed, and decision-ready mineral intelligence.",
      steps: [
        "Scattered field evidence",
        "Unstructured mineral knowledge",
        "Weak link between geology and institutional decision",
        "Governed mineral intelligence",
      ],
    },
    minerals: {
      id: "03",
      question: "What mineral resources does the ecosystem cover?",
      title: "Mineral Universe",
      answer:
        "Mineral intelligence is structured across six strategic families — Amusnaw AI is not limited to one mineral.",
      message:
        "Amusnaw AI structures mineral intelligence across copper, precious metals, battery metals, rare earths, and Moroccan strategic minerals.",
    },
    marketValue: {
      id: "04",
      question: "What is the financial market relevance of the targeted minerals?",
      title: "Market Value Board",
      answer:
        "An indicative market reference console — not an asset valuation window. Values are placeholders until wired to a source.",
      cardLabels: {
        unit: "Reference Unit",
        marketReference: "Market Reference",
        strategicUse: "Strategic Use",
        linkedLayer: "Linked Layer",
        evidence: "Evidence Status",
        governance: "Governance Status",
        lastChecked: "Last Checked",
      },
    },
    qassas: {
      id: "05",
      question: "How does the ecosystem generate exploration intelligence?",
      title: "QASSAS Targeting Engine",
      answer: "QASSAS is the Exploration Intelligence Engine.",
      message:
        "QASSAS transforms geological context, satellite imagery, field observations and expert knowledge into structured exploration signals and decision-ready targeting layers.",
      targets: [
        "Gold and heavy minerals in valleys",
        "Copper alteration zones",
        "Fault-related gold / silver indicators",
        "Nickel / cobalt / manganese potential zones",
        "Rare earth anomaly indicators",
        "Lithium / pegmatite possibility layer",
        "Industrial minerals and field observations",
      ],
      pipeline: [
        "Geological data ingestion",
        "Satellite imagery reading",
        "Terrain and drainage intelligence",
        "Fault / lineament detection",
        "Mineral signature inference",
        "Target scoring",
        "Field survey planning",
        "Human expert feedback",
      ],
    },
    aguelmous: {
      id: "06",
      question: "Where does Moroccan R&D appear inside the ecosystem?",
      title: "Aguelmous Smart Fault R&D",
      answer: "Aguelmous is the Smart Fault Exploration R&D Demonstrator.",
      message:
        "Aguelmous demonstrates how Moroccan fault-controlled geology can become an AI-assisted exploration model with measurable market relevance.",
      targets: [
        "Gold",
        "Copper",
        "Silver",
        "Lead-Zinc",
        "Possible critical metals depending on fault / geochemical evidence",
      ],
      modules: [
        "Terrain layer",
        "Fault model layer",
        "Remote sensing signal layer",
        "AI targeting layer",
        "Field validation route",
        "R&D decision gate",
      ],
      licenseCard: {
        label: "Internal License Reference — Data Room Layer",
        note: "Restricted detail. Available only inside the governed data room.",
      },
    },
    isseksi: {
      id: "07",
      question: "What is the ready field / industrial proof inside the ecosystem?",
      title: "Isseksi Copper Value Product",
      answer:
        "Isseksi is the Ready Mining Intelligence & Governance Product, focused on copper intelligence and field validation.",
      targets: [
        "Copper as primary product",
        "Zinc indicators where evidence supports it",
        "Nickel indicators where evidence supports it",
        "Iron indicators where evidence supports it",
        "Gold indicators where evidence supports it",
      ],
      modules: [
        "Field evidence",
        "Copper intelligence",
        "Mobile Processing MVP",
        "Closed-loop Vat & Column Leaching",
        "Cement Copper logic",
        "ESG and water recovery",
        "Governance dashboard",
        "Validation gate",
      ],
      valueLogic: {
        steps: [
          "Copper benchmark price",
          "× contained copper",
          "× recovery assumption",
          "× payable factor",
        ],
        result: "= Indicative Gross Metal Value",
        note: "Any production or value scenario remains indicative until supported by verified tonnage, grade, recovery, operating costs, payable factors, and legal / technical validation.",
      },
    },
    hyrion: {
      id: "08",
      question: "How does the system prevent exaggerated financial claims?",
      title: "HYRION Value Governance",
      answer: "HYRION is the Governance, Evidence & Trust Control Layer.",
      message:
        "HYRION separates market value references from verified asset valuation and governs the evidence chain behind every decision.",
      statuses: [
        { key: "marketReference", meaning: "Commodity benchmark only" },
        { key: "evidenceLinked", meaning: "Linked to field / lab / document evidence" },
        { key: "assaySupported", meaning: "Supported by lab assays" },
        { key: "resourceModelPending", meaning: "No compliant resource model yet" },
        { key: "recoveryPending", meaning: "Processing recovery not fully validated" },
        { key: "costModelPending", meaning: "CAPEX / OPEX not finalized" },
        { key: "notReserveValuation", meaning: "Must not be interpreted as reserve value" },
        { key: "decisionReady", meaning: "Suitable for institutional review after evidence checks" },
      ],
    },
    zyntra: {
      id: "09",
      question: "What technology enables the ecosystem?",
      title: "ZYNTRA Intelligence Stack",
      answer: "ZYNTRA is the Technology & AI Enablement Layer.",
      message:
        "ZYNTRA provides the technical enablement layer that makes the ecosystem operational, scalable, and interface-ready.",
      modules: [
        "AI models",
        "RAG / private knowledge base readiness",
        "Secure interfaces",
        "Geospatial intelligence",
        "Data pipelines",
        "Automation layer",
        "Frontend / UI architecture",
        "API-ready structure",
        "Future Supabase / Auth integration",
      ],
    },
    akanil: {
      id: "10",
      question: "Who originates and frames the ecosystem institutionally?",
      title: "AKANIL Strategic Gateway",
      answer: "AKANIL is the Strategic Originator & Institutional Gateway.",
      message:
        "AKANIL originates, frames, and positions the ecosystem for institutional entry and strategic partnership.",
      modules: [
        "Strategic origination",
        "Moroccan institutional positioning",
        "African field intelligence",
        "Partner structuring",
        "Governance narrative",
        "Strategic corridor logic",
        "Controlled institutional access",
      ],
    },
    workflow: {
      id: "11",
      question: "How do the layers work together?",
      title: "Integrated Workflow",
      answer:
        "This is not a collection of disconnected projects. It is a sequenced intelligence-to-governance ecosystem.",
      message:
        "This is not a collection of disconnected projects. It is a sequenced intelligence-to-governance ecosystem.",
      steps: [
        { code: "QASSAS", action: "generates exploration intelligence" },
        { code: "Aguelmous", action: "tests smart fault R&D logic" },
        { code: "Isseksi", action: "proves field and industrial readiness" },
        { code: "HYRION", action: "governs evidence, value references, and access" },
        { code: "ZYNTRA", action: "enables technical interfaces and AI systems" },
        { code: "AKANIL", action: "frames institutional entry" },
        { code: "Amusnaw AI", action: "presents the Moroccan strategic decision layer" },
      ],
    },
    matrix: {
      id: "12",
      question: "Why do these minerals matter strategically?",
      title: "Strategic Minerals Matrix",
      answer:
        "Each targeted mineral maps to a concrete strategic, industrial or energy-transition relevance.",
    },
    stakeholders: {
      id: "13",
      question: "What does each stakeholder gain?",
      title: "Stakeholder Answers",
      answer: "Every stakeholder receives a serious, institution-grade answer.",
    },
    dataRoom: {
      id: "14",
      question: "What documents and evidence are available?",
      title: "Secure Data Room Preview",
      answer:
        "A governed document layer with controlled access statuses — powered by HYRION.",
    },
    strategicEntry: {
      id: "15",
      question: "How does an institution or partner enter the ecosystem?",
      title: "Strategic Entry Window",
      answer:
        "Strategic entry, institutional access and co-building — through a governed, NDA-gated review.",
      fields: {
        name: "Name",
        institution: "Institution",
        role: "Role",
        email: "Email",
        layer: "Layer of interest",
        message: "Message",
        requestNda: "Request NDA",
        requestReview: "Request Strategic Review",
      },
      submit: "Request Strategic Access",
      success: "Request received. The governance layer will review your strategic entry.",
      noFunding:
        "This is a co-building window into national mineral data infrastructure — not a funding request.",
    },
  },
  stakeholders: [
    {
      id: "moroccan-institutions",
      label: "Moroccan Institutions",
      answer:
        "Structured mineral data infrastructure and governance-ready mining intelligence aligned with national strategic priorities.",
    },
    {
      id: "cdg-strategic-capital",
      label: "CDG / Strategic Capital",
      answer:
        "A co-building window into national mineral data infrastructure — a strategic positioning, not a funding request for an experiment.",
    },
    {
      id: "mining-operators",
      label: "Mining Operators",
      answer:
        "A method to convert field evidence into operational decisions and governed validation routes.",
    },
    {
      id: "technology-partners",
      label: "Technology Partners",
      answer:
        "A clear AI, geospatial, RAG, secure interface and data pipeline layer ready for integration.",
    },
    {
      id: "industrial-partners",
      label: "Industrial Partners",
      answer:
        "Visibility on minerals relevant to EVs, data centers, electrification, battery chains and strategic manufacturing.",
    },
    {
      id: "governance-partners",
      label: "Governance Partners",
      answer:
        "HYRION-controlled evidence, access, validation gates and decision records.",
    },
  ],
};
