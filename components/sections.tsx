"use client";

import { useI18n } from "@/lib/i18n";
import { EcosystemWindow } from "@/components/windows/EcosystemWindow";
import { KineticGridHero } from "@/components/ecosystem/KineticGridHero";
import { EcosystemOrbit } from "@/components/ecosystem/EcosystemOrbit";
import { EcosystemSignalCards } from "@/components/ecosystem/EcosystemSignalCards";
import { ProblemFlow } from "@/components/ecosystem/ProblemFlow";
import { Eyebrow } from "@/components/ui";
import { IntegratedWorkflow } from "@/components/ecosystem/IntegratedWorkflow";
import { MineralUniverse } from "@/components/minerals/MineralUniverse";
import { MarketValueBoard } from "@/components/minerals/MarketValueBoard";
import { StrategicMineralsMatrix } from "@/components/minerals/StrategicMineralsMatrix";
import { QassasEnginePanel } from "@/components/windows/QassasEnginePanel";
import { AguelmousFaultMap } from "@/components/windows/AguelmousFaultMap";
import { IsseksiCopperValueProduct } from "@/components/windows/IsseksiCopperValueProduct";
import { HyrionValueGovernance } from "@/components/governance/HyrionValueGovernance";
import { ZyntraIntelligenceStack } from "@/components/windows/ZyntraIntelligenceStack";
import { AkanilGatewayPanel } from "@/components/windows/AkanilGatewayPanel";
import { StakeholderTabs } from "@/components/windows/StakeholderTabs";
import { SecureDataRoom } from "@/components/governance/SecureDataRoom";
import { StrategicEntryForm } from "@/components/windows/StrategicEntryForm";

/**
 * Section registry — one component per window. The homepage renders them all in
 * sequence; detail routes render a single section (reuse in expanded mode).
 *
 * `full` toggles near-full-screen window height (homepage scroll OS feel).
 */
type SectionProps = { full?: boolean };

export function BootSection() {
  return <KineticGridHero />;
}

export function EcosystemSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="amusnaw" copy={content.windows.ecosystem} state={content.windowStates.active} fullScreen={full} anchorId="ecosystem">
      <EcosystemOrbit />
      <div className="mt-10">
        <Eyebrow>{content.micro.signalToDecision}</Eyebrow>
        <EcosystemSignalCards />
      </div>
    </EcosystemWindow>
  );
}

export function ProblemSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="amusnaw" copy={content.windows.problem} state={content.windowStates.active} fullScreen={full} anchorId="problem">
      <ProblemFlow />
    </EcosystemWindow>
  );
}

export function MineralsSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="mineralValue" copy={content.windows.minerals} state={content.windowStates.marketReference} fullScreen={full} anchorId="minerals">
      <MineralUniverse />
    </EcosystemWindow>
  );
}

export function MarketValueSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="mineralValue" copy={content.windows.marketValue} state={content.windowStates.marketReference} fullScreen={full} showMessage={false} anchorId="market-value">
      <MarketValueBoard />
    </EcosystemWindow>
  );
}

export function QassasSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="qassas" copy={content.windows.qassas} state={content.windowStates.intelligence} fullScreen={full} anchorId="qassas">
      <QassasEnginePanel />
    </EcosystemWindow>
  );
}

export function AguelmousSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="aguelmous" copy={content.windows.aguelmous} state={content.windowStates.rnd} fullScreen={full} anchorId="aguelmous">
      <AguelmousFaultMap />
    </EcosystemWindow>
  );
}

export function IsseksiSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="isseksi" copy={content.windows.isseksi} state={content.windowStates.evidence} fullScreen={full} showMessage={false} anchorId="isseksi">
      <IsseksiCopperValueProduct />
    </EcosystemWindow>
  );
}

export function HyrionSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="hyrion" copy={content.windows.hyrion} state={content.windowStates.governance} fullScreen={full} anchorId="hyrion">
      <HyrionValueGovernance />
    </EcosystemWindow>
  );
}

export function ZyntraSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="zyntra" copy={content.windows.zyntra} state={content.windowStates.technology} fullScreen={full} anchorId="zyntra">
      <ZyntraIntelligenceStack />
    </EcosystemWindow>
  );
}

export function AkanilSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="akanil" copy={content.windows.akanil} state={content.windowStates.gateway} fullScreen={full} anchorId="akanil">
      <AkanilGatewayPanel />
    </EcosystemWindow>
  );
}

export function WorkflowSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="amusnaw" copy={content.windows.workflow} state={content.windowStates.active} fullScreen={full} showMessage={false} anchorId="workflow">
      <IntegratedWorkflow />
    </EcosystemWindow>
  );
}

export function MatrixSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="mineralValue" copy={content.windows.matrix} state={content.windowStates.marketReference} fullScreen={full} anchorId="matrix">
      <StrategicMineralsMatrix />
    </EcosystemWindow>
  );
}

export function StakeholdersSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="akanil" copy={content.windows.stakeholders} state={content.windowStates.active} fullScreen={full} anchorId="stakeholders">
      <StakeholderTabs />
    </EcosystemWindow>
  );
}

export function DataRoomSection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="dataRoom" copy={content.windows.dataRoom} state={content.windowStates.restricted} fullScreen={full} anchorId="data-room">
      <SecureDataRoom />
    </EcosystemWindow>
  );
}

export function StrategicEntrySection({ full = true }: SectionProps) {
  const { content } = useI18n();
  return (
    <EcosystemWindow theme="strategicEntry" copy={content.windows.strategicEntry} state={content.windowStates.strategic} fullScreen={full} showMessage={false} anchorId="strategic-entry">
      <StrategicEntryForm />
    </EcosystemWindow>
  );
}
