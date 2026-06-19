"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

/**
 * RouteShell — wraps a single window section on a detail route.
 * Adds a back-to-ecosystem link and constrains width so the reused section
 * renders in "expanded detail mode" rather than full-screen scroll mode.
 */
export function RouteShell({ children }: { children: React.ReactNode }) {
  const { content } = useI18n();
  return (
    <div className="min-h-[80vh] py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/#ecosystem"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-graphite-300 transition-colors hover:text-accent"
        >
          ← {content.global.backToEcosystem}
        </Link>
      </div>
      {children}
    </div>
  );
}
