import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Fondo con la imagen */}
      <Image
        src="/images/christian.webp"
        alt="Blackcat hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay para dar contraste */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Cards centradas en medio */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-full w-full px-6">
          {["whoWeAre1.webp", "whoWeAre2.webp", "whoWeAre3.webp", "computer.webp"].map(
            (card, i) => (
              <div
                key={i}
                className="flex-1 min-w-[150px] md:min-w-[200px] aspect-[3/4] bg-white border-8 border-white shadow-lg overflow-hidden"
              >
                <Image
                  src={`/images/${card}`}
                  alt={`Card ${i + 1}`}
                  width={400}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Texto inferior dividido en dos columnas */}
      <div className="absolute bottom-6 md:bottom-12 left-0 right-0 z-10 flex flex-col md:flex-row justify-between items-center md:items-end px-6 md:px-12 text-white">
        {/* Izquierda - ABOUT US */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 md:mb-0">
          ABOUT US
        </h1>

        {/* Derecha - Links */}
        <p className="text-sm md:text-base uppercase tracking-wide text-center md:text-right">
          WHO WE ARE · SERVICES - STUDIO - COMMERCE
        </p>
      </div>
    </section>
  );
}
