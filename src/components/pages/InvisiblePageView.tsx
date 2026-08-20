"use client";

import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import { useState } from "react";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const fragments = [
  {
    image: "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-07052022-DSC_6234.jpg",
    alt: "Maquillage de Sandra pendant les préparatifs",
    title: "Les mains savent avant les mots",
    note: "Préparatifs",
    description:
      "Un geste précis, une respiration. Tout commence bien avant la cérémonie.",
  },
  {
    image: "/web/photoo/Mariage%20Ryan%20%26%20Emilia/DSC_4503.jpg",
    alt: "Ryan et Emilia échangent un regard pendant la soirée",
    title: "Une seconde seuls au milieu de tous",
    note: "Entre-deux",
    description:
      "Un souffle suspendu. Un regard. Juste vous deux, dans le tumulte, le temps d’un instant.",
  },
  {
    image: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC7637.jpg",
    alt: "Détails de table du mariage de Marvin et Gwen",
    title: "Ce que la fête laisse sur la table",
    note: "Réception",
    description:
      "Les détails racontent aussi la fête : une couleur, une lumière, la trace d’un moment partagé.",
  },
  {
    image: "/web/photoo/04122025-_DSC0090.jpg",
    alt: "Patrice règle son éclairage de studio avec son appareil",
    title: "Regarder sans interrompre",
    note: "Coulisses",
    description:
      "Être prêt sans prendre la place, pour préserver la vérité de ce qui se déroule.",
  },
];

export default function InvisiblePageView() {
  const [activeIndex, setActiveIndex] = useState(1);
  const active = fragments[activeIndex];

  return (
    <section
      id="page-invisible"
      className="relative min-h-svh overflow-hidden bg-[#050d0b] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(43,63,56,0.18),transparent_38%),linear-gradient(115deg,#050b09_0%,#07110e_52%,#040a08_100%)]"
      />

      <div className="relative mx-auto max-w-[1920px] px-5 pt-32 pb-12 sm:px-8 sm:pt-36 lg:h-svh lg:min-h-[48rem] lg:max-h-[59rem] lg:px-10 lg:pt-28 lg:pb-8">
        <div className="grid gap-8 lg:h-full lg:grid-cols-[1.56fr_1fr] lg:gap-9">
          <div
            aria-live="polite"
            className="relative min-h-[36rem] overflow-hidden rounded-2xl border border-[#b68e54]/48 bg-white/5 sm:min-h-[44rem] lg:h-full lg:min-h-0"
          >
            {fragments.map((fragment, index) => (
              <figure
                key={fragment.title}
                aria-hidden={index !== activeIndex}
                className={`absolute inset-0 transition-[opacity,transform] duration-700 ${
                  index === activeIndex
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-[1.025] opacity-0"
                }`}
              >
                <Image
                  src={fragment.image}
                  alt={index === activeIndex ? fragment.alt : ""}
                  fill
                  priority={index === 1}
                  sizes="(min-width: 1024px) 61vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,7,0.2),transparent_64%),linear-gradient(0deg,rgba(3,8,7,0.96)_0%,rgba(3,8,7,0.6)_26%,transparent_62%)]" />
              </figure>
            ))}

            <div className="absolute right-7 bottom-8 left-7 z-10 sm:right-12 sm:bottom-10 sm:left-12 lg:right-14 lg:bottom-9 lg:left-14">
              <div className="mb-5">
                <p className="text-[9px] font-bold tracking-[0.24em] text-[#d8b884] uppercase">
                  {active.note}
                </p>
              </div>
              <h1 className={`${bodoni.className} max-w-[15ch] text-[2.55rem] leading-[1.02] tracking-[-0.035em] text-white sm:text-[3.8rem] lg:text-[clamp(3rem,3.7vw,3.65rem)]`}>
                {active.title}
              </h1>
              <p className="mt-4 max-w-[35rem] text-sm leading-7 text-white/60 sm:text-base">
                {active.description}
              </p>
              <Link
                href="/galerie"
                className="cta-button cta-primary mt-6 inline-flex min-h-12 w-fit items-center gap-5 px-6 text-[9px] font-extrabold tracking-[0.2em] uppercase"
              >
                Découvrir l’histoire
                <span
                  aria-hidden="true"
                  className="flex size-8 items-center justify-center rounded-full border border-[#07100e]/55 text-base"
                >
                  →
                </span>
              </Link>
            </div>

            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 bottom-0 z-20 hidden h-24 w-40 bg-[#050d0b] lg:block [clip-path:polygon(100%_0,100%_100%,0_100%)]"
            />
          </div>

          <aside className="flex min-h-0 flex-col lg:pt-2">
            <div className="flex items-center justify-between gap-5">
              <h2 className="shrink-0 text-[11px] font-bold tracking-[0.2em] text-[#d8b884] uppercase sm:text-sm">
                Table de montage
              </h2>
              <span aria-hidden="true" className="text-xl text-[#d8b884]">
                ✦
              </span>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:min-h-0 lg:flex-1 lg:grid-cols-1 lg:grid-rows-4">
              {fragments.map((fragment, index) => (
                <button
                  key={fragment.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={index === activeIndex}
                  className={`group grid min-h-32 min-w-0 grid-cols-[5.5rem_1fr_auto] items-center gap-4 overflow-hidden rounded-xl border p-2 text-left transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 sm:grid-cols-[7rem_1fr_auto] lg:min-h-0 lg:grid-cols-[30%_1fr_auto] ${
                    index === activeIndex
                      ? "border-[#b68e54]/55 bg-[radial-gradient(circle_at_75%_45%,rgba(182,142,84,0.16),transparent_65%),#11130f]"
                      : "border-white/12 bg-[#09120f] hover:border-[#b68e54]/42 hover:bg-[#0e1915]"
                  }`}
                >
                  <span className="relative h-full min-h-28 overflow-hidden rounded-lg bg-white/5 lg:min-h-0">
                    <Image
                      src={fragment.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 180px, 112px"
                      className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                        index === activeIndex ? "grayscale-0" : "grayscale-[0.18]"
                      }`}
                    />
                  </span>
                  <span className="min-w-0 py-2">
                    <span className="block text-[8px] font-bold tracking-[0.2em] text-[#d8b884] uppercase">
                      {fragment.note}
                    </span>
                    <span className={`${bodoni.className} mt-3 block text-lg leading-tight text-white sm:text-xl lg:text-[clamp(1.18rem,1.55vw,1.7rem)]`}>
                      {fragment.title}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="mr-2 flex size-10 shrink-0 items-center justify-center rounded-full border border-[#b68e54]/72 text-lg text-[#d8b884] transition-colors group-hover:bg-[#d8b884] group-hover:text-[#07100e] sm:size-12"
                  >
                    →
                  </span>
                </button>
              ))}
            </div>

            <div className="relative z-20 mt-3 flex flex-col items-center gap-5 rounded-xl border border-[#b68e54]/24 bg-[#09120f] px-5 py-4 text-center sm:flex-row sm:text-left xl:-ml-40 xl:pl-44">
              <span
                aria-hidden="true"
                className="hidden size-12 shrink-0 items-center justify-center rounded-full border border-[#b68e54]/72 text-[#d8b884] xl:flex"
              >
                <svg viewBox="0 0 48 48" fill="none" className="size-9">
                  <circle cx="24" cy="24" r="17" stroke="currentColor" />
                  <circle cx="24" cy="24" r="5" stroke="currentColor" />
                  <path d="M24 7v12M24 29v12M7 24h12M29 24h12" stroke="currentColor" />
                </svg>
              </span>
              <p className="min-w-0 flex-1 text-xs leading-5 text-white/52">
                L’invisible relie chaque détail pour raconter votre histoire
                avec justesse et émotion.
              </p>
              <Link
                href="/contact"
                className="cta-button cta-primary inline-flex min-h-11 w-fit shrink-0 items-center gap-5 px-9 text-[8px] font-extrabold tracking-[0.18em] uppercase"
              >
                Raconter mon histoire
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
