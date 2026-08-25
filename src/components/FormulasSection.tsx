import Image from "next/image";
import Link from "next/link";
import { Allura, Bodoni_Moda } from "next/font/google";
import { Icon } from "@iconify/react";
import arrowIcon from "@iconify-icons/solar/arrow-right-linear";
import calendarIcon from "@iconify-icons/solar/calendar-linear";
import checkCircleIcon from "@iconify-icons/solar/check-circle-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

const formulas = [
  {
    name: "Essentiel",
    duration: "4 heures",
    text: "Pour une cérémonie ou un moment ciblé, couvert avec la même exigence que la journée complète.",
    includes: [
      "Un photographe présent 4 heures",
      "Galerie privée en ligne sécurisée",
      "Sélection et retouche des meilleures images",
    ],
  },
  {
    name: "Journée complète",
    duration: "8 à 10 heures",
    text: "La formule la plus choisie : des préparatifs à la fin de la réception, sans rien manquer.",
    includes: [
      "Un photographe présent toute la journée",
      "Préparatifs, cérémonie et réception couverts",
      "Galerie privée en ligne sécurisée",
      "Sélection et retouche complètes",
    ],
    featured: true,
  },
  {
    name: "Premium",
    duration: "Journée complète +",
    text: "Pour les mariages avec plus d’invités ou plusieurs lieux, avec un accompagnement renforcé.",
    includes: [
      "Journée complète avec second photographe",
      "Couverture de plusieurs lieux",
      "Galerie privée en ligne sécurisée",
      "Album ou tirages disponibles en option",
    ],
  },
];

function Ornament({ light = false }: { light?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={
        "flex items-center justify-center gap-2.5 " +
        (light ? "text-[#dfbe7e]" : "text-[#cda765]")
      }
    >
      <span className="size-1.5 rotate-45 bg-current" />
    </span>
  );
}

function BotanicalBranch() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 340 210"
      fill="none"
      className="pointer-events-none absolute top-[6.3rem] right-[-1.25rem] hidden h-[13.5rem] w-[21rem] text-[#d1aa66] opacity-30 xl:block"
    >
      <g stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
        <path d="M342 199C292 150 256 122 207 99C168 80 122 77 76 42" />
        <path d="M285 153C292 129 291 111 280 92" />
        <path d="M257 132C253 109 245 93 229 81" />
        <path d="M214 102C221 82 220 65 210 49" />
        <path d="M183 88C176 66 164 49 145 39" />
        <path d="M143 75C145 54 138 36 124 21" />
        <path d="M105 57C93 45 87 31 87 15" />
        <path d="M280 92C268 83 259 79 247 78" />
        <path d="M229 81C236 63 234 48 225 34" />
        <path d="M210 49C200 39 190 34 178 34" />
        <path d="M145 39C151 27 150 15 143 5" />
        <path d="M124 21C113 17 104 17 95 21" />
        <path d="M76 42C65 32 59 20 59 7" />
        <path d="M247 78c-11-1-17 4-18 13 10 2 17-3 18-13Z" />
        <path d="M280 92c12-2 19 3 20 12-10 3-18-1-20-12Z" />
        <path d="M225 34c9 2 14 8 13 17-9 0-14-6-13-17Z" />
        <path d="M178 34c-8-6-16-5-21 2 7 6 15 5 21-2Z" />
        <path d="M143 5c7 5 9 12 5 19-8-4-9-11-5-19Z" />
        <path d="M95 21c-8-5-15-3-19 4 7 5 14 4 19-4Z" />
        <path d="M59 7c7 4 10 11 6 18-7-3-10-10-6-18Z" />
        <path d="M87 15c-8 1-13 6-13 14 8 0 13-6 13-14Z" />
        <path d="M164 49c-8 1-13 7-12 15 8-1 13-7 12-15Z" />
        <path d="M291 111c10 0 16 5 18 13-9 2-16-3-18-13Z" />
        <circle cx="207" cy="99" r="2" />
        <circle cx="76" cy="42" r="1.7" />
        <circle cx="285" cy="153" r="1.7" />
      </g>
    </svg>
  );
}

export default function FormulasSection() {
  return (
    <section
      id="formules"
      aria-labelledby="formules-title"
      className="relative min-h-[58rem] overflow-hidden bg-[#faf7f0] text-[#13201e] [--formula-panel-left:clamp(2rem,3.05vw,4rem)] [--formula-panel-width:clamp(18rem,19.3vw,20.25rem)] sm:min-h-0 xl:min-h-[59.2rem]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_12%,rgba(216,184,132,0.09),transparent_30%),linear-gradient(105deg,rgba(255,255,255,0.62),transparent_48%)]"
      />
      <BotanicalBranch />

      <aside className="absolute top-[5.45rem] bottom-0 left-[var(--formula-panel-left)] hidden w-[var(--formula-panel-width)] flex-col xl:flex">
        <figure className="relative h-[18.75rem] shrink-0 overflow-hidden border-x border-[#cda765]/30 bg-[#ded9cf]">
          <Image
            src="/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6464.jpg"
            alt="Christophe et Sandra réunis le jour de leur mariage"
            fill
            sizes="20.25rem"
            className="object-cover object-[center_46%] grayscale opacity-55"
          />
          <span className="absolute inset-0 bg-[#e9e0d2]/20" />
        </figure>

        <div className="flex min-h-[24.2rem] shrink-0 flex-col items-center border-x border-[#cda765]/55 bg-white/50 px-8 pt-6 pb-7 text-center backdrop-blur-[1px]">
          <h3 className={bodoni.className + " mt-5 text-[1.45rem] leading-[1.18] font-medium tracking-[-0.025em] uppercase"}>
            Votre histoire,
            <br />
            en images
          </h3>
          <span aria-hidden="true" className="mt-5 size-1.5 rotate-45 bg-[#cda765]" />
          <p className="mt-5 text-[0.82rem] leading-6 text-[#13201e]/64">
            Chaque mariage est unique.
            <br />
            Ces formules sont des repères pensés
            <br />
            pour s’adapter à votre journée.
          </p>
          <p className="mt-3 text-[0.82rem] leading-6 text-[#13201e]/64">
            Discutons de vos envies pour créer
            <br />
            la couverture idéale.
          </p>
          <span className={allura.className + " mt-5 text-[2.45rem] leading-none text-[#cda765]/75"}>
            Patrice Wilfrid
          </span>
        </div>

        <figure className="relative min-h-[14rem] flex-1 overflow-hidden border-x border-[#cda765]/30 bg-[#ded9cf]">
          <Image
            src="/web/photoo/Mariage%20Christophe%20%26%20Sandra/31122013-DSC_6675.jpg"
            alt="Christophe et Sandra après leur cérémonie"
            fill
            sizes="20.25rem"
            className="object-cover object-[center_18%] grayscale opacity-55"
          />
          <span className="absolute inset-0 bg-[#e9e0d2]/18" />
        </figure>
      </aside>

      <div className="relative px-5 pt-20 pb-20 sm:px-8 sm:pt-24 sm:pb-24 xl:px-0 xl:pt-[7.25rem] xl:pb-0">
        <header className="mx-auto max-w-[46rem] text-center">
          <p className="text-[0.68rem] font-extrabold tracking-[0.36em] text-[#b58a4b] uppercase">
            Les formules
          </p>
          <h2
            id="formules-title"
            className={bodoni.className + " mt-4 text-[2.65rem] leading-[0.95] font-medium tracking-[-0.045em] uppercase sm:text-[3.7rem] xl:text-[3.75rem]"}
          >
            Une durée pour
            <br />
            chaque histoire
          </h2>
          <div className="mt-4">
            <Ornament />
          </div>
          <p className="mx-auto mt-3.5 max-w-[39rem] text-[0.92rem] leading-[1.55rem] text-[#13201e]/66 sm:text-[1rem]">
            Trois durées de présence, ajustables à votre journée.
            <br className="hidden sm:block" />
            Le détail précis est établi ensemble selon votre projet.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-3 xl:mt-[2.8rem] xl:ml-[calc(var(--formula-panel-left)+var(--formula-panel-width)+2.15rem)] xl:h-[29.4rem] xl:w-[min(68.1vw,71.5rem)] xl:grid-cols-[0.97fr_1.04fr_1fr]">
          {formulas.map((formula) => (
            <article
              key={formula.name}
              className={
                "relative flex h-full min-h-[29.5rem] flex-col rounded-[0.7rem] border px-7 pt-10 pb-7 text-center md:px-6 xl:min-h-0 " +
                (formula.featured
                  ? "border-[#cda765] bg-[#10201e] text-white shadow-[0_20px_45px_-24px_rgba(13,30,27,0.48)] xl:px-[3.4rem]"
                  : "border-[#a78652]/25 bg-white/54 text-[#13201e] xl:px-10")
              }
            >
              {formula.featured && (
                <span className="absolute -top-[0.82rem] left-1/2 -translate-x-1/2 rounded-[0.45rem] border border-[#c39c5d]/40 bg-[#d7b879] px-4 py-[0.38rem] text-[0.57rem] font-extrabold tracking-[0.2em] text-[#13201e] uppercase whitespace-nowrap shadow-[0_3px_8px_rgba(57,43,22,0.12)]">
                  Formule la plus choisie
                </span>
              )}

              <p className={
                "text-[0.64rem] font-extrabold tracking-[0.25em] uppercase " +
                (formula.featured ? "text-[#dfbe7e]" : "text-[#a97f42]")
              }>
                {formula.duration}
              </p>
              <h3 className={
                bodoni.className +
                " mt-3 text-[1.75rem] leading-[0.98] font-medium tracking-[-0.035em] uppercase xl:text-[1.9rem]"
              }>
                {formula.name}
              </h3>
              <div className={formula.featured ? "mt-1.5" : "mt-5"}>
                <Ornament light={formula.featured} />
              </div>
              <p className={
                "text-[0.82rem] " +
                (formula.featured
                  ? "mt-2 leading-[1.2rem] text-white/86"
                  : "mt-5 leading-[1.3rem] text-[#13201e]/66")
              }>
                {formula.text}
              </p>

              <span aria-hidden="true" className={
                "mt-4 h-px w-full " +
                (formula.featured ? "bg-[#dfbe7e]/30" : "bg-[#a78652]/16")
              } />

              <ul className="mt-5 flex flex-1 flex-col gap-2.5 text-left">
                {formula.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.81rem] leading-[1.3rem]">
                    <Icon
                      icon={checkCircleIcon}
                      className={
                        "mt-0.5 size-[1.05rem] shrink-0 " +
                        (formula.featured ? "text-[#dfbe7e]" : "text-[#b98a48]")
                      }
                      aria-hidden="true"
                    />
                    <span className={formula.featured ? "text-white/92" : "text-[#13201e]/72"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={
                  "cta-button mx-auto mt-5 inline-flex min-h-[2.8rem] w-full max-w-[15.5rem] items-center justify-between rounded-full px-7 text-[0.57rem] font-extrabold tracking-[0.2em] uppercase " +
                  (formula.featured
                    ? "border border-[#d7b879] bg-[#d7b879] text-[#13201e] hover:bg-[#e5c98f] xl:max-w-[16.7rem]"
                    : "border border-[#b98a48]/70 text-[#9c733c] hover:border-[#b98a48] hover:bg-[#b98a48] hover:text-white")
                }
              >
                Demander un devis
                <Icon icon={arrowIcon} className="size-3.5" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-6 flex max-w-[38rem] items-start justify-center gap-2.5 text-center xl:ml-[calc(var(--formula-panel-left)+var(--formula-panel-width)+2.15rem)] xl:w-[min(68.1vw,71.5rem)] xl:max-w-none">
          <Icon icon={calendarIcon} className="mt-0.5 size-4 shrink-0 text-[#ad7d3b]" aria-hidden="true" />
          <p className="text-[0.72rem] leading-[1.35rem] text-[#13201e]/58">
            Toutes les formules sont 100 % personnalisables.
            <br />
            Un devis détaillé et transparent vous est remis après notre échange.
          </p>
        </div>
      </div>
    </section>
  );
}
