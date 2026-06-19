"use client";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Required global financial disclaimer. Reused on value-bearing windows. */
export function Disclaimer({ className }: { className?: string }) {
  const { content } = useI18n();
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
        <span>{content.global.disclaimer}</span>
      </p>
    </div>
  );
}
