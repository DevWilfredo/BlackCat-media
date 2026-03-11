import Image from "next/image";

type Props = {
  sectionTitle: string;
  sectionDescription: string;
  image1Path: string;
  image2Path: string;
  barClassName: string;
};

export default function TwoColumnsSection({
  sectionTitle,
  sectionDescription,
  image1Path,
  image2Path,
  barClassName,
}: Props) {
  return (
    <section className="bg-[#f3f2f0] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1360px]">
        <div className={`flex h-[34px] items-center px-4 ${barClassName}`}>
          <div className="w-full text-[1.1rem] font-black uppercase tracking-[-0.04em] text-white">
            {sectionTitle}
          </div>
        </div>

        <p className="mt-9 max-w-[1080px] text-[1rem] font-semibold uppercase leading-[1.08] tracking-[-0.03em] text-[#98a1ad] sm:text-[1.12rem] lg:text-[1.2rem]">
          {sectionDescription}
        </p>

        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:gap-5">
          <article className="relative aspect-[1.38/1] overflow-hidden bg-black">
            <Image src={image1Path} alt="Channel feature one" fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.12)_48%,rgba(0,0,0,0.7)_100%)]" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-5 text-white">
              <div className="max-w-[250px]">
                <h3 className="text-[1.25rem] font-black uppercase leading-none tracking-[-0.04em]">
                  AGENDA 0
                </h3>
                <p className="mt-3 text-[0.82rem] font-semibold uppercase leading-[1.08] tracking-[-0.03em] text-white/96">
                  OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY
                  EQUIPPED WITH HIGH-END
                </p>
              </div>

              <a
                href="#"
                className="mb-1 inline-flex min-w-[150px] items-center justify-center bg-[#d9d1c7]/78 px-5 py-2 text-[0.95rem] font-black uppercase tracking-[-0.04em] text-white backdrop-blur-[1px]"
              >
                WATCH NOW
              </a>
            </div>
          </article>

          <article className="relative aspect-[1.38/1] overflow-hidden bg-black">
            <Image src={image2Path} alt="Channel feature two" fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,27,0.14)_0%,rgba(8,10,31,0.42)_56%,rgba(9,10,30,0.68)_100%)]" />

            <div className="absolute left-1/2 top-1/2 h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-[#efeee8] border-r-transparent border-b-transparent opacity-95" />

            <div className="absolute bottom-5 left-5 max-w-[230px] text-white/45">
              <p className="text-[0.78rem] font-semibold uppercase leading-[1.08] tracking-[-0.03em]">
                OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY EQUIPPED WITH HIGH-END
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
