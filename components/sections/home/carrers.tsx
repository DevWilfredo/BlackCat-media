// components/CareersSection.tsx
import Image from "next/image";

export default function CareersSection() {
  return (
    <>
      <section className="relative w-full text-black">
        <div className="grid grid-cols-12 gap-6 max-w-full mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Columna izquierda con texto inferior */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-end">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase">
                Careers
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-extrabold leading-snug">
                “WE’RE BUILDING A TEAM OF BOLD THINKERS WHO WANT TO CHALLENGE THE
                ORDINARY.”
              </p>
            </div>
          </div>

          {/* Columna central con dos imágenes */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 sm:gap-6">
            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[350px]">
              <Image
                src="/images/timon-studler.webp"
                alt="People walking"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[350px]">
              <Image
                src="/images/natalie-parham.webp"
                alt="Team working"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Columna derecha con logo + botón y texto abajo */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-end">
            <div className="mt-6 lg:mt-0 text-left lg:text-right">
              <div className="flex flex-col items-start lg:items-end mb-4 sm:mb-5">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-3 sm:mb-4">
                  <Image
                    src="/images/blue-cat.webp"
                    alt="Logo careers"
                    fill
                    className="object-contain"
                  />
                </div>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 px-4 sm:py-2 sm:px-6 shadow-md transition text-xs sm:text-sm md:text-base">
                  APPLY NOW
                </button>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mb-2 sm:mb-3">
                Who We Need
              </p>
              <p className="text-xs sm:text-sm leading-relaxed font-medium text-gray-900">
                AT BLACK CAT MEDIA, WE SEEK PASSIONATE INDIVIDUALS WHO THRIVE IN
                DYNAMIC, CREATIVE ENVIRONMENTS. WE OFFER OPPORTUNITIES TO GROW
                PROFESSIONALLY AND PERSONALLY, SURROUNDED BY AN INNOVATIVE TEAM
                DEDICATED TO IMPACTFUL STORYTELLING AND CONTENT CREATION.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección con grafiti + computadora */}
      <section className="relative w-full flex justify-center items-center overflow-hidden">
        <div className="relative w-full max-w-[1600px]">
          <Image
            src="/images/marco-home.webp"
            alt="Background grafiti"
            width={1620}
            height={800}
            className="w-full h-auto object-cover"
          />

          {/* Imagen de la computadora */}
          <div className="absolute top-[40px] sm:top-[70px] md:top-[90px] left-[20px] sm:left-[50px] md:left-[100px] w-[90%] sm:w-[88%] md:w-[85%]">
            <Image
              src="/images/computer.webp"
              alt="Computer"
              width={1200}
              height={800}
              className="w-full h-auto"
            />

            {/* Contenido de texto */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                OUT OF <br /> THE BOX
              </h2>
              <p className="mt-2 text-xs sm:text-sm font-semibold tracking-wide">
                OUR BLOG ▶
              </p>
              <h3 className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-bold uppercase">
                “How we turned a partnership into a cultural platform”
              </h3>
              <div className="mt-3 sm:mt-4">
                <p className="text-[10px] sm:text-xs font-bold uppercase">Excerpt:</p>
                <p className="text-xs sm:text-sm max-w-md sm:max-w-xl mt-1 leading-relaxed">
                  “It started with a camera, a podcast mic, and the idea that art
                  deserves better stories. Here’s how Black Cat Media evolved from
                  a partnership into a platform amplifying underrepresented
                  voices.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
