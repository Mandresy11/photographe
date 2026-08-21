import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const leftPhotos = [
  {
    src: "/web/photoo/Mariage%20Christophe%20%26%20Sandra/31122013-DSC_6500.jpg",
    alt: "Mariée dans un salon orné de dorures et lustres",
    span: "row-span-2",
    position: "center",
  },
  {
    src: "/web/photoo/Mariage%20Marvin%26Gwen/_DSC7315.jpg",
    alt: "Portrait complice d’un couple de mariés",
    position: "center 30%",
  },
  {
    src: "/web/photoo/Mariage%20Mr%20%26%20Mme%20Nilor/06082022-DSC_8551.jpg",
    alt: "Alliances et détails de cérémonie",
    position: "center",
  },
];

const rightPhotos = [
  {
    src: "/web/photoo/PHOTOSHOOT%20BOOK%20RONALD%20CHERY/prise%20de%20vue%20sans%20titre-5949%20INSTA%20CHERY_RONALD.jpg",
    alt: "Portrait éditorial en noir et blanc",
    position: "center 25%",
  },
  {
    src: "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6417.jpg",
    alt: "Escalier orné lors d’une réception de mariage",
    position: "center",
  },
  {
    src: "/web/photoo/Mariage%20Gina%20%26%20Lionel/DSC_4886.jpg",
    alt: "Réception de mariage baignée de lumière",
    span: "row-span-2",
    position: "center",
  },
];

export default function Gallery() {
  return (
    <section
      id="galerie"
      className="relative overflow-hidden bg-[#0b0906] text-white"
    >
      <Image
        src="/web/galerie/back.png"
        alt=""
        aria-hidden="true"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,9,6,0.25)_0%,rgba(11,9,6,0.55)_38%,rgba(11,9,6,0.94)_100%)]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <p className="text-[11px] font-extrabold tracking-[0.3em] text-[#d8b884] uppercase">
          Galerie
        </p>

        <h2
          className={`${bodoni.className} mt-5 max-w-[18ch] text-center text-4xl leading-[0.98] font-medium tracking-[-0.04em] uppercase sm:text-6xl lg:text-7xl`}
        >
          Instants choisis.
        </h2>

        <p className="mt-7 max-w-md text-center text-sm leading-7 text-white/70 sm:text-base">
          Des images sincères et élégantes, pour raconter l’essentiel.
        </p>

        <div className="mt-14 grid w-full grid-cols-[1fr_1fr] items-center gap-4 sm:grid-cols-[1.3fr_1fr_1.5fr_1fr_1.3fr] sm:gap-5 lg:mt-16 lg:gap-6">
          <div className="hidden aspect-[3/4] overflow-hidden rounded-md border border-white/80 sm:block">
            <Image
              src={leftPhotos[0].src}
              alt={leftPhotos[0].alt}
              width={420}
              height={560}
              sizes="(max-width: 1023px) 20vw, 16vw"
              className="h-full w-full object-cover"
              style={{ objectPosition: leftPhotos[0].position }}
            />
          </div>

          <div className="grid grid-rows-2 gap-4 sm:gap-5">
            {leftPhotos.slice(1).map((photo) => (
              <div
                key={photo.src}
                className="aspect-[4/3] overflow-hidden rounded-md border border-white/80"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={360}
                  height={270}
                  sizes="(max-width: 1023px) 30vw, 14vw"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: photo.position }}
                />
              </div>
            ))}
          </div>

          <div className="relative order-first col-span-2 mx-auto aspect-square w-full max-w-[15rem] sm:order-none sm:col-auto sm:max-w-none">
            <Image
              src="/web/galerie/objectif.png"
              alt="Objectif photographique gravé Patrice Wilfrid, photographe"
              fill
              sizes="(max-width: 1023px) 60vw, 22vw"
              className="object-contain"
            />
          </div>

          <div className="grid grid-rows-2 gap-4 sm:gap-5">
            {rightPhotos.slice(0, 2).map((photo) => (
              <div
                key={photo.src}
                className="aspect-[4/3] overflow-hidden rounded-md border border-white/80"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={360}
                  height={270}
                  sizes="(max-width: 1023px) 30vw, 14vw"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: photo.position }}
                />
              </div>
            ))}
          </div>

          <div className="hidden aspect-[3/4] overflow-hidden rounded-md border border-white/80 sm:block">
            <Image
              src={rightPhotos[2].src}
              alt={rightPhotos[2].alt}
              width={420}
              height={560}
              sizes="(max-width: 1023px) 20vw, 16vw"
              className="h-full w-full object-cover"
              style={{ objectPosition: rightPhotos[2].position }}
            />
          </div>
        </div>

        <Link
          href="/galerie"
          className="cta-button cta-primary mt-14 inline-flex min-h-14 w-fit items-center gap-6 bg-[#d8b884] px-9 text-[9px] font-extrabold tracking-[0.24em] text-[#14201e] uppercase transition-colors hover:bg-[#edd19f] lg:mt-16"
        >
          Voir toute la galerie
          <span aria-hidden="true">→</span>
        </Link>

        <p className="mt-8 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-white/55 uppercase">
          <span aria-hidden="true" className="text-[#d8b884]">
            ⬡
          </span>
          Expérience discrète, images intemporelles
        </p>
      </div>
    </section>
  );
}
