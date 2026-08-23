import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import { Icon } from "@iconify/react";
import arrowIcon from "@iconify-icons/solar/arrow-right-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const bookingSteps = [
  {
    number: "01",
    title: "Contact & disponibilités",
    text: "Vous m’écrivez avec votre date et votre lieu.",
  },
  {
    number: "02",
    title: "Acompte & contrat",
    text: "Un contrat clair et un acompte confirment votre réservation.",
  },
  {
    number: "03",
    title: "Confirmation",
    text: "Votre date est bloquée dans mon agenda.",
  },
];

export default function BookingProcess() {
  return (
    <section id="reservation" className="relative bg-[#faf7f0] text-[#13201e]">
      <div className="grid lg:grid-cols-[0.62fr_1.38fr]">
        <div className="relative flex flex-col justify-between gap-10 px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-0">
          <div>
            <div className="flex items-center gap-3 text-[#9a713a]">
              <span className="text-[10px] font-extrabold tracking-[0.28em] uppercase">
                La réservation
              </span>
            </div>

            <h2
              className={`${bodoni.className} mt-6 max-w-[9ch] text-[3rem] leading-[0.94] font-medium tracking-[-0.03em] uppercase sm:text-[3.75rem] lg:text-[3.25rem] xl:text-[3.75rem]`}
            >
              Trois étapes, simplement.
            </h2>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#13201e]/60">
              De notre premier échange à la confirmation de votre date, un
              parcours clair et sans surprise.
            </p>
          </div>

          <div className="relative hidden size-24 items-center justify-center rounded-full border border-[#b68e54]/50 text-[#9a713a] sm:flex">
            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
              <path
                id="badge-circle-path"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="fill-current text-[7.2px] font-bold tracking-[0.15em] uppercase">
                <textPath href="#badge-circle-path" startOffset="0%">
                  Patrice Wilfrid Photographe · Depuis 2007 ·
                </textPath>
              </text>
            </svg>
            <span className={`${bodoni.className} text-lg leading-none`}>PW</span>
          </div>
        </div>

        <div className="relative min-h-[38rem] w-full overflow-hidden sm:min-h-[42rem] lg:min-h-[44rem]">
          <Image
            src="/web/photoo/Mariage%20Christophe%20%26%20Sandra/31122013-DSC_6613.jpg"
            alt="Portrait complice des mariés"
            fill
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover object-top grayscale"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,32,30,0.2)_0%,transparent_35%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-[linear-gradient(0deg,rgba(14,21,18,0.96)_0%,rgba(14,21,18,0.75)_45%,transparent_100%)]" />

          <ol className="absolute inset-x-0 bottom-0 flex flex-col divide-y divide-[#d8b884]/35 px-6 sm:px-10 lg:px-12">
            {bookingSteps.map((step) => (
              <li
                key={step.number}
                className="flex items-baseline gap-5 py-5 sm:gap-8 sm:py-7"
              >
                <span
                  className={`${bodoni.className} text-4xl leading-none text-[#d8b884] sm:text-5xl`}
                >
                  {step.number}
                </span>
                <span className="hidden h-8 w-px self-center bg-[#d8b884]/40 sm:block" />
                <div>
                  <h3
                    className={`${bodoni.className} text-lg leading-tight text-white sm:text-xl`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-white/75 sm:text-sm">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex justify-center bg-[#14201e] py-8">
        <Link
          href="/contact"
          className="cta-button cta-dark inline-flex min-h-14 w-fit items-center gap-8 bg-transparent px-9 text-[9px] font-extrabold tracking-[0.2em] text-white uppercase transition-colors hover:bg-white/5"
        >
          Démarrer ma réservation
          <Icon icon={arrowIcon} className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
