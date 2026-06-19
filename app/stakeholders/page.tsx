import { RouteShell } from "@/components/RouteShell";
import { StakeholdersSection } from "@/components/sections";

export const metadata = { title: "Stakeholder Answers" };

export default function Page() {
  return (
    <RouteShell>
      <StakeholdersSection full={false} />
    </RouteShell>
  );
}
