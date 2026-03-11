import Image from "next/image";

export default function Posts() {
  return (
    <section className="w-full bg-[#cbc5b9] px-5 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12">
      <div className="mx-auto w-full max-w-[1360px] overflow-hidden">
        <Image
          src="/images/carouselSection.webp"
          className="h-auto w-full object-cover"
          width={1920}
          height={589}
          alt="Section image"
        />
      </div>
    </section>
  );
}