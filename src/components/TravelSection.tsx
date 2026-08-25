import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import { Icon } from "@iconify/react";
import arrowIcon from "@iconify-icons/solar/arrow-right-linear";
import globeIcon from "@iconify-icons/solar/global-linear";
import mapPointIcon from "@iconify-icons/solar/map-point-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const travelZones = [
  {
    title: "Guadeloupe",
    text: "Présent sur toute l’île, du Moule à Basse-Terre, sans frais de déplacement supplémentaires.",
    icon: mapPointIcon,
  },
  {
    title: "Caraïbes",
    text: "Martinique, Saint-Martin, Dominique et les îles voisines : déplacement organisé selon votre date.",
    icon: null,
  },
  {
    title: "International",
    text: "Un mariage à l’étranger ? Les modalités de déplacement sont étudiées ensemble, sur devis.",
    icon: globeIcon,
  },
];

function PalmTreeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path d="M11.5 20c.8-5.3.6-9.2-.4-12" />
      <path d="M11.1 8C8.3 5.5 5.7 5.2 3.5 7.1c2.1.1 4.2.8 6.1 2.2" />
      <path d="M11.2 8c1.2-3.4 3.5-5 6.4-4.5-1.5 1.1-2.8 2.8-3.7 5" />
      <path d="M11.4 8.1c3.1-1.9 5.9-1.4 7.9 1-2.2-.2-4.2.2-6 1.1" />
      <path d="M11.1 7.9C9.6 4.8 7.2 3.5 4.4 4.3c1.7.9 3.2 2.2 4.4 4" />
      <path d="M7.7 20h8.2" />
    </svg>
  );
}

export default function TravelSection() {
  return (
    <section
      id="zone-deplacement"
      aria-labelledby="zone-title"
      className="relative isolate overflow-hidden bg-[#050a0b] text-[#f4efe7] md:min-h-svh"
    >
      <Image
        src="/images/travel-camera-background.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-30 object-cover object-[38%_center] md:object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,7,8,0.28)_0%,rgba(4,10,11,0.54)_42%,rgba(4,10,11,0.62)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,7,8,0.15)_0%,rgba(2,7,8,0.16)_45%,rgba(2,7,8,0.72)_100%)]"
      />

      <div className="relative mx-auto flex max-w-[90rem] flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 md:min-h-svh md:py-28 lg:px-10 xl:px-12 xl:pt-[8.6rem] xl:pb-[5rem]">
        <header className="mx-auto max-w-[52rem] text-center">
          <p className="text-[0.62rem] font-extrabold tracking-[0.34em] text-white/64 uppercase sm:text-[0.68rem]">
            Où que soit votre histoire
          </p>
          <h2
            id="zone-title"
            className={bodoni.className + " mt-3 text-[2.25rem] leading-[0.98] font-medium tracking-[-0.035em] uppercase sm:text-[2.7rem] md:mt-5 md:text-[3.7rem] xl:text-[4rem]"}
          >
            Zone de déplacement
          </h2>
          <p className="mx-auto mt-3 max-w-[39rem] text-[0.8rem] leading-6 text-white/66 sm:text-[0.88rem] md:mt-5 md:text-[0.95rem] md:leading-7">
            De la Guadeloupe à l’international, votre lieu de mariage définit{" "}
            <br className="hidden sm:block" />
            simplement les modalités de déplacement.
          </p>
        </header>

        <div className="mx-auto mt-6 grid w-full max-w-[76rem] gap-3 md:mt-8 md:grid-cols-3 md:gap-5">
          {travelZones.map((zone) => (
            <article
              key={zone.title}
              className="grid grid-cols-[2.75rem_1fr] grid-rows-[auto_auto] items-start gap-x-4 rounded-[0.8rem] border border-white/17 bg-white/[0.035] px-5 py-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] backdrop-blur-[2px] md:flex md:min-h-[15.2rem] md:flex-col md:items-center md:px-7 md:py-7 md:text-center lg:px-8"
            >
              <span className="row-span-2 flex size-11 shrink-0 items-center justify-center rounded-full border border-[#d8b884]/48 text-[#d8b884] md:size-12">
                {zone.icon ? (
                  <Icon icon={zone.icon} className="size-5" aria-hidden="true" />
                ) : (
                  <PalmTreeIcon />
                )}
              </span>
              <h3 className="col-start-2 text-[0.68rem] font-extrabold tracking-[0.18em] text-[#f4efe7] uppercase sm:text-[0.72rem] md:mt-4 md:text-[0.77rem]">
                {zone.title}
              </h3>
              <p className="col-start-2 mt-1.5 max-w-[24rem] text-[0.72rem] leading-5 text-white/68 sm:text-[0.76rem] md:mt-4 md:max-w-[18rem] md:text-[0.8rem] md:leading-[1.45rem]">
                {zone.text}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/contact"
          className="cta-button mx-auto mt-7 inline-flex min-h-[3rem] min-w-[17.5rem] items-center justify-between border border-white/24 bg-black/10 px-8 text-[0.6rem] font-extrabold tracking-[0.24em] text-[#f4efe7] uppercase backdrop-blur-sm transition-colors hover:border-[#d8b884]/65 hover:bg-[#d8b884] hover:text-[#08100e] sm:min-w-[19rem] md:mt-10"
        >
          Parler de votre projet
          <Icon icon={arrowIcon} className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
