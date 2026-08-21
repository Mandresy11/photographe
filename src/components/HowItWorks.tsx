"use client";

import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import { useState } from "react";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const steps = [
  {
    number: "01",
    title: "Premier échange",
    text: "On échange sur votre histoire et vos envies.",
    heading: ["Votre histoire.", "Commençons", "par vous."],
    image:
      "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6464.jpg",
    alt: "Christophe et Sandra réunis le jour de leur mariage",
    position: "object-[59%_center] sm:object-[62%_center] lg:object-[64%_48%]",
  },
  {
    number: "02",
    title: "La préparation",
    text: "Nous organisons ensemble les temps forts.",
    heading: ["Chaque détail.", "Pensé avec", "vous."],
    image: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC6836.jpg",
    alt: "Marvin ajuste sa tenue pendant les préparatifs",
    position: "object-[50%_30%]",
  },
  {
    number: "03",
    title: "Le jour J",
    text: "Je photographie l’instant avec discrétion.",
    heading: ["Vous vivez.", "Je saisis", "l’instant."],
    image: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC7315.jpg",
    alt: "Marvin et Gwen devant l’autel pendant leur cérémonie",
    position: "object-[57%_center] lg:object-center",
  },
  {
    number: "04",
    title: "Vos images",
    text: "Vous recevez une galerie élégante et intemporelle.",
    heading: ["Des images.", "Qui vous", "ressemblent."],
    image: "/web/photoo/Mariage%20Gina%20%26%20Lionel/DSC_4730.jpg",
    alt: "Gina et Lionel réunis après leur cérémonie",
    position: "object-[58%_center] lg:object-center",
  },
];

function MobileSteps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? steps.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === steps.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[1680px] flex-col px-5 pt-24 pb-16 sm:px-8 sm:pt-28 lg:hidden">
      <header>
        <p className="text-center text-[10px] font-extrabold tracking-[0.32em] text-[#d8b884] uppercase sm:text-[11px]">
          Comment ça se passe
        </p>
      </header>

      <div
        role="region"
        aria-roledescription="carrousel"
        aria-label="Les étapes de votre expérience"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") showPrevious();
          if (event.key === "ArrowRight") showNext();
        }}
        onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
        onTouchEnd={(event) => {
          if (touchStart === null) return;
          const distance = touchStart - event.changedTouches[0].clientX;
          if (distance > 50) showNext();
          if (distance < -50) showPrevious();
          setTouchStart(null);
        }}
        className="relative mt-8 overflow-hidden rounded-2xl border border-[#d8b884]/30 bg-[#0b100e] outline-none focus-visible:ring-1 focus-visible:ring-[#d8b884]"
      >
        {steps.map((step, index) => (
          <article
            key={step.number}
            aria-hidden={index !== activeIndex}
            className={`${
              index === activeIndex
                ? "relative"
                : "pointer-events-none absolute inset-0"
            } transition-[opacity,transform] duration-500 ease-out ${
              index === activeIndex
                ? "translate-x-0 opacity-100"
                : "translate-x-2 opacity-0"
            }`}
          >
            <div className="relative h-56 w-full">
              <Image
                src={step.image}
                alt={index === activeIndex ? step.alt : ""}
                fill
                sizes="100vw"
                className={`object-cover ${step.position}`}
                style={{
                  filter:
                    "brightness(.9) saturate(.72) contrast(1.12) sepia(.28) hue-rotate(-6deg)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b100e] via-[#0b100e]/10 to-transparent" />
            </div>

            <div className="p-6 pb-20">
              <h2
                className={`${bodoni.className} text-2xl leading-[1.05] font-medium tracking-[-0.03em] text-white uppercase`}
              >
                {step.heading.join(" ")}
              </h2>
              <p className="mt-2 text-sm font-semibold tracking-[-0.01em] text-[#d8b884]">
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/62">
                {step.text}
              </p>
            </div>
          </article>
        ))}

        <button
          type="button"
          onClick={showPrevious}
          aria-label="Afficher l’étape précédente"
          className="absolute bottom-5 left-5 z-10 flex size-10 items-center justify-center rounded-full border border-[#d8b884]/60 bg-[#0b100e]/70 text-[#d8b884] backdrop-blur-sm transition-colors hover:border-[#d8b884]"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Afficher l’étape suivante"
          className="absolute right-5 bottom-5 z-10 flex size-10 items-center justify-center rounded-full border border-[#d8b884]/60 bg-[#0b100e]/70 text-[#d8b884] backdrop-blur-sm transition-colors hover:border-[#d8b884]"
        >
          <span aria-hidden="true">→</span>
        </button>

        <div
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2"
          aria-label="Progression du carrousel"
        >
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Afficher l’étape ${step.number}`}
              aria-current={activeIndex === index ? "step" : undefined}
              className={`h-1.5 rounded-full transition-[width,background-color] ${
                activeIndex === index
                  ? "w-6 bg-[#d8b884]"
                  : "w-1.5 bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>

      <Link
        href="/contact"
        className="cta-button cta-ghost-light mt-8 inline-flex min-h-[3.25rem] w-fit items-center gap-16 self-center border-[#d8b884]/75 px-8 text-[9px] font-extrabold tracking-[0.24em] uppercase"
      >
        Parlons
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

function DesktopCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const orderedSteps = steps.map((_, offset) => {
    const originalIndex = (activeIndex + offset) % steps.length;

    return {
      step: steps[originalIndex],
      originalIndex,
    };
  });

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? steps.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === steps.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="absolute inset-0 hidden lg:block">
      {steps.map((step, index) => (
        <Image
          key={step.image}
          src={step.image}
          alt={index === activeIndex ? step.alt : ""}
          aria-hidden={index !== activeIndex}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${step.position} ${
            index === activeIndex
              ? "scale-100 opacity-100"
              : "scale-[1.015] opacity-0"
          }`}
          style={{
            filter:
              "brightness(.9) saturate(.72) contrast(1.12) sepia(.28) hue-rotate(-6deg)",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#030605_0%,rgba(3,6,5,0.99)_20%,rgba(3,6,5,0.91)_43%,rgba(3,6,5,0.38)_68%,rgba(3,6,5,0.48)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,6,5,0.66)_0%,transparent_24%,transparent_70%,rgba(3,6,5,0.7)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.5)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1680px] flex-col px-[2.5vw] pt-[clamp(5.75rem,12svh,7rem)] pb-4 xl:px-10">
        <header className="ml-[15.75rem]">
          <p className="text-[11px] font-extrabold tracking-[0.32em] text-[#d8b884] uppercase">
            Comment ça se passe
          </p>
        </header>

        <div className="mt-7 grid flex-1 min-h-0 items-start gap-7 grid-cols-[13rem_minmax(34rem,38rem)_1fr] xl:gap-8">
          <div className="mt-0">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Afficher l’étape précédente"
              className="group mx-auto flex size-[clamp(1.75rem,4.5svh,3rem)] items-center justify-center rounded-full border border-[#d8b884]/75 text-xl text-[#d8b884] transition-colors hover:bg-[#d8b884] hover:text-[#07100e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b884]"
            >
              <span
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5"
              >
                ↑
              </span>
            </button>

            <p className="sr-only" aria-live="polite">
              Étape active : {orderedSteps[0].step.title}
            </p>

            <ol
              aria-label="Les étapes de votre expérience"
              className="mt-[clamp(0.25rem,1svh,0.75rem)] flex flex-col gap-[clamp(0.25rem,1svh,0.75rem)]"
            >
              {orderedSteps.map(({ step, originalIndex }, displayIndex) => (
                <li key={step.number}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(originalIndex)}
                    aria-current={displayIndex === 0 ? "step" : undefined}
                    aria-label={`Afficher l’étape ${step.number} : ${step.title}`}
                    className={`relative block w-full cursor-pointer border text-left backdrop-blur-[2px] transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#d8b884]/80 hover:bg-[#d8b884]/10 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8b884] ${
                      displayIndex === 0
                        ? "h-[clamp(10rem,26svh,15rem)] border-[#d8b884]/75 bg-[linear-gradient(135deg,rgba(216,184,132,0.12),rgba(10,15,13,0.52))] p-[clamp(0.875rem,3svh,1.75rem)] shadow-[0_0_24px_rgba(216,184,132,0.08)]"
                        : "h-[clamp(4.5rem,11.1svh,6.5rem)] border-white/18 bg-[#0b100e]/45 p-[clamp(0.5rem,1.5svh,0.75rem)]"
                    }`}
                  >
                    <span className={displayIndex === 0 ? "block" : "grid h-full grid-cols-[2.25rem_1fr] items-center gap-3"}>
                      <span>
                        <span
                          className={`${bodoni.className} block text-[1.65rem] leading-none text-[#d8b884]`}
                        >
                          {step.number}
                        </span>
                      </span>

                      <span
                        className={
                          displayIndex === 0
                            ? "mt-[clamp(0.75rem,3svh,1.75rem)] block"
                            : "block"
                        }
                      >
                        <span
                          className={`${bodoni.className} block leading-tight font-semibold tracking-[-0.02em] ${
                            displayIndex === 0
                              ? "text-[clamp(1.05rem,2.3svh,1.2rem)]"
                              : "text-[clamp(13px,1.7svh,15px)]"
                          }`}
                        >
                          {step.title}
                        </span>
                        <span
                          className={`block text-white/62 ${
                            displayIndex === 0
                              ? "mt-2 text-[clamp(11px,1.45svh,13px)] leading-[clamp(15px,2.2svh,20px)]"
                              : "mt-1 text-[clamp(9px,1.1svh,10px)] leading-[clamp(12px,1.5svh,14px)]"
                          }`}
                        >
                          {step.text}
                        </span>
                      </span>
                    </span>

                    {displayIndex === 0 && (
                      <span
                        aria-hidden="true"
                        className="absolute right-5 bottom-4 text-xl text-[#d8b884]"
                      >
                        ✦
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ol>

            <div className="mt-[clamp(0.25rem,1svh,0.75rem)] flex items-center justify-center">
              <button
                type="button"
                onClick={showNext}
                aria-label="Afficher l’étape suivante"
                className="group flex size-[clamp(1.75rem,4.5svh,3rem)] items-center justify-center rounded-full border border-[#d8b884]/75 text-xl text-[#d8b884] transition-colors hover:bg-[#d8b884] hover:text-[#07100e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b884]"
              >
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </button>
            </div>
          </div>

          <div className="mt-2">
            <div className="grid border-l border-[#d8b884] pl-6">
              {steps.map((step, index) => (
                <h2
                  key={step.number}
                  id={index === activeIndex ? "deroulement-title" : undefined}
                  aria-hidden={index !== activeIndex}
                  className={`${bodoni.className} col-start-1 row-start-1 text-[clamp(4.4rem,5.1vw,5.75rem)] leading-[0.99] font-medium tracking-[-0.055em] uppercase text-white transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
                    index === activeIndex
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                >
                  {step.heading.map((line, lineIndex) => (
                    <span
                      key={line}
                      className={`block origin-left ${
                        lineIndex === 0
                          ? "scale-x-[0.93]"
                          : lineIndex === 2
                            ? "scale-x-[1.08]"
                            : ""
                      }`}
                    >
                      {line}
                    </span>
                  ))}
                </h2>
              ))}
            </div>

            <Link
              href="/contact"
              className="cta-button cta-ghost-light mt-7 ml-6 inline-flex min-h-[3.25rem] w-fit items-center gap-16 border-[#d8b884]/75 px-8 text-[9px] font-extrabold tracking-[0.24em] uppercase"
            >
              Parlons
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="deroulement"
      aria-labelledby="deroulement-title"
      className="relative overflow-hidden bg-[#030605] text-white lg:h-svh"
    >
      <MobileSteps />
      <DesktopCarousel />
    </section>
  );
}
