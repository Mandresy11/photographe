import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import { Icon } from "@iconify/react";
import letterIcon from "@iconify-icons/solar/letter-linear";
import documentAddIcon from "@iconify-icons/solar/document-add-linear";
import checkCircleIcon from "@iconify-icons/solar/check-circle-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const bookingSteps = [
  {
    number: "01",
    title: "Contact & disponibilités",
    text: "Vous m’écrivez avec votre date et votre lieu.",
    icon: letterIcon,
  },
  {
    number: "02",
    title: "Acompte & contrat",
    text: "Un contrat clair et un acompte confirment votre réservation.",
    icon: documentAddIcon,
  },
  {
    number: "03",
    title: "Confirmation",
    text: "Votre date est bloquée dans mon agenda.",
    icon: checkCircleIcon,
  },
];

export default function BookingProcess() {
  return (
    <section
      id="reservation"
      aria-labelledby="reservation-title"
      className="relative overflow-hidden bg-[#101211] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_18%,rgba(255,255,255,0.035),transparent_32%),radial-gradient(circle_at_66%_84%,rgba(216,184,132,0.025),transparent_34%)]"
      />

      <div className="relative grid xl:min-h-[max(48rem,calc(100svh-5rem))] xl:grid-cols-[60%_40%] 2xl:grid-cols-[60.5%_39.5%]">
        <figure className="relative h-[23rem] w-full overflow-hidden [clip-path:polygon(0_0,100%_0,100%_92%,0_100%)] sm:h-[31rem] xl:h-auto xl:[clip-path:polygon(0_0,100%_0,86%_100%,0_100%)]">
          <Image
            src="/web/photoo/Mariage%20Christophe%20%26%20Sandra/31122013-DSC_6613.jpg"
            alt="Portrait de Christophe et Sandra le jour de leur mariage"
            fill
            sizes="(min-width: 1280px) 61vw, 100vw"
            className="object-cover object-top xl:origin-[37%_47%] xl:scale-[1.55]"
            style={{ filter: "grayscale(1) contrast(1.08) brightness(.72)" }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,10,9,0.92)_0%,rgba(8,10,9,0.38)_22%,transparent_56%),linear-gradient(90deg,rgba(8,10,9,0.12),transparent_35%)]"
          />
          <span
            aria-hidden="true"
            className="absolute top-0 right-0 hidden h-[103%] w-px origin-top rotate-[8.5deg] bg-[#d8b884]/60 xl:block"
          />
        </figure>

        <div className="relative flex min-w-0 flex-col px-6 pt-12 pb-14 sm:px-10 sm:pt-16 sm:pb-18 lg:px-16 xl:px-10 xl:pt-[4.6rem] xl:pr-10 xl:pb-12 xl:pl-16 2xl:pr-14 2xl:pl-[5.1rem]">
          <div className="flex items-center gap-4 text-[#c59a55]">
            <span className="shrink-0 text-[10px] font-bold tracking-[0.3em] uppercase sm:text-[11px]">
              La réservation
            </span>
            <span className="size-1.5 shrink-0 rotate-45 bg-[#d8b884]" />
          </div>

          <h2
            id="reservation-title"
            className={`${bodoni.className} mt-8 text-[2.9rem] leading-[0.95] font-medium tracking-[-0.035em] uppercase sm:text-[3.8rem] xl:text-[3.35rem] 2xl:text-[4rem]`}
          >
            <span className="block text-[#f0ede7]">Trois étapes,</span>
            <span className="block text-[#d0ad73]">simplement.</span>
          </h2>

          <p className="mt-4 max-w-[27rem] text-sm leading-7 text-white/72 sm:text-base xl:text-[15px] 2xl:text-base">
            De notre premier échange à la confirmation de votre date, un
            parcours clair et sans surprise.
          </p>

          <div className="relative mt-10 xl:mt-11 2xl:mt-12">
            <ol className="relative flex flex-col">
              {bookingSteps.map((step) => (
                <li
                  key={step.number}
                  className="relative grid min-h-[6.5rem] grid-cols-[0.5rem_2.5rem_minmax(0,1fr)] items-center gap-x-4 sm:gap-x-5 xl:min-h-[6.5rem] xl:gap-x-6 2xl:min-h-28"
                >
                  <span
                    aria-hidden="true"
                    className="size-2 shrink-0 rounded-full bg-[#dfbd7c]"
                  />

                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d8b884]/35 bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] sm:size-12">
                    <Icon
                      icon={step.icon}
                      className="size-5 shrink-0 text-[#d7ae69] sm:size-6"
                      aria-hidden="true"
                    />
                  </span>

                  <div className="relative min-w-0">
                    <h3
                      className={`${bodoni.className} text-lg leading-tight font-medium text-[#f2eee8] sm:text-xl 2xl:text-[1.45rem]`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-white/64 sm:text-sm 2xl:text-[15px]">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
