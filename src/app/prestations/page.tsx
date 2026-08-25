import type { Metadata } from "next";
import PrestationsPageView from "@/components/pages/PrestationsPageView";

export const metadata: Metadata = {
  title: "Prestations",
  description:
    "Mariage, célébrations, photos d’identité et ePhoto agréée ANTS, photographie culinaire, mode et événement en Guadeloupe.",
};

export default function PrestationsPage() {
  return (
    <main>
      <PrestationsPageView />
    </main>
  );
}
