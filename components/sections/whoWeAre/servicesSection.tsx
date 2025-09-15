// components/ServicesSection.jsx
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="relative bg-white py-12 px-6 lg:px-16">
      {/* Título de fondo (OUR SERVICES) */}
      <h2 className="absolute top-0 left-6 lg:left-16 text-[6rem] font-extrabold text-black/5 leading-none z-0">
        OUR SERVICES
      </h2>

      {/* Contenedor principal */}
      <div className="relative bg-[#F2F0EF] px-8 py-12 lg:px-20 lg:py-16 shadow-md z-10">
        {/* Imagen del gato (sobresale del contenedor) */}
        <div className="absolute -top-10 right-10 w-[120px] h-[120px]">
          <Image
            src="/catBlue.svg" // ⚠️ reemplaza con tu imagen real
            alt="Cat"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Sección 1 */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <h3 className="text-5xl font-extrabold text-[#1A1A1A]">
              TIME & SPACE
            </h3>
            <p className="mt-2 max-w-2xl text-sm font-medium text-[#1A1A1A]/70">
              OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY
              EQUIPPED WITH HIGH-END CAMERAS, PROFESSIONAL AUDIO GEAR, AND
              DYNAMIC LIGHTING SETUPS, IS AVAILABLE FOR RENTAL AND CREATIVE
              COLLABORATIONS.
            </p>
          </div>
          <a
            href="https://calendly.com/wilfredo_pinto23"
            target="_blank"
            className="text-lg font-extrabold text-[#1A1A1A] hover:underline flex items-center gap-1"
          >
            BOOK NOW <span>▶</span>
          </a>
        </div>

        {/* Sección 2 */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <h3 className="text-5xl font-extrabold text-[#1A1A1A]">BUILDERS</h3>
            <p className="mt-2 max-w-2xl text-sm font-medium text-[#1A1A1A]/70">
              OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY
              EQUIPPED WITH HIGH-END CAMERAS, PROFESSIONAL AUDIO GEAR, AND
              DYNAMIC LIGHTING SETUPS, IS AVAILABLE FOR RENTAL AND CREATIVE
              COLLABORATIONS.
            </p>
          </div>
          <a
            href="https://calendly.com/wilfredo_pinto23"
            target="_blank"
            className="text-lg font-extrabold text-[#1A1A1A] hover:underline flex items-center gap-1"
          >
            BOOK NOW <span>▶</span>
          </a>
        </div>

        {/* Sección 3 */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-5xl font-extrabold text-[#1A1A1A]">COLLABS</h3>
            <p className="mt-2 max-w-2xl text-sm font-medium text-[#1A1A1A]/70">
              OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY
              EQUIPPED WITH HIGH-END CAMERAS, PROFESSIONAL AUDIO GEAR, AND
              DYNAMIC LIGHTING SETUPS, IS AVAILABLE FOR RENTAL AND CREATIVE
              COLLABORATIONS.
            </p>
          </div>
          <a
            href="https://calendly.com/wilfredo_pinto23"
            target="_blank"
            className="text-lg font-extrabold text-[#1A1A1A] hover:underline flex items-center gap-1"
          >
            BOOK NOW <span>▶</span>
          </a>
        </div>
      </div>
    </section>
  );
}
