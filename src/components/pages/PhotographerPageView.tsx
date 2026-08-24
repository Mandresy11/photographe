import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import { Icon } from "@iconify/react";
import waterdropIcon from "@iconify-icons/solar/waterdrop-linear";
import targetIcon from "@iconify-icons/solar/target-linear";
import usersGroupIcon from "@iconify-icons/solar/users-group-rounded-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const values = [
  {
    title: "Calme",
    text: "Pour voir ce que l’agitation cache.",
    icon: waterdropIcon,
  },
  {
    title: "Précision",
    text: "Pour que la technique ne se remarque jamais.",
    icon: targetIcon,
  },
  {
    title: "Présence",
    text: "Pour être là sans prendre la place.",
    icon: usersGroupIcon,
  },
];

export default function PhotographerPageView() {
  return (
    <section
      id="page-photographe"
      className="overflow-hidden bg-[#f1ede4] text-[#11201d]"
    >
      <div className="mx-auto grid min-h-svh max-w-[1440px] gap-14 px-5 pt-32 pb-20 sm:px-8 sm:pt-40 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24 lg:px-12 lg:pt-36 lg:pb-24">
        <div className="relative mx-auto w-full max-w-[34rem] pb-10 sm:pb-16">
          <span className="absolute -top-5 -left-5 h-[92%] w-[86%] border border-[#b68e54]/40" />
          <figure className="relative ml-auto aspect-[4/5] w-[88%] overflow-hidden bg-[#d6d0c5] shadow-[0_35px_80px_-35px_rgba(17,32,29,0.42)]">
            <Image
              src="/web/photoo/04122025-_DSC0025.jpg"
              alt="Portrait de Patrice Wilfrid"
              fill
              priority
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="object-cover object-[center_44%]"
            />
          </figure>
          <div className="absolute bottom-0 left-0 max-w-[15rem] bg-[#11201d] p-5 text-white shadow-xl sm:p-6">
            <p className="text-[8px] font-bold tracking-[0.22em] text-[#d8b884] uppercase">
              Note personnelle
            </p>
            <p className={`${bodoni.className} mt-3 text-xl leading-snug italic`}>
              La confiance se voit dans les images.
            </p>
          </div>
        </div>

        <header>
          <p className="text-[9px] font-bold tracking-[0.25em] text-[#9a713a] uppercase">
            Le photographe
          </p>
          <h1 className="editorial-title editorial-title-dark mt-8 max-w-[10ch] text-[3.7rem] font-black leading-[0.86] tracking-[-0.06em] uppercase sm:text-[6rem] lg:text-[7.2rem]">
            La discrétion comme méthode.
          </h1>
          <p className="mt-10 max-w-2xl text-base leading-8 text-[#11201d]/62 sm:text-lg">
            Patrice photographie comme il écoute : avec attention, sans
            interrompre. Son rôle n’est pas de fabriquer votre journée, mais
            de lui donner une mémoire juste.
          </p>

          <dl className="mt-10 grid grid-cols-3 border-y border-[#11201d]/18 py-7 text-center">
            <div>
              <dt className="text-[8px] font-bold tracking-[0.18em] text-[#11201d]/42 uppercase">
                Basé en
              </dt>
              <dd className="mt-2 text-sm font-extrabold sm:text-lg">Guadeloupe</dd>
            </div>
            <div className="border-x border-[#11201d]/18">
              <dt className="text-[8px] font-bold tracking-[0.18em] text-[#11201d]/42 uppercase">
                Depuis
              </dt>
              <dd className="mt-2 text-sm font-extrabold sm:text-lg">2007</dd>
            </div>
            <div>
              <dt className="text-[8px] font-bold tracking-[0.18em] text-[#11201d]/42 uppercase">
                Écriture
              </dt>
              <dd className="mt-2 text-sm font-extrabold sm:text-lg">Éditoriale</dd>
            </div>
          </dl>
        </header>
      </div>

      <div className="relative isolate overflow-hidden bg-[#080b0a] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_48%_42%,rgba(77,68,54,0.28),transparent_34%),linear-gradient(90deg,#0b0d0c_0%,#111311_48%,#070908_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(0deg,transparent_0,transparent_3px,rgba(255,255,255,0.018)_4px)]"
        />

        <div className="relative mx-auto min-h-[46rem] max-w-[1600px] lg:min-h-[48rem]">
          <figure className="relative z-10 h-[34rem] w-full overflow-hidden sm:h-[40rem] lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[48%]">
            <Image
              src="/web/photoo/04122025-_DSC0090.jpg"
              alt="Patrice Wilfrid en plein réglage de matériel pendant une séance"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[center_15%] saturate-[0.78] contrast-[1.04]"
            />
            <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,10,0.08)_0%,transparent_55%,#080b0a_100%)]" />
            <span className="absolute inset-0 bg-gradient-to-t from-[#080b0a] via-transparent to-black/20 lg:from-[#080b0a]/45" />
          </figure>

          <div className="relative z-30 -mt-24 px-5 pb-28 sm:-mt-32 sm:px-8 lg:mt-0 lg:ml-[41%] lg:w-[43%] lg:px-12 lg:py-20 xl:px-16 xl:py-20">
            <p className="text-[9px] font-bold tracking-[0.3em] text-[#d6b16e] uppercase">
              Sur le terrain
            </p>

            <h2
              className={`${bodoni.className} mt-6 max-w-[8.5ch] text-[3.55rem] font-normal leading-[0.86] tracking-[-0.045em] uppercase sm:text-[5rem] lg:text-[4.75rem] xl:text-[5.25rem]`}
            >
              Être prêt.
              <br />
              Rester
              <br />
              <span className="text-[#d3ad68]">humain.</span>
            </h2>

            <div className="mt-8 grid grid-cols-3 divide-x divide-white/20 text-center sm:mt-10">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex min-w-0 flex-col items-center px-2 py-1 sm:px-5"
                >
                  <Icon icon={value.icon} className="size-8 text-[#d3ad68] sm:size-10" />
                  <h3 className="mt-4 text-[10px] font-bold tracking-[0.18em] text-white uppercase sm:text-xs">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[11px] leading-5 text-white sm:text-sm sm:leading-6">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex justify-center sm:mt-10">
              <Link
                href="/contact"
                className="cta-button cta-primary inline-flex min-h-12 w-fit items-center gap-6 px-8 text-[9px] font-extrabold tracking-[0.22em] uppercase sm:px-10"
              >
                Faire connaissance
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 z-10 hidden h-[11rem] w-[31%] bg-[#d7cbb7] opacity-80 lg:block [clip-path:polygon(16%_0,100%_0,100%_100%,83%_90%,70%_96%,57%_82%,44%_88%,29%_74%)]"
        >
          <span className="absolute inset-0 bg-[repeating-linear-gradient(8deg,rgba(44,36,25,0.09)_0,transparent_1px,transparent_5px)]" />
          <span className={`${bodoni.className} absolute top-8 right-10 rotate-6 text-sm leading-7 text-[#473d30]/40 italic`}>
            Les gestes passent,
            <br />
            les images restent.
          </span>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-[18%] lg:block"
        >
          <figure className="absolute top-[13%] -right-[9%] w-[14rem] -rotate-6 border-[9px] border-[#eee8dc] bg-[#eee8dc] shadow-[0_30px_70px_rgba(0,0,0,0.62)] xl:-right-[3%] xl:w-[15.5rem]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/web/terrain-polaroid-2.jpg"
                alt="Jeunes mariés s'embrassant"
                fill
                sizes="17rem"
                className="object-cover object-center grayscale"
              />
            </div>
            <span className="absolute -top-5 left-1/2 h-8 w-20 -translate-x-1/2 rotate-3 bg-[#aaa18f]/55" />
          </figure>

          <figure className="absolute right-[-18%] bottom-[-5%] w-[14rem] rotate-[11deg] border-[9px] border-[#e9e3d7] bg-[#e9e3d7] shadow-[0_30px_70px_rgba(0,0,0,0.64)] xl:right-[-10%] xl:w-[15.5rem]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/web/terrain-polaroid-1.jpg"
                alt="Mariée souriante avant la cérémonie"
                fill
                sizes="17rem"
                className="object-cover object-[55%_center] grayscale"
              />
            </div>
            <span className="absolute -top-4 left-5 h-7 w-16 -rotate-6 bg-[#aaa18f]/45" />
          </figure>
        </div>

        <figure className="pointer-events-none absolute -bottom-16 -left-16 z-20 hidden w-[15rem] -rotate-2 border-[9px] border-[#e9e3d7] bg-[#e9e3d7] shadow-[0_25px_60px_rgba(0,0,0,0.58)] xl:block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/web/terrain-polaroid-1.jpg"
              alt=""
              fill
              sizes="15rem"
              className="object-cover object-left grayscale brightness-75"
            />
          </div>
        </figure>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px left-0 z-20 hidden h-16 w-[62%] bg-[#cbb48d] opacity-90 lg:block [clip-path:polygon(0_58%,4%_52%,9%_64%,14%_49%,20%_61%,27%_50%,34%_63%,41%_46%,48%_62%,55%_52%,62%_66%,70%_48%,78%_60%,86%_44%,93%_57%,100%_38%,100%_100%,0_100%)]"
        />
      </div>
    </section>
  );
}
