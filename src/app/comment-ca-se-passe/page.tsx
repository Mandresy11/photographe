import type { Metadata } from "next";
import DeroulementDetailed from "@/components/DeroulementDetailed";
import BookingProcess from "@/components/BookingProcess";

export const metadata: Metadata = {
  title: "Comment ça se passe",
  description:
    "Le déroulement du jour J et les étapes de réservation avec Patrice Wilfrid, photographe de mariage en Guadeloupe.",
};

export default function CommentCaSePassePage() {
  return (
    <main className="pt-24 sm:pt-28 lg:pt-32">
      <DeroulementDetailed />
      <BookingProcess />
    </main>
  );
}
