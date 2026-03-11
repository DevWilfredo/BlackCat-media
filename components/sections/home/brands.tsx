import Image from "next/image";

const brands = [
  { src: "/images/brands/artvidi.png", alt: "Artvidi", size: 100 },
  { src: "/images/brands/google.png", alt: "Google", size: 100 },
  { src: "/images/brands/arte_dialogo.png", alt: "Arte en Dialogo", size: 100 },
  { src: "/images/brands/adobe.png", alt: "Adobe", size: 100 },
  { src: "/images/brands/studio.png", alt: "Studio 47", size: 100 },
];

export default function Brands() {
  return (
    <section className="w-full bg-[#eeeceb] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-[2rem] font-black uppercase tracking-[-0.05em] text-[#161b3f] sm:text-[2.6rem] lg:text-[3.05rem]">
          Partners &amp; Brands
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-3 lg:mt-20 lg:grid-cols-5 lg:gap-x-14">
          {brands.map((brand) => (
            <div
              key={brand.alt}
              className="flex items-center justify-center"
            >
              <div className="flex h-[102px] w-[102px] items-center justify-center border-[4px] border-[#252945] bg-[#eeeceb] p-2">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.size}
                  height={brand.size}
                  className="h-auto w-auto max-h-[84px] max-w-[84px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
