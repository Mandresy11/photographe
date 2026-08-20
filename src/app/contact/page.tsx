import type { Metadata } from "next";
import ContactPageView from "@/components/pages/ContactPageView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Patrice Wilfrid pour raconter votre mariage en Guadeloupe avec des images éditoriales et spontanées.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactPageView />
    </main>
  );
}
