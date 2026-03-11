import { Loader } from "lucide-react";
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
    <section className="bg-[#f3f2f0] px-5 py-7 sm:px-8 sm:py-10 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1360px]">
        <div className={`flex h-[32px] items-center px-3 sm:h-[34px] sm:px-4 ${barClassName}`}>
          <div className="text-[0.92rem] font-black uppercase tracking-[-0.04em] text-white sm:text-[1.1rem]">
            {sectionTitle}
          </div>
        </div>

        <p className="mt-7 max-w-[1080px] text-[0.92rem] font-semibold uppercase leading-[1.08] tracking-[-0.03em] text-[#98a1ad] sm:mt-9 sm:text-[1.08rem] lg:text-[1.2rem]">
          {sectionDescription}
        </p>

        <div className="mt-9 grid gap-4 sm:mt-12 lg:mt-14 lg:grid-cols-2 lg:gap-5">
          <article className="relative aspect-[1.38/1] overflow-hidden bg-black">
            <Image src={image1Path} alt="Channel feature one" fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.12)_48%,rgba(0,0,0,0.7)_100%)]" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 px-4 pb-4 text-white sm:flex-row sm:items-end sm:justify-between sm:px-5 sm:pb-5">
              <div className="max-w-[250px]">
                <h3 className="text-[1.05rem] font-black uppercase leading-none tracking-[-0.04em] sm:text-[1.25rem]">
                  AGENDA 0
                </h3>
                <p className="mt-2 text-[0.73rem] font-semibold uppercase leading-[1.08] tracking-[-0.03em] text-white/96 sm:mt-3 sm:text-[0.82rem]">
                  OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY
                  EQUIPPED WITH HIGH-END
                </p>
              </div>

              <a
                href="#"
                className="inline-flex min-w-[132px] items-center justify-center self-start bg-[#d9d1c7]/78 px-4 py-2 text-[0.82rem] font-black uppercase tracking-[-0.04em] text-white backdrop-blur-[1px] sm:mb-1 sm:min-w-[150px] sm:self-auto sm:px-5 sm:text-[0.95rem]"
              >
                WATCH NOW
              </a>
            </div>
          </article>

          <article className="relative aspect-[1.38/1] overflow-hidden bg-black">
            <Image src={image2Path} alt="Channel feature two" fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,27,0.14)_0%,rgba(8,10,31,0.42)_56%,rgba(9,10,30,0.68)_100%)]" />

            <Loader className="absolute left-1/2 top-1/2 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 animate-spin text-white sm:h-[72px] sm:w-[72px]" />

            <div className="absolute bottom-4 left-4 max-w-[200px] text-white/45 sm:bottom-5 sm:left-5 sm:max-w-[230px]">
              <p className="text-[0.7rem] font-semibold uppercase leading-[1.08] tracking-[-0.03em] sm:text-[0.78rem]">
                OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY EQUIPPED WITH HIGH-END
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
