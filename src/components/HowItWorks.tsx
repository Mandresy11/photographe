"use client";

import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import { useState } from "react";
import { Icon } from "@iconify/react";
import arrowIcon from "@iconify-icons/solar/arrow-right-linear";
import plusIcon from "@iconify-icons/solar/add-circle-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const steps = [
  {
    number: "01",
    title: "Premier échange",
    text: "On échange sur votre histoire et vos envies.",
    image:
      "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6464.jpg",
    alt: "Christophe et Sandra réunis le jour de leur mariage",
    position: "object-[59%_center] sm:object-[62%_center] lg:object-[64%_48%]",
  },
  {
    number: "02",
    title: "La préparation",
    text: "Nous organisons ensemble les temps forts.",
    image: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC6836.jpg",
    alt: "Marvin ajuste sa tenue pendant les préparatifs",
    position: "object-[50%_30%]",
  },
  {
    number: "03",
    title: "Le jour J",
    text: "Je photographie l’instant avec discrétion.",
    image: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC7315.jpg",
    alt: "Marvin et Gwen devant l’autel pendant leur cérémonie",
    position: "object-[57%_center] lg:object-center",
  },
  {
    number: "04",
    title: "Vos images",
    text: "Vous recevez une galerie élégante et intemporelle.",
    image: "/web/photoo/Mariage%20Gina%20%26%20Lionel/DSC_4730.jpg",
    alt: "Gina et Lionel réunis après leur cérémonie",
    position: "object-[58%_center] lg:object-center",
  },
];

export default function HowItWorks() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="deroulement"
      aria-labelledby="deroulement-title"
      className="relative overflow-hidden bg-[#0b100e] py-20 text-white sm:py-24 lg:py-28"
    >
      <Image
        src="/web/photoo/Mariage%20Marvin%26Gwen/_DSC7637.jpg"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover"
        style={{
          filter: "brightness(.6) saturate(.8) contrast(1.08)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#0b100e]/55"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(216,184,132,0.12),transparent_38%)]"
      />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col px-5 sm:px-8 lg:px-10">
        <header className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d8b884]/40 bg-[#d8b884]/10 px-4 py-1.5 text-[10px] font-extrabold tracking-[0.3em] text-[#d8b884] uppercase">
            Déroulement
          </span>
          <h2
            id="deroulement-title"
            className={`${bodoni.className} mt-6 text-[2.5rem] leading-[1.02] font-medium tracking-[-0.04em] uppercase sm:text-[3.25rem]`}
          >
            Comment ça se passe
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
            Quatre étapes, toujours dans le même ordre, de notre premier
            échange jusqu’à la remise de vos images.
          </p>
        </header>

        <ol className="relative mt-16 flex flex-col gap-14 sm:mt-20 sm:gap-24">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-6 w-px bg-white/12 sm:left-1/2 sm:-translate-x-1/2"
          />

          {steps.map((step, index) => {
            const imageOnRight = index % 2 === 0;
            const isOpen = openIndex === index;

            const photo = (
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-[#d8b884] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 640px) 32rem, 100vw"
                  className={`object-cover ${step.position}`}
                />
              </div>
            );

            const title = (
              <p
                className={`${bodoni.className} text-lg leading-snug font-medium whitespace-nowrap text-white sm:text-xl`}
              >
                {step.title}
              </p>
            );

            return (
              <li
                key={step.number}
                className="relative grid grid-cols-[3rem_1fr] items-center gap-x-6 gap-y-5 sm:grid-cols-[1fr_3.5rem_1fr] sm:gap-x-10"
              >
                <div className="hidden sm:flex sm:items-center sm:justify-end">
                  {imageOnRight ? title : photo}
                </div>

                <div className="relative z-10 flex justify-self-start sm:justify-self-center">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#d8b884]/70 bg-[#0b100e] text-sm font-semibold text-[#d8b884] shadow-[0_0_0_6px_#0b100e]">
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col gap-3 sm:hidden">
                  {title}
                  <div className="relative">
                    {photo}
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-label={
                        isOpen
                          ? `Masquer le détail de l’étape ${step.title}`
                          : `Afficher le détail de l’étape ${step.title}`
                      }
                      className="absolute -bottom-4 left-1/2 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#d8b884] bg-[#0b100e] text-[#d8b884] shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition-transform duration-300"
                    >
                      <Icon
                        icon={plusIcon}
                        className={`size-5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? "mt-2 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="min-h-0 text-sm leading-6 text-white">
                      {step.text}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:items-center">
                  {imageOnRight ? photo : title}
                </div>
              </li>
            );
          })}
        </ol>

        <Link
          href="/contact"
          className="cta-button cta-ghost-light mx-auto mt-14 inline-flex min-h-[3.25rem] w-fit items-center gap-16 border-[#d8b884]/75 px-8 text-[9px] font-extrabold tracking-[0.24em] uppercase sm:mt-20"
        >
          Parlons
          <Icon icon={arrowIcon} className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
