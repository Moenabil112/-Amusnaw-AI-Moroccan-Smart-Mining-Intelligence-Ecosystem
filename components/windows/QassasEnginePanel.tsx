"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Eyebrow } from "@/components/ui";

/**
 * QassasEnginePanel — Window 05.
 * Left: target groups. Right: the targeting pipeline rendered as an
 * illuminated vertical stepper (each stage lights up in sequence on scroll).
 */
export function QassasEnginePanel() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const w = content.windows.qassas;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Target groups */}
      <div>
        <Eyebrow>Target groups</Eyebrow>
        <ul className="space-y-2">
          {w.targets.map((t, i) => (
            <motion.li
              key={t}
              initial={reduce ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-graphite-100"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {t}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Pipeline */}
      <div>
        <Eyebrow>Targeting pipeline</Eyebrow>
        <ol className="relative space-y-0">
          <span
            className="absolute bottom-2 start-[11px] top-2 w-px bg-gradient-to-b from-accent/60 via-accent/30 to-transparent"
            aria-hidden
          />
          {w.pipeline.map((step, i) => (
            <motion.li
              key={step}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex items-center gap-3 py-1.5 ps-0"
            >
              <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-graphite-950 font-mono text-[10px] text-accent">
                {i + 1}
              </span>
              <span className="text-sm text-graphite-100">{step}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
