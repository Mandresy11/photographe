"use client";

import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import compassIcon from "@iconify-icons/solar/compass-linear";
import bouquetIcon from "@iconify-icons/solar/leaf-linear";
import champagneIcon from "@iconify-icons/solar/wineglass-linear";
import ringIcon from "@iconify-icons/solar/heart-linear";
import sparklesIcon from "@iconify-icons/solar/stars-linear";
import arrowIcon from "@iconify-icons/solar/arrow-right-linear";
import chevronLeftIcon from "@iconify-icons/solar/alt-arrow-left-linear";
import chevronRightIcon from "@iconify-icons/solar/alt-arrow-right-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const offerings = [
  {
    number: "01",
    title: "Mariage",
    subtitle: "Du premier regard à la dernière danse",
    detail:
      "De vos préparatifs à la dernière danse, je raconte votre histoire avec élégance et discrétion.",
    emoji: bouquetIcon,
    image:
      "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6464.jpg",
    alt: "Christophe et Sandra réunis face à l’océan",
    position: "center",
  },
  {
    number: "02",
    title: "Autres célébrations",
    subtitle: "Fiançailles, anniversaires, réunions de famille",
    detail: "Fiançailles, anniversaires et instants de famille, sur demande.",
    emoji: champagneIcon,
    image:
      "/web/photoo/Mariage%20Mr%20%26%20Mme%20Nilor/06082022-DSC_8567.jpg",
    alt: "Portrait d’un couple lors d’une célébration en Guadeloupe",
    position: "center 35%",
  },
  {
    number: "03",
    title: "Séance engagement",
    subtitle: "Une parenthèse en amoureux avant le grand jour",
    detail: "Une séance pleine de complicité pour célébrer votre amour.",
    emoji: ringIcon,
    image:
      "/web/photoo/PHOTOSHOOT%20BOOK%20RONALD%20CHERY/prise%20de%20vue%20sans%20titre-5949%20INSTA%20CHERY_RONALD.jpg",
    alt: "Portrait éditorial de Ronald Chery",
    position: "center top",
  },
  {
    number: "04",
    title: "Mode & événement",
    subtitle: "Défilés, lancements, images de marque",
    detail: "Défilés, lancements et images de marque au regard éditorial.",
    emoji: sparklesIcon,
    image:
      "/web/photoo/DEFILE%20GUERLAIN%202020%20PFW/22012020-DEFILE%20PARIS%20FASHION%20WEEK%20GUERLAIN%202021%20108.jpg",
    alt: "Robe présentée lors d’un défilé parisien",
    position: "center 32%",
  },
];

export default function Prestations() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (target: number) => {
    const clamped = Math.max(0, Math.min(offerings.length - 1, target));
    setIndex(clamped);
    const container = scrollRef.current;
    const card = container?.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  return (
    <section
      id="prestations"
      className="relative overflow-hidden bg-[#f3f0e9] text-[#13201e]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(216,184,132,0.18),transparent_29%),linear-gradient(115deg,rgba(255,255,255,0.7),transparent_46%)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-[-3rem] hidden text-[27rem] leading-none font-black tracking-[-0.12em] text-[#14201e]/[0.025] lg:block"
      >
        10
      </span>

      <div className="relative grid gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[0.62fr_1.38fr] lg:items-center lg:gap-[5vw] lg:px-[7.5vw] lg:py-32">
        <div className="max-w-[32rem]">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            className="h-10 w-16 text-[#d8b884]/70"
          >
            <path
              d="M50 92V50M50 50C40 30 20 25 5 30c8 15 22 20 45 20zM50 50c10-20 30-25 45-20-8 15-22 20-45 20zM50 50c-6-22-22-32-40-30 6 17 20 27 40 30zM50 50c6-22 22-32 40-30-6 17-20 27-40 30z"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="mt-6 text-center text-[10px] font-extrabold tracking-[0.3em] text-[#b68e54] uppercase sm:text-[11px] lg:text-left">
            Prestations
          </p>

          <h2
            className={`${bodoni.className} mt-6 max-w-[12ch] text-[2.8rem] leading-[0.98] font-medium tracking-[-0.055em] uppercase sm:text-[4rem] lg:text-[clamp(3.25rem,3.4vw,4.2rem)]`}
          >
            Sur mesure, selon votre journée.
          </h2>

          <p className="mt-7 max-w-md text-sm leading-7 text-[#14201e]/62 sm:text-base sm:leading-8">
            Formules et tarifs communiqués sur demande, selon la durée de
            présence et vos besoins.
          </p>

          <Link
            href="/prestations"
            className="cta-button cta-dark mt-9 hidden min-h-14 w-fit items-center gap-8 bg-[#14201e] px-8 text-[9px] font-extrabold tracking-[0.2em] text-white uppercase shadow-[0_12px_30px_rgba(20,32,30,0.18)] transition-colors hover:bg-[#25332f] lg:inline-flex"
          >
            Voir toutes les prestations
            <Icon icon={arrowIcon} className="size-4" aria-hidden="true" />
          </Link>

          <div className="mt-10 hidden items-center gap-6 lg:flex">
            <button
              type="button"
              onClick={() => scrollToIndex(index - 1)}
              aria-label="Prestation précédente"
              disabled={index === 0}
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#14201e]/18 text-[#9a713a] transition-colors hover:border-[#b68e54] hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b68e54]"
            >
              <Icon icon={chevronLeftIcon} className="size-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-3" aria-label="Pagination">
              {offerings.map((offering, i) => (
                <button
                  key={offering.number}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Voir ${offering.title}`}
                  aria-current={i === index ? "true" : undefined}
                  className={`h-0.5 rounded-full transition-[width,background-color] ${
                    i === index ? "w-8 bg-[#b68e54]" : "w-3 bg-[#14201e]/15"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToIndex(index + 1)}
              aria-label="Prestation suivante"
              disabled={index === offerings.length - 1}
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#14201e]/18 text-[#9a713a] transition-colors hover:border-[#b68e54] hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b68e54]"
            >
              <Icon icon={chevronRightIcon} className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="min-w-0">
          <div
            ref={scrollRef}
            role="region"
            aria-roledescription="carrousel"
            aria-label="Prestations photographiques"
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={(event) => {
              const container = event.currentTarget;
              const cardWidth = container.children[0]?.clientWidth ?? 1;
              const gap = 20;
              const next = Math.round(
                container.scrollLeft / (cardWidth + gap),
              );
              if (next !== index) setIndex(next);
            }}
          >
            {offerings.map((offering) => (
              <article
                key={offering.number}
                className="relative h-[26rem] w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#d8b884]/70 bg-[#14201e] text-white sm:h-[28rem] sm:w-[19rem] lg:h-[30rem] lg:w-[19.5rem]"
              >
                <div className="relative h-[54%] w-full overflow-hidden">
                  <Image
                    src={offering.image}
                    alt={offering.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 300px, 82vw"
                    className="object-cover saturate-[0.86]"
                    style={{ objectPosition: offering.position }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,32,30,0)_55%,rgba(20,32,30,0.92)_100%)]" />
                </div>

                <div className="relative flex h-[46%] flex-col px-6 py-6">
                  <Icon
                    icon={offering.emoji}
                    aria-hidden="true"
                    className="size-10 self-end text-[#b68e54]"
                  />

                  <h3
                    className={`${bodoni.className} mt-3 max-w-[11ch] text-2xl leading-[1.05] font-medium tracking-[-0.03em]`}
                  >
                    {offering.title}
                  </h3>
                  <p className="mt-2 text-xs tracking-[0.02em] text-[#d8b884]/85 uppercase">
                    {offering.subtitle}
                  </p>
                  <p className="mt-3 max-w-[20rem] text-xs leading-6 text-white/65">
                    {offering.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p
            aria-hidden="true"
            className="mt-2 flex items-center justify-center gap-3 text-[10px] tracking-[0.16em] text-[#14201e]/45 uppercase sm:hidden"
          >
            <span>←</span>
            Faites glisser pour découvrir
            <span>→</span>
          </p>

          <div className="mt-7 flex items-center justify-center gap-6 lg:hidden">
            <button
              type="button"
              onClick={() => scrollToIndex(index - 1)}
              aria-label="Prestation précédente"
              disabled={index === 0}
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#14201e]/18 text-[#9a713a] transition-colors hover:border-[#b68e54] hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b68e54]"
            >
              <Icon icon={chevronLeftIcon} className="size-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-3" aria-label="Pagination">
              {offerings.map((offering, i) => (
                <button
                  key={offering.number}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Voir ${offering.title}`}
                  aria-current={i === index ? "true" : undefined}
                  className={`h-0.5 rounded-full transition-[width,background-color] ${
                    i === index ? "w-8 bg-[#b68e54]" : "w-3 bg-[#14201e]/15"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToIndex(index + 1)}
              aria-label="Prestation suivante"
              disabled={index === offerings.length - 1}
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#14201e]/18 text-[#9a713a] transition-colors hover:border-[#b68e54] hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b68e54]"
            >
              <Icon icon={chevronRightIcon} className="size-4" aria-hidden="true" />
            </button>
          </div>

          <Link
            href="/prestations"
            className="cta-button cta-dark mx-auto mt-8 flex min-h-14 w-fit items-center gap-8 bg-[#14201e] px-8 text-[9px] font-extrabold tracking-[0.2em] text-white uppercase shadow-[0_12px_30px_rgba(20,32,30,0.18)] transition-colors hover:bg-[#25332f] lg:hidden"
          >
            Voir toutes les prestations
            <Icon icon={arrowIcon} className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="relative mx-5 hidden shrink-0 flex-col gap-7 border-t border-[#14201e]/18 pt-7 pb-10 sm:mx-8 sm:flex sm:flex-row sm:items-center sm:justify-between lg:mx-[7.5vw] lg:pb-16">
        <p className="flex items-center gap-4 text-xs text-[#14201e]/58 sm:text-sm">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#b68e54]/75 text-[#b68e54]">
            <Icon icon={compassIcon} className="size-5" />
          </span>
          Déplacement en Guadeloupe inclus — au-delà, sur devis.
        </p>

        <Link
          href="/contact"
          className="cta-button cta-dark mx-auto inline-flex min-h-14 w-fit shrink-0 items-center gap-8 bg-[#14201e] px-8 text-[9px] font-extrabold tracking-[0.2em] text-white uppercase shadow-[0_12px_30px_rgba(20,32,30,0.18)] transition-colors hover:bg-[#25332f] sm:mx-0 lg:min-w-[25rem] lg:justify-center"
        >
          Demander mes disponibilités
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
