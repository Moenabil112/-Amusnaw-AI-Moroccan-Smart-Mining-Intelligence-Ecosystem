"use client";

import { MINERALS } from "@/lib/minerals";
import { useI18n } from "@/lib/i18n";
import { MineralValueCard } from "./MineralValueCard";
import { Disclaimer } from "@/components/Disclaimer";

/**
 * MarketValueBoard — Window 04.
 * API-ready indicative market reference console. All values are placeholders
 * sourced from the catalogue + price-source layer; never live "facts" in v1.
 */
export function MarketValueBoard() {
  const { content } = useI18n();

  return (
    <div>
      <div className="mb-5 rounded-lg border border-amber-400/25 bg-amber-400/[0.06] px-4 py-3">
        <p className="text-sm font-medium text-amber-100">
          {content.global.notAssetValuation}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {MINERALS.map((mineral, i) => (
          <MineralValueCard key={mineral.id} mineral={mineral} index={i} />
        ))}
      </div>

      <Disclaimer className="mt-6" />
    </div>
  );
}
