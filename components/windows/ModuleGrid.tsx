"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * ModuleGrid — shared animated module grid used by ZYNTRA, AKANIL and others.
 * Each module is a numbered card with a hover micro-interaction.
 */
export function ModuleGrid({
  modules,
  columns = 3,
}: {
  modules: string[];
  columns?: 2 | 3;
}) {
  const reduce = useReducedMotion();
  return (
    <div
      className={cn(
        "grid gap-3",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
      )}
    >
      {modules.map((m, i) => (
        <motion.div
          key={m}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
          whileHover={reduce ? undefined : { y: -3 }}
          className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent/40"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black/30 font-mono text-[11px] text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-medium text-graphite-100">{m}</span>
        </motion.div>
      ))}
    </div>
  );
}
