import Image from "next/image";
import Link from "next/link";

const questions = [
  {
    question: "Quel est le style photographique de Patrice ?",
    answer: "Éditorial, spontané, contrasté et lumineux.",
  },
  {
    question: "Où est basé le studio ?",
    answer: "En Guadeloupe, entre Le Moule et Saint-François.",
  },
  {
    question: "Sous quel délai aurons-nous une réponse ?",
    answer: "Sous 24 à 48 heures.",
  },
  {
    question: "Quelles informations envoyer dès le premier message ?",
    answer: "Prénoms, date, lieu, invités, budget et provenance.",
  },
  {
    question: "Comment prendre contact ?",
    answer: "Formulaire, e-mail ou WhatsApp.",
  },
];

const filmSettings = ["ISO 100", "1/1000", "F 2.8", "35 MM"];

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative isolate min-h-svh overflow-hidden bg-[#0c0906] text-white lg:h-svh lg:min-h-0"
    >
      <Image
        src="/web/photoo/04122025-_DSC0090.jpg"
        alt="Patrice Wilfrid règle un éclairage de studio avec son appareil photo"
        fill
        sizes="100vw"
        className="object-cover object-[52%_36%]"
      />
      <div className="absolute inset-0 bg-[#0c0906]/55" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,7,4,0.15)_0%,transparent_45%,rgba(10,7,4,0.55)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,7,4,0.7)_0%,transparent_22%,transparent_78%,rgba(10,7,4,0.75)_100%)]" />

      <span className="pointer-events-none absolute top-6 left-6 size-6 border-t-2 border-l-2 border-[#d8b884]/70 sm:top-8 sm:left-8" />
      <span className="pointer-events-none absolute top-6 right-6 size-6 border-t-2 border-r-2 border-[#d8b884]/70 sm:top-8 sm:right-8" />
      <span className="pointer-events-none absolute bottom-6 left-6 size-6 border-b-2 border-l-2 border-[#d8b884]/70 sm:bottom-8 sm:left-8" />
      <span className="pointer-events-none absolute right-6 bottom-6 size-6 border-r-2 border-b-2 border-[#d8b884]/70 sm:right-8 sm:bottom-8" />

      <div className="relative z-10 flex min-h-svh flex-col px-6 pt-24 pb-8 sm:px-10 sm:pt-28 sm:pb-10 lg:h-full lg:min-h-0 lg:px-14 lg:pt-24 lg:pb-10">
        <div className="my-auto grid gap-12 py-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-center text-[11px] font-extrabold tracking-[0.3em] text-[#d8b884] uppercase lg:text-left">
              Questions
            </p>
            <h2 className="editorial-title editorial-title-light mt-6 text-[2rem] font-black leading-[0.9] tracking-[-0.045em] text-pretty uppercase sm:max-w-[9ch] sm:text-6xl sm:text-balance lg:text-[3.4rem]">
              <span className="sm:hidden">
                Avant de raconter
                <br />
                la suite.
              </span>
              <span className="hidden sm:inline">Avant de raconter la suite.</span>
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white">
              Quelques réponses aux questions que l&apos;on nous pose
              souvent. Et si la vôtre n&apos;y est pas, écrivez-nous.
            </p>
            <Link
              href="/contact"
              className="cta-button cta-primary mt-7 hidden min-h-10 w-fit items-center gap-3 bg-[#d8b884] px-6 text-[9px] font-bold tracking-[0.2em] text-[#14201e] uppercase transition-colors hover:bg-[#edd19f] sm:inline-flex"
            >
              Poser ma question
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="border border-[#d8b884] bg-[#0c0906]/72 backdrop-blur-md">
            {questions.map((item) => (
              <details
                key={item.question}
                className="group border-b border-white/12 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 [&::-webkit-details-marker]:hidden sm:py-6">
                  <span className="text-sm font-bold tracking-[-0.01em] sm:text-base">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex size-8 shrink-0 items-center justify-center text-2xl font-light leading-none text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="max-w-2xl px-6 pb-6 text-sm leading-7 text-white/62">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <Link
            href="/contact"
            className="cta-button cta-primary mx-auto flex min-h-10 w-fit items-center gap-3 bg-[#d8b884] px-6 text-[9px] font-bold tracking-[0.2em] text-[#14201e] uppercase transition-colors hover:bg-[#edd19f] sm:hidden"
          >
            Poser ma question
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="absolute top-1/2 right-3 hidden -translate-y-1/2 flex-col items-center gap-6 sm:right-6 lg:flex">
          {filmSettings.map((setting) => (
            <span
              key={setting}
              className="origin-center -rotate-90 text-[8px] font-bold tracking-[0.18em] whitespace-nowrap text-white/45 uppercase"
            >
              {setting}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
