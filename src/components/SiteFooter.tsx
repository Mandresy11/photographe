import Image from "next/image";
import Link from "next/link";

const footerSections = [
  {
    title: "Navigation",
    links: [
      { name: "Accueil", href: "/" },
      { name: "À propos", href: "/a-propos" },
      { name: "Galerie", href: "/galerie" },
      { name: "La différence", href: "/la-difference" },
      { name: "L'invisible", href: "/invisible" },
    ],
  },
  {
    title: "Le studio",
    links: [
      { name: "Le photographe", href: "/photographe" },
      { name: "Questions", href: "/questions" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Écrire",
    links: [
      {
        name: "patrice.wilfrid@gmail.com",
        href: "mailto:patrice.wilfrid@gmail.com",
      },
      { name: "+590 690 941 278", href: "https://wa.me/590690941278" },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/patricewilfrid/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Patrice.W.Photographer/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
        <path
          d="M14.5 8.5h2V5.2c-.35-.05-1.53-.15-2.9-.15-2.87 0-4.84 1.75-4.84 4.97v2.63H6.4v3.68h2.86V21h3.7v-4.67h2.75l.44-3.68h-3.19V10.4c0-1.06.29-1.9 1.54-1.9Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wilfrid-patrice-070bb317",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
        <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7.8 10.3v6.4M7.8 7.6v.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M11.2 16.7v-3.7c0-1.5 1-2.7 2.4-2.7 1.3 0 2.1.9 2.1 2.7v3.7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path d="M11.2 10.3v6.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Portfolio",
    href: "https://patricewilfrid.myportfolio.com/photoshoot-mariage",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
        <path
          d="M12 6.5c-1.7-1.3-4-2-6.5-2v13c2.5 0 4.8.7 6.5 2m0-13c1.7-1.3 4-2 6.5-2v13c-2.5 0-4.8.7-6.5 2m0-13v13"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const legalLinks = [
  { name: "Mentions légales", href: "#" },
  { name: "Politique de confidentialité", href: "#" },
];

function FooterLink({
  link,
  className,
}: {
  link: { name: string; href: string };
  className: string;
}) {
  const isExternal =
    link.href.startsWith("http") || link.href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={className}
      >
        {link.name}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.name}
    </Link>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#08100e] text-white">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -bottom-12 text-[13rem] font-black leading-none tracking-[-0.12em] text-white/[0.025] sm:text-[22rem] lg:text-[30rem]"
      >
        PW
      </span>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <section
          aria-labelledby="footer-next-story"
          className="relative mb-16 overflow-hidden rounded-[2rem] border border-[#c7a05c]/50 bg-[#09110f] px-6 pt-24 pb-10 shadow-[inset_0_0_80px_rgba(0,0,0,0.2)] sm:px-10 sm:py-12 lg:mb-20 lg:min-h-[30rem] lg:px-14 lg:py-12"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_57%_50%,rgba(199,160,92,0.07),transparent_30%),linear-gradient(110deg,transparent_55%,rgba(255,255,255,0.015),transparent)]"
          />
          <span
            aria-hidden="true"
            className="absolute top-1 left-1/2 flex -translate-x-1/2 items-center text-[#c7a05c]"
          >
            <span className="mx-2 size-3 rotate-45 border border-[#c7a05c]" />
          </span>
          <span
            aria-hidden="true"
            className="absolute top-24 right-5 h-7 w-7 rounded-tr-xl border-t border-r border-[#c7a05c]/75 sm:right-10 lg:top-24 lg:right-14"
          />
          <span
            aria-hidden="true"
            className="absolute right-5 bottom-24 h-7 w-7 rounded-br-xl border-r border-b border-[#c7a05c]/75 sm:right-10 lg:right-14 lg:bottom-24"
          />

          <div className="relative grid items-center gap-11 sm:gap-14 lg:min-h-[23.5rem] lg:grid-cols-[minmax(0,1.3fr)_minmax(17rem,0.78fr)_minmax(13rem,0.62fr)] lg:gap-10 xl:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.8fr)_minmax(15rem,0.6fr)] xl:gap-14">
            <div>
              <div className="text-[8px] font-bold tracking-[0.3em] text-[#c7a05c] uppercase sm:text-[9px]">
                <span>La prochaine image</span>
              </div>

              <h2
                id="footer-next-story"
                className="mt-10 text-[2.7rem] font-black leading-[0.86] tracking-[-0.065em] uppercase sm:text-[4.8rem] lg:text-[4rem] xl:text-[4.2rem] xl:whitespace-nowrap"
              >
                <span className="relative block pl-5 before:absolute before:top-[0.04em] before:bottom-[0.08em] before:left-0 before:w-0.5 before:bg-[#d8b884]">
                  Elle commence
                </span>
                <span className="block pl-5">avec vous.</span>
              </h2>

            </div>

            <div className="relative mx-auto h-[21rem] w-full max-w-[21rem] sm:h-[25rem] lg:h-[24rem] xl:h-[26rem]">
              <figure className="absolute top-0 bottom-0 left-0 w-[72%] overflow-hidden rounded-tl-[2.2rem] rounded-br-[5rem] rounded-bl-[2.2rem] border border-[#c7a05c]/55 bg-black">
                <Image
                  src="/web/photoo/Mariage%20Ryan%20%26%20Emilia/DSC_4469.jpg"
                  alt="Ryan et Emilia partageant un baiser le jour de leur mariage"
                  fill
                  sizes="(min-width: 1024px) 260px, 70vw"
                  className="object-cover object-[56%_center] brightness-[0.72] saturate-[0.72] sepia-[0.16]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#120c05]/35 via-transparent to-[#d8b884]/8" />
              </figure>

              <figure className="absolute top-[15%] right-0 h-[43%] w-[45%] overflow-hidden rounded-t-[2rem] rounded-br-[2.8rem] border border-[#c7a05c]/55 bg-black shadow-[-12px_12px_30px_rgba(0,0,0,0.35)]">
                <Image
                  src="/web/photoo/Mariage%20Ryan%20%26%20Emilia/DSC_4590.jpg"
                  alt="Décoration florale du mariage de Ryan et Emilia"
                  fill
                  sizes="(min-width: 1024px) 150px, 42vw"
                  className="object-cover brightness-[0.66] saturate-[0.68] sepia-[0.2]"
                />
                <span className="absolute inset-0 bg-[#8d6730]/10" />
              </figure>

              <figure className="absolute right-[2%] bottom-0 h-[42%] w-[50%] overflow-hidden rounded-tl-[2.6rem] rounded-br-[2.6rem] border border-[#c7a05c]/55 bg-black shadow-[-12px_-8px_30px_rgba(0,0,0,0.3)]">
                <Image
                  src="/web/photoo/Mariage%20Christophe%20%26%20Sandra/31122013-DSC_6500.jpg"
                  alt="Christophe et Sandra face à l’océan"
                  fill
                  sizes="(min-width: 1024px) 160px, 45vw"
                  className="object-cover object-[78%_center] brightness-[0.65] saturate-[0.65] sepia-[0.22]"
                />
                <span className="absolute inset-0 bg-[#8d6730]/10" />
              </figure>
            </div>

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="max-w-[17rem] text-base leading-8 text-white/70">
                Une date, un lieu, une histoire.
                <br />
                Le reste se construit ensemble.
              </p>
              <Link
                href="/contact"
                className="cta-button cta-primary mt-8 inline-flex min-h-12 w-fit items-center gap-6 px-8 text-[9px] font-extrabold tracking-[0.22em] uppercase"
              >
                Écrire la suite
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-14 border-b border-white/15 pb-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          <div className="flex w-full flex-col gap-6 lg:max-w-xs">
            <Link
              href="/"
              className="text-sm font-bold tracking-[0.24em] uppercase"
            >
              Patrice Wilfrid<span className="text-[#d8b884]">.</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/55">
              Photographe de mariage en Guadeloupe. Un style éditorial,
              spontané et lumineux, pour raconter votre journée telle
              qu&apos;elle a vraiment été vécue.
            </p>
            <ul className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/60 transition-colors hover:text-[#d8b884]"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid w-full gap-10 sm:grid-cols-3 lg:max-w-2xl lg:gap-16">
            {footerSections.map((section) => (
              <div key={section.title}>
                <p className="mb-5 text-[8px] font-bold tracking-[0.22em] text-white/40 uppercase">
                  {section.title}
                </p>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <FooterLink
                        link={link}
                        className={
                          section.title === "Écrire"
                            ? "text-sm font-semibold text-white/80 transition-colors hover:text-[#d8b884]"
                            : "text-[10px] font-semibold tracking-[0.16em] text-white/72 uppercase transition-colors hover:text-[#d8b884]"
                        }
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 text-[8px] font-semibold tracking-[0.18em] text-white/38 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Patrice Wilfrid · Guadeloupe</p>
          <ul className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
