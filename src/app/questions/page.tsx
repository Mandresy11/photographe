import type { Metadata } from "next";
import QuestionsPageView from "@/components/pages/QuestionsPageView";

export const metadata: Metadata = {
  title: "Questions",
  description:
    "Les réponses aux questions fréquentes sur le style, les délais et la préparation de votre reportage de mariage.",
};

export default function QuestionsPage() {
  return (
    <main>
      <QuestionsPageView />
    </main>
  );
}
