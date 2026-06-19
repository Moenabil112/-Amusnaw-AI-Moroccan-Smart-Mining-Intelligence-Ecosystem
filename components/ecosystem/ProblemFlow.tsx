"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * ProblemFlow — Window 02 transformation chain.
 * Shows scattered evidence → governed mineral intelligence as an illuminated
 * pipeline. The final step is highlighted as the resolved state.
 */
export function ProblemFlow() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const steps = content.windows.problem.steps;

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
      {steps.map((step, i) => {
        const isFinal = i === steps.length - 1;
        return (
          <div key={step} className="flex flex-1 items-center gap-3 md:flex-col">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className={cn(
                "flex w-full flex-1 flex-col justify-center rounded-xl border p-4 text-sm",
                isFinal
                  ? "border-accent/50 bg-[color:var(--win-accent)]/[0.08] text-white"
                  : "border-white/10 bg-white/[0.03] text-graphite-200",
              )}
            >
              <span className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent/80">
                {isFinal ? "Outcome" : `Stage ${i + 1}`}
              </span>
              <span className="font-medium leading-snug">{step}</span>
            </motion.div>
            {i < steps.length - 1 && (
              <span className="text-accent/60 md:rotate-90" aria-hidden>
                ↓
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
