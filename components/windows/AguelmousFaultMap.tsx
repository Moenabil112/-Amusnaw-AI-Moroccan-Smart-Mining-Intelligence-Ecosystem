"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Badge, Eyebrow } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * AguelmousFaultMap — Window 06.
 * Public R&D demonstrator. Uses "Aguelmous" as the public label.
 * The internal license reference appears ONLY as a restricted data-room card.
 * A stylized fault-controlled terrain SVG with selectable interface layers.
 */
export function AguelmousFaultMap() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const w = content.windows.aguelmous;
  const [layer, setLayer] = useState(0);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
      {/* Fault model visual */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-graphite-950">
        <div className="pointer-events-none absolute end-2 top-2 z-10 rounded bg-black/50 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-graphite-300">
          {content.micro.faultLayers}
        </div>
        <svg viewBox="0 0 200 160" className="h-full w-full" role="img" aria-label="Stylized fault-controlled terrain model">
          <defs>
            <linearGradient id="terrain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1830" />
              <stop offset="100%" stopColor="#0a0a14" />
            </linearGradient>
          </defs>
          <rect width="200" height="160" fill="url(#terrain)" />
          {/* contour terrain */}
          {[0, 1, 2, 3, 4].map((r) => (
            <path
              key={`c-${r}`}
              d={`M0 ${40 + r * 22} Q 50 ${24 + r * 22} 100 ${40 + r * 22} T 200 ${40 + r * 22}`}
              fill="none"
              stroke="rgba(216,195,154,0.18)"
              strokeWidth="0.6"
            />
          ))}
          {/* fault lines (highlighted when layer === 1) */}
          {[
            "M30 10 L70 150",
            "M120 0 L150 160",
            "M60 160 L110 20",
          ].map((d, i) => (
            <motion.path
              key={`f-${i}`}
              d={d}
              stroke={layer === 1 ? "#c98a5a" : "rgba(124,108,240,0.55)"}
              strokeWidth={layer === 1 ? 1.4 : 0.8}
              strokeDasharray="3 2"
              fill="none"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
            />
          ))}
          {/* remote sensing signal points (layer 2) */}
          {layer >= 2 &&
            [[48, 70], [92, 96], [132, 60], [156, 110], [74, 120]].map(([x, y], i) => (
              <motion.circle
                key={`s-${i}`}
                cx={x}
                cy={y}
                r={layer === 3 ? 4 : 2.4}
                fill={layer === 3 ? "#7c6cf0" : "#d8c39a"}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              />
            ))}
        </svg>
        <div className="pointer-events-none absolute bottom-2 start-2 rounded bg-black/50 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-graphite-300">
          Aguelmous · fault model
        </div>
      </div>

      {/* Modules + targets + license card */}
      <div className="space-y-5">
        <div>
          <Eyebrow>Interface modules</Eyebrow>
          <div className="grid grid-cols-2 gap-2">
            {w.modules.map((m, i) => (
              <button
                key={m}
                type="button"
                onClick={() => setLayer(Math.min(i, 3))}
                className={cn(
                  "rounded-lg border px-2.5 py-2 text-start text-xs transition-colors",
                  layer === Math.min(i, 3)
                    ? "border-accent/50 bg-[color:var(--win-accent)]/[0.08] text-white"
                    : "border-white/10 bg-white/[0.02] text-graphite-200 hover:border-white/25",
                )}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow>Target mineral logic</Eyebrow>
          <div className="flex flex-wrap gap-2">
            {w.targets.map((t) => (
              <Badge key={t} tone="neutral">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Restricted internal license card — never a title, data-room layer only */}
        <div className="rounded-lg border border-dashed border-white/15 bg-black/30 p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-medium text-graphite-200">
              {w.licenseCard.label}
            </p>
            <Badge tone="warn">Restricted</Badge>
          </div>
          <p className="mt-1.5 text-[11px] text-graphite-500">{w.licenseCard.note}</p>
        </div>
      </div>
    </div>
  );
}
