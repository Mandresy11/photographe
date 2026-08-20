import type { Metadata } from "next";
import PhotographerPageView from "@/components/pages/PhotographerPageView";

export const metadata: Metadata = {
  title: "Le photographe",
  description:
    "Rencontrez Patrice Wilfrid et découvrez son regard éditorial, naturel et discret sur le mariage.",
};

export default function PhotographerPage() {
  return (
    <main>
      <PhotographerPageView />
    </main>
  );
}
