import type { Metadata } from "next";
import PhotographerPageView from "@/components/pages/PhotographerPageView";

export const metadata: Metadata = {
  title: "Le photographe",
  description:
    "Photographe depuis 2007, Patrice Wilfrid mêle regard éditorial, spontanéité, contrastes et lumière pour raconter les mariages en Guadeloupe.",
};

export default function PhotographerPage() {
  return (
    <main>
      <PhotographerPageView />
    </main>
  );
}
