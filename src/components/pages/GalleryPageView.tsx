"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type PortfolioPhoto = {
  src: string;
  alt: string;
  project: string;
};

export type PortfolioCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  photos: PortfolioPhoto[];
};

function getThumbnailIndexes(photoCount: number, activeIndex: number) {
  const visibleCount = Math.min(5, photoCount);
  const startIndex = Math.min(
    Math.max(activeIndex - Math.floor(visibleCount / 2), 0),
    photoCount - visibleCount,
  );

  return Array.from({ length: visibleCount }, (_, index) => startIndex + index);
}

export default function GalleryPageView({
  categories,
}: {
  categories: PortfolioCategory[];
}) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const activeCategory = categories[activeCategoryIndex];
  const activePhoto = activeCategory.photos[activePhotoIndex];
  const thumbnailIndexes = getThumbnailIndexes(
    activeCategory.photos.length,
    activePhotoIndex,
  );
  const totalPhotos = categories.reduce(
    (total, category) => total + category.photos.length,
    0,
  );

  const showPrevious = () => {
    setActivePhotoIndex((current) =>
      current === 0 ? activeCategory.photos.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActivePhotoIndex((current) =>
      current === activeCategory.photos.length - 1 ? 0 : current + 1,
    );
  };

  const selectCategory = (index: number) => {
    setActiveCategoryIndex(index);
    setActivePhotoIndex(0);
    setIsLightboxOpen(false);
  };

  const handleTouchEnd = (endX: number) => {
    if (touchStartX.current === null) return;

    const distance = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 50) return;
    if (distance > 0) showPrevious();
    if (distance < 0) showNext();
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLightboxOpen(false);
      if (event.key === "ArrowRight") {
        setActivePhotoIndex((current) =>
          current === activeCategory.photos.length - 1 ? 0 : current + 1,
        );
      }
      if (event.key === "ArrowLeft") {
        setActivePhotoIndex((current) =>
          current === 0 ? activeCategory.photos.length - 1 : current - 1,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCategory.photos.length, isLightboxOpen]);

  return (
    <section
      id="page-galerie"
      className="min-h-svh overflow-hidden bg-[#07100e] text-white"
    >
      <div className="mx-auto max-w-[1440px] px-4 pt-32 pb-20 sm:px-8 sm:pt-40 lg:px-12 lg:pt-44 lg:pb-28">
        <header className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[9px] font-bold tracking-[0.25em] text-[#d8b884] uppercase">
              Portfolio
            </p>
            <h1 className="editorial-title editorial-title-light mt-7 max-w-[11ch] text-[3.5rem] font-black leading-[0.88] tracking-[-0.06em] uppercase sm:text-[6rem] lg:text-[7.5rem]">
              Histoires en lumière.
            </h1>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="text-sm leading-7 text-white/55">
              Mariage, mode, portrait, beauté et défilé. Parcourez chaque univers
              et laissez les images raconter leur histoire.
            </p>
            <p className="mt-4 text-[8px] font-bold tracking-[0.2em] text-[#d8b884] uppercase">
              {categories.length} catégories · {totalPhotos} photographies
            </p>
          </div>
        </header>

        <nav
          aria-label="Catégories photographiques"
          className="-mx-4 overflow-x-auto border-b border-white/15 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
        >
          <ul className="flex min-w-max gap-2 py-5">
            {categories.map((category, index) => (
              <li key={category.slug}>
                <button
                  type="button"
                  onClick={() => selectCategory(index)}
                  aria-pressed={index === activeCategoryIndex}
                  className={`min-h-11 rounded-full border px-5 text-[9px] font-bold tracking-[0.16em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8b884] ${
                    index === activeCategoryIndex
                      ? "border-[#d8b884] bg-[#d8b884] text-[#07100e]"
                      : "border-white/20 text-white/62 hover:border-white/55 hover:text-white"
                  }`}
                >
                  {category.title}
                  <span className="ml-2 opacity-55">
                    {category.photos.length}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-end sm:justify-between lg:py-10">
          <div>
            <p className="text-[8px] font-bold tracking-[0.22em] text-[#d8b884] uppercase">
              {activeCategory.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] uppercase sm:text-5xl">
              {activeCategory.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/50 sm:text-right">
            {activeCategory.description}
          </p>
        </div>

        <div
          role="region"
          aria-roledescription="carrousel"
          aria-label={`Photographies de la catégorie ${activeCategory.title}`}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") showPrevious();
            if (event.key === "ArrowRight") showNext();
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.changedTouches[0].clientX;
          }}
          onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
          className="group relative h-[68svh] min-h-[31rem] max-h-[54rem] overflow-hidden border border-white/12 bg-[#030807] outline-none focus-visible:ring-2 focus-visible:ring-[#d8b884]"
        >
          <div
            className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{
              transform: `translate3d(-${activePhotoIndex * 100}%, 0, 0)`,
            }}
          >
            {activeCategory.photos.map((photo, index) => (
              <figure
                key={photo.src}
                aria-hidden={index !== activePhotoIndex}
                className="relative h-full w-full shrink-0"
              >
                <Image
                  src={photo.src}
                  alt={index === activePhotoIndex ? photo.alt : ""}
                  fill
                  preload={activeCategoryIndex === 0 && index === 0}
                  sizes="(min-width: 1440px) 1344px, (min-width: 1024px) calc(100vw - 6rem), (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2rem)"
                  className="object-contain"
                />
              </figure>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35" />

          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="absolute top-4 right-4 flex min-h-11 items-center gap-3 rounded-full border border-white/30 bg-black/30 px-4 text-[8px] font-bold tracking-[0.18em] uppercase backdrop-blur-md transition-colors hover:border-[#d8b884] hover:text-[#e8c894] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8b884] sm:top-6 sm:right-6"
            aria-label="Afficher cette photographie en plein écran"
          >
            Plein écran
            <span aria-hidden="true" className="text-base leading-none">
              ↗
            </span>
          </button>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Photographie précédente"
            className="absolute top-1/2 left-3 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/35 text-lg backdrop-blur-md transition-colors hover:border-[#d8b884] hover:text-[#d8b884] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8b884] sm:left-6 sm:size-14"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Photographie suivante"
            className="absolute top-1/2 right-3 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/35 text-lg backdrop-blur-md transition-colors hover:border-[#d8b884] hover:text-[#d8b884] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8b884] sm:right-6 sm:size-14"
          >
            <span aria-hidden="true">→</span>
          </button>

          <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-5 border-t border-white/35 pt-4 sm:right-7 sm:bottom-7 sm:left-7">
            <div aria-live="polite">
              <p className="text-[9px] font-bold tracking-[0.18em] text-[#e8c894] uppercase">
                {activePhoto.project}
              </p>
              <p className="mt-1 text-[8px] tracking-[0.16em] text-white/55 uppercase">
                {activeCategory.title}
              </p>
            </div>
            <p className="shrink-0 text-[10px] font-semibold tracking-[0.2em] text-white/70">
              {String(activePhotoIndex + 1).padStart(2, "0")} / {" "}
              {String(activeCategory.photos.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
          {thumbnailIndexes.map((index) => {
            const photo = activeCategory.photos[index];

            return (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActivePhotoIndex(index)}
                aria-label={`Afficher la photographie ${index + 1} : ${photo.project}`}
                aria-current={index === activePhotoIndex ? "true" : undefined}
                className={`group/thumb relative h-16 overflow-hidden border bg-white/5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8b884] sm:h-24 lg:h-28 ${
                  index === activePhotoIndex
                    ? "border-[#d8b884] opacity-100"
                    : "border-white/12 opacity-45 hover:border-white/50 hover:opacity-100"
                }`}
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 260px, 20vw"
                  className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                />
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-7 border-t border-white/15 pt-9 text-center sm:flex-row sm:text-left">
          <p className="max-w-xl text-sm leading-7 text-white/52">
            Une image vous ressemble ? Parlons de la lumière, du lieu et du
            rythme de votre propre histoire.
          </p>
          <Link
            href="/contact"
            className="cta-button cta-primary inline-flex min-h-12 w-fit items-center gap-5 px-7 text-[9px] font-extrabold tracking-[0.2em] uppercase"
          >
            Imaginer mon reportage
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      {isLightboxOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photographie en plein écran de la catégorie ${activeCategory.title}`}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#020706]/96 p-4 backdrop-blur-md sm:p-10"
          onTouchStart={(event) => {
            touchStartX.current = event.changedTouches[0].clientX;
          }}
          onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-5 right-5 z-10 flex size-12 items-center justify-center rounded-full border border-white/30 bg-black/30 text-xl backdrop-blur-md transition-colors hover:border-[#d8b884] hover:text-[#d8b884] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8b884]"
            aria-label="Fermer le plein écran"
          >
            ×
          </button>
          <button
            type="button"
            onClick={showPrevious}
            className="absolute bottom-5 left-5 z-10 flex size-12 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-md transition-colors hover:border-[#d8b884] hover:text-[#d8b884] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8b884] sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2"
            aria-label="Photographie précédente"
          >
            ←
          </button>
          <figure className="relative h-[82svh] w-full max-w-6xl overflow-hidden">
            <Image
              key={activePhoto.src}
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <figcaption className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/85 to-transparent px-16 pt-16 pb-5 text-center text-[9px] font-bold tracking-[0.2em] uppercase">
              {activePhoto.project} · {activePhotoIndex + 1} / {" "}
              {activeCategory.photos.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-5 bottom-5 z-10 flex size-12 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-md transition-colors hover:border-[#d8b884] hover:text-[#d8b884] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8b884] sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2"
            aria-label="Photographie suivante"
          >
            →
          </button>
        </div>
      ) : null}
    </section>
  );
}
