"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { LogoBlock } from "./LogoBlock";
import { Disclaimer } from "./Disclaimer";
import { ThemeTokenProvider } from "./ThemeTokenProvider";
import { EcosystemSignalCards } from "./ecosystem/EcosystemSignalCards";

/** SiteFooter — main ecosystem sentence + required disclaimer + route index. */
export function SiteFooter() {
  const { content } = useI18n();

  return (
    <footer className="border-t border-white/10 bg-graphite-950 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <LogoBlock label="A" size={34} />
          <div>
            <p className="text-sm font-semibold text-white">{content.meta.name}</p>
            <p className="text-xs text-graphite-400">{content.meta.tagline}</p>
          </div>
        </div>

        {/* Main ecosystem narrative — split into short cards, not a paragraph */}
        <ThemeTokenProvider theme="amusnaw">
          <EcosystemSignalCards />
        </ThemeTokenProvider>

        <nav aria-label="All windows" className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          {content.nav.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-graphite-400 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Disclaimer className="mt-8" />

        <p className="mt-6 font-mono text-[11px] text-graphite-600">
          © {new Date().getFullYear()} {content.meta.name} · Institutional interface ·
          v1 — placeholder market references only.
        </p>
      </div>
    </footer>
  );
}
