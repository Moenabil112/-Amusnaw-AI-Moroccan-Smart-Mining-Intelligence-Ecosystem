import type { PriceSource } from "@/types";

/**
 * API-READY PRICE SOURCE LAYER.
 *
 * This file is the single integration point for future live market data.
 * In v1 every `price` is intentionally `null` and `dateChecked` is "pending".
 *
 * To wire a real source later:
 *   1. Replace `getPriceSources()` with a fetch to your API / Supabase table.
 *   2. Keep the PriceSource schema (sourceName, sourceUrl, dateChecked,
 *      commodity, unit, price, currency, benchmarkType, notes).
 *   3. The Market Value Board reads `price` and `dateChecked` only when present;
 *      otherwise it renders the placeholder strings from the mineral catalogue.
 *
 * NEVER hardcode a "current price" as a fact without source + unit + date.
 */
export const PRICE_SOURCES: PriceSource[] = [
  {
    sourceName: "Source required",
    sourceUrl: "",
    dateChecked: "pending",
    commodity: "Copper",
    unit: "USD/t",
    price: null,
    currency: "USD",
    benchmarkType: "LME-style benchmark (to be wired)",
    notes: "Indicative market reference only. Not asset valuation.",
  },
  {
    sourceName: "Source required",
    sourceUrl: "",
    dateChecked: "pending",
    commodity: "Gold",
    unit: "USD/oz",
    price: null,
    currency: "USD",
    benchmarkType: "Spot benchmark (to be wired)",
    notes: "Indicative market reference only. Not asset valuation.",
  },
];

/**
 * Returns the price source for a commodity, or null if unwired.
 * Replace the body with a real async data call when integrating an API.
 */
export function getPriceSource(commodity: string): PriceSource | null {
  return (
    PRICE_SOURCES.find(
      (p) => p.commodity.toLowerCase() === commodity.toLowerCase(),
    ) ?? null
  );
}

export function isPriceWired(source: PriceSource | null): boolean {
  return Boolean(source && source.price);
}
