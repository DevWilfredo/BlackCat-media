import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="flex flex-col lg:flex-row mt-10">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-10 lg:py-16 text-center lg:text-left">
          <span className="text-xs sm:text-sm font-semibold text-[#9199A1] tracking-widest">
            CAREERS
          </span>
          <h2 className="mt-3 sm:mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#CBC5B9] leading-tight">
            WE <br /> NEED <br /> YOU
          </h2>
        </div>

        {/* Columna derecha con imagen */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          <Image
            src="/images/keagan.webp" // ⚠️ reemplaza con tu imagen real
            alt="Careers Image"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay con texto */}
          <div className="absolute bottom-6 sm:bottom-10 lg:bottom-12 right-6 sm:right-10 lg:right-12 bg-transparent text-white max-w-xs sm:max-w-md">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
                COMMUNITY MANAGER
              </h3>
              <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#243376] flex items-center justify-center">
                <Image
                  src="/images/jobCat.png" // ⚠️ coloca aquí la ruta del gato
                  alt="Cat Icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-300 leading-snug">
              A SPACE FOR CULTURE AND CREATIVITY: FROM EXCLUSIVE MERCHANDISE
              DROPS TO CURATED PRODUCTS BY OUR COLLABORATORS.
            </p>
            <a
              href="#"
              className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-extrabold text-white flex items-center gap-1"
            >
              APPLY NOW <span>▶</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
