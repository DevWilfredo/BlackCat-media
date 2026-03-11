import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#f3f2f0] px-5 pb-5 pt-[118px] sm:px-7 sm:pb-6 sm:pt-[122px] lg:px-5 lg:pb-5 lg:pt-[120px]">
      <div className="mx-auto max-w-full border border-[#dad8d3] bg-[#f3f2f0] px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5 lg:px-5 lg:pb-5 lg:pt-5">
        <div className="relative aspect-[1.88/1] w-full overflow-hidden bg-black">
          <Image
            src="/images/channels-hero.webp"
            alt="Channels hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.01)_55%,rgba(0,0,0,0.18)_100%)]" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 px-8 pb-6 text-white sm:px-10 sm:pb-7 lg:px-8 lg:pb-6">
            <h1 className="max-w-[1010px] text-[1.75rem] font-black uppercase leading-[1.02] tracking-[-0.04em] text-[#f4f1ea] sm:text-[2.25rem] lg:text-[2.35rem]">
              ARTISTA E ILUSIONISTA: EL ARTE QUE CUESTIONA LA REALIDAD - LEANDRO ERLICH | #85
            </h1>

            <div className="shrink-0">
              <Image
                src="/images/arte-dialogo.webp"
                alt="Arte en Dialogo logo"
                width={100}
                height={100}
                className="h-auto w-[74px] sm:w-[86px] lg:w-[94px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
