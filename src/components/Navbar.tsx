"use client";

import { Icon } from "@iconify/react";
import cameraIcon from "@iconify-icons/solar/camera-minimalistic-linear";
import galleryIcon from "@iconify-icons/solar/gallery-wide-linear";
import giftIcon from "@iconify-icons/solar/gift-linear";
import homeIcon from "@iconify-icons/solar/home-2-linear";
import messageIcon from "@iconify-icons/solar/chat-round-dots-linear";
import questionIcon from "@iconify-icons/solar/question-circle-linear";
import routingIcon from "@iconify-icons/solar/routing-linear";
import storiesIcon from "@iconify-icons/solar/book-bookmark-linear";
import calendarIcon from "@iconify-icons/solar/calendar-linear";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Accueil", href: "/", icon: homeIcon },
  { label: "Prestations", href: "/prestations", icon: giftIcon },
  { label: "Comment ça se passe", href: "/comment-ca-se-passe", icon: routingIcon },
  { label: "Le photographe", href: "/photographe", icon: cameraIcon },
  { label: "Galerie", href: "/galerie", icon: galleryIcon },
  { label: "Histoires", href: "/histoires", icon: storiesIcon },
  { label: "FAQ", href: "/questions", icon: questionIcon },
  { label: "Contact", href: "/contact", icon: messageIcon },
];

function BrandMark({ expanded = false }: { expanded?: boolean }) {
  return (
    <svg
      viewBox="0 0 56 48"
      aria-hidden="true"
      className={`h-8 w-10 shrink-0 overflow-visible text-[#d8b884] sm:h-11 sm:w-[3.4rem] ${
        expanded ? "2xl:h-14 2xl:w-[4.25rem] 2xl:translate-y-1" : ""
      }`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 9.5 20 5h16l3.5 4.5H46a7 7 0 0 1 7 7v21.25a7 7 0 0 1-7 7H10a7 7 0 0 1-7-7V16.5a7 7 0 0 1 7-7h6.5Z"
        fill="currentColor"
        fillOpacity="0.07"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="28"
        cy="27"
        r="12.75"
        fill="#08100e"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="45.5" cy="16.5" r="1.6" fill="currentColor" />
      <text
        x="28"
        y="30.2"
        fill="currentColor"
        fontFamily="Georgia, serif"
        fontSize="9.4"
        fontWeight="700"
        letterSpacing="0.35"
        textAnchor="middle"
      >
        PW
      </text>
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isOnHero, setIsOnHero] = useState(pathname === "/");
  const [scrollProgress, setScrollProgress] = useState(0);
  const isHeroNavbar = pathname === "/" && isOnHero;

  useEffect(() => {
    const hero = pathname === "/" ? document.getElementById("accueil") : null;

    const updateNavbar = () => {
      setIsOnHero(hero ? window.scrollY < hero.offsetHeight - 120 : false);

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        scrollableHeight > 0
          ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
          : 0,
      );
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    window.addEventListener("resize", updateNavbar);

    return () => {
      window.removeEventListener("scroll", updateNavbar);
      window.removeEventListener("resize", updateNavbar);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-3 left-1/2 z-[100] w-[calc(100%-1.5rem)] max-w-[1520px] -translate-x-1/2 transition-[width,max-width] duration-300 sm:top-5 sm:w-[calc(100%-2.5rem)] ${
        isHeroNavbar ? "2xl:top-8 2xl:max-w-[1800px]" : ""
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className={`relative flex min-h-14 items-center rounded-full border border-white/15 bg-[#08100e]/92 px-2.5 py-2 text-white shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 sm:min-h-16 sm:px-4 lg:min-h-[4.5rem] ${
          isHeroNavbar
            ? "2xl:border-transparent 2xl:bg-transparent 2xl:px-0 2xl:shadow-none 2xl:backdrop-blur-none"
            : ""
        }`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group flex min-w-0 items-center gap-3 rounded-full pr-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d8b884] lg:gap-4 lg:pr-10"
          aria-label="Patrice Wilfrid — retour à l’accueil"
        >
          <BrandMark expanded={isHeroNavbar} />
          <span className="truncate font-[Georgia] text-[10px] font-normal tracking-[0.22em] uppercase sm:text-[15px]">
            Patrice Wilfrid
            <span className="text-[#d8b884]">.</span>
          </span>
        </Link>

        <ul className="mx-auto hidden items-center gap-1 xl:flex 2xl:gap-5">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`group relative flex min-h-9 items-center rounded-full px-2 text-[10px] font-bold tracking-[0.19em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d8b884] ${
                  pathname === item.href
                    ? "text-[#f0d29b]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`cta-button cta-navbar ml-auto hidden min-h-12 items-center gap-5 rounded-full bg-[#d8b884] px-7 text-[11px] font-extrabold tracking-[0.2em] text-[#08100e] uppercase transition-colors hover:bg-[#ead2ab] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:inline-flex xl:ml-0 xl:px-9 ${
            isHeroNavbar
              ? "2xl:mr-4 2xl:border 2xl:border-[#d8ad55] 2xl:bg-transparent 2xl:text-[#d8ad55] 2xl:hover:bg-[#d8ad55] 2xl:hover:text-[#08100e]"
              : ""
          }`}
        >
          Réserver
          <Icon icon={calendarIcon} className="size-4" aria-hidden="true" />
        </Link>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="navigation-mobile"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsOpen((current) => !current)}
          className="ml-auto flex size-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-[#d8b884]/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d8b884] md:ml-2 xl:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute top-0 left-0 h-px bg-current transition-[width,transform,top] duration-300 ${
                isOpen ? "top-1.5 w-4 rotate-45" : "w-4"
              }`}
            />
            <span
              className={`absolute top-1.5 right-0 h-px bg-current transition-[width,opacity] duration-300 ${
                isOpen ? "w-0 opacity-0" : "w-2.5 opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px bg-current transition-[width,transform,bottom] duration-300 ${
                isOpen ? "bottom-1.5 w-4 -rotate-45" : "w-4"
              }`}
            />
          </span>
        </button>

        <span
          aria-hidden="true"
          className={`absolute right-6 bottom-[2px] left-6 h-px overflow-hidden bg-white/8 ${
            isHeroNavbar ? "2xl:hidden" : ""
          }`}
        >
          <span
            className="block h-full bg-[linear-gradient(90deg,#9a713a,#efd39f)] shadow-[0_0_8px_rgba(216,187,132,0.55)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </span>
      </nav>

      <div
        id="navigation-mobile"
        className={`absolute inset-x-0 top-[calc(100%+0.5rem)] origin-top overflow-hidden rounded-[1.6rem] border border-white/12 bg-[#08100e]/96 p-2 text-white shadow-2xl backdrop-blur-xl transition-[opacity,transform,visibility] duration-300 xl:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="grid gap-1 sm:grid-cols-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`group flex min-h-12 items-center justify-between rounded-2xl px-4 text-[10px] font-bold tracking-[0.18em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d8b884] ${
                  pathname === item.href
                    ? "bg-[#d8b884]/12 text-[#f0d29b]"
                    : "text-white/72 hover:bg-white/6 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`flex size-10 shrink-0 items-center justify-center rounded-xl border transition-[color,background-color,border-color,transform] duration-300 ${
                    pathname === item.href
                      ? "border-[#d8b884]/55 bg-[#d8b884]/14 text-[#f0d29b]"
                      : "border-white/10 bg-white/[0.035] text-[#d8b884]/72 group-hover:scale-105 group-hover:border-[#d8b884]/35 group-hover:text-[#f0d29b]"
                  }`}
                >
                  <Icon icon={item.icon} width="22" height="22" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="cta-button cta-navbar cta-primary mt-2 flex min-h-12 items-center justify-between rounded-full bg-[#d8b884] px-5 text-[10px] font-extrabold tracking-[0.18em] text-[#08100e] uppercase md:hidden"
        >
          Réserver une date
          <span aria-hidden="true">↗</span>
        </Link>
        <div className="mt-2 flex items-center justify-between border-t border-white/10 px-4 pt-3 pb-2 text-[8px] font-bold tracking-[0.16em] text-white/35 uppercase">
          <span>RAW · 35 mm</span>
          <span>Guadeloupe</span>
        </div>
      </div>
    </header>
  );
}
