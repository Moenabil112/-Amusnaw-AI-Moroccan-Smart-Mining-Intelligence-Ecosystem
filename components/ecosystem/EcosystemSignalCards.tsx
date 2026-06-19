"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * EcosystemSignalCards — the signal-to-decision narrative split into short
 * cards (never one long paragraph). The final line (Amusnaw AI) spans full
 * width as the connecting conclusion. Reused in the footer and homepage.
 */
export function EcosystemSignalCards({
  variant = "default",
}: {
  variant?: "default" | "compact";
}) {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const lines = content.ecosystemLines;
  const layerLines = lines.slice(0, 6);
  const finalLine = lines[lines.length - 1];

  return (
    <div className="space-y-3">
      <div
        className={cn(
          "grid gap-2.5",
          variant === "compact"
            ? "grid-cols-2 sm:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {layerLines.map((item, i) => (
          <motion.div
            key={item.code}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-6% 0px" }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.4) }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/80">
              {item.code}
            </span>
            <p className="mt-1 text-sm font-medium leading-snug text-graphite-100">
              {item.line}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="rounded-xl border border-accent/30 bg-[color:var(--win-accent)]/[0.07] p-4"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          {finalLine.code}
        </span>
        <p className="mt-1 text-pretty text-sm font-semibold leading-snug text-white sm:text-base">
          {finalLine.line}
        </p>
      </motion.div>
    </div>
  );
}
