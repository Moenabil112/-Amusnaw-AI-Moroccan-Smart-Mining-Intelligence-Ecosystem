import type { ThemeKey, ThemeTokens } from "@/types";

/**
 * Theme token system — one controlled palette per window / layer.
 * Each window receives its own accent, secondary, tertiary, base, and glow.
 * Consumed by ThemeTokenProvider which exposes them as CSS variables.
 */
export const THEMES: Record<ThemeKey, ThemeTokens> = {
  amusnaw: {
    key: "amusnaw",
    label: "AMUSNAW · AI",
    accent: "#c8a45c", // muted gold
    secondary: "#1f8a7d", // deep teal
    tertiary: "#2f343b", // graphite
    base: "#0b0d10",
    glow: "rgba(200,164,92,0.30)",
  },
  qassas: {
    key: "qassas",
    label: "QASSAS · ENGINE",
    accent: "#2bb3a3", // deep teal
    secondary: "#7bd88f", // data green
    tertiary: "#0c1614",
    base: "#070b0a",
    glow: "rgba(43,179,163,0.32)",
  },
  aguelmous: {
    key: "aguelmous",
    label: "AGUELMOUS · R&D",
    accent: "#7c6cf0", // indigo
    secondary: "#d8c39a", // sand
    tertiary: "#b06a3c", // copper gold
    base: "#0a0a14",
    glow: "rgba(124,108,240,0.30)",
  },
  isseksi: {
    key: "isseksi",
    label: "ISSEKSI · PRODUCT",
    accent: "#c98a5a", // copper
    secondary: "#d9bd84", // warm gold
    tertiary: "#1a1c12", // olive black
    base: "#0c0a07",
    glow: "rgba(201,138,90,0.32)",
  },
  hyrion: {
    key: "hyrion",
    label: "HYRION · GOVERNANCE",
    accent: "#3fc7e0", // cyan
    secondary: "#7f93b8", // navy-light
    tertiary: "#f4f4f6", // institutional white
    base: "#070b12",
    glow: "rgba(63,199,224,0.30)",
  },
  zyntra: {
    key: "zyntra",
    label: "ZYNTRA · STACK",
    accent: "#3b82f6", // electric blue
    secondary: "#c7cdd6", // silver
    tertiary: "#15171b", // carbon
    base: "#070809",
    glow: "rgba(59,130,246,0.32)",
  },
  akanil: {
    key: "akanil",
    label: "AKANIL · GATEWAY",
    accent: "#c8a45c", // muted gold
    secondary: "#f4f1e9", // ivory
    tertiary: "#0a0a0c", // obsidian
    base: "#060607",
    glow: "rgba(200,164,92,0.26)",
  },
  mineralValue: {
    key: "mineralValue",
    label: "VALUE · BOARD",
    accent: "#d9bd84", // gold
    secondary: "#1f8a7d", // teal
    tertiary: "#1c1f24", // financial graphite
    base: "#0a0c0e",
    glow: "rgba(217,189,132,0.28)",
  },
  dataRoom: {
    key: "dataRoom",
    label: "DATA ROOM · SECURE",
    accent: "#3fc7e0", // cyan
    secondary: "#5b7da8", // secure navy
    tertiary: "#23272d", // graphite
    base: "#070a10",
    glow: "rgba(63,199,224,0.26)",
  },
  strategicEntry: {
    key: "strategicEntry",
    label: "STRATEGIC · ENTRY",
    accent: "#c8a45c", // gold
    secondary: "#f4f1e9", // soft white
    tertiary: "#161616",
    base: "#040404",
    glow: "rgba(200,164,92,0.28)",
  },
};

/** Convert a theme into CSS custom properties for ThemeTokenProvider. */
export function themeToCssVars(theme: ThemeTokens): Record<string, string> {
  return {
    "--win-accent": theme.accent,
    "--win-secondary": theme.secondary,
    "--win-tertiary": theme.tertiary,
    "--win-base": theme.base,
    "--win-glow": theme.glow,
  };
}

export function getTheme(key: ThemeKey): ThemeTokens {
  return THEMES[key];
}
