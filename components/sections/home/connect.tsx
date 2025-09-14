// components/ConnectSection.tsx
import Image from "next/image";

export default function ConnectSection() {
  return (
    <section className="relative w-full h-screen bg-black text-white">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/connect.webp"
          alt="Connect background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONNECT arriba izquierda */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tight leading-tight uppercase">
          CONNECT
        </h1>
      </div>

      {/* Texto abajo izquierda */}
      <div className="absolute bottom-24 sm:bottom-16 left-4 sm:left-8 max-w-xs sm:max-w-md z-10">
        <p className="text-lg sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-10 text-[#CBC5B9]">
          “NEED A TEAM THAT GETS YOUR VISION?”
        </p>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed font-bold">
          CONNECTING WITH BLACK CAT MEDIA MEANS ACCESS TO CREATIVE TALENT,
          INNOVATIVE STRATEGIES, AND PRODUCTION RESOURCES. BENEFIT FROM
          TAILORED MULTIMEDIA SOLUTIONS, ENHANCED AUDIENCE ENGAGEMENT, AND
          COMPELLING STORYTELLING THAT SETS YOUR BRAND APART.
        </p>
      </div>

      {/* Botón abajo derecha */}
      <div className="absolute bottom-8 right-4 sm:right-8 z-10">
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-md shadow-md transition text-xs sm:text-sm md:text-base">
          BUILD YOUR PLATFORM
        </button>
      </div>
    </section>
  );
}
