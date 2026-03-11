import Image from "next/image";

export default function BuySection() {
  return (
    <section className="bg-[#17192c] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-14 lg:py-14">
      <div className="mx-auto grid w-full max-w-[1360px] gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] lg:items-end lg:gap-10">
        <div>
          <p className="text-[0.92rem] font-semibold uppercase leading-[1.12] tracking-[-0.03em] text-[#ece7de] sm:text-[1rem] lg:text-[1.2rem]">
            OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY
            EQUIPPED WITH HIGH-END CAMERAS, PROFESSIONAL AUDIO GEAR, AND DYNAMIC
            LIGHTING SETUPS, IS AVAILABLE FOR RENTAL AND CREATIVE COLLABORATIONS.
          </p>
          <p className="mt-5 text-[1.1rem] font-black uppercase leading-none tracking-[-0.03em] text-[#9199a1] sm:text-[1.35rem] lg:text-[2rem]">
            BUY NOW <span aria-hidden="true">&#9654;</span>
          </p>
          <h2 className="mt-2 text-[2.3rem] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[#cbc5b9] sm:text-[3.1rem] lg:text-[5rem]">
            OUR MERCH
          </h2>
        </div>

        <div className="relative overflow-hidden border border-white/10 bg-white/5 p-2 sm:p-3">
          <Image
            src="/images/keagan.webp"
            alt="BlackCat merch"
            width={900}
            height={520}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
