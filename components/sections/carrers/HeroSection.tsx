import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f3f2f0] px-5 pb-5 pt-[104px] sm:px-8 sm:pb-8 sm:pt-[118px] lg:px-14 lg:pb-4 lg:pt-[132px]">
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="grid gap-6 lg:grid-cols-[252px_minmax(0,1fr)] lg:items-end lg:gap-10">
          <div className="pb-2 text-left lg:pb-6">
            <p className="text-[1.1rem] font-black uppercase leading-none tracking-[-0.04em] text-[#98a1ad] sm:text-[1.35rem] lg:text-[1.75rem]">
              CAREERS
            </p>
            <h1 className="mt-4 text-[3.3rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#cbc5b9] sm:text-[4.8rem] lg:text-[6.7rem]">
              WE
              <br />
              NEED
              <br />
              YOU
            </h1>
          </div>

          <div className="relative aspect-[1.74/1] overflow-hidden bg-black">
            <Image
              src="/images/keagan.webp"
              alt="Careers studio setup"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.1)_48%,rgba(0,0,0,0.42)_100%)]" />

            <div className="absolute bottom-4 right-4 max-w-[600px] text-right text-[#f4f1ec] sm:bottom-8 sm:right-8 lg:bottom-12 lg:right-10">
              <div className="flex items-center justify-end gap-3 sm:gap-6">
                <h2 className="text-[1.35rem] font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-[2rem] lg:text-[4rem]">
                  COMMUNITY
                  <br />
                  MANAGER
                </h2>
                <Image
                  src="/images/jobCat.png"
                  alt="Job role icon"
                  width={84}
                  height={84}
                  className="h-auto w-[44px] sm:w-[64px] lg:w-[84px]"
                />
              </div>

              <p className="ml-auto mt-3 max-w-[560px] text-[0.63rem] font-semibold uppercase leading-[1.08] tracking-[-0.03em] text-[#ede7dc]/95 sm:mt-4 sm:text-[0.82rem] lg:text-[1.06rem]">
                A SPACE FOR CULTURE AND CREATIVITY: FROM EXCLUSIVE MERCHANDISE
                DROPS TO CURATED PRODUCTS BY OUR COLLABORATORS.
              </p>

              <a
                href="#"
                className="mt-2 inline-flex items-center gap-2 text-[1.08rem] font-black uppercase leading-none tracking-[-0.04em] text-[#cdc5b6] transition-colors hover:text-[#dfd6c8] sm:mt-3 sm:text-[1.65rem] lg:text-[3.25rem]"
              >
                APPLY NOW <span aria-hidden="true">&#9654;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
