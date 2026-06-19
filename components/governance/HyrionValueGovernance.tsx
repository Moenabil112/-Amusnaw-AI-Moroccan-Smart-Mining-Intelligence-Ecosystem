"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import type { GovernanceStatus } from "@/types";

/**
 * HyrionValueGovernance — Window 08.
 * Secure institutional dashboard of governance statuses. Each status is a
 * validation badge with its meaning, framed as the control mechanism that
 * separates market references from verified asset valuation.
 */
const TONE: Record<GovernanceStatus, string> = {
  marketReference: "#3fc7e0",
  evidenceLinked: "#7bd88f",
  assaySupported: "#7bd88f",
  resourceModelPending: "#d9bd84",
  recoveryPending: "#d9bd84",
  costModelPending: "#d9bd84",
  notReserveValuation: "#e0795b",
  decisionReady: "#3fc7e0",
};

export function HyrionValueGovernance() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const w = content.windows.hyrion;

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        {w.statuses.map((status, i) => {
          const color = TONE[status.key];
          return (
            <motion.div
              key={status.key}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <span
                className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}` }}
              />
              <div>
                <p className="text-sm font-semibold text-white">
                  {content.governanceLabels[status.key]}
                </p>
                <p className="mt-0.5 text-xs text-graphite-300">{status.meaning}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Access control mini-cards */}
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          { k: "Evidence Chain", v: "Field → Lab → Document" },
          { k: "Value Classification", v: "Reference ≠ Valuation" },
          { k: "Access Control", v: "NDA-gated · Role-based" },
        ].map((c) => (
          <div
            key={c.k}
            className="rounded-xl border border-white/10 bg-black/30 p-4"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent/80">
              {c.k}
            </p>
            <p className="mt-1 text-sm font-medium text-white">{c.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
