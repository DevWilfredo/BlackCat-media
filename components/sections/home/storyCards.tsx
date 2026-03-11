import Link from "next/link";

const cards = [
  {
    image: "/images/whoWeAre1.webp",
    title: "Your story starts here.",
    cta: "Book",
    description:
      "Book studio 47 in Madrid for professional photo and video shoots, podcast production, creator content, and one-on-one creative consulting sessions with our team.",
  },
  {
    image: "/images/whoWeAre2.webp",
    title: "We craft your stories, then produce them.",
    cta: "Connect",
    description:
      "Content production, video podcasts, brand creation, social media strategy, and creative consulting - all in one place",
  },
  {
    image: "/images/whoWeAre3.webp",
    title: "More than a studio - Black Cat is a brand shaped by creativity.",
    cta: "Buy",
    description:
      "Clothing, collaborations, limited drops, and special projects that extend our vision beyond the screen.",
  },
];

export default function StoryCards() {
  return (
    <section className="grid w-full grid-cols-1 md:grid-cols-3">
      {cards.map((card) => (
        <article
          key={card.title}
          className="relative min-h-[520px] overflow-hidden border-t border-white/10 md:min-h-[672px] md:border-r md:border-t-0 md:last:border-r-0"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(5, 9, 28, 0.26) 0%, rgba(7, 12, 30, 0.5) 38%, rgba(8, 11, 22, 0.72) 100%), url('${card.image}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex min-h-[520px] flex-col justify-between px-8 pb-12 pt-12 text-white md:min-h-[672px] md:px-10 md:pb-14 md:pt-12">
            <h3 className="mx-auto max-w-[310px] text-center text-[1.55rem] font-extrabold leading-[1.08] tracking-[-0.04em] md:text-[1.8rem]">
              {card.title}
            </h3>

            <div className="flex flex-col items-center">
              <Link
                href="#"
                className="inline-flex min-w-[108px] items-center justify-center bg-transparent px-5 py-2 text-[1.1rem] font-black uppercase tracking-[-0.03em] text-white/95 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.34)] transition-colors hover:bg-[#d8d2ca] hover:text-white"
              >
                {card.cta} &#9654;
              </Link>

              <p className="mt-12 max-w-[330px] text-center text-[0.9rem] font-medium uppercase leading-[1.18] tracking-[-0.02em] text-white/88 md:text-[0.98rem]">
                {card.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
