"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ECOSYSTEM_NODES } from "@/lib/ecosystem";
import { THEMES } from "@/lib/themes";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * EcosystemOrbit — Window 01 interactive orbit.
 * Six layer nodes orbit the central Amusnaw AI hub. Hover/focus a node to
 * reveal its role card and illuminate its connector to the hub.
 */
export function EcosystemOrbit() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  const radius = 38; // % of the orbit box
  const center = 50;

  const positioned = ECOSYSTEM_NODES.map((node) => {
    const rad = (node.angle - 90) * (Math.PI / 180);
    return {
      ...node,
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    };
  });

  const activeNode = positioned.find((n) => n.id === active) ?? null;

  return (
    <div>
      {/* Desktop / tablet: interactive orbit. Hidden on small screens where the
          radial layout would crowd labels — replaced by stacked cards below. */}
      <div className="hidden gap-8 sm:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      {/* Orbit canvas */}
      <div className="relative mx-auto aspect-square w-full max-w-xl">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          <circle cx={50} cy={50} r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={0.3} />
          {positioned.map((node) => {
            const isActive = active === node.id;
            return (
              <line
                key={`conn-${node.id}`}
                x1={50}
                y1={50}
                x2={node.x}
                y2={node.y}
                stroke={isActive ? THEMES[node.theme].accent : "rgba(255,255,255,0.10)"}
                strokeWidth={isActive ? 0.7 : 0.3}
                style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
              />
            );
          })}
        </svg>

        {/* Rotating orbit ring */}
        {!reduce && (
          <motion.div
            className="absolute inset-[12%] rounded-full border border-dashed border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Central hub */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div
            className="flex h-20 w-20 flex-col items-center justify-center rounded-full border border-white/15 bg-graphite-900/90 text-center backdrop-blur sm:h-24 sm:w-24"
            style={{ boxShadow: "0 0 40px -8px rgba(200,164,92,0.45)" }}
          >
            <span className="text-xs font-semibold text-white sm:text-sm">Amusnaw</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-accent">AI · HUB</span>
          </div>
        </div>

        {/* Nodes */}
        {positioned.map((node, i) => {
          const tokens = THEMES[node.theme];
          const isActive = active === node.id;
          return (
            <motion.button
              key={node.id}
              type="button"
              onMouseEnter={() => setActive(node.id)}
              onFocus={() => setActive(node.id)}
              onClick={() => setActive(node.id)}
              aria-label={`${node.name} — ${node.role}`}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              initial={reduce ? false : { opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              whileHover={reduce ? undefined : { scale: 1.08 }}
            >
              <span className="relative flex flex-col items-center">
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border bg-graphite-900/90 backdrop-blur transition-all sm:h-14 sm:w-14",
                    isActive ? "border-2" : "border border-white/15",
                  )}
                  style={{
                    borderColor: isActive ? tokens.accent : undefined,
                    boxShadow: isActive ? `0 0 28px -4px ${tokens.glow}` : undefined,
                  }}
                >
                  {/* Single-letter monogram mark (not a truncated label) */}
                  <span
                    className="font-mono text-base font-semibold sm:text-lg"
                    style={{ color: tokens.accent }}
                    aria-hidden
                  >
                    {node.name.charAt(0)}
                  </span>
                </span>
                {/* Full, untruncated node name */}
                <span
                  className={cn(
                    "absolute top-full mt-1 whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-tight transition-colors sm:text-[11px]",
                    isActive ? "bg-graphite-900/90 text-white" : "text-graphite-300",
                  )}
                >
                  {node.name}
                </span>
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Role detail panel */}
      <div className="min-h-[14rem]">
        <motion.div
          key={activeNode?.id ?? "intro"}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
        >
          {activeNode ? (
            <>
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: THEMES[activeNode.theme].accent }}
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-graphite-300">
                  {THEMES[activeNode.theme].label}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">{activeNode.name}</h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {content.nodes[activeNode.id]?.role ?? activeNode.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-graphite-200">
                {content.nodes[activeNode.id]?.description ?? activeNode.description}
              </p>
              {content.nodes[activeNode.id]?.output ? (
                <p className="mt-3 rounded-lg border border-white/10 bg-black/30 p-3 text-xs leading-relaxed text-graphite-300">
                  <span className="font-mono uppercase tracking-widest text-accent/80">
                    {content.global.output}:{" "}
                  </span>
                  {content.nodes[activeNode.id].output}
                </p>
              ) : null}
              <Link
                href={activeNode.route}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                {content.global.explore} →
              </Link>
            </>
          ) : (
            <p className="text-sm leading-relaxed text-graphite-300">
              {content.windows.ecosystem.answer}
            </p>
          )}
        </motion.div>

        {/* Node legend */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {positioned.map((node) => (
            <button
              key={`legend-${node.id}`}
              type="button"
              onMouseEnter={() => setActive(node.id)}
              onClick={() => setActive(node.id)}
              className={cn(
                "flex items-center gap-2 rounded-lg border px-2.5 py-2 text-start text-xs transition-colors",
                active === node.id
                  ? "border-accent/50 bg-white/[0.06]"
                  : "border-white/10 hover:border-white/20",
              )}
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: THEMES[node.theme].accent }}
              />
              <span className="truncate text-graphite-200">{node.name}</span>
            </button>
          ))}
        </div>
      </div>
      </div>

      {/* Mobile: clean stacked layer cards (no compressed labels) */}
      <div className="space-y-2.5 sm:hidden">
        {positioned.map((node) => {
          const tokens = THEMES[node.theme];
          const copy = content.nodes[node.id];
          return (
            <Link
              key={`m-${node.id}`}
              href={node.route}
              className="block rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 font-mono text-sm font-semibold"
                  style={{ color: tokens.accent }}
                >
                  {node.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{node.name}</p>
                  <p className="text-xs text-accent">{copy?.role ?? node.role}</p>
                </div>
              </div>
              {copy?.output ? (
                <p className="mt-2.5 text-xs leading-relaxed text-graphite-300">
                  <span className="font-mono uppercase tracking-widest text-accent/80">
                    {content.global.output}:{" "}
                  </span>
                  {copy.output}
                </p>
              ) : null}
            </Link>
          );
        })}
      </div>

      {/* Directional relationship hints (all sizes) */}
      <div className="mt-6 space-y-2 rounded-xl border border-white/10 bg-black/30 p-4">
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs font-medium text-graphite-200">
          {["QASSAS", "Aguelmous", "Isseksi", "HYRION", "Amusnaw AI"].map((n, i, arr) => (
            <span key={n} className="inline-flex items-center gap-1.5">
              <span className="text-white">{n}</span>
              {i < arr.length - 1 ? <span className="text-accent">→</span> : null}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-graphite-400">
          <span>
            <span className="text-accent">ZYNTRA</span> enables all layers
          </span>
          <span>
            <span className="text-accent">AKANIL</span> frames institutional entry
          </span>
        </div>
      </div>
    </div>
  );
}
