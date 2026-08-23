"use client";

import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import { useState } from "react";
import { Icon } from "@iconify/react";
import clockIcon from "@iconify-icons/solar/clock-circle-linear";
import cameraIcon from "@iconify-icons/solar/camera-linear";
import heartIcon from "@iconify-icons/solar/heart-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const testimonials = [
  {
    quote:
      "J’ai eu la chance d’assister à une séance photo pour un mariage où Mr Patrice était le photographe. Top ! Un mélange de rigueur et de détente. Une franche rigolade pour nous, et un regard artistique et professionnel qui donne des photos splendides. Je recommande vivement ce professionnel.",
    author: "Isabelle Servant-Lemnos",
    date: "Juin 2022",
    image: "/web/photoo/Mariage%20Ryan%20%26%20Emilia/DSC_4481.jpg",
    alt: "Un instant de complicité pendant une réception de mariage",
    position: "object-center",
  },
  {
    quote:
      "Top, on a pris le temps de prendre des photos, Will m’a guidé pour les poses. Super moment, super photo !",
    author: "Dan",
    date: "Juillet 2021",
    image:
      "/web/photoo/Mariage%20Christophe%20%26%20Sandra/31122013-DSC_6500.jpg",
    alt: "Un couple de mariés face à l’océan",
    position: "object-[65%_center]",
  },
] as const;

export default function Testimonials({
  hideLabel = false,
}: {
  hideLabel?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="avis"
      aria-labelledby="avis-title"
      className="relative min-h-svh overflow-hidden bg-[#f7f4ed] text-[#14201e]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(255,255,255,0.92),transparent_40%),radial-gradient(circle_at_12%_12%,rgba(216,187,132,0.13),transparent_32%)]"
      />

      <div className="relative mx-auto flex min-h-svh max-w-[1800px] flex-col px-5 pt-24 pb-12 sm:px-8 sm:pt-28 lg:px-[3.4vw] lg:pt-[clamp(5.75rem,10svh,7rem)] lg:pb-[clamp(1.25rem,4svh,2.75rem)]">
        <header className="text-center">
          {!hideLabel && (
            <p className="text-[10px] font-extrabold tracking-[0.34em] text-[#765629] uppercase sm:text-[11px]">
              Avis clients
            </p>
          )}
          <h2
            id="avis-title"
            className={`${bodoni.className} mx-auto mt-4 max-w-[74rem] text-[clamp(2.75rem,5.3vw,5.5rem)] leading-[0.94] tracking-[-0.05em] text-balance`}
          >
            Leurs mots, votre confiance.
          </h2>
        </header>

        <div
          role="region"
          aria-roledescription="carrousel"
          aria-label="Avis Google de nos clients"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              showPrevious();
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              showNext();
            }
          }}
          className="mt-10 grid items-stretch gap-8 outline-none focus-visible:ring-2 focus-visible:ring-[#8f6936] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ed] lg:mt-[clamp(1rem,calc(8.7svh-2.5rem),4.5rem)] lg:h-[clamp(24rem,calc(75.7svh-6.4rem),45rem)] lg:grid-cols-[minmax(0,0.77fr)_minmax(0,1fr)] lg:grid-rows-[1fr] lg:gap-[clamp(0.625rem,1vw,0.875rem)]"
        >
          <div className="relative isolate min-h-0 pb-8 lg:h-full lg:pb-0">
            <div className="relative min-h-0 lg:h-full">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-3 left-0 rounded-[2rem] border border-[#ddd5c7] bg-[#eee8dd] lg:right-4 lg:rounded-[2.2rem]"
              />

              <article className="relative z-10 mt-3 ml-3 flex min-h-0 w-[calc(100%-0.75rem)] flex-col rounded-[1.8rem] border border-[#e5ded1] bg-[#fcfaf5]/95 p-7 shadow-[0_24px_48px_rgba(56,45,28,0.12)] backdrop-blur-sm sm:p-10 lg:mt-8 lg:mb-8 lg:ml-8 lg:h-[calc(100%-2rem)] lg:w-[calc(100%-2rem)] lg:rounded-[2.2rem] lg:p-[clamp(1.5rem,calc(7svh-1.2rem),3.5rem)] lg:pb-[clamp(1.5rem,4svh,2.75rem)]">
              <div className="relative grid">
                {testimonials.map((testimonial, index) => (
                  <blockquote
                    key={testimonial.author}
                    aria-hidden={activeIndex !== index}
                    className={`col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                      activeIndex === index
                        ? "relative translate-y-0 opacity-100"
                        : "pointer-events-none absolute inset-x-0 top-0 translate-y-3 opacity-0"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`${bodoni.className} block h-12 text-[5rem] leading-none text-[#b68e54] lg:h-[clamp(2.25rem,5svh,3rem)]`}
                    >
                      “
                    </span>
                    <p
                      className={`${bodoni.className} mt-5 text-[clamp(1.25rem,4.8vw,1.65rem)] leading-[1.45] tracking-[-0.015em] lg:mt-[clamp(0.75rem,calc(3svh-0.8rem),1.25rem)] lg:text-[clamp(1.08rem,2.7svh,1.72rem)]`}
                    >
                      {testimonial.quote}
                    </p>
                  </blockquote>
                ))}
              </div>

              <div className="mt-6 pt-6 lg:mt-auto lg:pt-[clamp(0.75rem,2svh,2.75rem)]">
                <div className="h-px bg-[#14201e]/14" aria-hidden="true" />

                <div
                  aria-live="polite"
                  aria-atomic="true"
                  className="mt-7 flex items-center gap-4 lg:mt-[clamp(1rem,calc(8svh-2.7rem),2.75rem)]"
                >
                  <span
                    aria-hidden="true"
                    className={`${bodoni.className} flex size-14 shrink-0 items-center justify-center rounded-full border border-[#b68e54] bg-[#14201e] text-2xl text-[#e2bd78] sm:size-16 lg:size-[clamp(3rem,7svh,4.75rem)]`}
                  >
                    {activeTestimonial.author.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-base font-extrabold tracking-[0.01em] sm:text-lg">
                      {activeTestimonial.author}
                    </p>
                    <p className="mt-1.5 text-[9px] font-bold tracking-[0.18em] text-[#53615e] uppercase sm:text-[10px]">
                      {activeTestimonial.date}
                    </p>
                  </div>
                </div>

                <div className="mt-8 hidden items-center gap-3 lg:flex lg:mt-[clamp(0.75rem,calc(8svh-2.85rem),2.75rem)]">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Afficher l’avis précédent"
                    className="group flex size-11 items-center justify-center rounded-full border border-[#b68e54]/75 bg-[#fcfaf5] transition-[border-color,background-color,color] hover:border-[#14201e] hover:bg-[#14201e] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f6936] sm:size-13 lg:size-[clamp(2.75rem,5.8svh,4rem)]"
                  >
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:-translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      ←
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Afficher l’avis suivant"
                    className="group flex size-11 items-center justify-center rounded-full border border-[#b68e54]/75 bg-[#fcfaf5] transition-[border-color,background-color,color] hover:border-[#14201e] hover:bg-[#14201e] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f6936] sm:size-13 lg:size-[clamp(2.75rem,5.8svh,4rem)]"
                  >
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      →
                    </span>
                  </button>
                </div>

                <span
                  className="cta-button cta-dark relative mt-8 hidden min-h-14 w-full items-center justify-center gap-2 rounded-[1.25rem] px-14 text-center text-[10px] font-extrabold tracking-[0.22em] text-[#e7c382] uppercase sm:min-h-16 lg:flex lg:mt-[clamp(0.75rem,calc(7svh-2.25rem),2.75rem)] lg:h-[clamp(3.5rem,7svh,4.75rem)] lg:text-[11px]"
                >
                  <span className="flex size-4 items-center justify-center rounded-full bg-white text-[10px] font-black tracking-normal text-[#4285f4] shadow-sm">
                    G
                  </span>
                  Avis Google
                </span>
              </div>
            </article>
            </div>

            <div className="relative z-10 mt-4 flex items-center justify-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Afficher l’avis précédent"
                className="group flex size-10 items-center justify-center rounded-full border border-[#b68e54]/75 bg-[#fcfaf5] transition-[border-color,background-color,color] hover:border-[#14201e] hover:bg-[#14201e] hover:text-white"
              >
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-x-0.5"
                >
                  ←
                </span>
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Afficher l’avis suivant"
                className="group flex size-10 items-center justify-center rounded-full border border-[#b68e54]/75 bg-[#fcfaf5] transition-[border-color,background-color,color] hover:border-[#14201e] hover:bg-[#14201e] hover:text-white"
              >
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </button>
            </div>

            <div className="relative z-10 mx-3 mt-5 grid grid-cols-3 gap-2 lg:hidden">
              <div className="flex h-[6.5rem] flex-col items-center justify-center gap-2 rounded-2xl border border-[#e5ded1] bg-[#fcfaf5]/80 px-2 text-center">
                <Icon icon={clockIcon} aria-hidden="true" className="size-6 text-[#b68e54]" />
                <span className="text-xs leading-tight text-[#14201e]/80">
                  Expérience
                  <br />
                  fluide
                </span>
              </div>
              <div className="flex h-[6.5rem] flex-col items-center justify-center gap-2 rounded-2xl border border-[#e5ded1] bg-[#fcfaf5]/80 px-2 text-center">
                <Icon icon={cameraIcon} aria-hidden="true" className="size-6 text-[#b68e54]" />
                <span className="text-xs leading-tight text-[#14201e]/80">
                  Guidance
                  <br />
                  poses
                </span>
              </div>
              <div className="flex h-[6.5rem] flex-col items-center justify-center gap-2 rounded-2xl border border-[#e5ded1] bg-[#fcfaf5]/80 px-2 text-center">
                <Icon icon={heartIcon} aria-hidden="true" className="size-6 text-[#b68e54]" />
                <span className="text-xs leading-tight text-[#14201e]/80">
                  Souvenirs
                  <br />
                  authentiques
                </span>
              </div>
            </div>

            <span
              className="cta-button cta-dark relative z-10 mx-3 mt-4 flex min-h-14 items-center justify-center gap-2 rounded-[1.25rem] px-14 text-center text-[10px] font-extrabold tracking-[0.22em] text-[#e7c382] uppercase sm:min-h-16 lg:hidden"
            >
              <span className="flex size-4 items-center justify-center rounded-full bg-white text-[10px] font-black tracking-normal text-[#4285f4] shadow-sm">
                G
              </span>
              Avis Google
            </span>
          </div>

          <figure className="relative hidden min-h-[24rem] overflow-hidden rounded-[1.8rem] bg-[#d7d0c5] shadow-[0_24px_48px_rgba(56,45,28,0.12)] sm:min-h-[32rem] lg:block lg:h-full lg:min-h-0 lg:rounded-[1.5rem]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.image}
                aria-hidden={activeIndex !== index}
                className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                  activeIndex === index
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-[1.025] opacity-0"
                }`}
              >
                <Image
                  src={testimonial.image}
                  alt={activeIndex === index ? testimonial.alt : ""}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className={`object-cover ${testimonial.position}`}
                />
              </div>
            ))}
          </figure>
        </div>
      </div>
    </section>
  );
}
