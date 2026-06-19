"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Badge, DataCard, Eyebrow } from "@/components/ui";

/**
 * IsseksiCopperValueProduct — Window 07.
 * Product modules grid + indicative copper value-logic panel.
 * The value chain is explicitly labelled indicative and governance-noted.
 */
export function IsseksiCopperValueProduct() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const w = content.windows.isseksi;

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Modules */}
        <div>
          <Eyebrow>Product modules</Eyebrow>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {w.modules.map((m, i) => (
              <DataCard key={m} index={i} className="p-3">
                <span className="text-xs font-medium text-graphite-100">{m}</span>
              </DataCard>
            ))}
          </div>
        </div>

        {/* Targets */}
        <div>
          <Eyebrow>Target minerals / indicators</Eyebrow>
          <ul className="space-y-2">
            {w.targets.map((t) => (
              <li
                key={t}
                className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-graphite-100"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Indicative value-logic panel */}
      <div className="rounded-xl border border-accent/25 bg-[color:var(--win-accent)]/[0.05] p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <Eyebrow>Indicative value logic — scenario mode</Eyebrow>
          <Badge tone="warn">Not asset valuation</Badge>
        </div>

        <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
          {w.valueLogic.steps.map((step, i) => (
            <div key={step} className="flex items-center gap-2 md:flex-1">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex-1 rounded-lg border border-white/10 bg-graphite-950/60 px-3 py-2.5 text-center text-xs font-medium text-graphite-100"
              >
                {step}
              </motion.div>
            </div>
          ))}
          <div className="rounded-lg border border-accent/50 bg-[color:var(--win-accent)]/[0.12] px-3 py-2.5 text-center text-xs font-semibold text-white md:flex-1">
            {w.valueLogic.result}
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-graphite-400">
          {w.valueLogic.note}
        </p>
      </div>
    </div>
  );
}
