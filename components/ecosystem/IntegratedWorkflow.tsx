"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

/**
 * IntegratedWorkflow — Window 11.
 * Sequenced intelligence-to-governance pipeline. Each layer illuminates as the
 * connector "fills" from the previous layer to the next on scroll.
 */
export function IntegratedWorkflow() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const steps = content.windows.workflow.steps;

  return (
    <div className="relative">
      <span
        className="absolute bottom-6 start-[19px] top-6 w-px bg-white/10 sm:start-[23px]"
        aria-hidden
      />
      <motion.span
        className="absolute start-[19px] top-6 w-px bg-gradient-to-b from-accent via-accent/60 to-transparent sm:start-[23px]"
        initial={reduce ? false : { height: 0 }}
        whileInView={{ height: "calc(100% - 3rem)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        aria-hidden
      />

      <ol className="space-y-3">
        {steps.map((step, i) => {
          const isFinal = i === steps.length - 1;
          return (
            <motion.li
              key={step.code}
              initial={reduce ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="relative flex items-center gap-4 ps-0"
            >
              <span
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] sm:h-12 sm:w-12 ${
                  isFinal
                    ? "border-accent bg-[color:var(--win-accent)]/15 text-accent"
                    : "border-white/20 bg-graphite-950 text-graphite-300"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className={`flex-1 rounded-xl border p-4 ${
                  isFinal
                    ? "border-accent/40 bg-[color:var(--win-accent)]/[0.06]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <p className="text-sm font-semibold text-white sm:text-base">
                  {step.code}
                </p>
                <p className="mt-0.5 text-sm text-graphite-300">{step.action}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
