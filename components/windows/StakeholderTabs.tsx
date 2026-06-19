"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * StakeholderTabs — Window 13.
 * Tabbed institutional answers. CDG / strategic capital intentionally avoids
 * funding language (co-building window framing).
 */
export function StakeholderTabs() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const tabs = content.stakeholders;
  const [active, setActive] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div
        role="tablist"
        aria-label="Stakeholders"
        className="flex flex-col gap-1.5"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.id)}
              className={cn(
                "rounded-lg border px-4 py-3 text-start text-sm font-medium transition-colors",
                isActive
                  ? "border-accent/50 bg-[color:var(--win-accent)]/[0.08] text-white"
                  : "border-white/10 bg-white/[0.02] text-graphite-300 hover:border-white/25 hover:text-white",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <motion.div
        key={active}
        role="tabpanel"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
      >
        <h3 className="text-lg font-semibold text-accent">{activeTab.label}</h3>
        <p className="mt-3 text-pretty leading-relaxed text-graphite-100">
          {activeTab.answer}
        </p>
      </motion.div>
    </div>
  );
}
