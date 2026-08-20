import Image from "next/image";

const fieldClassName =
  "mt-2 min-h-12 w-full border-b border-[#11201d]/24 bg-transparent px-0 py-3 text-sm text-[#11201d] outline-none transition-colors placeholder:text-[#11201d]/30 focus:border-[#9a713a]";

export default function ContactPageView() {
  return (
    <section
      id="page-contact"
      className="min-h-svh overflow-hidden bg-[#eee9df] text-[#11201d]"
    >
      <div className="grid min-h-svh lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[48rem] overflow-hidden bg-[#07100e] px-5 pt-32 pb-16 text-white sm:px-8 sm:pt-40 lg:min-h-svh lg:px-12 lg:pt-44 lg:pb-20">
          <Image
            src="/web/photoo/04122025-_DSC0090.jpg"
            alt="Patrice Wilfrid avec son appareil et son éclairage de studio"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-[40%_center] opacity-42"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,9,8,0.68),rgba(3,9,8,0.92))]" />

          <div className="relative flex h-full min-h-[38rem] flex-col">
            <p className="text-[9px] font-bold tracking-[0.25em] text-[#d8b884] uppercase">
              Contact
            </p>
            <h1 className="editorial-title editorial-title-light mt-8 max-w-[9ch] text-[3rem] font-black leading-[0.88] tracking-[-0.06em] uppercase sm:text-[5.5rem] lg:text-[3.8rem] xl:text-[5.25rem]">
              Commençons par l’essentiel.
            </h1>
            <p className="mt-10 max-w-md text-base leading-8 text-white/60">
              Une date, un lieu et quelques mots sur vous. C’est tout ce qu’il
              faut pour commencer une conversation juste.
            </p>

            <dl className="mt-auto grid gap-5 border-t border-white/18 pt-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div>
                <dt className="text-[8px] font-bold tracking-[0.2em] text-white/38 uppercase">
                  E-mail
                </dt>
                <dd className="mt-2 text-sm font-semibold">
                  <a href="mailto:patrice.wilfrid@gmail.com">
                    patrice.wilfrid@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[8px] font-bold tracking-[0.2em] text-white/38 uppercase">
                  WhatsApp
                </dt>
                <dd className="mt-2 text-sm font-semibold">
                  <a
                    href="https://wa.me/590690941278"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +590 690 941 278
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:pt-44 lg:pb-24 xl:px-20">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-between gap-5 border-b border-[#11201d]/18 pb-6">
              <div>
                <p className="text-[8px] font-bold tracking-[0.22em] text-[#9a713a] uppercase">
                  Votre projet
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-[-0.035em] uppercase sm:text-3xl">
                  Quelques détails utiles
                </h2>
              </div>
              <span className="hidden text-[8px] font-bold tracking-[0.18em] text-[#11201d]/35 uppercase sm:block">
                Réponse sous 24–48h
              </span>
            </div>

            <form className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              <label className="text-[8px] font-bold tracking-[0.2em] text-[#11201d]/60 uppercase">
                Vos prénoms
                <input
                  name="prenoms"
                  autoComplete="name"
                  required
                  placeholder="Comment vous appelez-vous ?"
                  className={fieldClassName}
                />
              </label>
              <label className="text-[8px] font-bold tracking-[0.2em] text-[#11201d]/60 uppercase">
                Votre e-mail
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="vous@exemple.com"
                  className={fieldClassName}
                />
              </label>
              <label className="text-[8px] font-bold tracking-[0.2em] text-[#11201d]/60 uppercase">
                Date du mariage
                <input
                  type="date"
                  name="date"
                  required
                  className={`${fieldClassName} [color-scheme:light]`}
                />
              </label>
              <label className="text-[8px] font-bold tracking-[0.2em] text-[#11201d]/60 uppercase">
                Lieu
                <input
                  name="lieu"
                  autoComplete="address-level2"
                  required
                  placeholder="Ville, domaine…"
                  className={fieldClassName}
                />
              </label>
              <label className="text-[8px] font-bold tracking-[0.2em] text-[#11201d]/60 uppercase">
                Nombre d’invités
                <input
                  type="number"
                  min="0"
                  name="invites"
                  placeholder="Environ"
                  className={fieldClassName}
                />
              </label>
              <label className="text-[8px] font-bold tracking-[0.2em] text-[#11201d]/60 uppercase">
                Budget envisagé
                <input
                  name="budget"
                  inputMode="decimal"
                  placeholder="Votre enveloppe"
                  className={fieldClassName}
                />
              </label>
              <label className="text-[8px] font-bold tracking-[0.2em] text-[#11201d]/60 uppercase sm:col-span-2">
                Ce qui compte le plus pour vous
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Racontez votre journée, vos envies, votre rythme…"
                  className={`${fieldClassName} resize-none leading-7`}
                />
              </label>

              <div className="flex justify-center border-t border-[#11201d]/18 pt-8 sm:col-span-2 sm:justify-end">
                <button
                  type="submit"
                  className="cta-button cta-dark inline-flex min-h-12 w-fit items-center gap-6 px-8 text-[9px] font-extrabold tracking-[0.2em] uppercase"
                >
                  Envoyer ma demande
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
