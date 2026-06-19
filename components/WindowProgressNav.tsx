"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { WINDOW_NAV } from "@/lib/windowNav";
import { THEMES } from "@/lib/themes";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * WindowProgressNav — homepage side mini-map / top progress navigator.
 * Tracks which window is in view via IntersectionObserver and lets users jump
 * between windows. Hidden on detail routes; collapses to a slim top bar on
 * mobile.
 */
export function WindowProgressNav() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const { content } = useI18n();
  const [activeAnchor, setActiveAnchor] = useState<string>(WINDOW_NAV[0].anchor);

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const sections = WINDOW_NAV.map((w) => document.getElementById(w.anchor)).filter(
      Boolean,
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveAnchor(visible.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.1, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  if (!isHome) return null;

  const activeIndex = WINDOW_NAV.findIndex((w) => w.anchor === activeAnchor);
  const active = WINDOW_NAV[Math.max(0, activeIndex)];

  return (
    <>
      {/* Desktop side mini-map */}
      <nav
        aria-label="Window navigator"
        className="fixed end-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      >
        <ul className="flex flex-col items-end gap-2.5">
          {WINDOW_NAV.map((w) => {
            const isActive = w.anchor === activeAnchor;
            const color = THEMES[w.theme].accent;
            return (
              <li key={w.anchor} className="group flex items-center gap-2">
                <span
                  className={cn(
                    "pointer-events-none whitespace-nowrap rounded-md border border-white/10 bg-graphite-900/90 px-2 py-1 font-mono text-[10px] uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100",
                    isActive && "opacity-100",
                  )}
                  style={{ color }}
                >
                  {w.id} · {w.short}
                </span>
                <a
                  href={`#${w.anchor}`}
                  aria-label={`Window ${w.id} ${w.short}`}
                  aria-current={isActive ? "true" : undefined}
                  className="relative flex h-3 w-3 items-center justify-center"
                >
                  <span
                    className="rounded-full transition-all"
                    style={{
                      width: isActive ? 12 : 7,
                      height: isActive ? 12 : 7,
                      backgroundColor: isActive ? color : "rgba(255,255,255,0.25)",
                      boxShadow: isActive ? `0 0 12px ${color}` : undefined,
                    }}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile top progress bar */}
      <div className="fixed inset-x-0 top-14 z-30 lg:hidden">
        <div className="h-0.5 w-full bg-white/5">
          <motion.div
            className="h-full"
            style={{ backgroundColor: THEMES[active.theme].accent }}
            initial={false}
            animate={{
              width: `${((activeIndex + 1) / WINDOW_NAV.length) * 100}%`,
            }}
            transition={reduce ? { duration: 0 } : { duration: 0.3 }}
          />
        </div>
        <div className="flex items-center justify-between bg-graphite-950/80 px-4 py-1 backdrop-blur">
          <span className="font-mono text-[10px] uppercase tracking-widest text-graphite-400">
            {content.nav.progressLabel} {active.id}
          </span>
          <span
            className="text-[10px] font-medium"
            style={{ color: THEMES[active.theme].accent }}
          >
            {active.short}
          </span>
        </div>
      </div>
    </>
  );
}
