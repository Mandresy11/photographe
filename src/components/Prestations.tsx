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
    detail: "Journée complète, du premier regard à la piste de danse.",
    image:
      "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6464.jpg",
    alt: "Christophe et Sandra réunis face à l’océan",
    position: "center",
  },
  {
    number: "02",
    title: "Autres célébrations",
    detail: "Fiançailles, anniversaires et instants de famille, sur demande.",
    image:
      "/web/photoo/Mariage%20Mr%20%26%20Mme%20Nilor/06082022-DSC_8567.jpg",
    alt: "Portrait d’un couple lors d’une célébration en Guadeloupe",
    position: "center 35%",
  },
  {
    number: "03",
    title: "Portrait & book",
    detail: "Une séance dirigée et naturelle pour révéler votre présence.",
    image:
      "/web/photoo/PHOTOSHOOT%20BOOK%20RONALD%20CHERY/prise%20de%20vue%20sans%20titre-5949%20INSTA%20CHERY_RONALD.jpg",
    alt: "Portrait éditorial de Ronald Chery",
    position: "center 28%",
  },
  {
    number: "04",
    title: "Mode & événement",
    detail: "Défilés, lancements et images de marque au regard éditorial.",
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

export default function Prestations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const orderedOfferings = offerings.map(
    (_, offset) => offerings[(activeIndex + offset) % offerings.length],
  );

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
            <p className="text-[10px] font-extrabold tracking-[0.3em] text-[#b68e54] uppercase sm:text-[11px]">
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
          </header>

          <div className="min-w-0 lg:-mr-[7.5vw]">
            <div
              role="region"
              aria-roledescription="carrousel"
              aria-label="Prestations photographiques"
              aria-live="polite"
              className="overflow-hidden py-3 pl-1"
            >
              <div className="flex gap-5">
                {orderedOfferings.map((offering, index) => (
                  <article
                    key={`${offering.number}-${activeIndex}`}
                    className={`grid h-[34rem] w-full shrink-0 overflow-hidden rounded-2xl border border-white/85 bg-[#f8f5ef] shadow-[0_18px_55px_rgba(36,31,24,0.13)] sm:h-[30rem] sm:grid-cols-[0.95fr_1.05fr] lg:h-[clamp(25rem,48svh,32.5rem)] lg:w-[clamp(37rem,43vw,51rem)] ${
                      index > 0 ? "hidden sm:grid" : ""
                    }`}
                  >
                    <div className="flex min-w-0 flex-col px-7 py-8 sm:px-9 sm:py-10 lg:px-[clamp(2rem,2.7vw,3.25rem)] lg:py-[clamp(2rem,4svh,3.25rem)]">
                      <p
                        className={`${bodoni.className} text-2xl text-[#b68e54] lg:text-3xl`}
                      >
                        {offering.number}
                      </p>

                      <h3
                        className={`${bodoni.className} mt-6 max-w-[9ch] text-3xl leading-[1.02] font-medium tracking-[-0.035em] lg:text-[2.35rem]`}
                      >
                        {offering.title}
                      </h3>
                      <span className="mt-6 text-2xl leading-none text-[#caa15d]">
                        ✦
                      </span>
                      <p className="mt-6 max-w-[16rem] text-sm leading-7 text-[#14201e]/58 lg:text-base">
                        {offering.detail}
                      </p>

                      <Link
                        href="/contact"
                        className="group mt-auto inline-flex min-h-10 w-fit items-center gap-5 rounded-full border border-[#c7a15f]/75 px-6 text-[8px] font-extrabold tracking-[0.2em] text-[#9a713a] uppercase transition-[color,background-color,transform] hover:-translate-y-0.5 hover:bg-[#14201e] hover:text-[#f0d29b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b68e54] lg:text-[9px]"
                      >
                        En savoir plus
                        <span
                          aria-hidden="true"
                          className="text-sm transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </div>

                    <div className="relative min-h-56 sm:min-h-0">
                      <Image
                        src={offering.image}
                        alt={index === 0 ? offering.alt : ""}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                        className="object-cover saturate-[0.86]"
                        style={{ objectPosition: offering.position }}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,32,30,0.08),transparent_22%)]" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-center justify-center gap-6 lg:w-[clamp(37rem,43vw,51rem)]">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Prestation précédente"
                className="flex size-10 items-center justify-center rounded-full border border-[#14201e]/18 text-lg text-[#9a713a] transition-colors hover:border-[#b68e54] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b68e54]"
              >
                <span aria-hidden="true">‹</span>
              </button>

              <div className="flex items-center gap-3" aria-label="Pagination">
                {offerings.map((offering, index) => (
                  <button
                    key={offering.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Afficher la prestation ${offering.title}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`size-2.5 rounded-full transition-colors ${
                      index === activeIndex
                        ? "bg-[#c49a52]"
                        : "bg-[#14201e]/8 hover:bg-[#14201e]/20"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Prestation suivante"
                className="flex size-10 items-center justify-center rounded-full border border-[#14201e]/18 text-lg text-[#9a713a] transition-colors hover:border-[#b68e54] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b68e54]"
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
