import Image from "next/image";

const careerGallery = [
  {
    src: "/images/timon-studler.webp",
    alt: "People walking through a public space",
  },
  {
    src: "/images/zero.webp",
    alt: "Film crew working under a strong light",
  },
  {
    src: "/images/christian.webp",
    alt: "Person walking across a station platform",
  },
];

export default function CareersSection() {
  return (
    <>
      <section
        id="careers"
        className="w-full bg-[#e6e3e3] px-6 py-8 text-[#1a1d35] sm:px-10 sm:py-10 lg:px-12 lg:py-9"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 md:grid-cols-3 md:gap-10 lg:gap-14">
            {careerGallery.map((image) => (
              <div key={image.src} className="relative aspect-[1/0.9] overflow-hidden bg-black/5">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
            <div className="max-w-[760px]">
              <p className="text-[0.95rem] font-bold uppercase tracking-[-0.03em] text-[#9aa0ad]">
                Careers
              </p>
              <h2 className="mt-5 max-w-[320px] text-[2.35rem] font-black uppercase leading-[0.93] tracking-[-0.055em] text-[#20243d] sm:text-[2.8rem]">
                JOIN OUR CREATIVE TEAM!
              </h2>
              <div className="mt-14 space-y-5 text-[1rem] font-black uppercase leading-[1.08] tracking-[-0.03em] text-[#33479a]">
                <p>WE&apos;RE LOOKING FOR CURIOUS MINDS READY TO CHALLENGE THE ORDINARY.</p>
                <p className="max-w-[820px]">
                  AT BLACK CAT MEDIA, CREATIVITY IS COLLABORATION. WE BRING TOGETHER
                  FILMMAKERS, PRODUCERS, STRATEGISTS, AND DESIGNERS WHO WANT TO
                  EXPERIMENT, GROW, AND SHAPE CULTURE THROUGH INNOVATIVE STORYTELLING.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start justify-end lg:items-end">
              <Image
                src="/images/blue-cat.webp"
                alt="Black Cat careers icon"
                width={160}
                height={174}
                className="h-auto w-[120px] sm:w-[138px] lg:w-[160px]"
              />
              <a
                href="/carrers"
                className="-mt-1 inline-flex min-w-[172px] items-center justify-center bg-[#c9c9c9] px-6 py-2 text-[1.1rem] font-black uppercase tracking-[-0.04em] text-[#f2efe9] transition-colors hover:bg-[#bdbdbd]"
              >
                APPLY NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#efeeea] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="pointer-events-none absolute inset-0 opacity-90">
          <Image
            src="/images/marco-home.webp"
            alt=""
            fill
            className="object-cover object-center mix-blend-multiply"
          />
        </div>

        <div className="relative mx-auto w-full max-w-[1280px] border border-[#314fa5] bg-[#10120f] shadow-[0_0_0_1px_rgba(49,79,165,0.12)]">
          <Image
            src="/images/computer.webp"
            alt="Computer desk scene"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,8,0.78)_0%,rgba(10,14,11,0.42)_35%,rgba(15,14,10,0.3)_70%,rgba(16,15,10,0.28)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.44)_100%)]" />

          <div className="absolute inset-0 flex flex-col justify-between px-5 py-5 text-[#f3efe6] sm:px-8 sm:py-7 md:px-12 md:py-10 lg:px-14 lg:py-12">
            <div>
              <h2 className="max-w-[760px] text-[2.55rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[#f5f2ea] sm:text-[3.6rem] md:text-[4.7rem] lg:text-[5.4rem]">
                OUT OF THE BOX
              </h2>
              <p className="mt-4 text-[0.95rem] font-black uppercase tracking-[-0.03em] text-[#fcf8f0] sm:text-[1.1rem]">
                OUR BLOG ▶
              </p>
            </div>

            <div className="max-w-[980px]">
              <h3 className="text-[1.1rem] font-black uppercase leading-[1.02] tracking-[-0.04em] text-[#e7e0d5] sm:text-[1.65rem] md:text-[2.25rem] lg:text-[2.65rem]">
                &quot;HOW WE TURNED A PARTNERSHIP INTO A CULTURAL PLATFORM&quot;
              </h3>
              <div className="mt-6 max-w-[760px]">
                <p className="text-[0.8rem] font-black uppercase tracking-[-0.03em] text-[#efe8dc] sm:text-[0.95rem]">
                  EXCERPT:
                </p>
                <p className="mt-3 text-[0.88rem] font-bold uppercase leading-[1.06] tracking-[-0.025em] text-[#ddd5c8] sm:text-[1rem] md:text-[1.1rem]">
                  &quot;IT STARTED WITH A CAMERA, A PODCAST MIC, AND THE IDEA THAT ART
                  DESERVES BETTER STORIES. HERE&apos;S HOW BLACK CAT MEDIA EVOLVED FROM A
                  PARTNERSHIP INTO A PLATFORM AMPLIFYING UNDERREPRESENTED VOICES.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
