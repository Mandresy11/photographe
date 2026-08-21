"use client";

import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import { useState } from "react";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const offerings = [
  {
    number: "01",
    title: "Mariage",
    detail: "De vos préparatifs à la dernière danse, je raconte votre histoire avec élégance et discrétion.",
    emoji: "💐",
    image:
      "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6464.jpg",
    alt: "Christophe et Sandra réunis face à l’océan",
    position: "center",
  },
  {
    number: "02",
    title: "Autres célébrations",
    detail: "Fiançailles, anniversaires et instants de famille, sur demande.",
    emoji: "🥂",
    image:
      "/web/photoo/Mariage%20Mr%20%26%20Mme%20Nilor/06082022-DSC_8567.jpg",
    alt: "Portrait d’un couple lors d’une célébration en Guadeloupe",
    position: "center 35%",
  },
  {
    number: "03",
    title: "Séance engagement",
    detail: "Une séance pleine de complicité pour célébrer votre amour.",
    emoji: "💍",
    image:
      "/web/photoo/PHOTOSHOOT%20BOOK%20RONALD%20CHERY/prise%20de%20vue%20sans%20titre-5949%20INSTA%20CHERY_RONALD.jpg",
    alt: "Portrait éditorial de Ronald Chery",
    position: "center 28%",
  },
  {
    number: "04",
    title: "Mode & événement",
    detail: "Défilés, lancements et images de marque au regard éditorial.",
    emoji: "✨",
    image:
      "/web/photoo/DEFILE%20GUERLAIN%202020%20PFW/22012020-DEFILE%20PARIS%20FASHION%20WEEK%20GUERLAIN%202021%20108.jpg",
    alt: "Robe présentée lors d’un défilé parisien",
    position: "center 32%",
  },
];

function TravelMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className="size-5"
    >
      <circle cx="16" cy="16" r="14" stroke="currentColor" />
      <path
        d="M9 21.5 21.5 9m-8.7 1.4 8.8-1.5-1.5 8.8M9.3 15.8l3.6 1.1 1.1 3.6m2.2-7.6-2.8-2.8M19 19l2.8 2.8"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlowerMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 56"
      fill="none"
      className="h-10 w-16 text-[#d8b884]/70"
    >
      <path
        d="M4 50c10-2 16-10 18-20M28 52c4-10 4-20 0-30M50 52c-2-10-6-19-14-26M4 50c14-10 22-24 24-42"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Prestations() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? offerings.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === offerings.length - 1 ? 0 : current + 1,
    );
  };

  const getDistance = (index: number) => {
    return (index - activeIndex + offerings.length) % offerings.length;
  };

  return (
    <section
      id="prestations"
      className="relative min-h-svh overflow-hidden bg-[#f3f0e9] text-[#13201e] lg:flex lg:h-svh lg:min-h-[48rem] lg:flex-col"
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

      <div className="relative flex-1 px-5 pt-28 sm:px-8 sm:pt-32 lg:px-[7.5vw] lg:pt-[clamp(10rem,22svh,15rem)]">
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-center lg:gap-[5vw]">
          <header className="max-w-[32rem]">
            <p className="text-center text-[10px] font-extrabold tracking-[0.3em] text-[#b68e54] uppercase sm:text-[11px] lg:text-left">
              Prestations
            </p>

            <h2
              className={`${bodoni.className} mt-6 max-w-[12ch] text-[2.8rem] leading-[0.98] font-medium tracking-[-0.055em] uppercase sm:text-[4rem] lg:text-[clamp(3.25rem,3.4vw,4.2rem)]`}
            >
              Sur mesure, selon votre journée.
            </h2>

            <div className="mt-8 flex max-w-[28rem] items-center gap-2 text-[#b68e54]">
              <span className="h-px flex-1 bg-[#b68e54]/75" />
              <span className="size-2 rotate-45 bg-[#b68e54]" />
              <span className="h-px flex-1 bg-[#14201e]/18" />
            </div>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#14201e]/62 sm:text-base sm:leading-8">
              Formules et tarifs communiqués sur demande, selon la durée de
              présence et vos besoins.
            </p>

            <FlowerMark />
          </header>

          <div className="min-w-0">
            <div
              role="region"
              aria-roledescription="carrousel"
              aria-label="Prestations photographiques"
              aria-live="polite"
              className="relative h-[26rem] sm:h-[28rem] lg:h-[clamp(24rem,46svh,31rem)]"
            >
              {offerings.map((offering) => {
                const distance = getDistance(offerings.indexOf(offering));
                const isActive = distance === 0;
                const isVisible = distance <= 2;

                const positionClass =
                  distance === 0
                    ? "left-0 z-30 w-[92%] sm:w-[62%]"
                    : distance === 1
                      ? "left-[70%] z-20 w-[34%]"
                      : distance === 2
                        ? "left-[88%] z-10 w-[30%]"
                        : "left-[88%] z-0 w-[30%] scale-95 opacity-0";

                return (
                  <article
                    key={offering.number}
                    aria-hidden={!isActive}
                    className={`absolute top-0 h-full overflow-hidden rounded-2xl border shadow-[0_25px_60px_rgba(20,32,30,0.28)] transition-[left,width,transform,opacity,background-color,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${positionClass} ${
                      isVisible ? "" : "pointer-events-none"
                    } ${
                      isActive
                        ? "border-white/10 bg-[#14201e] text-white"
                        : "border-[#d8b884]/50 bg-[#f2ede0]"
                    } ${
                      distance === 0
                        ? "block"
                        : distance === 1
                          ? "hidden sm:block"
                          : distance === 2
                            ? "hidden lg:block"
                            : "hidden"
                    }`}
                  >
                    <div className="relative h-full">
                      <div
                        className={`absolute inset-0 grid transition-opacity duration-500 ease-out sm:grid-cols-[0.95fr_1.05fr] ${
                          isActive ? "opacity-100" : "pointer-events-none opacity-0"
                        }`}
                      >
                        <div className="flex min-w-0 flex-col justify-center px-7 py-8 sm:px-9 sm:py-10 lg:px-[clamp(2rem,2.7vw,3.25rem)] lg:py-[clamp(2rem,4svh,3.25rem)]">
                          <p
                            className={`${bodoni.className} text-2xl text-[#d8b884] lg:text-3xl`}
                          >
                            {offering.number}
                          </p>

                          <h3
                            className={`${bodoni.className} mt-6 max-w-[9ch] text-3xl leading-[1.02] font-medium tracking-[-0.035em] lg:text-[2.35rem]`}
                          >
                            {offering.title}
                          </h3>
                          <span className="mt-6 text-2xl leading-none text-[#d8b884]">
                            ✦
                          </span>
                          <p className="mt-6 max-w-[16rem] text-sm leading-7 text-white/70 lg:text-base">
                            {offering.detail}
                          </p>
                        </div>

                        <div className="relative hidden min-h-0 sm:block">
                          <Image
                            src={offering.image}
                            alt={offering.alt}
                            fill
                            sizes="(max-width: 1023px) 50vw, 30vw"
                            className="object-cover saturate-[0.86]"
                            style={{ objectPosition: offering.position }}
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,32,30,0.18),transparent_22%)]" />
                        </div>
                      </div>

                      <div
                        className={`absolute inset-0 flex flex-col px-6 py-8 transition-opacity duration-500 ease-out ${
                          isActive ? "pointer-events-none opacity-0" : "opacity-100"
                        }`}
                      >
                        <p
                          className={`${bodoni.className} text-2xl text-[#b68e54]`}
                        >
                          {offering.number}
                        </p>
                        <h3
                          className={`${bodoni.className} mt-4 max-w-[9ch] text-2xl leading-[1.05] font-medium tracking-[-0.03em] text-[#14201e]`}
                        >
                          {offering.title}
                        </h3>
                        <span className="mt-3 text-xl leading-none text-[#b68e54]">
                          ✦
                        </span>
                        <p className="mt-4 max-w-[12rem] text-xs leading-6 text-[#14201e]/60">
                          {offering.detail}
                        </p>
                        <span aria-hidden="true" className="mt-auto text-2xl">
                          {offering.emoji}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-7 flex items-center justify-center gap-6 lg:w-[70%]">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Prestation précédente"
                className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#14201e]/18 text-lg text-[#9a713a] transition-colors hover:border-[#b68e54] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b68e54]"
              >
                <span aria-hidden="true">‹</span>
              </button>

              <div className="flex items-center gap-6" aria-label="Pagination">
                {offerings.map((offering, index) => (
                  <button
                    key={offering.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Afficher la prestation ${offering.title}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className="flex flex-col items-center gap-2"
                  >
                    <span
                      className={`${bodoni.className} text-sm ${
                        index === activeIndex
                          ? "text-[#b68e54]"
                          : "text-[#14201e]/35"
                      }`}
                    >
                      {offering.number}
                    </span>
                    <span
                      className={`h-0.5 rounded-full transition-[width,background-color] ${
                        index === activeIndex
                          ? "w-8 bg-[#b68e54]"
                          : "w-3 bg-[#14201e]/15"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Prestation suivante"
                className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#14201e]/18 text-lg text-[#9a713a] transition-colors hover:border-[#b68e54] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b68e54]"
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-5 mt-12 flex shrink-0 flex-col gap-7 border-t border-[#14201e]/18 pt-7 pb-10 sm:mx-8 sm:flex-row sm:items-center sm:justify-between lg:mx-[7.5vw] lg:mt-7 lg:pb-[5.25rem]">
        <p className="flex items-center gap-4 text-xs text-[#14201e]/58 sm:text-sm">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#b68e54]/75 text-[#b68e54]">
            <TravelMark />
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
