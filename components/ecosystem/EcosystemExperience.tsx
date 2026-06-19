"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ThemeTokenProvider } from "@/components/ThemeTokenProvider";
import { WindowFrame } from "@/components/windows/WindowFrame";
import { AnswerText, Badge, Eyebrow } from "@/components/ui";
import { Disclaimer } from "@/components/Disclaimer";
import { EcosystemOrbit } from "./EcosystemOrbit";
import { IntegratedWorkflow } from "./IntegratedWorkflow";
import { ECOSYSTEM_NODES } from "@/lib/ecosystem";
import { MINERAL_FAMILIES } from "@/lib/minerals";
import { THEMES } from "@/lib/themes";

/**
 * EcosystemExperience — the expanded "/ecosystem" institutional narrative.
 * Sequenced A–G so a Moroccan institutional stakeholder grasps it in ~90s.
 * Uses route-specific panel labels (never homepage window numbers), shows the
 * signal-to-decision workflow exactly once, and frames mineral scope as
 * coverage (not reserves) and value as HYRION-governed.
 */

// Institutional relevance order requested for this route.
const RELEVANCE_ORDER = [
  "moroccan-institutions",
  "cdg-strategic-capital",
  "governance-partners",
  "mining-operators",
  "industrial-partners",
  "technology-partners",
];

export function EcosystemExperience() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const page = content.ecosystemPage;
  const p = page.positioning;

  const orderedStakeholders = RELEVANCE_ORDER.map((id) =>
    content.stakeholders.find((s) => s.id === id),
  ).filter(Boolean) as typeof content.stakeholders;

  return (
    <div className="space-y-4 pb-4">
      {/* A — Executive Positioning (visually dominant) */}
      <ThemeTokenProvider theme="amusnaw" as="section" className="px-4 pt-6 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-graphite-900/50 shadow-window"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-4 py-2.5 sm:px-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-graphite-300">
              Ecosystem · 01 — {p.eyebrow}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-accent">
              <span
                className={`h-1.5 w-1.5 rounded-full bg-accent ${reduce ? "" : "animate-pulse-node"}`}
              />
              {content.windowStates.active}
            </span>
          </div>

          <div className="px-5 py-8 sm:px-9 sm:py-10">
            <p className="mb-2 text-sm font-semibold text-accent">{content.meta.name}</p>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-graphite-400">
              {content.meta.tagline}
            </p>
            {/* Dominant definition */}
            <h1 className="max-w-4xl text-balance text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-[2.5rem] lg:leading-[1.15]">
              {p.definition}
            </h1>
            <p className="mt-4 max-w-3xl text-pretty text-base font-medium text-accent/90 sm:text-lg">
              {p.supporting}
            </p>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {[
                { label: p.whatLabel, value: p.whatValue },
                { label: p.doesLabel, value: p.doesValue },
                { label: p.whyLabel, value: p.whyValue },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent/80">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-100">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </ThemeTokenProvider>

      {/* B — Ecosystem Layer Map */}
      <WindowFrame
        theme="amusnaw"
        label="Ecosystem · 02 — Layer Map"
        title={page.map.title}
        state={content.windowStates.active}
      >
        <AnswerText>{page.map.subtitle}</AnswerText>
        <div className="mt-7">
          <EcosystemOrbit />
        </div>

        {/* Concise executive layer summary (role + one short line) */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ECOSYSTEM_NODES.map((node, i) => {
            const copy = content.nodes[node.id];
            return (
              <motion.div
                key={node.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6% 0px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: THEMES[node.theme].accent }}
                  />
                  <h3 className="text-sm font-semibold text-white">{node.name}</h3>
                </div>
                <p className="mt-1 text-xs font-medium text-accent">
                  {copy?.role ?? node.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-graphite-300">
                  {copy?.short}
                </p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-6 rounded-xl border border-accent/25 bg-[color:var(--win-accent)]/[0.06] p-4 text-sm font-medium text-white">
          {page.map.connect}
        </p>
      </WindowFrame>

      {/* C — Signal-to-Decision Workflow (shown once, no repetition) */}
      <WindowFrame
        theme="amusnaw"
        label="Ecosystem · 03 — Signal-to-Decision"
        title={page.workflow.title}
        state={content.windowStates.active}
      >
        <AnswerText>{page.workflow.subtitle}</AnswerText>
        <div className="mt-7">
          <IntegratedWorkflow />
        </div>
      </WindowFrame>

      {/* D — Mineral Scope (coverage, not reserves) */}
      <WindowFrame
        theme="mineralValue"
        label="Ecosystem · 04 — Mineral Scope"
        title={page.mineralScope.title}
        state={content.windowStates.marketReference}
      >
        <div className="mb-4">
          <Badge tone="warn">{page.mineralScope.coverageBadge}</Badge>
        </div>
        <AnswerText>{page.mineralScope.explanation}</AnswerText>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {MINERAL_FAMILIES.map((family, i) => (
            <motion.div
              key={family.key}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <h3 className="text-sm font-semibold text-white">
                {content.familyLabels[family.key]}
              </h3>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {family.minerals.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-graphite-100"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/30 p-4">
          <p className="text-xs text-graphite-400">{page.mineralScope.linkageNote}</p>
          <Link
            href="/market-value"
            className="shrink-0 text-sm font-medium text-accent hover:underline"
          >
            {content.windows.marketValue.title} →
          </Link>
        </div>
      </WindowFrame>

      {/* E — Value Governance by HYRION (four grouped columns) */}
      <WindowFrame
        theme="hyrion"
        label="Ecosystem · 05 — Value Governance"
        title={page.valueGovernance.title}
        state={content.windowStates.governance}
      >
        <AnswerText>{page.valueGovernance.copy}</AnswerText>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {page.valueGovernance.groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{ duration: 0.4, delay: Math.min(gi * 0.08, 0.4) }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <p className="border-b border-white/10 pb-2 font-mono text-[10px] uppercase tracking-widest text-accent/80">
                {group.title}
              </p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-graphite-100"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Disclaimer className="mt-5" variant="compact" />
      </WindowFrame>

      {/* F — Institutional Relevance */}
      <WindowFrame
        theme="akanil"
        label="Ecosystem · 06 — Institutional Relevance"
        title={page.relevance.title}
        state={content.windowStates.gateway}
      >
        <AnswerText>{page.relevance.subtitle}</AnswerText>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {orderedStakeholders.map((s, i) => (
            <motion.div
              key={s.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black/30 font-mono text-[10px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-accent">{s.label}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-graphite-300">
                {s.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </WindowFrame>

      {/* G — Strategic Access / Next Actions */}
      <WindowFrame
        theme="strategicEntry"
        label="Ecosystem · 07 — Strategic Access"
        title={page.cta.title}
        state={content.windowStates.strategic}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {page.cta.actions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="group flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent/50"
            >
              <span className="text-sm font-semibold text-white">{action.label}</span>
              <span className="text-accent transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          ))}
        </div>
      </WindowFrame>
    </div>
  );
}
