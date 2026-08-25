import type { Metadata } from "next";
import StoriesPageView from "@/components/pages/StoriesPageView";

export const metadata: Metadata = {
  title: "Histoires de mariage",
  description:
    "Découvrez des histoires de mariage photographiées en Guadeloupe par Patrice Wilfrid : émotions, détails et instants vrais.",
};

export default function StoriesPage() {
  return <StoriesPageView />;
}
