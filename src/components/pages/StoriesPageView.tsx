import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import { Icon } from "@iconify/react";
import mapPointIcon from "@iconify-icons/solar/map-point-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
});

const stories = [
  {
    id: "christophe-sandra",
    number: "01",
    names: "Christophe & Sandra",
    title: "Face à l’Atlantique",
    location: "Côte atlantique · Guadeloupe",
    introduction:
      "Une journée baignée de lumière, portée par l’océan et cette élégance simple qui laisse toute la place aux regards.",
    narrative:
      "Des préparatifs aux portraits au bord de l’eau, le reportage suit leur rythme sans interrompre ce qui se vit. Les gestes restent vrais, le décor devient une respiration et chaque image garde la sensation du moment.",
    tags: ["Bord de mer", "Lumière naturelle", "Portraits"],
    images: [
      {
        src: "/web/photoo/Mariage%20Christophe%20%26%20Sandra/31122013-DSC_6500.jpg",
        alt: "Christophe et Sandra face à l’océan le jour de leur mariage",
        position: "object-[63%_center]",
      },
      {
        src: "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6464.jpg",
        alt: "Un moment de tendresse entre Christophe et Sandra",
        position: "object-center",
      },
      {
        src: "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6381.jpg",
        alt: "Un instant du mariage de Christophe et Sandra",
        position: "object-center",
      },
    ],
  },
  {
    id: "ryan-emilia",
    number: "02",
    names: "Ryan & Emilia",
    title: "Tout près, tout simplement",
    location: "Célébration intime · Guadeloupe",
    introduction:
      "Une histoire racontée à hauteur de regard, entre émotion, détails précieux et éclats de rire partagés.",
    narrative:
      "Ici, la photographie se fait discrète. Elle se rapproche quand l’émotion affleure, puis s’efface pour laisser la fête reprendre sa place. Le résultat est un récit vivant, tendre et profondément personnel.",
    tags: ["Émotion", "Cérémonie", "Instants vrais"],
    images: [
      {
        src: "/web/photoo/Mariage%20Ryan%20%26%20Emilia/DSC_4469.jpg",
        alt: "Ryan et Emilia échangeant un baiser",
        position: "object-center",
      },
      {
        src: "/web/photoo/Mariage%20Ryan%20%26%20Emilia/DSC_4481.jpg",
        alt: "Ryan et Emilia entourés de leurs proches",
        position: "object-center",
      },
      {
        src: "/web/photoo/Mariage%20Ryan%20%26%20Emilia/DSC_4590.jpg",
        alt: "Détail fleuri du mariage de Ryan et Emilia",
        position: "object-center",
      },
    ],
  },
  {
    id: "gina-lionel",
    number: "03",
    names: "Gina & Lionel",
    title: "La joie en grand",
    location: "Une journée en famille · Guadeloupe",
    introduction:
      "Des sourires qui débordent du cadre et une énergie généreuse, du premier regard jusqu’aux derniers pas de danse.",
    narrative:
      "Le reportage alterne les images composées et les secondes imprévues. Une main levée, un rire, un regard complice : autant de fragments qui, réunis, restituent la personnalité de leur journée.",
    tags: ["Famille", "Complicité", "Célébration"],
    images: [
      {
        src: "/web/photoo/Mariage%20Gina%20%26%20Lionel/DSC_4730.jpg",
        alt: "Gina et Lionel partageant un moment de joie",
        position: "object-center",
      },
      {
        src: "/web/photoo/Mariage%20Gina%20%26%20Lionel/DSC_4713.jpg",
        alt: "Un moment complice du mariage de Gina et Lionel",
        position: "object-center",
      },
      {
        src: "/web/photoo/Mariage%20Gina%20%26%20Lionel/DSC_4938.jpg",
        alt: "La célébration de Gina et Lionel",
        position: "object-center",
      },
    ],
  },
] as const;

export default function StoriesPageView() {
  return (
    <div className="bg-[#f8f3e9] text-[#12201d]">
      <section className="relative isolate overflow-hidden bg-[#0b1010] text-white lg:min-h-svh">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_9%_45%,rgba(216,184,132,0.07),transparent_28%),radial-gradient(circle_at_86%_27%,rgba(123,145,148,0.17),transparent_34%),linear-gradient(115deg,#090d0d_0%,#111717_52%,#171d1d_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(180deg,transparent,rgba(3,7,6,0.42))]"
        />
        <div
          aria-hidden="true"
          className="absolute -top-28 -left-28 size-[32rem] rounded-full border border-[#d8b884]/[0.045] sm:size-[44rem]"
        />

        <div className="relative mx-auto grid w-full max-w-[1660px] gap-14 px-5 pt-32 pb-16 sm:px-8 sm:pt-36 lg:min-h-svh lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-12 lg:px-14 lg:pt-28 lg:pb-10 xl:gap-16">
          <div className="relative z-10 lg:translate-y-8 lg:pt-12">
            <p className="text-[9px] font-bold tracking-[0.34em] text-[#e1bd7d] uppercase sm:text-[10px]">
              Histoires vraies · Images vivantes
            </p>
            <h1
              className={`${bodoni.className} mt-10 text-[3.25rem] leading-[0.94] tracking-[-0.045em] sm:text-[4.8rem] lg:text-[clamp(4rem,4.8vw,5.25rem)]`}
            >
              <span className="block whitespace-nowrap">Chaque amour</span>
              <span className="block whitespace-nowrap">
                mérite son{" "}
                <span className="text-[#d2aa67] italic">récit.</span>
              </span>
            </h1>

            <p className="mt-10 max-w-[35rem] text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
              Trois journées, trois atmosphères, une même attention portée aux
              gestes, aux liens et à tout ce qui ne se rejoue pas.
            </p>

            <a
              href="#reportages"
              className="group mt-9 inline-flex min-h-16 min-w-[20rem] items-center gap-7 rounded-full border border-[#d8b884]/75 py-1.5 pr-10 pl-1.5 text-[9px] font-bold tracking-[0.2em] text-[#efd09a] uppercase transition-colors hover:bg-[#d8b884] hover:text-[#0b1010] sm:min-w-[22rem]"
            >
              <span className="flex size-12 items-center justify-center rounded-full border border-[#d8b884]/75 text-base transition-colors group-hover:border-[#0b1010]/25">
                ↓
              </span>
              Découvrir les histoires
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[58rem] lg:h-[min(83vh,49rem)] lg:min-h-[40rem]">
            <div
              aria-hidden="true"
              className="absolute top-2 -right-1 hidden size-32 items-center justify-center rounded-full border border-[#d8b884]/15 text-[#d8b884]/35 xl:flex"
            >
              <span className={`${bodoni.className} text-5xl tracking-[-0.08em]`}>
                PW
              </span>
              <span className="absolute inset-2 rounded-full border border-dashed border-[#d8b884]/15" />
            </div>

            <div
              className="relative mt-2 aspect-[0.92] w-full bg-[#b68e54]/65 p-px sm:aspect-[1.08] lg:mt-0 lg:h-full lg:aspect-auto"
              style={{
                clipPath:
                  "polygon(3.5% 0, 80% 0, 100% 22%, 100% 100%, 3.5% 100%, 0 96%, 0 4%)",
              }}
            >
              <figure
                className="relative size-full overflow-hidden bg-[#111817]"
                style={{
                  clipPath:
                    "polygon(3.5% 0, 80% 0, 100% 22%, 100% 100%, 3.5% 100%, 0 96%, 0 4%)",
                }}
              >
                <Image
                  src="/web/photoo/Mariage%20Christophe%20%26%20Sandra/31122013-DSC_6500.jpg"
                  alt="Christophe et Sandra face à l’océan"
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-[65%_center] brightness-[0.78] saturate-[0.78]"
                />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(5,10,9,0.72)_100%)]" />
              </figure>
            </div>

            <blockquote className="absolute right-4 bottom-5 w-[min(18rem,78%)] rounded-[1.4rem] border border-[#d8b884]/35 bg-[#090d0d]/88 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.4)] backdrop-blur-md sm:right-7 sm:bottom-7 sm:p-7">
              <span
                aria-hidden="true"
                className={`${bodoni.className} text-5xl leading-none text-[#c9a263]`}
              >
                “
              </span>
              <p
                className={`${bodoni.className} mt-1 text-lg leading-7 text-white/78 italic`}
              >
                Votre histoire est unique.
                <br />
                Nos images la rendent intemporelle.
              </p>
              <footer className="mt-5 border-t border-[#d8b884]/35 pt-4 text-[9px] font-bold tracking-[0.22em] text-[#cda866] uppercase">
                Patrice Wilfrid
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <main id="reportages">
        {stories.map((story, index) => (
          <article
            key={story.id}
            id={story.id}
            className={`border-b border-[#12201d]/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 ${
              index % 2 === 1 ? "bg-[#efe6d7]" : "bg-[#f8f3e9]"
            }`}
          >
            <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 text-[#9a713a]">
                  <span className={`${bodoni.className} text-3xl`}>
                    {story.number}
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.24em] uppercase">
                    {story.names}
                  </span>
                </div>

                <h2
                  className={`${bodoni.className} mt-7 text-[2.8rem] leading-[0.96] tracking-[-0.04em] sm:text-[4.2rem]`}
                >
                  {story.title}
                </h2>
                <p className="mt-6 flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] text-[#9a713a] uppercase">
                  <Icon icon={mapPointIcon} className="size-4" aria-hidden="true" />
                  {story.location}
                </p>
                <p className="mt-8 text-lg leading-8 text-[#12201d]/82 sm:text-xl">
                  {story.introduction}
                </p>
                <p className="mt-6 text-sm leading-7 text-[#12201d]/56 sm:text-base sm:leading-8">
                  {story.narrative}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Ambiances du reportage">
                  {story.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[#12201d]/12 bg-white/45 px-4 py-2 text-[8px] font-bold tracking-[0.17em] text-[#12201d]/65 uppercase"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`grid grid-cols-[1.15fr_0.85fr] gap-3 sm:gap-5 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <figure className="relative min-h-[28rem] overflow-hidden rounded-[1.5rem] bg-[#d8d0c2] sm:min-h-[38rem] lg:min-h-[43rem]">
                  <Image
                    src={story.images[0].src}
                    alt={story.images[0].alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 58vw"
                    className={`object-cover ${story.images[0].position}`}
                  />
                </figure>
                <div className="grid gap-3 sm:gap-5">
                  {story.images.slice(1).map((image) => (
                    <figure
                      key={image.src}
                      className="relative min-h-0 overflow-hidden rounded-[1.25rem] bg-[#d8d0c2]"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 24vw, 36vw"
                        className={`object-cover ${image.position}`}
                      />
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </main>

    </div>
  );
}
