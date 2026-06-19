"use client";

import type { Mineral } from "@/types";
import { useI18n } from "@/lib/i18n";
import { getPriceSource, isPriceWired } from "@/lib/priceSources";
import { DataCard, Badge } from "@/components/ui";

/**
 * MineralValueCard — a single indicative market-reference card.
 * Reads a placeholder market reference from the catalogue and, if a price
 * source has been wired (future API), shows the sourced value + date instead.
 * It NEVER fabricates a "current price".
 */
export function MineralValueCard({
  mineral,
  index = 0,
}: {
  mineral: Mineral;
  index?: number;
}) {
  const { content } = useI18n();
  const labels = content.windows.marketValue.cardLabels;
  const source = getPriceSource(mineral.name);
  const wired = isPriceWired(source);

  const reference = wired
    ? `${source!.price} ${source!.currency}`
    : mineral.marketReference;
  const lastChecked = wired ? `Checked: ${source!.dateChecked}` : mineral.lastChecked;

  return (
    <DataCard index={index}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-white">{mineral.name}</h3>
          {mineral.symbol ? (
            <span className="font-mono text-xs text-graphite-400">{mineral.symbol}</span>
          ) : null}
        </div>
        <Badge tone="accent">{mineral.unit}</Badge>
      </div>

      <dl className="mt-4 space-y-2.5 text-sm">
        <Row label={labels.marketReference} value={reference} mono />
        <Row label={labels.strategicUse} value={mineral.strategicUse} />
        <div className="flex items-start justify-between gap-3">
          <dt className="text-graphite-400">{labels.linkedLayer}</dt>
          <dd className="flex flex-wrap justify-end gap-1">
            {mineral.linkedLayers.map((l) => (
              <span
                key={l}
                className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[11px] text-graphite-200"
              >
                {l}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-3">
        <Badge tone="neutral">
          {labels.evidence}: {content.evidenceLabels[mineral.evidenceStatus]}
        </Badge>
        <Badge tone="ok">{content.governanceLabels[mineral.governanceStatus]}</Badge>
      </div>
      <p className="mt-2 font-mono text-[11px] text-graphite-500">{lastChecked}</p>
    </DataCard>
  );
}

function Row({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <dt className="shrink-0 text-graphite-400">{label}</dt>
      <dd className={`text-end text-graphite-100 ${mono ? "font-mono text-xs" : ""}`}>
        {value}
      </dd>
    </div>
  );
}
