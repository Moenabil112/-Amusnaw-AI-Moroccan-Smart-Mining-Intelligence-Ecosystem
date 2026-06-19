"use client";

import {
  BootSection,
  EcosystemSection,
  ProblemSection,
  MineralsSection,
  MarketValueSection,
  QassasSection,
  AguelmousSection,
  IsseksiSection,
  HyrionSection,
  ZyntraSection,
  AkanilSection,
  WorkflowSection,
  MatrixSection,
  StakeholdersSection,
  DataRoomSection,
  StrategicEntrySection,
} from "@/components/sections";

/**
 * Homepage — the scroll-driven, window-based ecosystem operating system.
 * Renders all 16 windows (00–15) in sequence. Each window is a near full-screen
 * themed panel; the WindowProgressNav tracks the active window.
 */
export default function HomePage() {
  return (
    <div className="window-scroll">
      <BootSection />
      <EcosystemSection />
      <ProblemSection />
      <MineralsSection />
      <MarketValueSection />
      <QassasSection />
      <AguelmousSection />
      <IsseksiSection />
      <HyrionSection />
      <ZyntraSection />
      <AkanilSection />
      <WorkflowSection />
      <MatrixSection />
      <StakeholdersSection />
      <DataRoomSection />
      <StrategicEntrySection />
    </div>
  );
}
