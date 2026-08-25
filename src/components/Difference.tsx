"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import compassIcon from "@iconify-icons/solar/compass-linear";
import chevronLeftIcon from "@iconify-icons/solar/alt-arrow-left-linear";
import chevronRightIcon from "@iconify-icons/solar/alt-arrow-right-linear";

const principles = [
  {
    number: "01",
    title: "Détendre",
    text: "Oublier l’objectif.",
    image: "/web/photoo/Mariage%20Ryan%20%26%20Emilia/DSC_4469.jpg",
    alt: "Ryan et Emilia s’embrassent après la cérémonie",
    position: "object-center",
    settings: "f/2.0 · 1/250 · ISO 200",
  },
  {
    number: "02",
    title: "Guider",
    text: "Juste quand il le faut.",
    image: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC7320.jpg",
    alt: "Marvin signe le registre pendant la cérémonie",
    position: "object-center",
    settings: "f/2.8 · 1/160 · ISO 400",
  },
  {
    number: "03",
    title: "Saisir",
    text: "Ce qui ne se rejoue pas.",
    image: "/web/photoo/Mariage%20Gina%20%26%20Lionel/DSC_4730.jpg",
    alt: "Gina et Lionel partagent un geste spontané sous le ciel de Guadeloupe",
    position: "object-center",
    settings: "f/1.8 · 1/500 · ISO 100",
  },
];

const keywords = ["Naturel", "Élégant", "Vivant", "Spontané"];

type Principle = (typeof principles)[number];

function PrincipleCard({
  principle,
  className,
  hidden,
}: {
  principle: Principle;
  className: string;
  hidden?: boolean;
}) {
  return (
    <figure
      aria-hidden={hidden || undefined}
      className={`group relative overflow-hidden ${className}`}
    >
      <Image
        src={principle.image}
        alt={hidden ? "" : principle.alt}
        fill
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 90vw"
        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${principle.position}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[7px] font-bold tracking-[0.16em] text-white/70 uppercase">
        <span>Frame {principle.number}</span>
        <span className="text-[#d8b884]">{principle.settings}</span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 opacity-65 transition-opacity duration-300 group-hover:opacity-100"
      >
        <span className="absolute top-0 left-0 size-5 border-t border-l border-white/65" />
        <span className="absolute top-0 right-0 size-5 border-t border-r border-white/65" />
        <span className="absolute bottom-0 left-0 size-5 border-b border-l border-white/65" />
        <span className="absolute right-0 bottom-0 size-5 border-r border-b border-white/65" />
        <span className="absolute top-1/2 left-1/2 size-7 -translate-x-1/2 -translate-y-1/2 border border-white/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="absolute top-1/2 left-1/2 size-1 -translate-x-1/2 -translate-y-1/2 bg-[#d8b884]" />
        </span>
      </div>

      <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#d8b884]">
          {principle.number}
        </span>
        <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.04em] uppercase lg:text-3xl">
          {principle.title}
        </h3>
        <p className="mt-1 text-sm text-white/75">{principle.text}</p>

        <span className="mt-4 flex size-9 items-center justify-center border border-white/40 text-sm transition-colors group-hover:border-[#d8b884] group-hover:text-[#d8b884]">
          <span aria-hidden="true">›</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Difference() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? principles.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === principles.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="approche"
      className="relative overflow-hidden bg-[#f1eee7] text-[#14201e] lg:flex lg:h-svh lg:flex-col lg:justify-center"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[8%] -right-8 text-[18rem] font-black leading-none tracking-[-0.09em] text-[#14201e]/[0.03] sm:text-[26rem] lg:text-[30rem]"
      >
        04
      </span>

      <p
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-3 hidden -translate-y-1/2 -rotate-90 text-[8px] font-bold tracking-[0.24em] text-[#14201e]/45 uppercase sm:block"
      >
        Spontané
      </p>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-12">
        <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-center text-[11px] font-extrabold tracking-[0.3em] text-[#b68e54] uppercase lg:text-left">
              La différence
            </p>
            <h2 className="editorial-title editorial-title-dark mt-6 max-w-[8ch] text-5xl font-extrabold leading-[0.88] tracking-[-0.065em] uppercase sm:text-6xl lg:mt-4 lg:text-[2.6rem]">
              Vous. Pas des poses.
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-7 text-[#14201e]/65 sm:text-base lg:mt-6">
              Des images vraies, prises sur le vif. Celles qui racontent
              votre histoire.
            </p>
            <div className="mt-5 flex items-center gap-3 text-[8px] font-bold tracking-[0.18em] text-[#14201e]/45 uppercase lg:mt-4">
              <Icon icon={compassIcon} aria-hidden="true" className="size-6 text-[#b68e54]" />
              <span>Reportage · RAW · Lumière naturelle</span>
            </div>
            <Link
              href="/a-propos"
              className="cta-button cta-outline-dark mt-7 hidden min-h-12 w-fit items-center gap-4 border border-[#b68e54]/60 px-6 text-[9px] font-bold tracking-[0.2em] uppercase transition-colors hover:border-[#b68e54] hover:bg-[#b68e54]/10 sm:inline-flex lg:mt-5 lg:min-h-10"
            >
              En savoir plus
              <span aria-hidden="true">›</span>
            </Link>
          </div>

          <div
            role="region"
            aria-roledescription="carrousel"
            aria-label="Les principes de l’approche photographique"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") showPrevious();
              if (event.key === "ArrowRight") showNext();
            }}
            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchStart === null) return;
              const distance = touchStart - event.changedTouches[0].clientX;
              if (distance > 50) showNext();
              if (distance < -50) showPrevious();
              setTouchStart(null);
            }}
            className="min-w-0 outline-none focus-visible:ring-2 focus-visible:ring-[#b68e54] sm:hidden"
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {principles.map((principle, index) => (
                  <PrincipleCard
                    key={principle.number}
                    principle={principle}
                    hidden={index !== activeIndex}
                    className="h-[26rem] w-full shrink-0"
                  />
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Carte précédente"
                className="flex size-11 items-center justify-center rounded-full border border-[#14201e]/30 transition-colors hover:border-[#b68e54] hover:text-[#b68e54]"
              >
                <Icon icon={chevronLeftIcon} className="size-4" aria-hidden="true" />
              </button>

              <div
                className="flex items-center gap-2"
                aria-label="Progression du carrousel"
              >
                {principles.map((principle, index) => (
                  <button
                    key={principle.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Afficher la carte ${index + 1} : ${principle.title}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`h-1.5 rounded-full transition-[width,background-color] ${
                      activeIndex === index
                        ? "w-7 bg-[#b68e54]"
                        : "w-3 bg-[#14201e]/25 hover:bg-[#14201e]/50"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Carte suivante"
                className="flex size-11 items-center justify-center rounded-full border border-[#14201e]/30 transition-colors hover:border-[#b68e54] hover:text-[#b68e54]"
              >
                <Icon icon={chevronRightIcon} className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="hidden gap-4 sm:grid sm:grid-cols-3">
            {principles.map((principle) => (
              <PrincipleCard
                key={principle.number}
                principle={principle}
                className="h-[30rem] lg:h-[min(30rem,60svh)]"
              />
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-[#14201e]/20 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-6 lg:pt-4">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-4 w-7 items-center justify-center border border-[#14201e]/25"
            >
              <span className="size-1 border border-[#b68e54]" />
            </span>
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#14201e]/48 uppercase">
              Rigueur dans l&apos;image · Légèreté dans le moment
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 sm:justify-end">
            {keywords.map((keyword, index) => (
              <li
                key={keyword}
                className={`flex items-center gap-6 text-[9px] font-bold tracking-[0.18em] uppercase [&:last-child>span]:hidden ${
                  index === keywords.length - 1
                    ? "text-[#b68e54]"
                    : "text-[#14201e]/70"
                }`}
              >
                {keyword}
                <span className="size-1 bg-[#b68e54]" />
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/a-propos"
          className="cta-button cta-outline-dark mx-auto mt-8 flex min-h-12 w-fit items-center gap-4 border border-[#b68e54]/60 px-6 text-[9px] font-bold tracking-[0.2em] uppercase transition-colors hover:border-[#b68e54] hover:bg-[#b68e54]/10 sm:hidden"
        >
          En savoir plus
          <span aria-hidden="true">›</span>
        </Link>
      </div>
    </section>
  );
}
