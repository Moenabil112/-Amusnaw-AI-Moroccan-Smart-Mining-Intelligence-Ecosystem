// Content shape shared by every locale file (en / ar / fr).
// Keeping copy here means components never hardcode institutional text.

import type {
  DataRoomAccess,
  EvidenceStatus,
  GovernanceStatus,
  MineralFamilyKey,
} from "@/types";

export interface WindowCopy {
  id: string; // e.g. "00", "01"
  /** Theme label shown in window header (overrides theme default if set). */
  question: string;
  title: string;
  answer: string;
  message?: string;
}

/** Institutional copy for a single ecosystem layer node. */
export interface NodeCopy {
  role: string;
  description: string;
  output: string;
}

/** One line of the split signal-to-decision narrative. */
export interface EcosystemLine {
  code: string;
  line: string;
}

/** Expanded "/ecosystem" institutional explanation page (A–G structure). */
export interface EcosystemPageCopy {
  intro: {
    eyebrow: string;
    whatIsTitle: string;
    whatIs: string;
    whyTitle: string;
    why: string;
  };
  map: { title: string; subtitle: string };
  workflow: { title: string; subtitle: string };
  mineralScope: { title: string; intro: string; families: string[]; note: string };
  valueGovernance: { title: string; copy: string };
  relevance: { title: string; subtitle: string };
  cta: { title: string; actions: { label: string; href: string }[] };
}

export interface SiteContent {
  meta: {
    name: string;
    tagline: string;
    description: string;
    /** Opening institutional definition of Amusnaw AI. */
    definition: string;
  };
  nav: {
    brand: string;
    enter: string;
    items: { label: string; href: string }[];
    progressLabel: string;
  };
  preloader: {
    booting: string;
    system: string;
    ready: string;
  };
  global: {
    ecosystemSentence: string;
    disclaimer: string;
    /** Compact disclaimer for value-bearing windows (Market Value, HYRION). */
    disclaimerCompact: string;
    notAssetValuation: string;
    poweredByHyrion: string;
    explore: string;
    output: string;
    role: string;
    learnMore: string;
    backToEcosystem: string;
  };
  /** Per-layer institutional copy keyed by node id (qassas, aguelmous, …). */
  nodes: Record<string, NodeCopy>;
  /** The split signal-to-decision narrative (7 short lines). */
  ecosystemLines: EcosystemLine[];
  /** Expanded "/ecosystem" institutional explanation page. */
  ecosystemPage: EcosystemPageCopy;
  governanceLabels: Record<GovernanceStatus, string>;
  evidenceLabels: Record<EvidenceStatus, string>;
  accessLabels: Record<DataRoomAccess, string>;
  familyLabels: Record<MineralFamilyKey, string>;
  windows: {
    boot: WindowCopy;
    ecosystem: WindowCopy;
    problem: WindowCopy & { steps: string[] };
    minerals: WindowCopy;
    marketValue: WindowCopy & {
      cardLabels: {
        unit: string;
        marketReference: string;
        strategicUse: string;
        linkedLayer: string;
        evidence: string;
        governance: string;
        lastChecked: string;
      };
    };
    qassas: WindowCopy & { targets: string[]; pipeline: string[] };
    aguelmous: WindowCopy & {
      targets: string[];
      modules: string[];
      licenseCard: { label: string; note: string };
    };
    isseksi: WindowCopy & {
      targets: string[];
      modules: string[];
      valueLogic: { steps: string[]; result: string; note: string };
    };
    hyrion: WindowCopy & { statuses: { key: GovernanceStatus; meaning: string }[] };
    zyntra: WindowCopy & { modules: string[] };
    akanil: WindowCopy & { modules: string[] };
    workflow: WindowCopy & { steps: { code: string; action: string }[] };
    matrix: WindowCopy;
    stakeholders: WindowCopy;
    dataRoom: WindowCopy;
    strategicEntry: WindowCopy & {
      fields: {
        name: string;
        institution: string;
        role: string;
        email: string;
        layer: string;
        message: string;
        requestNda: string;
        requestReview: string;
      };
      submit: string;
      success: string;
      noFunding: string;
    };
  };
  stakeholders: { id: string; label: string; answer: string }[];
}
