import type { Locale } from "@/types";
import type { SiteContent } from "./types";
import { en } from "./en";
import { ar } from "./ar";
import { fr } from "./fr";

export const CONTENT: Record<Locale, SiteContent> = { en, ar, fr };

export const LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: "en", label: "English", native: "EN" },
  { code: "ar", label: "العربية", native: "ع" },
  { code: "fr", label: "Français", native: "FR" },
];

export const DEFAULT_LOCALE: Locale = "en";

export function getContent(locale: Locale): SiteContent {
  return CONTENT[locale] ?? CONTENT[DEFAULT_LOCALE];
}

export type { SiteContent };
