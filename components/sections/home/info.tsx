import { montserratItalic } from "@/components/ui/fonts";

export default function Info() {
  return (
    <section className="px-6 sm:px-10 md:px-20 py-16 md:py-24 flex flex-col items-center bg-[#F0EEED]">
      {/* Título principal */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-800">
        “YOUR PLATFORM TO EXPRESS, CREATE, AND INNOVATE.”
      </h1>

      {/* Descripción */}
      <h3 className="text-base sm:text-lg text-center text-[#9199A1] max-w-4xl md:max-w-7xl mb-16 md:mb-32 px-2">
        CHANNELS BY BLACK CAT MEDIA IS OUR COLLABORATIVE DIGITAL CONTENT SERVICE WHERE WE CREATE CAPTIVATING PODCASTS,
        EXCLUSIVE VIDEO SERIES, AND VIBRANT MULTIMEDIA PROJECTS. HIGHLIGHTED CHANNELS INCLUDE “ARTE EN DIÁLOGO,”
        WHERE CONTEMPORARY ART MEETS INSIGHTFUL DIALOGUE.
      </h3>

      {/* Grid de canales */}
      <div
        className={`${montserratItalic.className} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-20 text-center text-[#9199A1] font-semibold text-xl sm:text-2xl md:text-3xl`}
      >
        <h3>STUDIO 47</h3>
        <h3>ARTE EN DIÁLOGO</h3>
        <h3>STUDIO 47</h3>
        <h3>47</h3>
      </div>
    </section>
  );
}
