"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Direction, Locale } from "@/types";
import { DEFAULT_LOCALE, getContent, type SiteContent } from "@/content";

interface I18nValue {
  locale: Locale;
  dir: Direction;
  content: SiteContent;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "amusnaw.locale";

export function dirForLocale(locale: Locale): Direction {
  return locale === "ar" ? "rtl" : "ltr";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // Restore persisted locale on mount.
  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      window.localStorage.getItem(STORAGE_KEY)) as Locale | null;
    if (stored && ["en", "ar", "fr"].includes(stored)) {
      setLocaleState(stored);
    }
  }, []);

  // Keep <html> lang/dir in sync for accessibility + RTL.
  useEffect(() => {
    const dir = dirForLocale(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      dir: dirForLocale(locale),
      content: getContent(locale),
      setLocale,
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
