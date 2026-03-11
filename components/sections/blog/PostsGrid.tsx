import Image from "next/image";

export default function PostsGrid() {
  return (
    <section className="bg-[#f3f2f0] px-6 pb-10 pt-8 sm:px-10 sm:pb-12 sm:pt-9 lg:px-14 lg:pb-16 lg:pt-10">
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="grid gap-7 lg:grid-cols-[1.35fr_0.97fr] lg:gap-8">
          <article>
            <div className="relative h-[300px] overflow-hidden bg-black sm:h-[410px] lg:h-[530px]">
              <Image
                src="/images/zero.webp"
                alt="Neon street at night"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,24,0.14)_0%,rgba(7,11,24,0.32)_100%)]" />
              <p className="absolute left-5 top-5 text-[0.92rem] font-medium uppercase leading-none tracking-[-0.03em] text-[#eceae4] sm:text-[1.05rem] lg:left-7 lg:top-7 lg:text-[1.1rem]">
                ABOUT US / GOALS / INSPIRATION
              </p>
            </div>

            <div className="mt-4 flex items-end justify-between gap-3">
              <p className="text-[0.95rem] font-medium uppercase leading-none tracking-[-0.035em] text-[#6f7fbb] sm:text-[1rem]">
                TALKING WITH MR. BLACK CAT
              </p>
              <p className="shrink-0 text-[0.82rem] font-medium uppercase leading-none tracking-[-0.03em] text-[#6f7fbb] sm:text-[0.9rem]">
                AUG/2025
              </p>
            </div>

            <h3 className="mt-1 text-[1.38rem] font-black uppercase leading-[0.94] tracking-[-0.045em] text-[#17192c] sm:text-[1.5rem]">
              &quot;HOW WE TURNED A PARTNERSHIP INTO A CULTURAL PLATFORM&quot;
            </h3>

            <div className="mt-5 h-[14px] w-full bg-[#98a1ad] sm:h-[16px] lg:mt-6 lg:h-[34px]" />
          </article>

          <div className="flex flex-col gap-7 lg:gap-8">
            <article>
              <div className="relative h-[220px] overflow-hidden bg-black sm:h-[270px] lg:h-[303px]">
                <Image
                  src="/images/channels2.png"
                  alt="Podcast conversation"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-4 flex items-end justify-between gap-3">
                <h4 className="text-[1.08rem] font-black uppercase leading-none tracking-[-0.04em] text-[#17192c] sm:text-[1.35rem] lg:text-[2.2rem]">
                  WHAT WE ARE &amp; AND HOW
                </h4>
                <p className="shrink-0 text-[0.92rem] font-medium uppercase leading-none tracking-[-0.03em] text-[#6f7fbb] sm:text-[1.05rem] lg:text-[1.7rem]">
                  AUG/2025
                </p>
              </div>
            </article>

            <article>
              <div className="relative h-[220px] overflow-hidden bg-black sm:h-[270px] lg:h-[303px]">
                <Image
                  src="/images/channels1.png"
                  alt="Studio team under blue light"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-4 flex items-end justify-between gap-3">
                <h4 className="text-[1.08rem] font-black uppercase leading-none tracking-[-0.04em] text-[#17192c] sm:text-[1.35rem] lg:text-[2.2rem]">
                  WHAT WE ARE &amp; AND HOW
                </h4>
                <p className="shrink-0 text-[0.92rem] font-medium uppercase leading-none tracking-[-0.03em] text-[#6f7fbb] sm:text-[1.05rem] lg:text-[1.7rem]">
                  AUG/2025
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
