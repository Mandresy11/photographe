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
import passportIcon from "@iconify-icons/solar/passport-linear";
import userIdIcon from "@iconify-icons/solar/user-id-linear";
import checkCircleIcon from "@iconify-icons/solar/check-circle-linear";
import chefHatIcon from "@iconify-icons/solar/chef-hat-linear";
import plateIcon from "@iconify-icons/solar/plate-linear";
import starsIcon from "@iconify-icons/solar/stars-linear";
import FormulasSection from "@/components/FormulasSection";
import TravelSection from "@/components/TravelSection";

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
  {
    number: "05",
    title: "Identité & ePhoto",
    meta: "Agréé services en ligne ANTS",
    text: "Photos d’identité conformes pour cartes d’identité et passeports, ainsi que photo-signature numérique ePhoto pour vos démarches de permis de conduire.",
    image: "/web/photoo/04122025-_DSC0025.jpg",
    alt: "Patrice Wilfrid dans son studio photographique",
    position: "object-[center_28%]",
    steps: [
      { label: "Identité", icon: userIdIcon },
      { label: "ePhoto ANTS", icon: passportIcon },
      { label: "Conformité", icon: checkCircleIcon },
    ],
  },
  {
    number: "06",
    title: "Restaurants & gastronomie",
    meta: "Image culinaire",
    text: "Plats, desserts, boissons, gestes en cuisine et ambiance du lieu : des images pensées pour votre carte, votre site et vos réseaux sociaux.",
    image: "/web/photoo/Mariage%20Ryan%20%26%20Emilia/DSC_4590.jpg",
    alt: "Création pâtissière photographiée avec soin",
    position: "object-[center_47%]",
    steps: [
      { label: "Plats", icon: plateIcon },
      { label: "Savoir-faire", icon: chefHatIcon },
      { label: "Communication", icon: starsIcon },
    ],
  },
];

export default function PrestationsPageView() {
  return (
    <>
    <section
      aria-labelledby="prestations-intro-title"
      className="relative overflow-hidden bg-[#0e1512] pt-32 pb-20 text-white sm:pt-40 sm:pb-24 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(216,184,132,0.1),transparent_36%)]"
      />

      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <p className="text-[10px] font-extrabold tracking-[0.3em] text-[#d8b884] uppercase sm:text-[11px]">
          Prestations
        </p>
        <h1
          id="prestations-intro-title"
          className={`${bodoni.className} mt-5 text-[2.75rem] leading-[0.98] font-medium tracking-[-0.04em] uppercase sm:text-[4rem]`}
        >
          Sur mesure, selon votre journée.
        </h1>
        <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base">
          Mariages, célébrations, portraits officiels, gastronomie, mode et
          événements : des usages différents, une même exigence.
        </p>
      </div>

      <div
        className="relative mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 sm:mt-20 sm:px-8 lg:mx-auto lg:grid lg:max-w-[1100px] lg:grid-cols-2 lg:gap-x-10 lg:gap-y-14 lg:overflow-visible lg:px-0 lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingLeft: "1.5rem" }}
      >
        {offerings.map((offering, index) => {
          const inRightColumn = index % 2 === 1;

          return (
            <article
              key={offering.number}
              className={`flex w-[82%] shrink-0 snap-start flex-col sm:w-[45%] lg:w-auto lg:shrink ${inRightColumn ? "lg:mt-16" : ""}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/70 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.6)] lg:border-[#d8b884]/40">
                <Image
                  src={offering.image}
                  alt={offering.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={`object-cover saturate-[0.9] ${offering.position}`}
                />
              </div>

              <div className="mt-4 flex flex-1 flex-col">
                <p className="text-[9px] font-extrabold tracking-[0.3em] text-[#d8b884] uppercase sm:text-[10px]">
                  {offering.meta}
                </p>
                <h2
                  className={`${bodoni.className} mt-2 text-xl leading-[1.02] font-medium tracking-[-0.03em] uppercase sm:text-2xl`}
                >
                  {offering.title}
                </h2>
                <p className="mt-3 max-w-sm text-xs leading-6 text-white/70 sm:text-sm sm:leading-7">
                  {offering.text}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {offering.steps.map((step) => (
                    <span
                      key={step.label}
                      className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[9px] font-bold tracking-[0.1em] text-white uppercase"
                    >
                      <Icon icon={step.icon} className="size-3.5 text-[#d8b884]" aria-hidden="true" />
                      {step.label}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5">
                  <Link
                    href="/contact"
                    className="cta-button cta-primary inline-flex min-h-11 w-fit items-center gap-4 px-6 text-[9px] font-extrabold tracking-[0.2em] uppercase"
                  >
                    Découvrir l’offre {offering.title}
                    <Icon icon={arrowIcon} className="size-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>

    <FormulasSection />

    <TravelSection />
    </>
  );
}
