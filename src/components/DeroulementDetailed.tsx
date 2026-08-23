import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import { Icon } from "@iconify/react";
import chatIcon from "@iconify-icons/solar/chat-round-dots-linear";
import calendarIcon from "@iconify-icons/solar/calendar-linear";
import cameraIcon from "@iconify-icons/solar/camera-linear";
import galleryIcon from "@iconify-icons/solar/gallery-check-linear";
import heartIcon from "@iconify-icons/solar/heart-linear";
import usersGroupIcon from "@iconify-icons/solar/users-group-rounded-linear";
import shieldCheckIcon from "@iconify-icons/solar/shield-check-linear";
import historyIcon from "@iconify-icons/solar/history-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const steps = [
  {
    number: "01",
    title: "Premier échange",
    text: "On échange sur votre histoire, vos envies et le déroulé de votre journée.",
    icon: chatIcon,
    image:
      "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6464.jpg",
    alt: "Christophe et Sandra réunis le jour de leur mariage",
    position: "object-[59%_center] sm:object-[62%_center] lg:object-[64%_48%]",
  },
  {
    number: "02",
    title: "La préparation",
    text: "Nous organisons ensemble les temps forts de votre journée.",
    icon: calendarIcon,
    image: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC6836.jpg",
    alt: "Marvin ajuste sa tenue pendant les préparatifs",
    position: "object-[50%_30%]",
  },
  {
    number: "03",
    title: "Le jour J",
    text: "Je photographie l’instant avec discrétion, présent sans jamais interrompre.",
    icon: cameraIcon,
    image: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC7315.jpg",
    alt: "Marvin et Gwen devant l’autel pendant leur cérémonie",
    position: "object-[57%_center] lg:object-center",
  },
  {
    number: "04",
    title: "Vos images",
    text: "Vous recevez une galerie élégante et intemporelle, fidèle à votre histoire.",
    icon: galleryIcon,
    image: "/web/photoo/Mariage%20Gina%20%26%20Lionel/DSC_4730.jpg",
    alt: "Gina et Lionel réunis après leur cérémonie",
    position: "object-[58%_center] lg:object-center",
  },
];

const highlights = [
  { label: "Accompagnement personnalisé", icon: usersGroupIcon },
  { label: "Discrétion et bienveillance", icon: shieldCheckIcon },
  { label: "Respect du timing de votre journée", icon: historyIcon },
  { label: "Galerie privée sécurisée", icon: galleryIcon },
  { label: "Souvenirs qui traversent le temps", icon: heartIcon },
];

export default function DeroulementDetailed() {
  return (
    <section
      id="deroulement"
      aria-labelledby="deroulement-title"
      className="relative overflow-hidden bg-[#faf7f0] py-20 text-[#13201e] sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(216,184,132,0.14),transparent_30%)]"
      />

      <div className="relative mx-auto flex w-full max-w-[1680px] flex-col px-5 sm:px-8 lg:px-10">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-extrabold tracking-[0.3em] text-[#b68e54] uppercase sm:text-[11px]">
            Notre approche
          </p>
          <h2
            id="deroulement-title"
            className={`${bodoni.className} mt-4 text-[2.5rem] leading-[1.02] font-medium tracking-[-0.03em] uppercase sm:text-[3.5rem]`}
          >
            Comment ça se passe
          </h2>

          <p className="mt-6 text-sm leading-7 text-[#13201e]/60 sm:text-base">
            Quatre étapes, toujours dans le même ordre, de notre premier
            échange jusqu’à la remise de vos images.
          </p>
        </header>

        {/* Mobile : barre de progression + cartes sombres empilées */}
        <div className="mt-12 sm:hidden">
          <div className="flex items-center justify-between gap-4 rounded-full border border-[#13201e]/10 bg-white px-5 py-3.5 shadow-[0_10px_28px_-18px_rgba(20,32,30,0.4)]">
            <span className="text-[9px] font-extrabold tracking-[0.14em] text-[#13201e] uppercase">
              Votre parcours
            </span>
            <div className="flex flex-1 items-center px-2">
              {steps.map((step, index) => (
                <span key={step.number} className="flex flex-1 items-center last:flex-none">
                  <span
                    className={`size-2 shrink-0 rounded-full ${
                      index === 0 ? "bg-[#b68e54]" : "border border-[#13201e]/25 bg-transparent"
                    }`}
                  />
                  {index !== steps.length - 1 && (
                    <span className="h-px flex-1 bg-[#13201e]/15" />
                  )}
                </span>
              ))}
            </div>
            <span className="shrink-0 text-[9px] font-extrabold tracking-[0.1em] text-[#9a713a] uppercase">
              {steps.length} étapes
            </span>
          </div>

          <ol className="relative mt-8 flex flex-col gap-6">
            <span
              aria-hidden="true"
              className="absolute top-8 bottom-8 left-9 w-px bg-[#13201e]/12"
            />
            {steps.map((step) => (
              <li
                key={step.number}
                className="relative flex items-start gap-4 rounded-[1.25rem] border border-[#13201e]/10 bg-[#13201e] px-5 py-5 text-white shadow-[0_18px_40px_-24px_rgba(20,32,30,0.55)]"
              >
                <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#e5c68f]">
                  <Icon icon={step.icon} className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base leading-tight font-bold tracking-[-0.01em]">
                      {step.title}
                    </h3>
                    <span
                      className={`${bodoni.className} shrink-0 text-xs text-white/35`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-white/65">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Tablette / desktop : cartes photo */}
        <div className="mt-14 hidden gap-8 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="relative flex flex-col overflow-hidden rounded-[1.5rem] border border-[#13201e]/8 bg-white shadow-[0_15px_40px_-25px_rgba(20,32,30,0.35)]"
            >
              <span
                className={`${bodoni.className} absolute top-4 left-1/2 z-10 flex size-11 -translate-x-1/2 items-center justify-center rounded-full bg-[#faf7f0] text-sm text-[#13201e] shadow-[0_6px_16px_rgba(20,32,30,0.15)]`}
              >
                {step.number}
              </span>

              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 45vw"
                  className={`object-cover ${step.position}`}
                />
              </div>

              <div className="relative flex flex-1 flex-col items-center px-6 pt-9 pb-8 text-center">
                <span className="absolute -top-6 flex size-12 items-center justify-center rounded-full border border-[#e5ded1] bg-white text-[#9a713a] shadow-[0_10px_24px_rgba(20,32,30,0.12)]">
                  <Icon icon={step.icon} className="size-5" aria-hidden="true" />
                </span>

                <h3 className="mt-2 text-sm font-bold tracking-[0.08em] text-[#13201e] uppercase">
                  {step.title}
                </h3>
                <p className="mt-4 text-[13px] leading-6 text-[#13201e]/60">
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-8 rounded-[1.5rem] border border-[#13201e]/8 bg-white px-6 py-8 sm:mt-12 sm:flex-row sm:items-center sm:gap-10 sm:px-10">
          <div className="flex items-center gap-5">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#f1e3c8] text-[#9a713a]">
              <Icon icon={heartIcon} className="size-6" aria-hidden="true" />
            </span>
            <p
              className={`${bodoni.className} max-w-[16ch] text-lg leading-snug text-[#13201e] sm:text-xl`}
            >
              Chaque reportage est unique, chaque souvenir est précieux.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-5 sm:divide-x sm:divide-[#13201e]/10">
            {highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="flex items-center gap-3 sm:px-4 sm:first:pl-0"
              >
                <Icon
                  icon={highlight.icon}
                  className="size-6 shrink-0 text-[#9a713a]"
                  aria-hidden="true"
                />
                <span className="text-xs leading-5 text-[#13201e]/70">
                  {highlight.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
