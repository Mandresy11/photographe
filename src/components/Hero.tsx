"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import compassIcon from "@iconify-icons/solar/compass-linear";
import galleryIcon from "@iconify-icons/solar/gallery-wide-linear";
import calendarIcon from "@iconify-icons/solar/calendar-linear";

const HERO_IMAGES = [
  {
    src: "/web/photoo/Mariage%20Christophe%20%26%20Sandra/31122013-DSC_6500.jpg",
    alt: "Christophe et Sandra face à l’océan le jour de leur mariage",
    objectPosition: "object-[62%_center] sm:object-[60%_center] lg:object-[56%_35%]",
  },
  {
    src: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC7315.jpg",
    alt: "Marvin et Gwen lors de leur mariage",
    objectPosition: "object-[62%_center] sm:object-[60%_center] lg:object-[56%_30%]",
  },
  {
    src: "/web/photoo/Mariage%20Gina%20%26%20Lionel/DSC_4886.jpg",
    alt: "Gina et Lionel lors de leur mariage",
    objectPosition: "object-[62%_center] sm:object-[60%_center] lg:object-[56%_35%]",
  },
  {
    src: "/web/photoo/Mariage%20Mr%20%26%20Mme%20Nilor/06082022-DSC_8551.jpg",
    alt: "Monsieur et Madame Nilor lors de leur mariage",
    objectPosition: "object-[62%_center] sm:object-[60%_center] lg:object-[56%_35%]",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[max(42rem,100svh)] overflow-hidden bg-[#050807] text-white lg:h-svh lg:min-h-[42rem]"
    >
      {HERO_IMAGES.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${image.objectPosition} ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            filter:
              "brightness(.57) saturate(.72) contrast(1.18) sepia(.14) hue-rotate(-7deg)",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[#07100f]/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_42%,rgba(197,119,62,0.26)_0%,rgba(95,53,30,0.1)_24%,transparent_48%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,23,34,0.32)_0%,rgba(4,12,16,0.06)_50%,rgba(138,67,25,0.3)_100%)] mix-blend-color" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,6,0.72)_0%,rgba(2,6,6,0.08)_29%,rgba(2,6,6,0.04)_55%,rgba(2,6,6,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_32%,rgba(0,0,0,0.44)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-full w-full min-w-0 max-w-[1920px] flex-1 flex-col px-5 pt-28 pb-6 sm:px-10 sm:pt-32 sm:pb-8 lg:px-[4.5rem] lg:pt-32 lg:pb-8 xl:px-[5.5rem]">
        <div className="flex flex-1 flex-col items-center justify-center pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-40 lg:pb-4">
          <h1
            id="hero-title"
            className="w-full min-w-0 text-center uppercase text-white drop-shadow-[0_12px_36px_rgba(0,0,0,0.38)]"
          >
            <span className="mb-2 block text-[8px] leading-5 font-extrabold tracking-[0.42em] sm:mb-4 sm:text-[11px] sm:tracking-[0.64em] lg:text-xs">
              Des instants qui durent
            </span>
            <span className="block text-[12vw] leading-[0.84] font-black tracking-[-0.075em] sm:text-[11.7vw] lg:text-[clamp(7.5rem,11.5vw,13.25rem)]">
              Toujours<span className="text-[#d8ad55]">.</span>
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10">
            <Link
              href="/galerie"
              className="group relative inline-flex min-h-14 min-w-[15.5rem] items-center justify-center overflow-hidden rounded-full border border-white/45 bg-black/20 px-8 text-[10px] font-extrabold tracking-[0.24em] text-white uppercase shadow-[0_12px_40px_rgba(0,0,0,0.26)] backdrop-blur-[3px] transition-[color,border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#d8ad55]/80 hover:text-[#ffe2aa] hover:shadow-[0_14px_44px_rgba(216,173,85,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8ad55] sm:min-w-[17.5rem] sm:min-h-16 sm:text-[11px]"
            >
              <span className="absolute inset-y-0 right-0 w-24 bg-[radial-gradient(circle_at_right,rgba(216,173,85,0.36),transparent_68%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">Voir la galerie</span>
              <Icon
                icon={galleryIcon}
                aria-hidden="true"
                className="relative ml-6 size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group relative hidden min-h-14 min-w-[15.5rem] items-center justify-center gap-6 rounded-full bg-[#d8b884] px-8 text-[10px] font-extrabold tracking-[0.24em] text-[#08100e] uppercase shadow-[0_12px_40px_rgba(0,0,0,0.26)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#ead2ab] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8ad55] sm:inline-flex sm:min-w-[17.5rem] sm:min-h-16 sm:text-[11px]"
            >
              Réserver ma date
              <Icon
                icon={calendarIcon}
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="grid w-full min-w-0 grid-cols-2 items-end gap-x-5 gap-y-6 sm:gap-x-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-7">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Icon icon={compassIcon} className="size-7 shrink-0 text-[#d8ad55]" />
            <div className="shrink-0 text-[7px] leading-[1.8] font-medium tracking-[0.14em] text-white/75 uppercase sm:text-[9px]">
              <p>Photographe de mariage</p>
              <p>Guadeloupe · Caraïbes · Monde</p>
            </div>
          </div>

          <p
            className="col-start-3 hidden whitespace-nowrap text-right text-lg italic tracking-[0.02em] text-[#d8ad55]/85 lg:block xl:text-xl"
            style={{
              fontFamily: '"Segoe Script", "Brush Script MT", cursive',
            }}
          >
            L’élégance est une promesse tenue.
          </p>
        </div>
      </div>
    </section>
  );
}
