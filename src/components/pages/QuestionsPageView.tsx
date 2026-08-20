import Link from "next/link";

const questions = [
  {
    category: "Le style",
    question: "Comment décririez-vous votre manière de photographier ?",
    answer:
      "Une écriture éditoriale, naturelle et contrastée. Je privilégie les gestes vrais et une direction légère lorsque vous en avez besoin.",
  },
  {
    category: "La préparation",
    question: "Faut-il prévoir une séance avant le mariage ?",
    answer:
      "Ce n’est pas obligatoire. Un échange approfondi suffit souvent. Une séance peut toutefois être utile si vous souhaitez vous familiariser avec l’appareil.",
  },
  {
    category: "Le jour J",
    question: "Intervenez-vous pendant les moments importants ?",
    answer:
      "Je guide uniquement quand cela améliore la situation. Le reste du temps, j’anticipe, j’observe et je photographie sans interrompre.",
  },
  {
    category: "La Guadeloupe",
    question: "Vous déplacez-vous dans toute l’île ?",
    answer:
      "Oui, du Moule à Basse-Terre et dans toute la Guadeloupe. Les déplacements plus lointains sont étudiés selon votre projet.",
  },
  {
    category: "Les images",
    question: "Quand recevons-nous le reportage ?",
    answer:
      "Le délai précis est indiqué dans votre proposition. Chaque image est sélectionnée et travaillée avec soin pour former un récit cohérent.",
  },
  {
    category: "Le premier contact",
    question: "Quelles informations faut-il envoyer ?",
    answer:
      "Vos prénoms, la date, le lieu, le nombre d’invités et ce qui compte le plus pour vous. Un budget indicatif aide également à proposer la formule juste.",
  },
];

export default function QuestionsPageView() {
  return (
    <section
      id="page-questions"
      className="min-h-svh bg-[#eee9df] text-[#11201d]"
    >
      <div className="mx-auto max-w-[1440px] px-5 pt-32 pb-20 sm:px-8 sm:pt-40 lg:px-12 lg:pt-44 lg:pb-28">
        <header className="grid gap-10 border-b border-[#11201d]/18 pb-12 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <p className="text-[9px] font-bold tracking-[0.25em] text-[#9a713a] uppercase">
              Questions
            </p>
            <h1 className="editorial-title editorial-title-dark mt-7 max-w-[10ch] text-[3.25rem] font-black leading-[0.88] tracking-[-0.06em] uppercase sm:text-[6rem] lg:text-[7.4rem]">
              Tout savoir, simplement.
            </h1>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#11201d]/56 lg:justify-self-end lg:text-right">
            Des réponses directes pour vous permettre d’avancer sereinement,
            avant même notre premier échange.
          </p>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.42fr_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="border border-[#11201d]/16 bg-[#f7f3eb] p-7 sm:p-8">
              <span className="flex size-12 items-center justify-center rounded-full bg-[#d8b884] text-xl">
                ?
              </span>
              <h2 className="mt-7 text-2xl font-black tracking-[-0.035em] uppercase">
                Votre question n’est pas ici ?
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#11201d]/56">
                Écrivez quelques lignes. Une réponse personnelle vous sera
                envoyée sous 24 à 48 heures.
              </p>
              <Link
                href="/contact"
                className="cta-button cta-dark mx-auto mt-7 flex min-h-12 w-fit items-center gap-5 px-7 text-[9px] font-extrabold tracking-[0.2em] uppercase sm:mx-0 sm:inline-flex"
              >
                Poser ma question
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </aside>

          <div className="border-t border-[#11201d]/22">
            {questions.map((item) => (
              <details
                key={item.question}
                className="group border-b border-[#11201d]/22"
              >
                <summary className="grid cursor-pointer list-none grid-cols-[1fr_2.5rem] gap-5 py-7 [&::-webkit-details-marker]:hidden sm:py-9">
                  <span>
                    <span className="block text-[8px] font-bold tracking-[0.2em] text-[#9a713a] uppercase">
                      {item.category}
                    </span>
                    <span className="mt-3 block text-lg font-bold tracking-[-0.02em] sm:text-2xl">
                      {item.question}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex size-10 items-center justify-center rounded-full border border-[#11201d]/25 text-xl text-[#9a713a] transition-colors group-open:bg-[#11201d] group-open:text-white"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="max-w-2xl pb-8 text-sm leading-7 text-[#11201d]/58 sm:text-base sm:leading-8">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
