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
      <TopNav />
      <WindowProgressNav />
      <main id="main" className="window-scroll pt-14">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
