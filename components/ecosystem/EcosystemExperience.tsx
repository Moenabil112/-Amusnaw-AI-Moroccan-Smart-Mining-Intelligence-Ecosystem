"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ThemeTokenProvider } from "@/components/ThemeTokenProvider";
import { WindowFrame } from "@/components/windows/WindowFrame";
import { AnswerText, Eyebrow } from "@/components/ui";
import { EcosystemOrbit } from "./EcosystemOrbit";
import { EcosystemSignalCards } from "./EcosystemSignalCards";
import { IntegratedWorkflow } from "./IntegratedWorkflow";
import { HyrionValueGovernance } from "@/components/governance/HyrionValueGovernance";

/**
 * EcosystemExperience — the expanded "/ecosystem" institutional explanation.
 * Follows the A–G narrative order so a Moroccan institutional stakeholder can
 * understand Amusnaw AI in roughly 90 seconds. Reuses the existing window
 * components (orbit, workflow, HYRION governance) — no new architecture.
 */
export function EcosystemExperience() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const page = content.ecosystemPage;

  return (
    <div className="space-y-4 pb-4">
      {/* A. Page intro — What is Amusnaw AI? / Why it exists */}
      <ThemeTokenProvider
        theme="amusnaw"
        as="section"
        className="px-4 pt-6 sm:px-6"
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-graphite-900/50 p-6 shadow-window sm:p-9"
        >
          <Eyebrow>{page.intro.eyebrow}</Eyebrow>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {content.meta.name}
            <span className="mt-2 block bg-gradient-to-r from-gold via-gold-soft to-teal-bright bg-clip-text text-xl font-medium text-transparent sm:text-2xl">
              {content.meta.tagline}
            </span>
          </h1>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <h2 className="text-lg font-semibold text-accent">
                {page.intro.whatIsTitle}
              </h2>
              <p className="mt-2 text-pretty leading-relaxed text-graphite-200">
                {page.intro.whatIs}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <h2 className="text-lg font-semibold text-accent">
                {page.intro.whyTitle}
              </h2>
              <p className="mt-2 text-pretty leading-relaxed text-graphite-200">
                {page.intro.why}
              </p>
            </div>
          </div>
        </motion.div>
      </ThemeTokenProvider>

      {/* B. Ecosystem map — six layers + clear roles */}
      <WindowFrame
        theme="amusnaw"
        windowId="01"
        question={page.map.title}
        title={content.windows.ecosystem.title}
      >
        <AnswerText>{page.map.subtitle}</AnswerText>
        <div className="mt-7">
          <EcosystemOrbit />
        </div>
      </WindowFrame>

      {/* C. Signal-to-decision workflow */}
      <WindowFrame theme="amusnaw" windowId="11" title={page.workflow.title}>
        <AnswerText>{page.workflow.subtitle}</AnswerText>
        <div className="mt-7">
          <IntegratedWorkflow />
        </div>
        <div className="mt-8">
          <Eyebrow>{content.micro.signalToDecision}</Eyebrow>
          <EcosystemSignalCards />
        </div>
      </WindowFrame>

      {/* D. Mineral scope */}
      <WindowFrame theme="mineralValue" windowId="03" title={page.mineralScope.title}>
        <AnswerText>{page.mineralScope.intro}</AnswerText>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {page.mineralScope.families.map((family, i) => (
            <motion.div
              key={family}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.4) }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black/30 font-mono text-[11px] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-graphite-100">{family}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/30 p-4">
          <p className="text-xs text-graphite-400">{page.mineralScope.note}</p>
          <Link
            href="/market-value"
            className="shrink-0 text-sm font-medium text-accent hover:underline"
          >
            {content.windows.marketValue.title} →
          </Link>
        </div>
      </WindowFrame>

      {/* E. Value-governance logic */}
      <WindowFrame theme="hyrion" windowId="08" title={page.valueGovernance.title}>
        <AnswerText>{page.valueGovernance.copy}</AnswerText>
        <div className="mt-7">
          <HyrionValueGovernance />
        </div>
      </WindowFrame>

      {/* F. Institutional relevance */}
      <WindowFrame theme="akanil" windowId="13" title={page.relevance.title}>
        <AnswerText>{page.relevance.subtitle}</AnswerText>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.stakeholders.map((s, i) => (
            <motion.div
              key={s.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <h3 className="text-sm font-semibold text-accent">{s.label}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-graphite-300">
                {s.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </WindowFrame>

      {/* G. Call to action */}
      <WindowFrame theme="strategicEntry" windowId="15" title={page.cta.title}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
