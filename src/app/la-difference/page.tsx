import type { Metadata } from "next";
import DifferencePageView from "@/components/pages/DifferencePageView";

export const metadata: Metadata = {
  title: "La différence",
  description:
    "Une approche photographique naturelle : détendre, guider avec mesure et saisir ce qui ne se rejoue pas.",
};

export default function DifferencePage() {
  return (
    <main>
      <DifferencePageView />
    </main>
  );
}
