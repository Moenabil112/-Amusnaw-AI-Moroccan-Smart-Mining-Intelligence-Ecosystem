"use client";

import { LOCALES } from "@/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * LanguageSwitcher — EN / AR / FR.
 * Switching to Arabic flips the document direction to RTL via the provider.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-white/10 bg-graphite-900/70 p-0.5 backdrop-blur",
        className,
      )}
    >
      {LOCALES.map((l) => {
        const active = l.code === locale;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLocale(l.code)}
            aria-pressed={active}
            aria-label={l.label}
            title={l.label}
            className={cn(
              "min-w-8 rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
              active
                ? "bg-accent text-graphite-950"
                : "text-graphite-300 hover:text-white",
            )}
          >
            {l.native}
          </button>
        );
      })}
    </div>
  );
}
