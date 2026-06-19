import type { DataRoomDocument, EcosystemNode, MatrixRow } from "@/types";

/**
 * The six ecosystem nodes orbiting the central Amusnaw AI hub.
 * Angles are degrees on the orbit (0 = top, clockwise).
 */
export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: "qassas",
    code: "QASSAS",
    name: "QASSAS",
    role: "Exploration Intelligence Engine",
    description:
      "Transforms geological context, satellite imagery, field observations and expert knowledge into structured exploration signals and decision-ready targeting layers.",
    theme: "qassas",
    angle: 0,
    route: "/qassas",
  },
  {
    id: "aguelmous",
    code: "AGUELMOUS",
    name: "Aguelmous",
    role: "Smart Fault Exploration R&D Demonstrator",
    description:
      "Demonstrates how Moroccan fault-controlled geology can become an AI-assisted exploration model with measurable market relevance.",
    theme: "aguelmous",
    angle: 60,
    route: "/aguelmous",
  },
  {
    id: "isseksi",
    code: "ISSEKSI",
    name: "Isseksi",
    role: "Ready Mining Intelligence & Governance Product",
    description:
      "Proves field and industrial readiness with a copper-focused intelligence, processing and validation product.",
    theme: "isseksi",
    angle: 120,
    route: "/isseksi",
  },
  {
    id: "hyrion",
    code: "HYRION",
    name: "HYRION",
    role: "Governance, Evidence & Trust Layer",
    description:
      "Governs evidence, access, trust, market-reference numbers and institutional decision readiness across the ecosystem.",
    theme: "hyrion",
    angle: 180,
    route: "/hyrion",
  },
  {
    id: "zyntra",
    code: "ZYNTRA",
    name: "ZYNTRA",
    role: "Technology & AI Enablement",
    description:
      "Provides the technical enablement layer — AI, geospatial, RAG, pipelines and interfaces — that makes the ecosystem operational and scalable.",
    theme: "zyntra",
    angle: 240,
    route: "/zyntra",
  },
  {
    id: "akanil",
    code: "AKANIL",
    name: "AKANIL",
    role: "Strategic Originator & Institutional Gateway",
    description:
      "Originates, frames and positions the ecosystem for institutional entry and strategic partnership.",
    theme: "akanil",
    angle: 300,
    route: "/akanil",
  },
];

/** Strategic minerals matrix rows (Window 12). */
export const STRATEGIC_MATRIX: MatrixRow[] = [
  { mineral: "Copper", relevance: "Electricity, grids, EVs, data centers" },
  { mineral: "Gold", relevance: "High-value target, fault systems, financial metal" },
  { mineral: "Silver", relevance: "Solar, electronics, high conductivity" },
  { mineral: "Nickel", relevance: "EV batteries, stainless steel, energy transition" },
  { mineral: "Cobalt", relevance: "EV batteries, storage systems" },
  { mineral: "Lithium", relevance: "Energy storage and EV batteries" },
  { mineral: "Manganese", relevance: "Batteries and steel alloys" },
  { mineral: "Tin", relevance: "Electronics, solder, technology hardware" },
  { mineral: "Neodymium / NdPr", relevance: "Permanent magnets, EV motors, robotics, defense" },
  { mineral: "Zinc / Lead", relevance: "Polymetallic systems and industrial applications" },
  { mineral: "Phosphate", relevance: "Moroccan strategic mineral and industrial value chain" },
  { mineral: "Industrial Minerals", relevance: "Construction, processing, local value chains" },
];

/** Secure data room documents (Window 14). */
export const DATA_ROOM_DOCUMENTS: DataRoomDocument[] = [
  {
    id: "entry-memo",
    title: "Amusnaw Strategic Entry Memo",
    description: "Executive framing of the ecosystem and strategic entry logic.",
    access: "publicPreview",
  },
  {
    id: "architecture-brief",
    title: "Ecosystem Architecture Brief",
    description: "Layer-by-layer architecture of QASSAS → AKANIL → Amusnaw AI.",
    access: "ndaRequired",
  },
  {
    id: "mineral-value",
    title: "Mineral Universe & Value Board",
    description: "Mineral families, market references and governance mapping.",
    access: "publicPreview",
  },
  {
    id: "qassas-blueprint",
    title: "QASSAS Engine Blueprint",
    description: "Targeting pipeline, signal inference and scoring methodology.",
    access: "restricted",
  },
  {
    id: "aguelmous-brief",
    title: "Aguelmous R&D Demonstrator Brief",
    description: "Smart fault exploration R&D model and validation logic.",
    access: "partnerOnly",
  },
  {
    id: "isseksi-brief",
    title: "Isseksi Product Brief",
    description: "Copper intelligence, processing MVP and validation gate.",
    access: "ndaRequired",
  },
  {
    id: "hyrion-governance",
    title: "HYRION Governance Architecture",
    description: "Evidence chain, value classification and access control.",
    access: "governanceLayer",
  },
  {
    id: "zyntra-tech",
    title: "ZYNTRA Technology Layer",
    description: "AI, geospatial, RAG and API-ready stack documentation.",
    access: "restricted",
  },
  {
    id: "partner-pack",
    title: "Partner Access Pack",
    description: "Decision-layer materials for evaluated strategic partners.",
    access: "decisionLayer",
  },
];
