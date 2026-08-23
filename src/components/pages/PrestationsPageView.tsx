"use client";

import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import { Icon } from "@iconify/react";
import arrowIcon from "@iconify-icons/solar/arrow-right-linear";
import hangerIcon from "@iconify-icons/solar/hanger-2-linear";
import buildingsIcon from "@iconify-icons/solar/buildings-3-linear";
import confettiIcon from "@iconify-icons/solar/confetti-linear";
import cupIcon from "@iconify-icons/solar/cup-linear";
import micIcon from "@iconify-icons/solar/microphone-3-linear";
import heartIcon from "@iconify-icons/solar/heart-linear";
import routingIcon from "@iconify-icons/solar/routing-linear";
import usersGroupIcon from "@iconify-icons/solar/users-group-rounded-linear";
import clapperboardIcon from "@iconify-icons/solar/clapperboard-linear";
import cameraSquareIcon from "@iconify-icons/solar/camera-square-linear";
import { useEffect, useRef, useState } from "react";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const offerings = [
  {
    number: "01",
    title: "Mariage",
    meta: "Journée complète",
    text: "Des préparatifs à la dernière danse, je capture chaque regard, chaque émotion et chaque détail pour raconter l’histoire unique de votre journée.",
    image:
      "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6464.jpg",
    alt: "Christophe et Sandra réunis face à l’océan",
    position: "object-center",
    steps: [
      { label: "Préparatifs", icon: hangerIcon },
      { label: "Cérémonie", icon: buildingsIcon },
      { label: "Réception", icon: confettiIcon },
    ],
  },
  {
    number: "02",
    title: "Célébrations",
    meta: "Sur demande",
    text: "Anniversaires, baptêmes, réunions de famille : chaque occasion mérite une mémoire juste, vivante et sans artifice.",
    image:
      "/web/photoo/Mariage%20Mr%20%26%20Mme%20Nilor/06082022-DSC_8567.jpg",
    alt: "Portrait d’un couple lors d’une célébration en Guadeloupe",
    position: "object-[center_35%]",
    steps: [
      { label: "Arrivée", icon: cupIcon },
      { label: "Discours", icon: micIcon },
      { label: "Fête", icon: confettiIcon },
    ],
  },
  {
    number: "03",
    title: "Engagement",
    meta: "Séance intime",
    text: "Un moment à deux, avant le grand jour. Naturel, complice, simplement vous, dans un lieu qui vous ressemble.",
    image:
      "/web/photoo/PHOTOSHOOT%20BOOK%20RONALD%20CHERY/prise%20de%20vue%20sans%20titre-5949%20INSTA%20CHERY_RONALD.jpg",
    alt: "Portrait éditorial de Ronald Chery",
    position: "object-top",
    steps: [
      { label: "Portraits", icon: cameraSquareIcon },
      { label: "Balade", icon: routingIcon },
      { label: "Complicité", icon: heartIcon },
    ],
  },
  {
    number: "04",
    title: "Mode & événement",
    meta: "Regard éditorial",
    text: "Défilés, lancements, soirées : des images fortes et éditoriales qui donnent une identité à votre événement.",
    image:
      "/web/photoo/DEFILE%20GUERLAIN%202020%20PFW/22012020-DEFILE%20PARIS%20FASHION%20WEEK%20GUERLAIN%202021%20108.jpg",
    alt: "Robe présentée lors d’un défilé parisien",
    position: "object-[center_32%]",
    steps: [
      { label: "Backstage", icon: clapperboardIcon },
      { label: "Défilé", icon: usersGroupIcon },
      { label: "Portraits", icon: cameraSquareIcon },
    ],
  },
];

export default function PrestationsPageView() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToIndex = (target: number) => {
    const clamped = Math.max(0, Math.min(offerings.length - 1, target));
    const container = scrollRef.current;
    const slide = container?.children[clamped] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <>
      <div
        aria-hidden={!isLoading}
        className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0e1512] text-white transition-opacity duration-700 ${
          isLoading ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <h1
          className={`${bodoni.className} text-[3rem] leading-none font-medium tracking-[-0.03em] uppercase sm:text-[4.5rem]`}
        >
          Prestations
        </h1>
        <p className="absolute bottom-12 text-[10px] font-bold tracking-[0.3em] text-white/55 uppercase sm:bottom-16">
          Mariage · Célébrations · Engagement · Mode
        </p>
      </div>

    <div
      ref={scrollRef}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Prestations photographiques"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollToIndex(activeIndex - 1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollToIndex(activeIndex + 1);
        }
      }}
      onScroll={(event) => {
        const container = event.currentTarget;
        const slideWidth = container.clientWidth || 1;
        const next = Math.round(container.scrollLeft / slideWidth);
        if (next !== activeIndex) setActiveIndex(next);
      }}
      className="flex h-svh w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {offerings.map((offering, index) => (
        <section
          key={offering.number}
          aria-hidden={activeIndex !== index}
          className="relative h-svh w-full shrink-0 snap-start overflow-hidden bg-[#0e1512] text-white"
        >
          <Image
            src={offering.image}
            alt={offering.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover saturate-[0.9] ${offering.position}`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(14,21,18,0.96)_0%,rgba(14,21,18,0.82)_35%,rgba(14,21,18,0.4)_60%,rgba(14,21,18,0.1)_78%,rgba(14,21,18,0.55)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,21,18,0.75)_0%,rgba(14,21,18,0.35)_45%,transparent_65%)]" />

          <span
            className={`${bodoni.className} pointer-events-none absolute top-24 left-5 text-[6rem] leading-none font-medium text-white/10 sm:top-28 sm:left-8 sm:text-[9rem] lg:left-12 lg:text-[11rem]`}
          >
            {offering.number}
          </span>

          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
            <p className="text-[10px] font-extrabold tracking-[0.3em] text-[#d8b884] uppercase sm:text-[11px]">
              {offering.meta}
            </p>
            <h1
              className={`${bodoni.className} mt-5 max-w-[14ch] text-[2.75rem] leading-[0.95] font-medium tracking-[-0.04em] uppercase sm:text-[4.5rem] lg:text-[5.5rem]`}
            >
              {offering.title}
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-white sm:text-base sm:leading-8">
              {offering.text}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              {offering.steps.map((step) => (
                <span
                  key={step.label}
                  className="flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-[10px] font-bold tracking-[0.12em] text-white uppercase backdrop-blur-sm"
                >
                  <Icon icon={step.icon} className="size-4 text-[#d8b884]" aria-hidden="true" />
                  {step.label}
                </span>
              ))}
            </div>

            <Link
              href="/contact"
              className="cta-button cta-primary mt-9 inline-flex min-h-14 w-fit items-center gap-8 px-8 text-[9px] font-extrabold tracking-[0.22em] uppercase sm:mt-10"
            >
              Réserver votre date
              <Icon icon={arrowIcon} className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      ))}

      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 top-24 z-20 flex items-center justify-center gap-2 transition-opacity duration-500 sm:hidden ${
          activeIndex === 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-3.5 py-1.5 text-[9px] font-bold tracking-[0.14em] text-white uppercase backdrop-blur-sm">
          Glissez
          <Icon icon={arrowIcon} className="size-3.5 text-[#d8b884]" aria-hidden="true" />
          {activeIndex + 1} / {offerings.length}
        </span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-5 z-20 flex items-center justify-center gap-2.5 sm:bottom-10 sm:gap-3"
      >
        {offerings.map((offering, index) => (
          <button
            key={offering.number}
            type="button"
            onClick={() => scrollToIndex(index)}
            aria-label={`Voir ${offering.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            className={`pointer-events-auto h-1.5 rounded-full transition-[width,background-color] duration-300 sm:h-1 ${
              index === activeIndex ? "w-10 bg-[#d8b884] sm:w-9" : "w-5 bg-white/45 sm:w-4"
            }`}
          />
        ))}
      </div>

      <p
        aria-hidden="true"
        className={`pointer-events-none fixed right-5 bottom-8 z-20 hidden items-center gap-3 text-[9px] font-bold tracking-[0.16em] text-white/55 uppercase transition-opacity duration-500 sm:right-8 sm:flex sm:bottom-10 ${
          activeIndex === 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        Faites glisser
        <span className="flex size-8 items-center justify-center rounded-full border border-white/30">
          <Icon icon={arrowIcon} className="size-3.5" aria-hidden="true" />
        </span>
      </p>
    </div>
    </>
  );
}
