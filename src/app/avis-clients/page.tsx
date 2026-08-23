import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import GoogleReassurance, {
  GoogleReassuranceHeader,
} from "@/components/GoogleReassurance";

export const metadata: Metadata = {
  title: "Avis clients",
  description:
    "Découvrez les avis de couples ayant confié leur mariage à Patrice Wilfrid, photographe en Guadeloupe.",
};

export default function AvisClientsPage() {
  return (
    <main>
      <GoogleReassuranceHeader />
      <GoogleReassurance />
      <Testimonials hideLabel />
    </main>
  );
}
