import Image from "next/image";
import Link from "next/link";

const primaryLinks = [
  { href: "/carrers", label: "JOBS" },
  { href: "/shop", label: "SHOP" },
  { href: "#", label: "APP" },
  { href: "#", label: "MEMBERSHIP" },
];

const legalLinks = [
  { href: "#", label: "TERMS OF USE" },
  { href: "#", label: "PRIVACY POLICY" },
  { href: "#", label: "DO NOT SELL OR SHARE MY PERSONAL INFORMATION" },
];

const socialLinks = [
  { href: "#", label: "FACEBOOK" },
  { href: "#", label: "TWITTER" },
  { href: "#", label: "INSTAGRAM" },
  { href: "#", label: "YOUTUBE" },
];

export default function Footer() {
  return (
    <footer className="bg-[#040404] px-5 pb-10 pt-11 text-[#f0eeed] sm:px-8 sm:pb-11 sm:pt-12 lg:px-9 lg:pb-9 lg:pt-12">
      <div className="mx-auto w-full max-w-[1460px]">
        <div className="grid grid-cols-1 gap-11 md:grid-cols-2 md:gap-10 lg:min-h-[380px] lg:grid-cols-[340px_320px_minmax(0,1fr)] lg:gap-12">
          <div className="flex flex-col">
            <ul className="space-y-3 text-[1.12rem] font-black uppercase leading-[0.94] tracking-[-0.05em] sm:text-[1.25rem] lg:text-[1.6rem]">
              {primaryLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white/80">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-10 space-y-3 text-[1.02rem] font-black uppercase leading-[0.98] tracking-[-0.05em] sm:mt-11 sm:text-[1.15rem] lg:mt-12 lg:text-[1.36rem]">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="break-words transition-colors hover:text-white/80">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-[320px] text-[0.72rem] font-black uppercase leading-[1.34] tracking-[-0.03em] text-[#a7a7a7] sm:mt-11 lg:mt-12">
              THIS WEBSITE IS NOT ENDORSED OR APPROVED BY, AND IS NOT IN ANY WAY
              AFFILIATED WITH, THE AMERICAN AUTOMOBILE ASSOCIATION, INC.
              (&quot;AAA&quot;).
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-[0.86rem] font-black uppercase leading-none tracking-[-0.04em] text-[#b8b8b8]">
              <span>MORE A24</span>
              <span className="h-px flex-1 bg-[#787878]" />
            </div>

            <ul className="mt-10 space-y-3 text-[1.12rem] font-black uppercase leading-[0.94] tracking-[-0.05em] sm:mt-14 sm:text-[1.25rem] lg:mt-[136px] lg:text-[1.6rem]">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white/80">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center gap-3 text-[0.86rem] font-black uppercase leading-none tracking-[-0.04em] text-[#b8b8b8]">
                <span>WANT MORE A24?</span>
                <span className="h-px flex-1 bg-[#787878]" />
              </div>

              <p className="mt-8 max-w-[680px] text-[1.02rem] font-black leading-[0.98] tracking-[-0.04em] text-[#eceae7] sm:text-[1.15rem] lg:mt-14 lg:text-[1.95rem]">
                Get our emails. Letters from our filmmakers, new trailers,
                podcasts, merch, and more. Not too often &mdash; just enough.
              </p>

              <div className="mt-6 flex w-full max-w-[700px] flex-col border border-[#7f7f7f] sm:flex-row lg:mt-7">
                <input
                  id="email"
                  type="email"
                  placeholder="EMAIL"
                  aria-label="Email"
                  className="h-14 w-full border-0 bg-transparent px-4 text-[0.74rem] font-black uppercase tracking-[-0.03em] text-[#f0eeed] placeholder:text-[#dfdfdf]/80 focus:outline-none sm:h-16 lg:h-[66px] lg:px-5"
                />
                <button
                  type="button"
                  className="h-14 w-full border-0 bg-[#e8e8e8] px-8 text-[1.08rem] font-black uppercase leading-none tracking-[-0.045em] text-[#2e2e2e] transition-colors hover:bg-[#d8d8d8] sm:h-16 sm:w-[210px] sm:text-[1.15rem] lg:h-[66px] lg:text-[1.35rem]"
                  aria-label="Sign up"
                >
                  SIGN UP
                </button>
              </div>
            </div>

            <Image
              src="/blackcat-logo.svg"
              alt="Blackcat Logo"
              width={342}
              height={27}
              className="ml-auto mt-12 h-auto w-[210px] sm:w-[280px] lg:mt-8 lg:w-[352px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
