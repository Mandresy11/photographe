import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import { Icon } from "@iconify/react";
import letterIcon from "@iconify-icons/solar/letter-linear";
import whatsappIcon from "@iconify-icons/simple-icons/whatsapp";
import mapPointIcon from "@iconify-icons/solar/map-point-linear";
import compassIcon from "@iconify-icons/solar/compass-linear";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
});

const contactDetails = [
  {
    label: "E-mail",
    value: "patrice.wilfrid@gmail.com",
    href: "mailto:patrice.wilfrid@gmail.com",
    icon: "email" as const,
  },
  {
    label: "WhatsApp",
    value: "+590 690 941 278",
    href: "https://wa.me/590690941278",
    icon: "whatsapp" as const,
  },
  {
    label: "Studio",
    value: "Le Moule · Saint-François",
    icon: "location" as const,
  },
];

const textFields: Array<{
  id: string;
  label: string;
  type: string;
  autoComplete?: string;
  placeholder?: string;
  inputMode?: "decimal";
}> = [
  {
    id: "prenoms",
    label: "Prénoms des mariés",
    type: "text",
    autoComplete: "name",
    placeholder: "Vos prénoms",
  },
  {
    id: "date",
    label: "Date du mariage",
    type: "date",
  },
  {
    id: "lieu",
    label: "Lieu du mariage",
    type: "text",
    autoComplete: "address-level2",
    placeholder: "Ville, domaine…",
  },
  {
    id: "invites",
    label: "Nombre d’invités",
    type: "number",
    placeholder: "Environ",
  },
  {
    id: "budget",
    label: "Budget envisagé",
    type: "text",
    inputMode: "decimal",
    placeholder: "Votre enveloppe",
  },
  {
    id: "source",
    label: "Comment m’avez-vous trouvé ?",
    type: "text",
    placeholder: "Instagram, Google, recommandation…",
  },
];

function ContactIcon({
  type,
}: {
  type: "email" | "whatsapp" | "location";
}) {
  if (type === "email") {
    return <Icon icon={letterIcon} className="size-6" />;
  }

  if (type === "whatsapp") {
    return <Icon icon={whatsappIcon} className="size-6" />;
  }

  return <Icon icon={mapPointIcon} className="size-6" />;
}

function BrandSeal() {
  return (
    <div
      aria-hidden="true"
      className="relative hidden size-36 shrink-0 items-center justify-center text-[#b99760]/55 lg:mr-6 lg:flex"
    >
      <svg
        viewBox="0 0 144 144"
        fill="none"
        className="absolute inset-0 size-full"
      >
        <defs>
          <path
            id="seal-path"
            d="M22 72a50 50 0 1 1 100 0 50 50 0 1 1-100 0"
          />
        </defs>
        <text
          fill="currentColor"
          fontSize="8"
          fontWeight="600"
          letterSpacing="3.2"
        >
          <textPath href="#seal-path" startOffset="2%">
            PATRICE WILFRID · PHOTOGRAPHE ·
          </textPath>
        </text>
        <circle
          cx="72"
          cy="72"
          r="22"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle
          cx="72"
          cy="72"
          r="6"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M72 50l8.5 14.5M94 72H77M72 94l8.5-14.5M50 72h17M72 50l-8.5 14.5M72 94l-8.5-14.5"
          stroke="currentColor"
          strokeWidth="1.1"
        />
      </svg>
    </div>
  );
}

const fieldClassName =
  "mt-2.5 min-h-12 w-full rounded-lg border border-[#b7aa96]/45 bg-white/35 px-4 py-3 text-sm text-[#151a18] outline-none transition-[border-color,background-color,box-shadow] placeholder:text-[#151a18]/32 focus:border-[#b99760] focus:bg-white/70 focus:shadow-[0_0_0_3px_rgba(185,151,96,0.12)]";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-svh overflow-x-clip bg-[#f3efe7] text-[#151a18]"
    >
      <Image
        src="/web/photoo/Mariage%20Christophe%20%26%20Sandra/31122013-DSC_6500.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center opacity-[0.07] grayscale mix-blend-multiply"
      />

      <span className="pointer-events-none absolute top-36 left-7 size-5 border-t border-l border-[#b99760] sm:left-10 lg:left-20" />
      <span className="pointer-events-none absolute top-36 right-7 size-5 border-t border-r border-[#b99760] sm:right-10 lg:right-20" />
      <span className="pointer-events-none absolute right-7 bottom-8 size-5 border-r border-b border-[#b99760] sm:right-10 lg:right-20" />
      <span className="pointer-events-none absolute bottom-8 left-7 size-5 border-b border-l border-[#b99760] sm:left-10 lg:left-20" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pt-32 pb-16 sm:px-8 sm:pt-36 lg:px-10 lg:pt-[9.5rem] lg:pb-14">
        <p className="text-[11px] font-extrabold tracking-[0.42em] text-[#b99760] uppercase lg:-ml-20">
          Contact
        </p>

        <header className="mt-7 flex items-start justify-between gap-12 lg:mt-9">
          <div>
            <h2
              className={`${bodoni.className} editorial-title editorial-title-dark editorial-title-subtle max-w-[15ch] text-[3.25rem] leading-[0.98] font-normal tracking-[-0.045em] uppercase sm:text-[4.4rem] lg:text-[4.6rem] lg:leading-[1.1]`}
            >
              Parlons de votre journée.
            </h2>
            <p className="mt-5 text-sm tracking-[0.01em] text-[#151a18]/55 sm:text-base">
              Quelques détails. Une réponse sous 24 à 48h.
            </p>
          </div>
          <BrandSeal />
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.73fr_1.27fr] lg:items-start lg:gap-14">
          <dl className="grid gap-3 lg:-mt-1">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex min-h-[6.5rem] items-center gap-5 rounded-xl border border-[#b7aa96]/38 bg-white/42 px-5 py-4 shadow-[0_8px_24px_rgba(66,53,34,0.045)] backdrop-blur-[2px]"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#b99760]/12 text-[#745d39]">
                  <ContactIcon type={detail.icon} />
                </span>
                <div className="min-w-0">
                  <dt className="text-[9px] font-bold tracking-[0.26em] text-[#151a18]/60 uppercase">
                    {detail.label}
                  </dt>
                  <dd className="mt-2 truncate text-sm font-medium sm:text-base">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={
                          detail.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          detail.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="transition-colors hover:text-[#8a6b3b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b99760]"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <form className="relative grid gap-x-6 gap-y-4 rounded-2xl border border-[#b7aa96]/38 bg-white/42 p-5 pb-9 shadow-[0_12px_40px_rgba(66,53,34,0.055)] backdrop-blur-[3px] sm:grid-cols-2 sm:gap-y-6 sm:p-6 sm:pb-12 lg:-mt-2">
            {textFields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-[9px] font-bold tracking-[0.23em] text-[#151a18]/68 uppercase"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  min={field.type === "number" ? 0 : undefined}
                  autoComplete={field.autoComplete}
                  inputMode={field.inputMode}
                  placeholder={field.placeholder}
                  required={["prenoms", "date", "lieu"].includes(field.id)}
                  className={`${fieldClassName} [color-scheme:light]`}
                />
              </div>
            ))}

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-[9px] font-bold tracking-[0.23em] text-[#151a18]/68 uppercase"
              >
                Parlez-moi de votre projet
              </label>
              <textarea
                id="message"
                name="message"
                rows={1}
                placeholder="Votre projet…"
                className={`${fieldClassName} resize-none leading-6`}
              />
            </div>

            <div className="flex justify-center pt-3 sm:absolute sm:-bottom-5 sm:right-6 sm:col-span-2 sm:justify-end sm:pt-0">
              <button
                type="submit"
                className="cta-button cta-primary inline-flex min-h-11 w-fit items-center justify-center gap-7 rounded-2xl bg-[#d8bb84] px-7 text-[9px] font-extrabold tracking-[0.2em] text-[#151a18] uppercase shadow-[0_10px_24px_rgba(91,69,34,0.14)] transition-colors hover:bg-[#e5c995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#151a18]"
              >
                Envoyer ma demande
                <span aria-hidden="true" className="text-base leading-none">
                  ↗
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
