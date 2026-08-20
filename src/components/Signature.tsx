import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Observer",
  },
  {
    number: "02",
    title: "Guider",
  },
  {
    number: "03",
    title: "Laisser vivre",
  },
];

export default function Signature() {
  return (
    <section
      id="signature"
      className="relative isolate min-h-[88svh] overflow-hidden bg-[#09110f] text-white lg:h-svh lg:min-h-0"
    >
      <Image
        src="/web/photoo/04122025-_DSC0090.jpg"
        alt="Un couple de mariés dans une lumière dorée"
        fill
        sizes="100vw"
        className="object-cover object-[58%_38%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,9,0.9)_0%,rgba(3,10,9,0.56)_44%,rgba(3,10,9,0.1)_75%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,9,0.42)_0%,transparent_45%,rgba(3,10,9,0.9)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-[1440px] flex-col px-5 py-10 sm:px-8 lg:h-full lg:min-h-0 lg:px-12 lg:py-10">
        <p className="text-[11px] font-extrabold tracking-[0.3em] text-[#d8b884] uppercase">
          La signature
        </p>

        <div className="my-auto max-w-3xl py-20">
          <p className="mb-5 text-[9px] font-bold tracking-[0.22em] text-[#d8b884] uppercase">
            Une présence juste
          </p>
          <h2 className="editorial-title editorial-title-light max-w-[11ch] text-4xl font-extrabold leading-[0.92] tracking-[-0.055em] uppercase sm:text-6xl lg:text-[5rem]">
            Le beau n’est jamais loin du vrai.
          </h2>
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/68 sm:text-base">
            Guider un peu. Observer beaucoup.
          </p>
          <Link
            href="/contact"
            className="cta-button cta-primary mt-8 hidden min-h-11 items-center gap-5 bg-[#d8b884] px-6 text-[9px] font-bold tracking-[0.2em] text-[#14201e] uppercase transition-colors hover:bg-[#edd19f] sm:inline-flex"
          >
            Raconter votre projet
            <span aria-hidden="true">↓</span>
          </Link>
        </div>

        <ol className="grid border-t border-white/25 sm:grid-cols-3">
          {principles.map((principle) => (
            <li
              key={principle.number}
              className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-white/20 py-5 sm:block sm:border-r sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#d8b884]">
                {principle.number}
              </span>
              <div>
                <h3 className="text-xs font-bold tracking-[0.14em] uppercase">
                  {principle.title}
                </h3>
              </div>
            </li>
          ))}
        </ol>

        <Link
          href="/contact"
          className="cta-button cta-primary mx-auto mt-8 flex min-h-11 w-fit items-center gap-5 bg-[#d8b884] px-6 text-[9px] font-bold tracking-[0.2em] text-[#14201e] uppercase transition-colors hover:bg-[#edd19f] sm:hidden"
        >
          Raconter votre projet
          <span aria-hidden="true">↓</span>
        </Link>
      </div>
    </section>
  );
}
