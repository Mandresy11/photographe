import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Respirer",
    subtitle: "Créer un climat de confiance",
    introduction:
      "Les images naturelles commencent bien avant le premier déclenchement. Elles naissent lorsque vous vous sentez écoutés, compris et libres d’être vous-mêmes.",
    details: [
      "Un échange en amont pour connaître votre histoire, vos proches et ce qui compte vraiment pour vous.",
      "Une présence calme pendant les préparatifs, sans interrompre les gestes ni accélérer le rythme.",
      "Des moments de respiration pour vous permettre de vivre la journée sans avoir constamment conscience de l’appareil.",
    ],
    result:
      "Vous ne jouez aucun rôle : les sourires, les regards et les émotions restent sincères.",
    image:
      "/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6464.jpg",
    alt: "Christophe et Sandra réunis dans un fauteuil face à l’océan",
    position: "object-center",
  },
  {
    number: "02",
    title: "Orienter",
    subtitle: "Guider seulement quand c’est utile",
    introduction:
      "Être naturel ne signifie pas être livré à soi-même. Lorsque vous en avez besoin, Patrice donne des repères simples sans transformer le moment en séance de poses.",
    details: [
      "Choisir une lumière, un décor ou un placement qui vous mettent naturellement en valeur.",
      "Proposer une indication courte pour les mains, le regard ou la posture, puis vous laisser bouger librement.",
      "S’effacer dès que la connexion apparaît afin que l’image vous ressemble, jusque dans les petits gestes.",
    ],
    result:
      "Vous êtes accompagnés sans être dirigés, pour des portraits élégants qui ne paraissent jamais forcés.",
    image:
      "/web/photoo/Mariage%20Marvin%26Gwen/_DSC7503.jpg",
    alt: "Marvin et Gwen partagent un moment complice",
    position: "object-center",
  },
  {
    number: "03",
    title: "Cueillir",
    subtitle: "Anticiper ce qui ne se rejoue pas",
    introduction:
      "Un reportage vivant demande de regarder au-delà de l’action principale. Patrice observe les liens, les réactions et les transitions pour être prêt avant que l’instant arrive.",
    details: [
      "Repérer les personnes importantes et les relations qui donnent du sens à votre histoire.",
      "Rester attentif aux regards de côté, aux mains qui se cherchent et aux émotions qui montent.",
      "Photographier les instants décisifs mais aussi les détails discrets qui permettent de revivre toute l’atmosphère.",
    ],
    result:
      "Votre galerie raconte une histoire complète, faite de grands moments et de souvenirs que vous n’aviez parfois pas vus.",
    image:
      "/web/photoo/Mariage%20Ryan%20%26%20Emilia/DSC_4469.jpg",
    alt: "Ryan et Emilia s’embrassent après la cérémonie",
    position: "object-center",
  },
] as const;

export default function DifferencePageView() {
  return (
    <section id="page-difference" className="bg-[#eee9df] text-[#11201d]">
      <div className="mx-auto max-w-[1440px] px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-24 lg:px-12 lg:pt-48 lg:pb-28">
        <header className="grid min-w-0 gap-8 border-b border-[#11201d]/18 pb-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20 lg:pb-12">
          <div>
            <p className="text-[9px] font-bold tracking-[0.27em] text-[#98713f] uppercase">
              La différence
            </p>
            <h1 className="editorial-title editorial-title-dark mt-7 max-w-[14ch] break-words text-[2.55rem] font-black leading-[0.9] tracking-[-0.06em] uppercase sm:text-[4rem] lg:text-[4.8rem]">
              Une approche. Trois engagements.
            </h1>
          </div>

          <div className="lg:pb-1">
            <p className="text-lg leading-8 font-medium text-[#11201d]/78">
              Pas de recette figée ni de mise en scène permanente. Une méthode
              simple pour vous laisser vivre pleinement et créer des images qui
              vous ressemblent.
            </p>
            <p className="mt-6 text-[8px] font-bold tracking-[0.22em] text-[#98713f] uppercase">
              Comprendre · Accompagner · Raconter
            </p>
          </div>
        </header>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:items-stretch">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="group flex h-full flex-col overflow-hidden rounded-t-[2rem] border border-[#11201d]/14 bg-[#f8f5ee] shadow-[0_22px_55px_rgba(42,34,24,0.08)]"
            >
              <figure className="relative aspect-[16/10] min-h-[15rem] overflow-hidden bg-[#0a1412]">
                <Image
                  src={principle.image}
                  alt={principle.alt}
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] ${principle.position}`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#07100e]/78 via-transparent to-black/15" />

                <div className="absolute top-5 right-5 flex size-12 items-center justify-center rounded-full border border-[#d8b884]/70 bg-[#07100e]/45 text-[9px] font-bold tracking-[0.18em] text-[#f0d49f] backdrop-blur-sm">
                  {principle.number}
                </div>
                <figcaption className="absolute right-7 bottom-7 left-7">
                  <p className="text-[8px] font-bold tracking-[0.22em] text-[#e2bf80] uppercase">
                    {principle.subtitle}
                  </p>
                  <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white uppercase sm:text-5xl lg:text-4xl xl:text-5xl">
                    {principle.title}
                  </h2>
                </figcaption>
              </figure>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-sm leading-6 text-[#11201d]/72">
                  {principle.introduction}
                </p>

                <details className="group/details mt-6 border-y border-[#11201d]/14 py-4 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[8px] font-bold tracking-[0.22em] text-[#98713f] uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b68e54]">
                    <span>Voir les 3 actions concrètes</span>
                    <span
                      aria-hidden="true"
                      className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#11201d]/18 text-base font-normal text-[#11201d] transition-transform group-open/details:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <ul className="mt-5 space-y-4 pb-2">
                    {principle.details.map((detail) => (
                      <li
                        key={detail}
                        className="grid grid-cols-[auto_1fr] gap-4 text-sm leading-6 text-[#11201d]/68"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 rotate-45 bg-[#b68e54]"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </details>

                <div className="mt-auto pt-6">
                  <div className="border-l-2 border-[#b68e54] bg-[#11201d] px-5 py-4 text-white">
                    <p className="text-[8px] font-bold tracking-[0.2em] text-[#d8b884] uppercase">
                      Ce que cela change pour vous
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/72">
                      {principle.result}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-[#11201d]/18 pt-12 lg:mt-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[8px] font-bold tracking-[0.24em] text-[#98713f] uppercase">
              Le fil conducteur
            </p>
            <blockquote className="mt-5 max-w-4xl text-3xl leading-tight font-semibold tracking-[-0.035em] sm:text-5xl">
              « Être suffisamment présent pour ne rien manquer, suffisamment
              discret pour ne rien changer. »
            </blockquote>
          </div>
          <Link
            href="/contact"
            className="cta-button cta-dark mx-auto inline-flex min-h-12 w-fit items-center gap-5 px-7 text-[9px] font-extrabold tracking-[0.2em] uppercase lg:mx-0"
          >
            Parler de votre journée
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
