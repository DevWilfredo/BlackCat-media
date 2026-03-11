import Image from "next/image";

export default function GuavaSection() {
  return (
    <section className="relative overflow-hidden bg-[#11163a] px-5 py-10 sm:px-8 sm:py-12 lg:overflow-visible lg:px-12 lg:py-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[620px_minmax(0,1fr)] lg:items-start lg:gap-16">
          <div>
            <div className="relative w-full max-w-[670px] border-[12px] border-[#ddd8d0] bg-[#f2eee7] p-[10px]">
              <div className="relative aspect-[1.33/1] overflow-hidden bg-black">
                <Image
                  src="/images/who-we-are-2.png"
                  alt="Studio placeholder"
                  fill
                  className="object-cover"
                />
                <p className="absolute bottom-5 left-5 text-[1.05rem] font-black uppercase leading-[0.92] tracking-[-0.04em] text-[#f4efe5] sm:text-[1.45rem]">
                  MADRID,
                  <br />
                  SPAIN
                </p>
              </div>
            </div>

            <div className="pl-2 pt-8 text-[#f1ede5]">
              <h2 className="text-[2.35rem] font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-[3.3rem] lg:text-[4.9rem]">
                THE STUDIO
              </h2>
              <p className="pt-3 text-[1.2rem] font-semibold italic leading-none tracking-[-0.04em] text-[#f6f1e8] sm:text-[1.5rem] lg:text-[1.95rem]">
                GUAVA
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end lg:-mt-[6.75rem]">
            <div className="relative z-10 mt-10 w-full max-w-[680px] rotate-[3deg] border-[12px] border-[#ddd8d0] bg-[#f2eee7] p-[10px] sm:rotate-[4deg] lg:rotate-[6deg]">
              <div className="relative aspect-[1.42/1] overflow-hidden bg-black">
                <Image
                  src="/images/who-we-are-3.png"
                  alt="Merch placeholder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full max-w-[680px] pr-2 pt-8 text-right text-[#f1ede5] lg:pt-10">
              <h2 className="text-[2.2rem] font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-[3.2rem] lg:text-[4.8rem]">
                OUR MERCH
              </h2>
              <a
                href="/shop"
                className="pt-3 text-[1.1rem] font-black uppercase leading-none tracking-[-0.04em] text-[#f6f1e8] transition-colors hover:text-white sm:text-[1.5rem]"
              >
                BUY NOW <span aria-hidden="true">&#9654;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}