import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const milestones = [
  {
    year: "2007",
    place: "Paris",
    title: "Apprendre la rigueur",
    text: "Le spectacle, la mode et les nuits parisiennes forgent le regard et le sens du rythme.",
    image:
      "/web/photoo/DEFILE%20GUERLAIN%202020%20PFW/22012020-DEFILE%20PARIS%20FASHION%20WEEK%20GUERLAIN%202021%20030.jpg",
    alt: "Défilé de mode dans un décor parisien",
    imagePosition: "object-[center_38%]",
    icon: "city",
  },
  {
    year: "Puis",
    place: "Le mouvement",
    title: "Chercher le vrai",
    text: "Moins de poses, plus de présence. La technique s’efface pour laisser vivre les personnes.",
    image:
      "/web/photoo/DEFILE%20GUERLAIN%202020%20PFW/22012020-DEFILE%20PARIS%20FASHION%20WEEK%20GUERLAIN%202021%20108.jpg",
    alt: "Silhouette en mouvement pendant un défilé",
    imagePosition: "object-[center_30%]",
    icon: "movement",
  },
  {
    year: "Aujourd’hui",
    place: "Guadeloupe",
    title: "Raconter les liens",
    text: "La lumière des Antilles rencontre une écriture éditoriale, sensible et profondément humaine.",
    image:
      "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6464.jpg",
    alt: "Mariés face à la mer en Guadeloupe",
    imagePosition: "object-[35%_center]",
    icon: "sun",
  },
] as const;

function JourneyIcon({ kind }: { kind: (typeof milestones)[number]["icon"] }) {
  if (kind === "city") {
    return (
      <svg viewBox="0 0 40 40" className="size-8" fill="none" aria-hidden="true">
        <path d="M7 33h26M10 30V17h20v13M14 17V9h12v8M12 13h16M16 23h2m4 0h2m-8 5h2m4 0h2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  if (kind === "movement") {
    return (
      <svg viewBox="0 0 40 40" className="size-8" fill="none" aria-hidden="true">
        <path d="M5 13c5.3-5.3 10.7-5.3 16 0s10.7 5.3 16 0M5 20c5.3-5.3 10.7-5.3 16 0s10.7 5.3 16 0M5 27c5.3-5.3 10.7-5.3 16 0s10.7 5.3 16 0" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" className="size-8" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 4v6m0 20v6M4 20h6m20 0h6M8.7 8.7l4.2 4.2m14.2 14.2 4.2 4.2m0-22.6-4.2 4.2M12.9 27.1l-4.2 4.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function AboutPageView() {
  return (
    <section
      id="page-a-propos"
      className="overflow-hidden bg-[#f2eee5] text-[#12201d]"
    >
      <div className="relative mx-auto max-w-[1440px] px-5 pt-32 pb-20 sm:px-8 sm:pt-40 lg:px-12 lg:pt-44 lg:pb-28">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-24 -right-8 text-[11rem] leading-none font-black tracking-[-0.1em] text-[#12201d]/[0.025] sm:text-[19rem] lg:top-16 lg:text-[27rem]"
        >
          REGARD
        </span>

        <div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24">
          <header>
            <div className="text-[9px] font-bold tracking-[0.25em] text-[#9a713a] uppercase">
              À propos
            </div>
            <h1
              className={`${bodoni.className} mt-8 max-w-[11ch] text-[3.5rem] leading-[0.9] font-medium tracking-[-0.055em] uppercase sm:text-[5.5rem] lg:text-[7.2rem]`}
            >
              Le regard avant l’appareil.
            </h1>
            <p className="mt-9 max-w-xl border-l border-[#b68e54] pl-6 text-base leading-8 text-[#12201d]/64 sm:text-lg">
              Photographier un mariage, c’est comprendre ce qui relie les
              personnes avant de chercher une belle image.
            </p>
          </header>

          <div className="relative mx-auto w-full max-w-[38rem] pb-10 sm:pb-16">
            <figure className="relative ml-auto aspect-[4/5] w-[78%] overflow-hidden bg-[#d8d1c4] shadow-[0_35px_80px_-35px_rgba(18,32,29,0.45)]">
              <Image
                src="/web/photoo/04122025-_DSC0025.jpg"
                alt="Portrait de Patrice Wilfrid"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 75vw"
                className="object-cover object-[center_44%] grayscale-[12%]"
              />
              <span className="absolute inset-4 border border-white/45" />
            </figure>
            <figure className="absolute bottom-0 left-0 aspect-[4/3] w-[48%] overflow-hidden border-[10px] border-[#f2eee5] shadow-xl sm:border-[14px]">
              <Image
                src="/web/photoo/04122025-_DSC0090.jpg"
                alt="Patrice Wilfrid réglant un éclairage de studio"
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover object-center"
              />
            </figure>
            <div className="absolute right-0 bottom-0 flex size-20 items-center justify-center rounded-full border border-[#b68e54]/55 bg-[#f2eee5] text-center text-[8px] font-bold tracking-[0.18em] text-[#9a713a] uppercase sm:size-24">
              Depuis
              <br />
              2007
            </div>
          </div>
        </div>
      </div>

      <section
        id="parcours"
        className="relative isolate overflow-hidden bg-[#07110e] text-white lg:min-h-[58.75rem]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-55"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 42%, rgba(43,78,65,.34), transparent 34%), radial-gradient(circle at 88% 8%, rgba(181,143,80,.08), transparent 25%), repeating-linear-gradient(115deg, rgba(255,255,255,.015) 0, rgba(255,255,255,.015) 1px, transparent 1px, transparent 7px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-96 -left-32 hidden size-[22rem] rounded-full border border-[#c9a765]/[0.09] lg:block"
        >
          <span className="absolute top-1/2 left-0 h-px w-full bg-[#c9a765]/[0.06]" />
          <span className="absolute top-0 left-1/2 h-full w-px bg-[#c9a765]/[0.06]" />
          <span className="absolute inset-[21%] rotate-45 border border-[#c9a765]/[0.05]" />
        </div>

        <div className="relative mx-auto grid max-w-[1680px] gap-16 px-5 py-20 sm:px-8 sm:py-24 lg:min-h-[58.75rem] lg:grid-cols-[0.48fr_1fr] lg:items-start lg:gap-12 lg:pt-32 lg:pr-32 lg:pb-8 lg:pl-[5.5rem]">
          <header className="relative lg:pt-24 xl:pt-28">
            <div className="text-[9px] font-bold tracking-[0.28em] text-[#d3ad69] uppercase">
              Le parcours
            </div>
            <h2
              className={`${bodoni.className} mt-9 max-w-[8.2ch] text-[3.25rem] leading-[1.08] font-medium tracking-[-0.055em] uppercase sm:text-[3.75rem] lg:text-[3.75rem]`}
            >
              <span className="block">Trois</span>
              <span className="block">territoires.</span>
              <span className="block">Une même</span>
              <span className="block">attention.</span>
            </h2>

            <div className="mt-11 text-[#d3ad69]">
              <span className="relative block size-4 rounded-full border border-current">
                <span className="absolute inset-[3px] rounded-full border border-current/70" />
              </span>
            </div>

            <p className="mt-8 max-w-[21rem] text-[15px] leading-[1.65] text-white/55">
              Un chemin fait d’observation, d’exigence et de rencontres. Trois
              territoires, trois apprentissages. Une même boussole : l’humain,
              toujours.
            </p>
          </header>

          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute top-0 -bottom-8 left-5 hidden w-px bg-gradient-to-b from-[#d3ad69]/15 via-[#d3ad69]/65 to-[#d3ad69]/15 lg:block"
            />

            <ol className="grid gap-5 lg:pl-16">
              {milestones.map((item, index) => (
                <li
                  key={item.title}
                  className={`relative grid overflow-visible rounded-2xl lg:min-h-[14.25rem] lg:items-stretch ${
                    index === 1
                      ? "lg:mr-[6.4rem] lg:grid-cols-[1.15fr_0.85fr]"
                      : "lg:grid-cols-[0.74fr_1.26fr]"
                  } xl:min-h-[15.4rem]`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 -left-[3.2rem] z-10 hidden size-[1.15rem] -translate-y-1/2 rounded-full border border-[#d3ad69] bg-[#07110e] shadow-[0_0_0_5px_#07110e] lg:block"
                  >
                    <span className="absolute inset-[4px] rounded-full bg-[#d3ad69]" />
                  </span>
                  <figure
                    className={`relative min-h-56 overflow-hidden rounded-2xl border border-[#d3ad69]/45 bg-[#101b17] ${
                      index === 1 ? "lg:order-2 lg:-ml-3" : ""
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 27vw, 100vw"
                      className={`object-cover ${item.imagePosition} ${
                        index === 1 ? "grayscale contrast-125" : ""
                      }`}
                    />
                    {index === 1 && (
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 27vw, 100vw"
                        aria-hidden="true"
                        className={`translate-x-8 scale-110 object-cover opacity-25 mix-blend-screen grayscale contrast-150 ${item.imagePosition}`}
                      />
                    )}
                    <span className="absolute inset-0 bg-gradient-to-tr from-[#07110e]/65 via-transparent to-[#d3ad69]/10" />
                    <span className="absolute inset-3 rounded-xl border border-white/15" />
                  </figure>

                  <article
                    className={`relative z-[1] flex min-h-64 flex-col justify-start overflow-hidden rounded-2xl border border-[#d3ad69]/45 bg-[#0a1713]/95 px-7 py-8 shadow-[0_26px_55px_-35px_rgba(0,0,0,.9)] sm:px-9 lg:min-h-0 ${
                      index === 1 ? "lg:order-1 lg:mr-0" : "lg:-ml-3"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -top-20 -right-16 size-48 rounded-full border border-[#d3ad69]/[0.06]"
                    />
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-[9px] font-bold tracking-[0.24em] text-[#d3ad69] uppercase">
                          {item.year}
                        </p>
                        <p className="mt-2 text-[11px] tracking-[0.08em] text-white/40 uppercase">
                          {item.place}
                        </p>
                      </div>
                      <span className="text-[#d3ad69]">
                        <JourneyIcon kind={item.icon} />
                      </span>
                    </div>

                    <h3
                      className={`${bodoni.className} ${
                        index === 1 ? "mt-8" : index === 2 ? "mt-7" : "mt-6"
                      } text-[1.75rem] leading-none font-medium tracking-[-0.035em] sm:text-[2.1rem]`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-[13px] leading-6 text-white/52">
                      {item.text}
                    </p>

                    {index !== 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute right-5 bottom-5 flex size-10 items-center justify-center rounded-full border border-[#d3ad69]/65 text-sm text-[#d3ad69]"
                      >
                        →
                      </span>
                    )}
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </section>
  );
}
