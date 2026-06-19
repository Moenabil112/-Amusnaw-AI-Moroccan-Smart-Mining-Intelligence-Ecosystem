"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ECOSYSTEM_NODES } from "@/lib/ecosystem";

/**
 * StrategicEntryForm — Window 15.
 * NDA-gated strategic entry. No backend in v1: submission is captured in local
 * component state and confirmed. The handler is the single integration point
 * for a future API / Supabase insert.
 */
export function StrategicEntryForm() {
  const { content } = useI18n();
  const f = content.windows.strategicEntry.fields;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO(api): POST form data to /api/strategic-entry or Supabase table.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-accent/40 bg-[color:var(--win-accent)]/[0.08] p-8 text-center"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 text-2xl text-accent">
          ✓
        </div>
        <p className="text-lg font-semibold text-white">
          {content.windows.strategicEntry.success}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-medium text-accent hover:underline"
        >
          ← {content.windows.strategicEntry.title}
        </button>
      </motion.div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="name" label={f.name} required />
          <Field id="institution" label={f.institution} required />
          <Field id="role" label={f.role} />
          <Field id="email" label={f.email} type="email" required />
        </div>

        <div>
          <label
            htmlFor="layer"
            className="mb-1.5 block text-sm font-medium text-graphite-200"
          >
            {f.layer}
          </label>
          <select
            id="layer"
            name="layer"
            className="w-full rounded-lg border border-white/10 bg-graphite-950 px-3 py-2.5 text-sm text-white focus:border-accent focus:outline-none"
          >
            {ECOSYSTEM_NODES.map((n) => (
              <option key={n.id} value={n.id}>
                {n.name} — {n.role}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-graphite-200"
          >
            {f.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-lg border border-white/10 bg-graphite-950 px-3 py-2.5 text-sm text-white focus:border-accent focus:outline-none"
          />
        </div>

        <div className="space-y-2.5">
          <Checkbox id="nda" label={f.requestNda} />
          <Checkbox id="review" label={f.requestReview} />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-graphite-950 transition-transform hover:-translate-y-0.5 sm:w-auto"
        >
          {content.windows.strategicEntry.submit}
        </button>
      </form>

      {/* Framing aside — no funding language */}
      <aside className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent/80">
          Co-Building Window
        </p>
        <p className="mt-3 text-sm leading-relaxed text-graphite-200">
          {content.windows.strategicEntry.noFunding}
        </p>
        <ul className="mt-4 space-y-2 text-sm text-graphite-300">
          {[
            "Strategic Entry",
            "Institutional Access",
            "Governance Review",
            "Partner Evaluation",
            "NDA-Gated Access",
            "Strategic Review Session",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-graphite-200"
      >
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-lg border border-white/10 bg-graphite-950 px-3 py-2.5 text-sm text-white placeholder:text-graphite-500 focus:border-accent focus:outline-none"
      />
    </div>
  );
}

function Checkbox({ id, label }: { id: string; label: string }) {
  return (
    <label htmlFor={id} className="flex items-center gap-2.5 text-sm text-graphite-200">
      <input
        id={id}
        name={id}
        type="checkbox"
        className="h-4 w-4 rounded border-white/20 bg-graphite-950 text-accent accent-[color:var(--win-accent)] focus:ring-accent"
      />
      {label}
    </label>
  );
}
