"use client";

import { motion, useReducedMotion } from "framer-motion";
import { STRATEGIC_MATRIX } from "@/lib/ecosystem";

/**
 * StrategicMineralsMatrix — Window 12.
 * Mineral → strategic relevance matrix. Renders as an accessible table on
 * larger screens and stacked cards on mobile.
 */
export function StrategicMineralsMatrix() {
  const reduce = useReducedMotion();

  return (
    <div>
      {/* Mobile: stacked cards */}
      <div className="grid gap-2.5 sm:hidden">
        {STRATEGIC_MATRIX.map((row, i) => (
          <motion.div
            key={row.mineral}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.3) }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
          >
            <p className="text-sm font-semibold text-accent">{row.mineral}</p>
            <p className="mt-1 text-sm text-graphite-200">{row.relevance}</p>
          </motion.div>
        ))}
      </div>

      {/* Desktop: table */}
      <div className="hidden overflow-hidden rounded-xl border border-white/10 sm:block">
        <table className="w-full border-collapse text-start text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-black/30 text-graphite-300">
              <th className="px-4 py-3 text-start font-mono text-[11px] uppercase tracking-widest">
                Mineral
              </th>
              <th className="px-4 py-3 text-start font-mono text-[11px] uppercase tracking-widest">
                Strategic relevance
              </th>
            </tr>
          </thead>
          <tbody>
            {STRATEGIC_MATRIX.map((row, i) => (
              <motion.tr
                key={row.mineral}
                initial={reduce ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.4) }}
                className="border-b border-white/5 transition-colors hover:bg-white/[0.03]"
              >
                <td className="px-4 py-3 font-semibold text-white">{row.mineral}</td>
                <td className="px-4 py-3 text-graphite-200">{row.relevance}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
