import { RouteShell } from "@/components/RouteShell";
import { EcosystemExperience } from "@/components/ecosystem/EcosystemExperience";

export const metadata = {
  title: "Ecosystem",
  description:
    "What Amusnaw AI is, why Morocco needs it, what each layer does, and how the ecosystem moves from exploration signal to governed institutional decision.",
};

export default function Page() {
  return (
    <RouteShell>
      <EcosystemExperience />
    </RouteShell>
  );
}
