import type { Metadata } from "next";
import PrestationsPageView from "@/components/pages/PrestationsPageView";

export const metadata: Metadata = {
  title: "Prestations",
  description:
    "Mariage, célébrations, séance engagement, mode et événement : découvrez les prestations photo de Patrice Wilfrid en Guadeloupe.",
};

export default function PrestationsPage() {
  return (
    <main>
      <PrestationsPageView />
    </main>
  );
}
