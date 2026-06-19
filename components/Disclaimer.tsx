"use client";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Required financial disclaimer.
 * - `variant="full"` (default): the complete global disclaimer (footer).
 * - `variant="compact"`: the shorter wording for value-bearing windows
 *   (Market Value Board, HYRION) so it stays visible without dominating.
 */
export function Disclaimer({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "compact";
}) {
  const { content } = useI18n();
  const text =
    variant === "compact"
      ? content.global.disclaimerCompact
      : content.global.disclaimer;
  return (
    <div
      role="note"
      className={cn(
        "rounded-lg border border-white/10 bg-black/30 p-4",
        className,
      )}
    >
      <p className="flex items-start gap-2 text-xs leading-relaxed text-graphite-400">
        <span aria-hidden className="mt-0.5 shrink-0 text-accent">
          ⚠
        </span>
        <span>{text}</span>
      </p>
    </div>
  );
}
