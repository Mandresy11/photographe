import Link from "next/link";
import { Icon } from "@iconify/react";
import calendarIcon from "@iconify-icons/solar/calendar-linear";

export default function FloatingBookButton() {
  return (
    <Link
      href="/contact"
      aria-label="Réserver ma date"
      className="fixed right-4 bottom-4 z-[90] flex items-center gap-2 rounded-full bg-[#d8b884] px-5 py-3 text-[10px] font-extrabold tracking-[0.16em] text-[#14201e] uppercase shadow-[0_12px_30px_rgba(20,32,30,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-[#ead2ab] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14201e] sm:hidden"
    >
      <Icon icon={calendarIcon} className="size-4" aria-hidden="true" />
      Réserver
    </Link>
  );
}
