"use client";

import { Preloader } from "./Preloader";
import { TopNav } from "./TopNav";
import { WindowProgressNav } from "./WindowProgressNav";
import { SiteFooter } from "./SiteFooter";

/**
 * SiteChrome — global shell wrapping every route.
 * Boot preloader, persistent top nav, scroll progress navigator, page content
 * and the footer (ecosystem sentence + disclaimer).
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      {/* Ambient theme tint behind content; recolored by WindowProgressNav. */}
      <div className="ambient-glow pointer-events-none fixed inset-0 z-0" aria-hidden />
      <TopNav />
      <WindowProgressNav />
      <main id="main" className="window-scroll relative z-10 pt-14">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
