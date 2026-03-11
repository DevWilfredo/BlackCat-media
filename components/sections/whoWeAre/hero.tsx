import Image from "next/image";

const galleryItems = [
  {
    src: "/images/hero-image.webp",
    alt: "Editorial frame one",
    frameClassName:
      "hidden xl:block absolute -left-[7.2rem] top-[11.3rem] h-[248px] w-[204px]",
  },
  {
    src: "/images/about-hero-lamps.png",
    alt: "Editorial frame two",
    frameClassName:
      "absolute left-[4%] top-[8.8rem] h-[244px] w-[226px] sm:left-[8.4%] sm:top-[10.9rem] sm:h-[392px] sm:w-[372px] lg:left-[12.6%] lg:h-[438px] lg:w-[418px]",
  },
  {
    src: "/images/whoWeAre3.webp",
    alt: "Editorial frame three",
    frameClassName:
      "absolute left-[43%] top-[9.3rem] h-[170px] w-[148px] sm:left-[45.8%] sm:top-[11.2rem] sm:h-[268px] sm:w-[226px] lg:left-[46.2%] lg:h-[304px] lg:w-[258px]",
  },
  {
    src: "/images/about-hero-2.png",
    alt: "Editorial frame four",
    frameClassName:
      "absolute right-[2%] top-[9.3rem] h-[168px] w-[186px] sm:right-[10.4%] sm:top-[11.2rem] sm:h-[264px] sm:w-[286px] lg:right-[11.1%] lg:h-[302px] lg:w-[326px]",
    imageClassName: "object-cover object-center",
  },
  {
    src: "/images/about-hero-4.png",
    alt: "Editorial frame five",
    frameClassName:
      "hidden lg:block absolute -right-[8.1rem] top-[11.5rem] h-[318px] w-[266px]",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#11163a] text-[#f2f0eb] sm:min-h-[810px]">
      <div className="mx-auto flex min-h-[620px] max-w-full flex-col px-3 pb-8 pt-8 sm:min-h-[810px] sm:px-5 lg:px-0 lg:pb-0 lg:pt-0">
        <div className="relative h-[380px] w-full sm:h-[560px] lg:h-[590px]">
          {galleryItems.map((item) => (
            <div
              key={item.src}
              className={`${item.frameClassName} border-[9px] border-[#d8d3cb] bg-[#f3efe8] p-[7px] shadow-[0_0_0_1px_rgba(17,22,58,0.08)]`}
            >
              <div className="relative h-full w-full overflow-hidden bg-[#ece8e0]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={item.imageClassName ?? "object-cover"}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-3 flex flex-col gap-6 px-5 sm:-mt-4 sm:gap-8 sm:px-8 lg:mt-20 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <h1 className="text-[3.35rem] font-black uppercase leading-[0.84] tracking-[-0.08em] text-[#f1eee7] sm:text-[6.7rem] md:text-[8rem] lg:text-[9.2rem]">
            ABOUT US
          </h1>

          <div className="pb-6 text-left lg:pb-8 lg:text-right">
            <p className="text-[1.05rem] font-black uppercase tracking-[-0.04em] text-[#efece6] sm:text-[1.65rem] lg:text-[1.75rem]">
              WHO WE ARE
            </p>
            <p className="mt-3 text-[0.84rem] font-black uppercase tracking-[-0.04em] text-[#e6dfd5] sm:mt-5 sm:text-[1.15rem] lg:text-[1.22rem]">
              STUDIO - SERVICES - BRAND
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
