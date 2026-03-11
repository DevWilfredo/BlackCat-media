import { montserratItalic } from "@/components/ui/fonts";

export default function Info() {
  return (
    <section className="flex flex-col items-center bg-[#f0eeed] px-5 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20">
      <h2 className="text-center text-[1.5rem] font-black uppercase leading-[1.02] tracking-[-0.04em] text-gray-800 sm:text-[2rem] md:text-[2.55rem]">
        &ldquo;YOUR PLATFORM TO EXPRESS, CREATE, AND INNOVATE.&rdquo;
      </h2>

      <p className="mb-14 mt-6 max-w-6xl text-center text-[0.92rem] font-semibold uppercase leading-[1.12] tracking-[-0.02em] text-[#9199a1] sm:text-[1rem] md:mb-20 md:text-[1.15rem]">
        CHANNELS BY BLACK CAT MEDIA IS OUR COLLABORATIVE DIGITAL CONTENT SERVICE
        WHERE WE CREATE CAPTIVATING PODCASTS, EXCLUSIVE VIDEO SERIES, AND
        VIBRANT MULTIMEDIA PROJECTS. HIGHLIGHTED CHANNELS INCLUDE &ldquo;ARTE EN
        DIALOGO,&rdquo; WHERE CONTEMPORARY ART MEETS INSIGHTFUL DIALOGUE.
      </p>

      <div
        className={`${montserratItalic.className} grid w-full max-w-5xl grid-cols-2 gap-x-6 gap-y-5 text-center text-[1.2rem] font-semibold uppercase tracking-[-0.03em] text-[#9199a1] sm:grid-cols-4 sm:text-[1.35rem] md:text-[1.7rem]`}
      >
        <h3>STUDIO 47</h3>
        <h3>ARTE EN DIALOGO</h3>
        <h3>STUDIO 47</h3>
        <h3>47</h3>
      </div>
    </section>
  );
}