// Shared type definitions for the Amusnaw AI ecosystem interface.

export type Locale = "en" | "ar" | "fr";

export type Direction = "ltr" | "rtl";

/** Identifier for each window / layer theme. */
export type ThemeKey =
  | "amusnaw"
  | "qassas"
  | "aguelmous"
  | "isseksi"
  | "hyrion"
  | "zyntra"
  | "akanil"
  | "mineralValue"
  | "dataRoom"
  | "strategicEntry";

/** A resolved theme token set for a single window. */
export interface ThemeTokens {
  key: ThemeKey;
  /** Human label used in window headers. */
  label: string;
  /** Primary accent — used for glow, active borders, key text. */
  accent: string;
  /** Secondary accent. */
  secondary: string;
  /** Tertiary / surface tint. */
  tertiary: string;
  /** Background base for the window surface. */
  base: string;
  /** Glow color (rgba) used for controlled glow effects. */
  glow: string;
}

/** Governance status badges controlled by HYRION. */
export type GovernanceStatus =
  | "marketReference"
  | "evidenceLinked"
  | "assaySupported"
  | "resourceModelPending"
  | "recoveryPending"
  | "costModelPending"
  | "notReserveValuation"
  | "decisionReady";

/** Evidence maturity for a mineral / value card. */
export type EvidenceStatus =
  | "fieldLinked"
  | "assaySupported"
  | "pendingModel"
  | "indicator"
  | "sourceRequired";

/** A mineral entry in the universe + value board. */
export interface Mineral {
  id: string;
  name: string;
  symbol?: string;
  family: MineralFamilyKey;
  unit: string;
  /** Placeholder market reference — never a hardcoded live fact. */
  marketReference: string;
  strategicUse: string;
  linkedLayers: string[];
  evidenceStatus: EvidenceStatus;
  governanceStatus: GovernanceStatus;
  lastChecked: string;
}

export type MineralFamilyKey =
  | "base"
  | "precious"
  | "battery"
  | "rareEarth"
  | "moroccanStrategic"
  | "technology";

export interface MineralFamily {
  key: MineralFamilyKey;
  label: string;
  description: string;
  minerals: string[];
}

/** Market price source schema — API-ready placeholder structure. */
export interface PriceSource {
  sourceName: string;
  sourceUrl: string;
  dateChecked: string;
  commodity: string;
  unit: string;
  price: string | null;
  currency: string;
  benchmarkType: string;
  notes: string;
}

/** Ecosystem orbit node. */
export interface EcosystemNode {
  id: string;
  code: string;
  name: string;
  role: string;
  description: string;
  theme: ThemeKey;
  /** angle on the orbit, degrees */
  angle: number;
  route: string;
}

/** A stakeholder tab. */
export interface Stakeholder {
  id: string;
  label: string;
  answer: string;
}

/** A data room document card. */
export type DataRoomAccess =
  | "publicPreview"
  | "ndaRequired"
  | "restricted"
  | "partnerOnly"
  | "governanceLayer"
  | "decisionLayer";

export interface DataRoomDocument {
  id: string;
  title: string;
  description: string;
  access: DataRoomAccess;
}

/** Strategic minerals matrix row. */
export interface MatrixRow {
  mineral: string;
  relevance: string;
}
