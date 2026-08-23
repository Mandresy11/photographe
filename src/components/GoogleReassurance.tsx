import { Bodoni_Moda } from "next/font/google";
import { Icon } from "@iconify/react";
import cameraIcon from "@iconify-icons/solar/camera-linear";
import starIcon from "@iconify-icons/solar/star-bold";
import shieldCheckIcon from "@iconify-icons/solar/shield-check-linear";
import medalStarIcon from "@iconify-icons/solar/medal-star-linear";
import likeIcon from "@iconify-icons/solar/like-linear";
import clockIcon from "@iconify-icons/solar/clock-circle-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const reassurances = [
  {
    title: "100 % avis vérifiés",
    text: "Chaque avis provient d’un client réel, publié directement sur Google.",
    icon: shieldCheckIcon,
  },
  {
    title: "Note constante depuis 2007",
    text: "Une qualité de service maintenue sur toutes les prestations, année après année.",
    icon: medalStarIcon,
  },
  {
    title: "Recommandé par le bouche-à-oreille",
    text: "La majorité des clients viennent grâce à une recommandation d’un proche.",
    icon: likeIcon,
  },
  {
    title: "Réponse sous 24 à 48h",
    text: "Chaque message, avant ou après la prestation, reçoit une réponse rapide et personnelle.",
    icon: clockIcon,
  },
];

export default function GoogleReassurance() {
  return (
    <section className="relative overflow-hidden bg-[#0e1512] py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(216,184,132,0.08),transparent_38%)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-6 rounded-[1.75rem] border border-[#d8b884]/40 bg-[#131c19] px-6 py-10 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.6)] sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:gap-10 lg:px-14">
          <div className="flex flex-col items-center gap-2 text-center lg:shrink-0">
            <span className="flex size-14 items-center justify-center rounded-full bg-white text-lg font-black text-[#4285f4] shadow-[0_8px_20px_rgba(66,133,244,0.18)]">
              G
            </span>
            <p className="text-[9px] font-bold tracking-[0.14em] text-white/50 uppercase">
              Basé sur les avis Google
            </p>
          </div>

          <div className="hidden h-16 w-px bg-white/10 lg:block" />

          <div className="flex flex-col items-center gap-2 text-center lg:shrink-0">
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Icon
                  key={index}
                  icon={starIcon}
                  className="size-5 text-[#d8b884]"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className={`${bodoni.className} text-4xl leading-none font-medium text-white`}>
              4,9 / 5
            </p>
          </div>

          <div className="hidden h-16 w-px bg-white/10 lg:block" />

          <div className="flex flex-col items-center gap-5 text-center lg:flex-1 lg:items-start lg:text-left">
            <p className="max-w-md text-sm leading-7 text-white/65">
              Retrouvez l’ensemble des retours clients, laissés librement sur
              la fiche Google du studio.
            </p>
            <span className="cta-button cta-primary inline-flex min-h-14 w-fit items-center gap-3 px-8 text-[9px] font-extrabold tracking-[0.2em] uppercase">
              Voir tous les avis sur Google
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {reassurances.map((item) => (
            <div
              key={item.title}
              className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-[#d8b884]/25 bg-[#131c19] px-3 py-3 text-center sm:aspect-auto sm:gap-3 sm:rounded-[1.5rem] sm:px-6 sm:py-7"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#d8b884]/60 text-[#d8b884] sm:size-11">
                <Icon icon={item.icon} className="size-4 sm:size-5" aria-hidden="true" />
              </span>
              <p className="text-[9px] leading-tight font-bold tracking-[0.04em] text-[#d8b884] uppercase sm:text-[10px] sm:tracking-[0.08em]">
                {item.title}
              </p>
              <p className="hidden text-xs leading-5 text-white/60 sm:block">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GoogleReassuranceHeader() {
  return (
    <header className="relative overflow-hidden bg-[#0e1512] pt-32 pb-12 text-center text-white sm:pt-40 lg:pt-44">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-5 sm:px-8">
        <Icon icon={cameraIcon} className="size-5 text-[#d8b884]" aria-hidden="true" />
        <h1
          className={`${bodoni.className} mt-6 text-[2.75rem] leading-[1.02] font-medium tracking-[-0.03em] sm:text-[3.75rem]`}
        >
          Avis clients
        </h1>
        <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
          La satisfaction de mes clients est ma plus belle récompense.
        </p>
      </div>
    </header>
  );
}
