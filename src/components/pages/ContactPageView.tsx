import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import { Icon } from "@iconify/react";
import heartIcon from "@iconify-icons/solar/heart-linear";
import cameraIcon from "@iconify-icons/solar/camera-linear";
import starsIcon from "@iconify-icons/solar/stars-linear";
import clockIcon from "@iconify-icons/solar/clock-circle-linear";
import whatsappIcon from "@iconify-icons/simple-icons/whatsapp";
import arrowIcon from "@iconify-icons/solar/arrow-right-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
});

const highlights = [
  { label: "Écoute & conseils", icon: heartIcon },
  { label: "Approche discrète", icon: cameraIcon },
  { label: "Souvenirs intemporels", icon: starsIcon },
];

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-base tracking-normal text-white normal-case outline-none transition-colors placeholder:text-white/45 focus:border-[#d8b884] focus:bg-black/30 focus:ring-2 focus:ring-[#d8b884]/15 sm:min-h-11 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:py-2 sm:text-sm sm:focus:bg-transparent sm:focus:ring-0";

export default function ContactPageView() {
  return (
    <section
      id="page-contact"
      className="relative overflow-hidden bg-[#0e1512] text-white"
    >
      <Image
        src="/web/photoo/Mariage%20Christophe%20%26%20Sandra/07052022-DSC_6464.jpg"
        alt="Christophe et Sandra réunis le jour de leur mariage"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] sm:object-[58%_center] lg:object-[54%_38%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,21,18,0.82)_0%,rgba(14,21,18,0.5)_48%,rgba(14,21,18,0.7)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,21,18,0.3)_0%,transparent_30%,rgba(14,21,18,0.4)_100%)]" />

      <div className="relative mx-auto grid max-w-[1600px] gap-8 px-5 pt-32 pb-16 sm:gap-12 sm:px-8 sm:pt-40 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10 lg:px-12 lg:pt-24 lg:pb-24">
        <div>
          <p className="text-[10px] font-bold tracking-[0.28em] text-[#d8b884] uppercase">
            Votre histoire, nos images
          </p>
          <h1 className="mt-8 text-[2.75rem] leading-[1.05] font-normal tracking-[-0.02em] sm:text-[3.5rem] lg:text-[3.75rem]">
            Discutons de
            <br />
            votre <span className={`${bodoni.className} text-[#e5c68f] italic`}>plus beau</span>
            <br />
            jour.
          </h1>

          <p className="mt-7 hidden max-w-sm text-sm leading-7 text-white/75 sm:block sm:text-base">
            Chaque mariage est unique. Parlez-nous de votre projet et créons
            ensemble des souvenirs qui vous ressemblent.
          </p>

          <div className="mt-9 hidden gap-8 sm:flex sm:gap-10">
            {highlights.map((highlight) => (
              <div key={highlight.label} className="flex flex-col items-center gap-2.5 text-center">
                <Icon icon={highlight.icon} className="size-6 text-[#d8b884]" aria-hidden="true" />
                <span className="max-w-[6rem] text-[9px] font-bold tracking-[0.08em] text-white/85 uppercase">
                  {highlight.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-white/15 pt-6">
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#d8b884] uppercase">
              Écrivons ensemble
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <a
                href="mailto:patrice.wilfrid@gmail.com"
                className="text-white/85 transition-colors hover:text-[#d8b884]"
              >
                patrice.wilfrid@gmail.com
              </a>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <a
                href="https://wa.me/590690941278"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/85 transition-colors hover:text-[#d8b884]"
              >
                <Icon icon={whatsappIcon} className="size-4" aria-hidden="true" />
                +590 690 941 278
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[1.25rem] border border-white/20 bg-[#0e1512]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:rounded-[1.75rem] sm:border-white/15 sm:bg-white/[0.06] sm:p-8 sm:shadow-none sm:backdrop-blur-md lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-5">
            <p className="text-[11px] font-extrabold tracking-[0.2em] text-white uppercase sm:text-[10px] sm:tracking-[0.22em]">
              Votre demande
            </p>
            <span className="flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-2 text-[10px] font-semibold text-white/75 sm:bg-transparent sm:p-0 sm:text-white/60">
              <Icon icon={clockIcon} className="size-4" aria-hidden="true" />
              Réponse sous 24–48h
            </span>
          </div>

          <form className="mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2 sm:gap-y-6">
            <label className="text-[11px] font-extrabold tracking-[0.14em] text-white uppercase">
              Vos prénoms
              <input
                name="prenoms"
                autoComplete="name"
                required
                placeholder="Comment vous appelez-vous ?"
                className={fieldClassName}
              />
            </label>
            <label className="text-[11px] font-extrabold tracking-[0.14em] text-white uppercase">
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
            <label className="text-[11px] font-extrabold tracking-[0.14em] text-white uppercase">
              Date du mariage
              <input
                type="date"
                name="date"
                required
                className={`${fieldClassName} [color-scheme:dark]`}
              />
            </label>
            <label className="text-[11px] font-extrabold tracking-[0.14em] text-white uppercase">
              Lieu
              <input
                name="lieu"
                autoComplete="address-level2"
                required
                placeholder="Ville, domaine…"
                className={fieldClassName}
              />
            </label>
            <label className="text-[11px] font-extrabold tracking-[0.14em] text-white uppercase">
              Nombre d’invités
              <input
                type="number"
                min="0"
                name="invites"
                placeholder="Environ"
                className={fieldClassName}
              />
            </label>
            <label className="text-[11px] font-extrabold tracking-[0.14em] text-white uppercase">
              Budget envisagé
              <input
                name="budget"
                inputMode="decimal"
                placeholder="Votre enveloppe"
                className={fieldClassName}
              />
            </label>
            <label className="text-[11px] font-extrabold tracking-[0.14em] text-white uppercase sm:col-span-2">
              Racontez votre journée, vos envies…
              <textarea
                name="message"
                rows={4}
                placeholder="Décrivez votre projet, vos inspirations, le déroulé de votre journée…"
                className={`${fieldClassName} resize-none leading-7`}
              />
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="cta-button cta-primary flex min-h-14 w-full items-center justify-center gap-5 bg-[#d8b884] px-4 text-[11px] font-extrabold tracking-[0.17em] text-[#0e1512] uppercase transition-colors hover:bg-[#ead2ab] sm:gap-6 sm:text-[10px] sm:tracking-[0.2em]"
              >
                Envoyer ma demande
                <Icon icon={arrowIcon} className="size-4" aria-hidden="true" />
              </button>
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-[10px] leading-5 text-white/60 sm:text-white/45">
                Vos informations restent confidentielles et ne seront jamais
                partagées.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
