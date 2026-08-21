import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import compassIcon from "@iconify-icons/solar/compass-linear";

const journey = [
  {
    number: "01",
    year: "2007",
    place: "La Seine",
    label: "Premiers reportages",
    position: "left-[1%] top-[58%]",
  },
  {
    number: "02",
    year: "Paris, la nuit",
    place: "Le Lido",
    label: "Rigueur & mouvement",
    position: "left-[27%] top-[18%]",
  },
  {
    number: "03",
    year: "Mode",
    place: "Fashion weeks",
    label: "Éditorial & Polaroid",
    position: "left-[56%] top-[51%]",
  },
  {
    number: "04",
    year: "Aujourd’hui",
    place: "Guadeloupe",
    label: "Le mariage",
    position: "right-[1%] top-[8%]",
  },
];

const signatures = [
  { initial: "D", title: "Dessin", detail: "Le trait" },
  { initial: "A", title: "Art", detail: "Le regard" },
  { initial: "M", title: "Musique", detail: "Le rythme" },
  { initial: "C", title: "Cuisine", detail: "La couleur" },
];

const contactFrames = [
  {
    src: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC7503.jpg",
    alt: "Marvin et Gwen réunis après la cérémonie",
    position: "55% center",
  },
  {
    src: "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-07052022-DSC_6234.jpg",
    alt: "Préparatifs de Sandra avant la cérémonie",
    position: "center",
  },
  {
    src: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC7637.jpg",
    alt: "Détails de table du mariage de Marvin et Gwen",
    position: "52% center",
  },
];

export default function About() {
  return (
    <section
      id="a-propos"
      className="relative min-h-[100svh] overflow-x-clip overflow-y-hidden bg-[#f1eee7] text-[#14201e]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(20,32,30,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,32,30,0.045)_1px,transparent_1px)] bg-[size:72px_72px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_32%,rgba(216,184,132,0.2),transparent_28%)]" />

      <div className="relative mx-auto min-w-0 max-w-[1440px] overflow-x-clip px-5 pt-24 pb-8 sm:px-8 sm:pt-28 sm:pb-12 lg:flex lg:min-h-[100svh] lg:flex-col lg:px-12 lg:pt-24 lg:pb-8 xl:pt-24 xl:pb-10">
        <header className="grid shrink-0 gap-5 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div className="flex items-start justify-between lg:block">
            <p className="text-[11px] font-extrabold tracking-[0.3em] text-[#b68e54] uppercase">
              À propos
            </p>
            <div className="flex items-start gap-3">
              <p className="text-right text-[9px] font-bold tracking-[0.2em] text-[#14201e]/40 uppercase lg:mt-10 lg:text-left">
                Photographe
                <br />
                depuis 2007
              </p>
              <div
                aria-hidden="true"
                className="relative -mt-2 size-10 overflow-hidden border border-[#14201e]/25 p-1 lg:hidden"
              >
                <Image
                  src="/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-07052022-DSC_6234.jpg"
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover p-1"
                />
                <span className="absolute top-0.5 left-0.5 size-2 border-t border-l border-[#b68e54]" />
                <span className="absolute right-0.5 bottom-0.5 size-2 border-r border-b border-[#b68e54]" />
              </div>
            </div>

            <div className="mt-6 hidden max-w-[17rem] lg:block">
              <div className="relative bg-[#14201e] px-3 py-3 shadow-[8px_8px_0_rgba(182,142,84,0.16)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-2 top-1 h-1 bg-[repeating-linear-gradient(90deg,transparent_0_7px,rgba(241,238,231,0.6)_7px_11px)]"
                />
                <div className="grid h-16 grid-cols-3 gap-1 pt-1">
                  {contactFrames.map((frame, index) => (
                    <div
                      key={frame.src}
                      className="relative overflow-hidden border border-white/12"
                    >
                      <Image
                        src={frame.src}
                        alt={frame.alt}
                        fill
                        sizes="80px"
                        className="object-cover grayscale-[25%]"
                        style={{ objectPosition: frame.position }}
                      />
                      <span className="absolute right-1 bottom-1 text-[6px] font-bold text-white/75">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between text-[7px] font-bold tracking-[0.18em] text-[#d8b884] uppercase">
                  <span>35 mm</span>
                  <span>PW · 2007</span>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-x-2 bottom-1 h-1 bg-[repeating-linear-gradient(90deg,transparent_0_7px,rgba(241,238,231,0.6)_7px_11px)] opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[9px] font-bold tracking-[0.22em] text-[#b68e54] uppercase">
                Un parcours · Un regard
              </p>
              <div className="flex items-center gap-2 text-[7px] font-bold tracking-[0.14em] text-[#14201e]/40 uppercase">
                <Icon icon={compassIcon} aria-hidden="true" className="size-5 text-[#b68e54]" />
                <span className="hidden sm:inline">RAW · f/2.8 · 1/250</span>
                <span className="sm:hidden">RAW</span>
              </div>
            </div>
            <h2 className="editorial-title editorial-title-dark mt-3 max-w-[12ch] text-[2.25rem] font-extrabold leading-[0.89] tracking-[-0.065em] uppercase sm:text-5xl lg:mt-4 lg:text-[4rem] xl:text-[5rem]">
              Paris a formé l’œil. Le mariage a donné le sens.
            </h2>
          </div>
        </header>

        <div className="relative mt-6 hidden min-h-60 flex-1 overflow-hidden border-y border-[#14201e]/18 lg:block">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M20 235 C180 235 205 70 385 70 C545 70 585 210 750 175 C900 145 965 35 1180 35"
              fill="none"
              stroke="rgba(20,32,30,0.22)"
              strokeWidth="1.5"
              strokeDasharray="5 8"
            />
          </svg>

          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-[46%] overflow-hidden text-center text-[clamp(5rem,8vw,8rem)] font-black leading-none tracking-[-0.08em] whitespace-nowrap text-[#14201e]/[0.035]"
          >
            PARIS → GWADA
          </span>

          {journey.map((step) => (
            <article
              key={step.number}
              className={`absolute w-48 ${step.position}`}
            >
              <div className="flex items-center gap-3">
                <span className="size-3 border-[3px] border-[#f1eee7] bg-[#b68e54] shadow-[0_0_0_1px_rgba(20,32,30,0.3)]" />
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#b68e54]">
                  {step.number}
                </span>
              </div>
              <div className="mt-4 border-l border-[#14201e]/22 pl-4">
                <p className="text-[8px] font-bold tracking-[0.18em] text-[#14201e]/42 uppercase">
                  {step.year}
                </p>
                <h3 className="mt-2 text-lg font-extrabold tracking-[-0.03em] uppercase">
                  {step.place}
                </h3>
                <p className="mt-1 text-[9px] tracking-[0.1em] text-[#14201e]/48 uppercase">
                  {step.label}
                </p>
              </div>
            </article>
          ))}
        </div>

        <ol className="relative mt-7 grid min-w-0 grid-cols-2 overflow-hidden border-t border-[#14201e]/25 lg:hidden">
          {journey.map((step) => (
            <li
              key={step.number}
              className="relative min-w-0 min-h-24 overflow-hidden border-r border-b border-[#14201e]/18 px-3 py-4 even:border-r-0"
            >
              <span className="absolute -top-[0.38rem] left-3 size-3 border-[3px] border-[#f1eee7] bg-[#b68e54] shadow-[0_0_0_1px_rgba(20,32,30,0.3)]" />
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[8px] font-bold tracking-[0.18em] text-[#14201e]/42 uppercase">
                    {step.year}
                  </p>
                  <h3 className="mt-1 text-base font-extrabold tracking-[-0.03em] uppercase">
                    {step.place}
                  </h3>
                  <p className="mt-1 text-[9px] tracking-[0.1em] text-[#14201e]/48 uppercase">
                    {step.label}
                  </p>
                </div>
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#b68e54]">
                  {step.number}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid shrink-0 gap-4 border-t border-[#14201e]/20 pt-4 lg:mt-6 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20 lg:pt-5">
          <div className="flex items-end justify-between gap-4 lg:block">
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#14201e]/42 uppercase">
              Hors cadre
            </p>
            <p className="text-right text-sm font-bold tracking-[-0.025em] lg:mt-2 lg:text-left lg:text-base">
              Optimiste. Curieux. Attentif.
            </p>
          </div>

          <div className="min-w-0">
            <ul className="grid min-w-0 grid-cols-4 gap-px overflow-hidden border border-[#14201e]/18 bg-[#14201e]/18">
              {signatures.map((item) => (
                <li
                  key={item.title}
                  className="group flex min-w-0 min-h-20 flex-col justify-between overflow-hidden bg-[#f1eee7] p-3 transition-colors hover:bg-[#14201e] hover:text-white lg:min-h-24 lg:p-4"
                >
                  <span className="text-2xl font-black leading-none text-[#b68e54] lg:text-3xl">
                    {item.initial}
                  </span>
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.06em] uppercase sm:text-[10px] lg:text-xs lg:tracking-[0.1em]">
                      {item.title}
                    </p>
                    <p className="mt-1 hidden text-[8px] tracking-[0.16em] text-[#14201e]/42 uppercase transition-colors group-hover:text-white/45 sm:block">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="cta-button cta-ghost-gold mx-auto mt-6 flex min-h-9 w-fit items-center gap-3 text-[9px] font-bold tracking-[0.2em] text-[#b68e54] uppercase transition-colors hover:text-[#14201e] sm:mx-0 sm:mt-4 sm:inline-flex"
            >
              Discuter de votre projet
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
