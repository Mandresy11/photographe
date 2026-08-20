"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const photos = [
  {
    src: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC7315.jpg",
    alt: "Cérémonie de Marvin et Gwen dans une église lumineuse",
    label: "Cérémonie",
    position: "object-center",
  },
  {
    src: "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6464.jpg",
    alt: "Christophe et Sandra réunis dans un fauteuil face à l’océan",
    label: "Intimité",
    position: "object-center",
  },
  {
    src: "/web/photoo/DEFILE%20GUERLAIN%202020%20PFW/22012020-DEFILE%20PARIS%20FASHION%20WEEK%20GUERLAIN%202021%20108.jpg",
    alt: "Robe de mariée présentée lors d’un défilé parisien",
    label: "Éditorial",
    position: "object-center",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === photos.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="galerie"
      className="overflow-hidden bg-[#09110f] text-white lg:flex lg:h-svh lg:flex-col"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-3 pt-24 pb-16 sm:px-5 sm:pt-28 sm:pb-20 lg:flex-1 lg:px-8 lg:pt-24 lg:pb-10">
        <header className="mb-10 flex flex-col gap-7 px-2 sm:flex-row sm:items-end sm:justify-between lg:mb-6 lg:px-4">
          <div>
            <p className="text-[11px] font-extrabold tracking-[0.3em] text-[#d8b884] uppercase">
              Galerie
            </p>
            <h2 className="editorial-title editorial-title-light mt-6 text-4xl font-extrabold leading-[0.92] tracking-[-0.055em] uppercase sm:text-6xl lg:mt-4 lg:text-5xl">
              Instants choisis.
            </h2>
          </div>

          <Link
            href="/galerie"
            className="cta-button cta-primary hidden min-h-11 w-fit items-center gap-4 bg-[#d8b884] px-6 text-[9px] font-bold tracking-[0.2em] text-[#14201e] uppercase transition-colors hover:bg-[#edd19f] sm:inline-flex"
          >
            Voir toute la galerie
            <span aria-hidden="true">↗</span>
          </Link>
        </header>

        <div
          role="region"
          aria-roledescription="carrousel"
          aria-label="Galerie de mariage"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") showPrevious();
            if (event.key === "ArrowRight") showNext();
          }}
          className="group relative h-[72svh] min-h-[34rem] max-h-[52rem] overflow-hidden outline-none focus-visible:ring-1 focus-visible:ring-[#d8b884] lg:h-auto lg:min-h-0 lg:max-h-none lg:flex-1"
        >
          {photos.map((photo, index) => (
            <figure
              key={photo.src}
              aria-hidden={index !== activeIndex}
              className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-out ${
                index === activeIndex
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-[1.015] opacity-0"
              }`}
            >
              <Image
                src={photo.src}
                alt={index === activeIndex ? photo.alt : ""}
                fill
                sizes="100vw"
                className={`object-cover ${photo.position}`}
              />
            </figure>
          ))}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06100d]/90 via-transparent to-black/25" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

          <div
            aria-live="polite"
            className="absolute right-5 bottom-28 left-5 flex items-end justify-between border-t border-white/35 pt-4 sm:right-8 sm:bottom-32 sm:left-8"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase sm:text-xs">
              {photos[activeIndex].label}
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-white/65">
              0{activeIndex + 1} / 0{photos.length}
            </span>
          </div>

          <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-5 sm:right-8 sm:bottom-7 sm:left-8">
            <div className="flex gap-2">
              {photos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Afficher l’image ${index + 1} : ${photo.label}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`relative h-11 w-14 overflow-hidden border transition-all sm:h-14 sm:w-20 ${
                    index === activeIndex
                      ? "border-[#d8b884] opacity-100"
                      : "border-white/25 opacity-55 hover:border-white/70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    sizes="80px"
                    className={`object-cover ${photo.position}`}
                  />
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Image précédente"
                className="flex size-11 items-center justify-center border border-white/40 text-lg transition-colors hover:border-[#d8b884] hover:text-[#d8b884] sm:size-12"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Image suivante"
                className="flex size-11 items-center justify-center border border-white/40 text-lg transition-colors hover:border-[#d8b884] hover:text-[#d8b884] sm:size-12"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        <Link
          href="/galerie"
          className="cta-button cta-primary mx-auto mt-8 flex min-h-11 w-fit items-center gap-4 bg-[#d8b884] px-6 text-[9px] font-bold tracking-[0.2em] text-[#14201e] uppercase transition-colors hover:bg-[#edd19f] sm:hidden"
        >
          Voir toute la galerie
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
