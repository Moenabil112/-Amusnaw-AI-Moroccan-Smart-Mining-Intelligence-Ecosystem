# Amusnaw AI — Moroccan Smart Mining Intelligence Ecosystem

A premium, window-based **operating-system-style interface** for Moroccan mineral
intelligence. Every section is a "window" answering one strategic, technical,
economic, or governance question. Built as an integrated ecosystem connecting
exploration intelligence, mineral value intelligence, field validation, R&D
demonstrators, governance, technology enablement, and institutional
decision-making.

> **QASSAS** generates the exploration intelligence. **Aguelmous** demonstrates
> Moroccan smart fault R&D. **Isseksi** proves field and industrial readiness.
> **HYRION** governs the evidence and value logic. **ZYNTRA** enables the
> technology stack. **AKANIL** frames the institutional gateway. **Amusnaw AI**
> connects them into one Moroccan smart mining intelligence ecosystem.

---

## Tech stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript**
- **Tailwind CSS** (custom institutional palette + per-window theme tokens)
- **Framer Motion** (boot animation, orbit reveal, window transitions,
  pipeline illumination, hover micro-interactions)
- Mobile-first, responsive, **RTL-ready Arabic** support
- **Tri-lingual content** structure: English (default), Arabic, French
- No backend in v1 — Data Room and Market Value Board are **API-ready**

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # eslint (next/core-web-vitals)
npm run build    # production build
npm start        # serve the production build
```

---

## Project structure

```text
app/                      App Router routes (one per window + homepage)
  layout.tsx              Root layout, fonts, I18nProvider, SiteChrome
  page.tsx                Homepage — all 16 windows in scroll sequence
  globals.css             Base styles, grid, glow, RTL + reduced-motion
  ecosystem/ minerals/ market-value/ qassas/ aguelmous/ isseksi/
  hyrion/ zyntra/ akanil/ workflow/ stakeholders/ data-room/
  strategic-entry/        Detail routes (reuse the same section components)

components/
  SiteChrome / TopNav / WindowProgressNav / SiteFooter / Preloader
  ThemeTokenProvider      Applies per-window CSS variables to a subtree
  LanguageSwitcher        EN / AR / FR (flips document dir to RTL for AR)
  LogoBlock               Placeholder brand mark (no copyrighted assets)
  ui.tsx                  Badge, DataCard, AnswerText, MessageCallout, Eyebrow
  Disclaimer.tsx          Required global financial disclaimer
  sections.tsx            One section component per window (reused everywhere)
  RouteShell.tsx          Detail-route wrapper (back link + expanded mode)
  windows/                WindowFrame, EcosystemWindow, ModuleGrid,
                          QassasEnginePanel, AguelmousFaultMap,
                          IsseksiCopperValueProduct, ZyntraIntelligenceStack,
                          AkanilGatewayPanel, StakeholderTabs, StrategicEntryForm
  ecosystem/              KineticGridHero, EcosystemOrbit, ProblemFlow,
                          IntegratedWorkflow
  minerals/               MineralUniverse, MarketValueBoard, MineralValueCard,
                          StrategicMineralsMatrix
  governance/             HyrionValueGovernance, SecureDataRoom

content/                  Tri-lingual copy (NO text hardcoded in components)
  types.ts                SiteContent shape shared by all locales
  en.ts                   English — source of truth for structure
  ar.ts                   Arabic — RTL-ready
  fr.ts                   French
  index.ts                CONTENT map, LOCALES, getContent()

lib/
  themes.ts               Per-window theme tokens + CSS-var mapping
  i18n.tsx                I18nProvider + useI18n (locale, dir, content)
  minerals.ts             Mineral families + catalogue (placeholder values)
  priceSources.ts         API-ready price-source layer (single integration point)
  ecosystem.ts            Orbit nodes, strategic matrix, data-room documents
  windowNav.ts            The 16 windows for the scroll progress navigator
  utils.ts                cn(), cssVars()

types/                    Shared TypeScript types
public/                   Static assets (placeholder)
```

---

## The 16 windows

| # | Window | Theme | Route |
|---|--------|-------|-------|
| 00 | System Boot | Amusnaw | `/` (hero) |
| 01 | Ecosystem Map | Amusnaw | `/ecosystem` |
| 02 | The Problem Layer | Amusnaw | `/#problem` |
| 03 | Mineral Universe | Mineral Value | `/minerals` |
| 04 | Market Value Board | Mineral Value | `/market-value` |
| 05 | QASSAS Targeting Engine | QASSAS | `/qassas` |
| 06 | Aguelmous Smart Fault R&D | Aguelmous | `/aguelmous` |
| 07 | Isseksi Copper Value Product | Isseksi | `/isseksi` |
| 08 | HYRION Value Governance | HYRION | `/hyrion` |
| 09 | ZYNTRA Intelligence Stack | ZYNTRA | `/zyntra` |
| 10 | AKANIL Strategic Gateway | AKANIL | `/akanil` |
| 11 | Integrated Workflow | Amusnaw | `/workflow` |
| 12 | Strategic Minerals Matrix | Mineral Value | `/#matrix` |
| 13 | Stakeholder Answers | AKANIL | `/stakeholders` |
| 14 | Secure Data Room Preview | Data Room | `/data-room` |
| 15 | Strategic Entry Window | Strategic Entry | `/strategic-entry` |

---

## Where to update content & prices

### Text / copy (all three languages)
Edit `content/en.ts`, `content/ar.ts`, `content/fr.ts`. The shape is enforced by
`content/types.ts`, so all locales stay structurally aligned. **No institutional
copy is hardcoded inside components** — everything reads from `useI18n()`.

### Mineral catalogue & families
Edit `lib/minerals.ts` (`MINERALS`, `MINERAL_FAMILIES`). Market values are
**placeholders** (`"Dynamic benchmark"`, `"API-ready"`, `"Source required"`,
`"Date checked: pending"`) — never live facts.

### Market prices (API integration)
`lib/priceSources.ts` is the **single integration point**. In v1 every `price`
is `null`. To wire a real source:

1. Replace `getPriceSource()` with a fetch to your API / Supabase table.
2. Keep the `PriceSource` schema:
   `sourceName, sourceUrl, dateChecked, commodity, unit, price, currency, benchmarkType, notes`.
3. `MineralValueCard` automatically shows the sourced `price` + `dateChecked`
   once present; otherwise it renders the catalogue placeholders.

> **Never** hardcode a "current price" as a fact without a clear source, unit
> and date checked.

### Theme tokens
Edit `lib/themes.ts` — one palette per window (`accent`, `secondary`,
`tertiary`, `base`, `glow`). `ThemeTokenProvider` exposes them as the CSS
variables `--win-accent`, `--win-secondary`, `--win-tertiary`, `--win-base`,
`--win-glow`, consumed by utilities like `.text-accent` and `.win-glow`.

---

## Governance & financial-language controls

This interface enforces responsible financial language:

- All value indicators are framed as **indicative market references**, never
  asset/reserve valuation, revenue, or investment return.
- **HYRION** (Window 08) is the control layer that classifies every number
  (Market Reference, Evidence Linked, Assay Supported, … Not Reserve Valuation,
  Decision-Ready).
- The required global disclaimer renders in the footer and on every
  value-bearing window via `components/Disclaimer.tsx`.
- **Strategic Entry** uses co-building / institutional-access language — never
  funding/fundraising language.

### Naming rule
**Aguelmous** is the public-facing name for the Smart Fault Exploration R&D
Demonstrator. The internal license number is **never** a public title, window
name, node, or hero label — it appears only as a restricted *Internal License
Reference — Data Room Layer* card.

---

## Accessibility & performance

- Semantic headings, `aria` roles/labels, keyboard-friendly buttons and tabs.
- Visible focus rings; readable dark-mode contrast.
- `prefers-reduced-motion` respected globally (animations collapse to instant).
- Motion is intentionally restrained on mobile to avoid animation overload.
- No copyrighted images — geometric/SVG visuals and placeholder logo blocks only.

---

## Future integration (v2)

- Supabase / Auth gating for the **Secure Data Room** (access statuses already
  modelled in `lib/ecosystem.ts`).
- Live market data via `lib/priceSources.ts`.
- `StrategicEntryForm` submit handler (`components/windows/StrategicEntryForm.tsx`)
  is the single place to POST to an API / Supabase table.
```
