import Link from "next/link";

export default function FloatingBookButton() {
  return (
    <Link
      href="/contact"
      aria-label="Réserver ma date"
      className="fixed right-4 bottom-4 z-[90] flex items-center gap-2 rounded-full bg-[#d8b884] px-5 py-3 text-[10px] font-extrabold tracking-[0.16em] text-[#14201e] uppercase shadow-[0_12px_30px_rgba(20,32,30,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-[#ead2ab] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14201e] sm:hidden"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="size-4"
      >
        <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      Réserver
    </Link>
  );
}
