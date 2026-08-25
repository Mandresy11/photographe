import { Bodoni_Moda } from "next/font/google";
import { Icon } from "@iconify/react";
import filterIcon from "@iconify-icons/solar/gallery-edit-linear";
import clockIcon from "@iconify-icons/solar/clock-circle-linear";
import lockIcon from "@iconify-icons/solar/lock-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const steps = [
  {
    number: "01",
    title: "Sélection & retouche",
    text: "Je choisis les images qui racontent le mieux votre journée, puis j’ajuste la lumière et les couleurs avec soin.",
    icon: filterIcon,
  },
  {
    number: "02",
    title: "Délai de livraison",
    text: "Comptez 4 à 6 semaines selon la période. Le délai précis est confirmé dans votre proposition.",
    icon: clockIcon,
  },
  {
    number: "03",
    title: "Votre galerie privée",
    text: "Vos images arrivent dans une galerie en ligne sécurisée, prête à être téléchargée et partagée.",
    icon: lockIcon,
  },
];

function BotanicalBranch() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 340 210"
      fill="none"
      className="pointer-events-none absolute bottom-[-1rem] left-[-3.5rem] hidden h-[17rem] w-[27rem] -scale-x-100 rotate-180 text-[#d1aa66] opacity-20 xl:block"
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

export default function AfterWeddingSection() {
  return (
    <section
      id="apres-jour-j"
      aria-labelledby="apres-jour-j-title"
      className="relative min-h-svh overflow-hidden bg-[#faf7f0] text-[#13201e]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_10%,rgba(216,184,132,0.1),transparent_32%)]"
      />

      <BotanicalBranch />

      <div className="relative mx-auto grid min-h-svh max-w-[1400px] content-center gap-14 px-5 py-20 sm:px-8 sm:py-24 xl:grid-cols-[39.5rem_39.3125rem] xl:items-start xl:gap-[8.9375rem] xl:px-0 xl:py-12">
        <div className="relative xl:mt-[2.4rem]">
          <div className="flex max-w-[28rem] items-center gap-5 text-[#9e7b48]">
            <span className="shrink-0 text-[10px] font-extrabold tracking-[0.3em] uppercase sm:text-[11px]">
              Et après le jour J
            </span>
            <span className="size-1.5 shrink-0 rotate-45 bg-[#d8b884]" />
          </div>

          <h2
            id="apres-jour-j-title"
            className={`${bodoni.className} mt-8 text-[2.75rem] leading-[0.98] font-medium tracking-[-0.04em] uppercase sm:text-[3.5rem] xl:mt-[4.5rem] xl:text-[4.4rem] xl:leading-[1.26]`}
          >
            De la prise
            <br />
            de vue
            <br />À votre galerie
          </h2>

          <span className="mt-7 flex items-center justify-start text-[#b99050] xl:mt-[3.3rem]">
            <span className="size-1.5 rotate-45 bg-current" />
          </span>

          <p className="mt-7 max-w-[34rem] text-sm leading-7 text-[#13201e]/62 sm:text-base xl:mt-[2.5rem] xl:text-[1.05rem] xl:leading-[2.35rem]">
            Le travail continue longtemps après
            <br className="hidden xl:block" /> la dernière photo. Voici ce qui se passe
            <br className="hidden xl:block" /> entre la prestation et la réception de vos images.
          </p>
        </div>

        <ol className="relative flex flex-col gap-7">
          <span
            aria-hidden="true"
            className="absolute top-[7.25rem] bottom-[7.25rem] left-[-2.25rem] hidden w-px bg-[#b99050]/24 xl:block"
          />

          {steps.map((step) => (
            <li key={step.number} className="relative flex items-stretch xl:h-[14.5rem]">
              <span
                className={`${bodoni.className} absolute top-1/2 left-[-6.25rem] hidden -translate-y-1/2 text-[1.65rem] leading-none text-[#9e7b48] xl:block`}
              >
                {step.number}
              </span>

              <span
                aria-hidden="true"
                className="absolute top-1/2 left-[-2.55rem] z-10 hidden size-2.5 -translate-y-1/2 rounded-full bg-[#b99050] xl:block"
              />
              <div className="flex flex-1 items-center gap-6 rounded-[1.35rem] border border-[#13201e]/8 bg-white/80 px-6 py-7 shadow-[0_18px_36px_-25px_rgba(20,32,30,0.3)] sm:px-8 sm:py-8 xl:gap-10 xl:py-4 xl:pr-11 xl:pl-[1.05rem]">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-full border border-[#d8b884]/42 bg-white/30 text-[#9a713a] xl:size-[7.25rem]">
                  <Icon icon={step.icon} className="size-6 xl:size-9" aria-hidden="true" />
                </span>

                <div className="min-w-0 xl:max-w-[23rem] xl:translate-y-2">
                  <h3 className="text-sm font-bold tracking-[0.1em] text-[#13201e] uppercase sm:text-base xl:text-[1.15rem] xl:tracking-[0.12em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#13201e]/64 sm:text-sm xl:mt-4 xl:text-base xl:leading-[1.75rem]">
                    {step.text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
