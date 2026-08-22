import Image from "next/image";
import { Icon } from "@iconify/react";
import mapPointIcon from "@iconify-icons/solar/map-point-linear";
import calendarIcon from "@iconify-icons/solar/calendar-linear";
import bookIcon from "@iconify-icons/solar/book-linear";
import chatRoundLineIcon from "@iconify-icons/solar/chat-round-line-linear";
import compassIcon from "@iconify-icons/solar/compass-linear";

const filmSettings = ["ISO 200", "f/2.0", "1/125", "400"];

const stats = [
  {
    label: "Basé en",
    value: "Guadeloupe",
    icon: mapPointIcon,
  },
  {
    label: "Depuis",
    value: "2007",
    icon: calendarIcon,
  },
  {
    label: "Style",
    value: "Éditorial",
    icon: bookIcon,
  },
  {
    label: "Réponse",
    value: "rapide",
    icon: chatRoundLineIcon,
  },
];

function PortraitCard() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 -translate-x-3 -translate-y-3 -rotate-1 border border-[#14201e]/10 bg-[#ece8df] shadow-sm"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rotate-[1.5deg] border border-[#14201e]/8 bg-[#e6e1d7]"
      />
      <figure className="relative border border-[#14201e]/12 bg-[#faf8f3] p-2 pb-6 shadow-[0_24px_50px_-18px_rgba(20,32,30,0.38)] sm:p-3 sm:pb-8 lg:p-4 lg:pb-10">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/web/photoo/04122025-_DSC0025.jpg"
            alt="Portrait de Patrice Wilfrid, photographe de mariage"
            fill
            sizes="(min-width: 1024px) 34vw, 88vw"
            className="object-cover object-[center_46%]"
          />
          <span className="absolute top-2 left-2 size-5 border-t-2 border-l-2 border-[#d8b884] sm:top-4 sm:left-4 sm:size-8" />
          <span className="absolute top-2 right-2 size-5 border-t-2 border-r-2 border-[#d8b884] sm:top-4 sm:right-4 sm:size-8" />
          <span className="absolute bottom-2 left-2 size-5 border-b-2 border-l-2 border-[#d8b884] sm:bottom-4 sm:left-4 sm:size-8" />
          <span className="absolute right-2 bottom-2 size-5 border-r-2 border-b-2 border-[#d8b884] sm:right-4 sm:bottom-4 sm:size-8" />
        </div>
      </figure>

      <div className="absolute top-1/2 -left-14 hidden -translate-y-1/2 flex-col items-center gap-9 sm:flex">
        {filmSettings.map((setting) => (
          <span
            key={setting}
            className="origin-center -rotate-90 text-[8px] font-bold tracking-[0.18em] whitespace-nowrap text-[#14201e]/55 uppercase"
          >
            {setting}
          </span>
        ))}
      </div>

      <span
        aria-hidden="true"
        className="absolute -bottom-5 -left-5 flex size-12 items-center justify-center rounded-full border border-[#b68e54]/65 bg-[#f3f0e9] text-[#b68e54] sm:-bottom-7 sm:-left-7 sm:size-16"
      >
        <Icon icon={compassIcon} className="size-6 sm:size-8" />
      </span>
    </div>
  );
}

export default function Photographer() {
  return (
    <section
      id="photographe"
      className="relative min-h-svh overflow-hidden bg-[#f3f0e9] text-[#14201e] lg:h-svh lg:min-h-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_43%,rgba(255,255,255,0.8),transparent_31%),radial-gradient(circle_at_74%_51%,rgba(216,184,132,0.09),transparent_38%)]"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-24 text-[18rem] font-black leading-none tracking-[-0.09em] text-[#14201e]/[0.025] sm:text-[25rem] lg:-top-24 lg:text-[30rem]"
      >
        06
      </span>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[4%] hidden size-16 text-[#14201e]/20 xl:block"
      >
        <span className="absolute top-1/2 left-0 h-px w-5 -translate-y-1/2 bg-current" />
        <span className="absolute top-1/2 right-0 h-px w-5 -translate-y-1/2 bg-current" />
        <span className="absolute top-0 left-1/2 h-5 w-px -translate-x-1/2 bg-current" />
        <span className="absolute bottom-0 left-1/2 h-5 w-px -translate-x-1/2 bg-current" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg leading-none">
          +
        </span>
      </div>

      <div className="relative mx-auto h-full max-w-[1510px] px-5 pt-24 pb-6 sm:px-8 sm:pt-28 sm:pb-10 lg:w-[84vw] lg:max-w-[1414px] lg:px-0 lg:py-10">
        <div className="grid h-full gap-6 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto hidden w-full max-w-[17rem] sm:block lg:mx-0 lg:max-w-[min(34.5rem,calc((100svh-7rem)*0.78))] lg:-translate-y-3">
            <PortraitCard />
          </div>

          <div className="lg:translate-y-[clamp(0rem,3.4svh,2rem)]">
            <p className="text-center text-[11px] font-extrabold tracking-[0.3em] text-[#b68e54] uppercase lg:text-left">
              Le photographe
            </p>
            <h2 className="editorial-title editorial-title-dark mt-[clamp(1.25rem,3svh,1.5rem)] text-center text-[clamp(2.15rem,5.2svh,2.65rem)] font-black leading-[0.88] tracking-[-0.035em] uppercase sm:mt-8 sm:text-[3.5rem] lg:mt-[clamp(2rem,6.8svh,4rem)] lg:origin-left lg:scale-x-[0.97] lg:text-left lg:text-[clamp(3.8rem,min(6.8vw,12svh),7.2rem)] [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]">
              <span className="block">Derrière</span>
              <span className="block">l&apos;objectif,</span>
              <span className="block">l&apos;essentiel.</span>
            </h2>

            <div className="relative mx-auto mt-9 w-full max-w-[11.5rem] sm:hidden">
              <PortraitCard />
            </div>

            <div className="mt-[clamp(1.25rem,3svh,1.5rem)] max-w-[37rem] border-l border-[#b68e54] pl-5 sm:mt-8 sm:pl-8 lg:mt-[clamp(2rem,6svh,3.5rem)]">
              <blockquote className="flex items-start gap-5">
                <span aria-hidden="true" className="text-4xl leading-none text-[#b68e54]">
                  &ldquo;
                </span>
                <p className="mt-0.5 text-lg leading-relaxed tracking-[-0.015em] text-[#14201e]/85 italic sm:text-[1.6rem] [font-family:Georgia,serif]">
                  Voir juste, rester simple, raconter vrai.
                </p>
              </blockquote>
              <p className="mt-5 hidden text-sm text-[#14201e]/62 sm:block sm:text-lg">
                Un style éditorial, naturel et discret.
              </p>
            </div>

            <dl className="mt-[clamp(1.5rem,4svh,2rem)] grid grid-cols-2 gap-y-4 sm:mt-8 sm:grid-cols-4 sm:gap-y-0 lg:mt-[clamp(2rem,5svh,3rem)]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center px-3 text-center sm:border-l sm:border-[#14201e]/16 sm:first:border-l-0"
                >
                  <Icon icon={stat.icon} className="size-6 text-[#b68e54] sm:size-8" />
                  <dt className="mt-2 text-xs text-[#14201e]/48 sm:mt-4 sm:text-sm">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-sm font-extrabold sm:text-lg">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

          </div>
        </div>
      </div>
    </section>
  );
}
