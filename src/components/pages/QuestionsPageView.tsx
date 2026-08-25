"use client";

import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import { useState } from "react";
import { Icon } from "@iconify/react";
import penIcon from "@iconify-icons/solar/pen-new-square-linear";
import hangerIcon from "@iconify-icons/solar/hanger-2-linear";
import calendarIcon from "@iconify-icons/solar/calendar-linear";
import galleryIcon from "@iconify-icons/solar/gallery-linear";
import letterIcon from "@iconify-icons/solar/letter-linear";
import mapPointIcon from "@iconify-icons/solar/map-point-linear";
import clockIcon from "@iconify-icons/solar/clock-circle-linear";
import userIcon from "@iconify-icons/solar/user-linear";
import lockIcon from "@iconify-icons/solar/lock-linear";
import chatIcon from "@iconify-icons/solar/chat-round-dots-linear";
import searchIcon from "@iconify-icons/solar/magnifer-linear";
import passportIcon from "@iconify-icons/solar/passport-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const categories = [
  { label: "Le style", icon: penIcon },
  { label: "La préparation", icon: hangerIcon },
  { label: "Le jour J", icon: calendarIcon },
  { label: "Les images", icon: galleryIcon },
  { label: "Le premier contact", icon: letterIcon },
  { label: "Autres services", icon: passportIcon },
];

const questions = [
  {
    category: "Le style",
    question: "Comment décririez-vous votre manière de photographier ?",
    answer:
      "Une écriture inspirée de l’éditorial de mode, spontanée et contrastée, avec un jeu subtil de lumière. Je crée une ambiance détendue et vous guide avec légèreté lorsque vous en avez besoin.",
  },
  {
    category: "Le style",
    question: "Vos photos sont-elles beaucoup retouchées ?",
    answer:
      "La retouche reste sobre et fidèle à l’instant : ajustement de la lumière et des couleurs, sans transformer les visages ni les silhouettes.",
  },
  {
    category: "Le style",
    question: "Travaillez-vous en couleur ou en noir et blanc ?",
    answer:
      "Les deux, selon ce que la scène raconte. La couleur pour la lumière et l’ambiance, le noir et blanc pour l’émotion brute de certains instants.",
  },
  {
    category: "La préparation",
    question: "Faut-il prévoir une séance avant le mariage ?",
    answer:
      "Ce n’est pas obligatoire. Un échange approfondi suffit souvent. Une séance peut toutefois être utile si vous souhaitez vous familiariser avec l’appareil.",
  },
  {
    category: "La préparation",
    question: "Vous déplacez-vous dans toute l’île ?",
    answer:
      "Oui, du Moule à Basse-Terre et dans toute la Guadeloupe. Les déplacements plus lointains sont étudiés selon votre projet.",
  },
  {
    category: "La préparation",
    question: "Combien de temps à l’avance dois-je réserver ?",
    answer:
      "Idéalement 6 à 12 mois avant votre date, surtout en haute saison. Les demandes de dernière minute restent possibles selon les disponibilités.",
  },
  {
    category: "Le jour J",
    question: "Intervenez-vous pendant les moments importants ?",
    answer:
      "Je guide uniquement quand cela améliore la situation. Le reste du temps, j’anticipe, j’observe et je photographie sans interrompre.",
  },
  {
    category: "Le jour J",
    question: "Combien de temps restez-vous sur place ?",
    answer:
      "La durée dépend de la formule choisie, de quelques heures à la journée complète. Elle est toujours définie ensemble avant la réservation.",
  },
  {
    category: "Le jour J",
    question: "Venez-vous seul ou avec une équipe ?",
    answer:
      "Je travaille généralement seul, pour rester discret. Un second photographe peut se joindre sur demande pour les grands événements.",
  },
  {
    category: "Les images",
    question: "Quand recevons-nous le reportage ?",
    answer:
      "Le délai précis est indiqué dans votre proposition. Chaque image est sélectionnée et travaillée avec soin pour former un récit cohérent.",
  },
  {
    category: "Les images",
    question: "Combien de photos recevons-nous ?",
    answer:
      "Le nombre varie selon la durée de la prestation, généralement entre 300 et 600 images sélectionnées et retouchées.",
  },
  {
    category: "Les images",
    question: "Puis-je demander des tirages papier ?",
    answer:
      "Oui, des tirages et des albums peuvent être commandés en complément, sur devis selon le format et la finition souhaités.",
  },
  {
    category: "Le premier contact",
    question: "Quelles informations faut-il envoyer ?",
    answer:
      "Vos prénoms, la date, le lieu, le nombre d’invités et ce qui compte le plus pour vous. Un budget indicatif aide également à proposer la formule juste.",
  },
  {
    category: "Le premier contact",
    question: "Sous quel délai me répondez-vous ?",
    answer:
      "Sous 24 à 48 heures, avec une proposition adaptée à votre projet et vos disponibilités.",
  },
  {
    category: "Le premier contact",
    question: "Un acompte est-il demandé à la réservation ?",
    answer:
      "Oui, un acompte confirme la réservation de votre date. Le solde est réglé après la prestation, selon les modalités du contrat.",
  },
  {
    category: "Autres services",
    question: "Réalisez-vous les photos d’identité et ePhotos ANTS ?",
    answer:
      "Oui. Les photos d’identité sont réalisées dans le respect des normes officielles pour cartes d’identité et passeports. Référencé dans l’annuaire officiel France Titres comme photographe « Agréé services en ligne ANTS », je réalise aussi la photo-signature numérique ePhoto destinée notamment aux démarches de permis de conduire.",
  },
  {
    category: "Autres services",
    question: "Proposez-vous des photographies pour les restaurants ?",
    answer:
      "Oui. Plats, desserts, boissons, menus, gestes en cuisine et ambiance du lieu : chaque série est pensée pour votre carte, votre site, vos plateformes de livraison et vos réseaux sociaux.",
  },
];

const highlights = [
  {
    title: "Réponse sous 24 à 48h",
    text: "Je vous réponds personnellement sous 24 à 48 heures.",
    icon: clockIcon,
  },
  {
    title: "Accompagnement personnalisé",
    text: "Un suivi sur-mesure à chaque étape de votre expérience.",
    icon: userIcon,
  },
  {
    title: "Déplacements en Guadeloupe",
    text: "Présent partout sur l’île, sans frais supplémentaires.",
    icon: mapPointIcon,
  },
  {
    title: "Galerie privée",
    text: "Vos images dans une galerie en ligne sécurisée et élégante.",
    icon: lockIcon,
  },
];

function categoryIcon(category: string) {
  return categories.find((item) => item.label === category)?.icon ?? penIcon;
}

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("fr");
}

export default function QuestionsPageView() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedSearchQuery = normalizeSearch(searchQuery.trim());
  const visibleQuestions = questions.filter((item) => {
    const matchesCategory =
      activeCategory === null || item.category === activeCategory;
    const searchableContent = normalizeSearch(
      `${item.category} ${item.question} ${item.answer}`,
    );
    const matchesSearch =
      normalizedSearchQuery.length === 0 ||
      searchableContent.includes(normalizedSearchQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="page-questions"
      className="relative overflow-hidden bg-[#faf5ec] text-[#13201e]"
    >
      <div className="relative mx-auto max-w-[1200px] px-5 pt-32 pb-20 sm:px-8 sm:pt-40 lg:px-10 lg:pt-44 lg:pb-24">
        <header className="mx-auto max-w-2xl text-center">
          <h1
            className={`${bodoni.className} text-[2.75rem] leading-[1.02] font-medium tracking-[-0.03em] sm:text-[3.75rem]`}
          >
            Questions fréquentes
          </h1>
          <p className="mt-6 text-sm leading-7 text-[#13201e]/60 sm:text-base">
            Toutes les réponses aux questions que vous vous posez avant de me
            confier votre histoire.
          </p>
        </header>

        <div
          role="search"
          className="relative mx-auto mt-10 max-w-2xl sm:mt-12"
        >
          <Icon
            icon={searchIcon}
            className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-[#9a713a]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Écrivez votre question ou un mot-clé…"
            aria-label="Rechercher dans les questions fréquentes"
            className="min-h-16 w-full rounded-full border border-[#13201e]/12 bg-white py-4 pr-24 pl-14 text-sm text-[#13201e] shadow-[0_12px_34px_rgba(20,32,30,0.06)] outline-none transition placeholder:text-[#13201e]/38 focus:border-[#b68e54]/70 focus:ring-4 focus:ring-[#b68e54]/10 [&::-webkit-search-cancel-button]:appearance-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute top-1/2 right-5 -translate-y-1/2 text-[9px] font-bold tracking-[0.14em] text-[#9a713a] uppercase transition-colors hover:text-[#13201e]"
            >
              Effacer
            </button>
          )}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-7">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            aria-pressed={activeCategory === null}
            className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-[10px] font-bold tracking-[0.14em] uppercase transition-colors ${
              activeCategory === null
                ? "border-[#13201e] bg-[#13201e] text-white"
                : "border-[#13201e]/15 bg-white text-[#13201e]/70 hover:border-[#b68e54]/60"
            }`}
          >
            <span
              className={`size-1.5 rounded-full ${
                activeCategory === null ? "bg-[#d8b884]" : "bg-[#13201e]/30"
              }`}
            />
            Toutes
          </button>

          {categories.map((category) => (
            <button
              key={category.label}
              type="button"
              onClick={() => setActiveCategory(category.label)}
              aria-pressed={activeCategory === category.label}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-[10px] font-bold tracking-[0.14em] uppercase transition-colors ${
                activeCategory === category.label
                  ? "border-[#13201e] bg-[#13201e] text-white"
                  : "border-[#13201e]/15 bg-white text-[#13201e]/70 hover:border-[#b68e54]/60"
              }`}
            >
              <Icon icon={category.icon} className="size-4" aria-hidden="true" />
              {category.label}
            </button>
          ))}
        </div>

        <p
          className="mt-8 text-center text-[10px] font-bold tracking-[0.12em] text-[#13201e]/45 uppercase"
          aria-live="polite"
        >
          {visibleQuestions.length} question
          {visibleQuestions.length !== 1 ? "s" : ""} trouvée
          {visibleQuestions.length !== 1 ? "s" : ""}
        </p>

        {visibleQuestions.length > 0 ? (
          <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-[#13201e]/8 bg-white sm:mt-5">
            {visibleQuestions.map((item, index) => (
              <details
                key={item.question}
                className={`group px-6 sm:px-9 ${
                  index !== 0 ? "border-t border-[#13201e]/8" : ""
                }`}
              >
                <summary className="grid cursor-pointer list-none grid-cols-[2.25rem_1fr] items-center gap-4 py-6 [&::-webkit-details-marker]:hidden sm:grid-cols-[auto_1fr_2.25rem] sm:gap-6 sm:py-7">
                  <span className="hidden items-center gap-2 text-[10px] font-bold tracking-[0.14em] text-[#9a713a] uppercase sm:col-start-1 sm:row-start-1 sm:flex">
                    <Icon
                      icon={categoryIcon(item.category)}
                      className="size-4"
                      aria-hidden="true"
                    />
                    <span className="whitespace-nowrap">{item.category}</span>
                    <span className="ml-2 h-4 w-px bg-[#13201e]/12" />
                  </span>

                  <span className="col-start-2 row-start-1 text-sm font-bold tracking-[-0.01em] text-[#13201e] sm:text-lg">
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="col-start-1 row-start-1 flex size-9 items-center justify-center justify-self-start rounded-full border border-[#13201e]/15 text-lg text-[#9a713a] transition-colors group-open:bg-[#13201e] group-open:text-white sm:col-start-3 sm:justify-self-end"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 pl-[3.25rem] text-sm leading-7 text-[#13201e]/60 sm:pl-[9.5rem]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        ) : (
          <div
            role="status"
            className="mt-4 flex min-h-64 flex-col items-center justify-center rounded-[1.5rem] border border-[#13201e]/8 bg-white px-6 text-center sm:mt-5"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-[#efe6d6] text-[#9a713a]">
              <Icon icon={searchIcon} className="size-6" aria-hidden="true" />
            </span>
            <p className="mt-5 text-base font-bold text-[#13201e]">
              Aucune question trouvée
            </p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#13201e]/55">
              Essayez un autre mot-clé ou affichez à nouveau toutes les
              questions.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory(null);
              }}
              className="mt-5 text-[9px] font-bold tracking-[0.16em] text-[#9a713a] uppercase underline decoration-[#b68e54]/40 underline-offset-4 transition-colors hover:text-[#13201e]"
            >
              Afficher toutes les questions
            </button>
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 rounded-[1.5rem] bg-[#efe6d6]/60 p-7 sm:mt-12 sm:grid-cols-2 sm:p-9 lg:grid-cols-4">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#e5d5b3] text-[#9a713a]">
                <Icon icon={highlight.icon} className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-bold tracking-[0.1em] text-[#13201e] uppercase">
                  {highlight.title}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-[#13201e]/60">
                  {highlight.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-5 text-center sm:mt-16">
          <p className="max-w-md text-sm leading-7 text-[#13201e]/60">
            Votre question n’est pas ici ? Écrivez quelques lignes, une
            réponse personnelle vous sera envoyée sous 24 à 48 heures.
          </p>
          <Link
            href="/contact"
            className="cta-button cta-dark inline-flex min-h-14 w-fit items-center gap-8 bg-[#13201e] px-9 text-[9px] font-extrabold tracking-[0.2em] text-white uppercase shadow-[0_12px_30px_rgba(20,32,30,0.18)] transition-colors hover:bg-[#25332f]"
          >
            Poser ma question
            <Icon icon={chatIcon} className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
