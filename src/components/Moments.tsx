"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";
import chevronLeftIcon from "@iconify-icons/solar/alt-arrow-left-linear";
import chevronRightIcon from "@iconify-icons/solar/alt-arrow-right-linear";

const storySlides = [
  {
    image: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC6836.jpg",
    alt: "Marvin ajuste son gilet pendant les préparatifs",
    title: "Les boutons",
    detail: "Le cousin qui aide.",
    position: "object-center",
  },
  {
    image: "/web/photoo/Mariage%20Mr%20%26%20Mme%20Nilor/06082022-DSC_8396.jpg",
    alt: "Madame Nilor signe le registre de mariage",
    title: "Avant la mairie",
    detail: "L’hésitation. Puis la joie.",
    position: "object-center",
  },
  {
    image: "/web/photoo/Mariage%20Gina%20%26%20Lionel/DSC_4886.jpg",
    alt: "Gina et Lionel entourés de leurs proches pendant la fête",
    title: "Seuls. Entourés.",
    detail: "Toujours le même lien.",
    position: "object-center",
  },
];

const totalSlides = storySlides.length + 1;

export default function Moments() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? totalSlides - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === totalSlides - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="instants"
      className="relative isolate min-h-svh overflow-hidden bg-[#08100e] text-white"
    >
      <div
        role="region"
        aria-roledescription="carrousel"
        aria-label="Les instants invisibles"
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
        className="relative min-h-svh outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#d8b884]"
      >
        <div
          aria-hidden={activeIndex !== 0}
          className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-out ${
            activeIndex === 0
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-[1.015] opacity-0"
          }`}
        >
          <Image
            src="/web/photoo/Mariage%20Gina%20%26%20Lionel/DSC_4886.jpg"
            alt={activeIndex === 0 ? "Fragments d’une journée de mariage" : ""}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#08100e]/48 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050c0a]/92 via-transparent to-black/20" />

          <div className="absolute top-[15%] left-[7%] grid h-[44%] w-[72%] grid-cols-3 gap-2 sm:left-[10%] sm:h-[50%] sm:w-[55%] sm:gap-4 lg:left-[12%] lg:w-[48%]">
            <figure className="relative h-[86%] self-start overflow-hidden shadow-2xl">
              <Image
                src="/web/photoo/Mariage%20Marvin%26Gwen/_DSC6836.jpg"
                alt=""
                fill
                sizes="25vw"
                className="object-cover object-[48%_38%]"
              />
            </figure>
            <figure className="relative h-[76%] self-end overflow-hidden shadow-2xl">
              <Image
                src="/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-07052022-DSC_6234.jpg"
                alt=""
                fill
                sizes="25vw"
                className="object-cover object-center"
              />
            </figure>
            <figure className="relative h-[92%] self-start overflow-hidden shadow-2xl">
              <Image
                src="/web/photoo/Mariage%20Marvin%26Gwen/_DSC7637.jpg"
                alt=""
                fill
                sizes="25vw"
                className="object-cover object-center"
              />
            </figure>
          </div>

          <div className="absolute right-5 bottom-24 left-5 max-w-none text-center sm:right-10 sm:bottom-24 sm:left-auto sm:max-w-xl sm:text-right lg:right-[8%]">
            <h2 className="editorial-title editorial-title-light editorial-title-right editorial-title-center-mobile text-4xl font-extrabold leading-[0.92] tracking-[-0.055em] uppercase sm:text-6xl lg:text-[5.5rem]">
              Tout se joue entre.
            </h2>
            <button
              type="button"
              onClick={showNext}
              className="cta-button cta-primary mx-auto mt-8 flex min-h-12 w-fit items-center gap-4 px-7 text-[10px] font-extrabold tracking-[0.22em] uppercase sm:mr-0 sm:ml-auto sm:inline-flex"
            >
              Faire défiler
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {storySlides.map((slide, index) => {
          const slideIndex = index + 1;

          return (
            <div
              key={slide.title}
              aria-hidden={activeIndex !== slideIndex}
              className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-out ${
                activeIndex === slideIndex
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-[1.015] opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={activeIndex === slideIndex ? slide.alt : ""}
                fill
                sizes="100vw"
                className={`object-cover ${slide.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050c0a]/88 via-black/5 to-black/25" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

              <div className="absolute right-5 bottom-28 max-w-[20rem] text-right sm:right-10 sm:bottom-24 sm:max-w-xl lg:right-[8%]">
                <h2 className="editorial-title editorial-title-light editorial-title-right text-4xl font-extrabold leading-[0.94] tracking-[-0.05em] uppercase sm:text-6xl lg:text-[5rem]">
                  {slide.title}
                </h2>
                <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-white/72 uppercase sm:text-sm">
                  {slide.detail}
                </p>
              </div>
            </div>
          );
        })}

        <header className="pointer-events-none absolute top-0 right-0 left-0 z-20 flex items-center justify-center px-5 pt-24 pb-8 sm:justify-between sm:px-8 sm:pt-28 sm:pb-8 lg:px-12 lg:pt-24 lg:pb-10">
          <p className="text-[11px] font-extrabold tracking-[0.3em] text-[#d8b884] uppercase">
            L’invisible
          </p>
          <p className="hidden text-[9px] font-semibold tracking-[0.2em] text-white/55 uppercase sm:block">
            Ce que Patrice regarde
          </p>
        </header>

        <button
          type="button"
          onClick={showPrevious}
          aria-label="Étape précédente"
          className="group absolute top-1/2 left-3 z-30 flex size-11 -translate-y-1/2 items-center justify-center border border-white/35 bg-[#08100e]/35 text-white backdrop-blur-sm transition-[border-color,background-color] hover:border-[#d8b884] hover:bg-[#08100e]/65 sm:left-6 sm:size-12 lg:left-10"
        >
          <Icon
            icon={chevronLeftIcon}
            className="size-4 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          onClick={showNext}
          aria-label="Étape suivante"
          className="group absolute top-1/2 right-3 z-30 flex size-11 -translate-y-1/2 items-center justify-center border border-white/35 bg-[#08100e]/35 text-white backdrop-blur-sm transition-[border-color,background-color] hover:border-[#d8b884] hover:bg-[#08100e]/65 sm:right-6 sm:size-12 lg:right-10"
        >
          <Icon
            icon={chevronRightIcon}
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </button>

        <div
          className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2"
          aria-label="Progression du carrousel"
        >
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Afficher l’étape ${index + 1}`}
              aria-current={activeIndex === index ? "step" : undefined}
              className={`size-2 rounded-full transition-colors ${
                activeIndex === index
                  ? "bg-[#d8b884]"
                  : "bg-white/35 hover:bg-white"
              }`}
            />
          ))}
        </div>

        <p
          aria-live="polite"
          className="absolute right-5 bottom-7 z-30 text-[9px] font-bold tracking-[0.2em] text-white/60 sm:right-8 lg:right-12"
        >
          0{activeIndex + 1} / 0{totalSlides}
        </p>
      </div>
    </section>
  );
}
