import type { Metadata } from "next";
import InvisiblePageView from "@/components/pages/InvisiblePageView";

export const metadata: Metadata = {
  title: "L’invisible",
  description:
    "Les gestes, détails et instants discrets qui donnent toute sa vérité à une journée de mariage.",
};

export default function InvisiblePage() {
  return (
    <main>
      <InvisiblePageView />
    </main>
  );
}
