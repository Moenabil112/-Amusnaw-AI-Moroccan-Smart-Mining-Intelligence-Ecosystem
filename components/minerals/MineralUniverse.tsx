"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MINERAL_FAMILIES, getMineralsByFamily } from "@/lib/minerals";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { MineralFamilyKey } from "@/types";

/**
 * MineralUniverse — Window 03.
 * Mineral families cluster into selectable groups; selecting a family expands
 * its minerals and shows the ecosystem layers it links to.
 */
export function MineralUniverse() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const [active, setActive] = useState<MineralFamilyKey>(MINERAL_FAMILIES[0].key);

  const activeMinerals = getMineralsByFamily(active);
  const activeFamily = MINERAL_FAMILIES.find((f) => f.key === active)!;

  return (
    <div className="space-y-5">
      <p className="rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-xs text-graphite-400">
        {content.micro.coverageNote}
      </p>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      {/* Family selector cluster */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
        {MINERAL_FAMILIES.map((family, i) => {
          const isActive = family.key === active;
          return (
            <motion.button
              key={family.key}
              type="button"
              onClick={() => setActive(family.key)}
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={cn(
                "rounded-xl border p-3 text-start transition-all",
                isActive
                  ? "border-accent/50 bg-[color:var(--win-accent)]/[0.08]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/25",
              )}
              aria-pressed={isActive}
            >
              <span className="block text-sm font-semibold text-white">
                {content.familyLabels[family.key]}
              </span>
              <span className="mt-1 block text-xs text-graphite-300">
                {family.minerals.length} minerals
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Active family detail */}
      <motion.div
        key={active}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
      >
        <h3 className="text-lg font-semibold text-white">
          {content.familyLabels[active]}
        </h3>
        <p className="mt-1 text-sm text-graphite-300">{activeFamily.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {activeFamily.minerals.map((m) => (
            <span
              key={m}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-graphite-100"
            >
              {m}
            </span>
          ))}
        </div>

        {activeMinerals.length > 0 && (
          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent/80">
              Linked ecosystem layers
            </p>
            <div className="flex flex-wrap gap-2">
              {Array.from(
                new Set(activeMinerals.flatMap((m) => m.linkedLayers)),
              ).map((layer) => (
                <span
                  key={layer}
                  className="rounded-md border border-accent/30 bg-[color:var(--win-accent)]/[0.06] px-2.5 py-1 text-xs font-medium text-accent"
                >
                  {layer}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
      </div>
    </div>
  );
}
