import { RouteShell } from "@/components/RouteShell";
import { WorkflowSection } from "@/components/sections";

export const metadata = { title: "Integrated Workflow" };

export default function Page() {
  return (
    <RouteShell>
      <WorkflowSection full={false} />
    </RouteShell>
  );
}
