import type { ThemeKey } from "@/types";

/**
 * The 16 homepage windows in order — drives the scroll progress navigator
 * (mini-map) and the section anchors on the homepage.
 */
export interface WindowNavItem {
  id: string;
  anchor: string;
  short: string;
  theme: ThemeKey;
}

export const WINDOW_NAV: WindowNavItem[] = [
  { id: "00", anchor: "boot", short: "Boot", theme: "amusnaw" },
  { id: "01", anchor: "ecosystem", short: "Ecosystem", theme: "amusnaw" },
  { id: "02", anchor: "problem", short: "Problem", theme: "amusnaw" },
  { id: "03", anchor: "minerals", short: "Minerals", theme: "mineralValue" },
  { id: "04", anchor: "market-value", short: "Value", theme: "mineralValue" },
  { id: "05", anchor: "qassas", short: "QASSAS", theme: "qassas" },
  { id: "06", anchor: "aguelmous", short: "Aguelmous", theme: "aguelmous" },
  { id: "07", anchor: "isseksi", short: "Isseksi", theme: "isseksi" },
  { id: "08", anchor: "hyrion", short: "HYRION", theme: "hyrion" },
  { id: "09", anchor: "zyntra", short: "ZYNTRA", theme: "zyntra" },
  { id: "10", anchor: "akanil", short: "AKANIL", theme: "akanil" },
  { id: "11", anchor: "workflow", short: "Workflow", theme: "amusnaw" },
  { id: "12", anchor: "matrix", short: "Matrix", theme: "mineralValue" },
  { id: "13", anchor: "stakeholders", short: "Stakeholders", theme: "akanil" },
  { id: "14", anchor: "data-room", short: "Data Room", theme: "dataRoom" },
  { id: "15", anchor: "strategic-entry", short: "Entry", theme: "strategicEntry" },
];
