import type { Metadata } from "next";
import AboutPageView from "@/components/pages/AboutPageView";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez le parcours et le regard de Patrice Wilfrid, photographe de mariage en Guadeloupe depuis 2007.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageView />
    </main>
  );
}
