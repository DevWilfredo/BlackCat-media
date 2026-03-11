import Image from "next/image";

export default function ConnectSection() {
  return (
    <section
      id="connect"
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/connect.webp"
          alt="Connect background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,10,0.82)_0%,rgba(12,8,8,0.28)_42%,rgba(5,6,9,0.74)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.06)_40%,rgba(0,0,0,0.58)_100%)]" />
      </div>

      <div className="absolute left-6 top-6 z-10 sm:left-10 sm:top-8 lg:left-12 lg:top-10">
        <h2 className="text-[2.2rem] font-black uppercase leading-none tracking-[-0.05em] sm:text-[3rem] lg:text-[3.35rem]">
          CONNECT
        </h2>
      </div>

      <div className="absolute right-6 top-6 z-10 sm:right-10 sm:top-8 lg:right-12 lg:top-10">
        <Image
          src="/images/catEyes.png"
          alt="Cat eyes"
          width={96}
          height={28}
          className="h-auto w-[72px] sm:w-[84px] lg:w-[96px]"
        />
      </div>

      <div className="relative z-10 grid w-full grid-cols-1 gap-8 px-6 pb-8 pt-32 sm:px-10 sm:pb-10 md:pt-40 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-12 lg:pb-12">
        <div className="max-w-[23rem] sm:max-w-[27rem]">
          <p className="max-w-[14rem] text-[2rem] font-black uppercase leading-[0.93] tracking-[-0.05em] text-[#e4ddd5] sm:max-w-[16rem] sm:text-[2.45rem] lg:text-[2.85rem]">
            LET&apos;S CREATE SOMETHING TOGETHER.
          </p>
          <p className="mt-8 max-w-[19rem] text-[0.85rem] font-extrabold uppercase leading-[1.1] tracking-[-0.02em] text-white/96 sm:max-w-[21rem] sm:text-[0.95rem] lg:max-w-[23rem] lg:text-[1rem]">
            WHETHER YOU WANT TO PRODUCE A SHOW, DEVELOP A CREATIVE CAMPAIGN, OR BRING YOUR
            BRAND TO LIFE, OUR TEAM HELPS YOU CRAFT THE STRATEGY, CONTENT, AND
            STORYTELLING TO MAKE IT HAPPEN.
          </p>
        </div>

        <div className="justify-self-start lg:justify-self-end lg:text-right">
          <a
            href="/contact"
            className="inline-flex min-w-[210px] items-center justify-center bg-[#cbc5b9] px-8 py-3 text-[1.05rem] font-black uppercase tracking-[-0.03em] text-[#f5f2ed] transition-colors hover:bg-[#d8d2ca]"
          >
            GET IN TOUCH
          </a>
          <p className="mt-3 text-[0.95rem] font-black uppercase tracking-[-0.03em] text-[#f1ece4]">
            LET&apos;S BUILD YOUR NEXT PROJECT.
          </p>
        </div>
      </div>
    </section>
  );
}
