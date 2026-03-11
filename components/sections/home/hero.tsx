import Link from "next/link";

export default function Hero() {
  const links = [
    { href: "/channels", label: "Channels" },
    { href: "/carrers", label: "Careers" },
    { href: "#connect", label: "Connect" },
    { href: "/blogs", label: "Blog" },
  ];

  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden bg-black bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/hero-image.webp')" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.12)_30%,rgba(0,0,0,0.3)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[28vh] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_100%)]" />

      <div className="relative z-10 min-h-[100svh]">
        <div className="absolute bottom-6 left-3 max-w-[230px] text-[#b8b3a8] sm:bottom-10 sm:left-6 sm:max-w-[360px] lg:bottom-14 lg:left-12 lg:max-w-[420px]">
          <h1 className="text-[1rem] font-black uppercase leading-[0.94] tracking-[-0.04em] sm:text-[1.7rem] lg:text-[2.05rem]">
              Creative Studio
              <br />
              That Brings Ideas
              <br />
              To Life Through
              <br />
              Innovative
              <br />
              Storytelling.
          </h1>
        </div>

        <div className="absolute right-3 top-[96px] flex max-w-[220px] flex-col items-start gap-3 text-left text-[#b8b3a8] sm:bottom-12 sm:right-6 sm:top-auto sm:max-w-[520px] sm:items-end sm:gap-4 sm:text-right lg:bottom-16 lg:right-12">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.06em] sm:text-base lg:text-[0.95rem]">
            Based in Madrid
          </p>

          <nav className="flex flex-wrap gap-x-3 gap-y-1 text-[0.7rem] uppercase tracking-[0.04em] sm:justify-end sm:gap-x-4 sm:gap-y-2 sm:text-base lg:text-[0.95rem]">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pointer-events-none absolute bottom-12 right-2 hidden flex-col gap-2 lg:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c8c1b4]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#c8c1b4]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#c8c1b4]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#c8c1b4]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#c8c1b4]" />
        </div>
      </div>
    </section>
  );
}
