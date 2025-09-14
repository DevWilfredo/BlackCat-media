import Image from "next/image";

export default function WhoWeAre() {
  const cards = [
    {
      src: "/images/whoWeAre1.webp",
      alt: "Brand",
      linkText: "Book Now >",
      title: "Studio",
      description:
        "Our studio is a shared space with Guava House in Madrid, fully equipped with high-end cameras, professional audio gear, and dynamic lighting setups.",
      highlight: "Learn More...",
      bigText: "WHO",
    },
    {
      src: "/images/whoWeAre2.webp",
      alt: "Services",
      linkText: "Connect >",
      title: "Services",
      description:
        "We specialise in creating impactful video podcasts, professional photo and video sessions, and tailored social media strategies to amplify your brand.",
      highlight: "Learn More...",
      bigText: "WE",
    },
    {
      src: "/images/whoWeAre3.webp",
      alt: "Brand",
      linkText: "Buy Now >",
      title: "Brand",
      description:
        "A space for culture and creativity: from exclusive merchandise drops to curated products by our collaborators.",
      highlight: "Learn More...",
      bigText: "ARE",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 w-full h-auto md:h-screen">
      {cards.map((card, index) => (
        <div key={index} className="relative group overflow-hidden w-full h-72 md:h-full">
          <Image
            src={card.src}
            alt={card.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            priority={index === 0}
          />

          {/* Overlay superior */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-start p-4 md:p-8 text-white">
            <h3 className="text-sm md:text-lg uppercase tracking-wide text-center">
              {card.linkText}
            </h3>
          </div>

          {/* Contenido inferior */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 text-white text-center">
            <h2 className="text-lg md:text-2xl font-bold mt-2">{card.title}</h2>
            <p className="text-xs md:text-sm mt-4 text-center px-2 md:px-15">
              {card.description} <br />
              <strong className="font-bold">{card.highlight}</strong>
            </p>
            <h1 className="text-4xl md:text-9xl font-bold mt-4 md:mt-8">{card.bigText}</h1>
          </div>
        </div>
      ))}
    </section>
  );
}
