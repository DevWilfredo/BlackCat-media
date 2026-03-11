import Image from "next/image";

const services = ["TIME & SPACE", "BUILDERS", "COLLABS"];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#f3f2f0] px-5 pb-8 pt-4 sm:px-8 lg:px-8 lg:pb-10 lg:pt-2">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="pointer-events-none text-[3.2rem] font-black uppercase leading-[0.86] tracking-[-0.08em] text-black/[0.05] sm:text-[5rem] lg:pl-4 lg:text-[8.4rem]">
          OUR SERVICES
        </h2>

        <div className="relative -mt-2 bg-[#eceaea] px-4 pb-6 pt-10 sm:px-6 lg:px-10 lg:pb-8 lg:pt-10">
          <div className="absolute right-4 top-[-44px] z-20 h-[98px] w-[98px] sm:h-[112px] sm:w-[112px] lg:right-6 lg:top-[-48px] lg:h-[128px] lg:w-[128px]">
            <Image
              src="/catBlue.svg"
              alt="Cat"
              width={128}
              height={128}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="relative px-1 py-2 sm:px-2 lg:px-0 lg:py-3">
            {services.map((service, index) => (
              <div
                key={service}
                className={`grid grid-cols-1 gap-4 px-2 py-3 sm:px-4 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center lg:px-0 lg:py-4 ${
                  index < services.length - 1 ? "mb-3 lg:mb-4" : ""
                }`}
              >
                <div>
                  <h3 className="text-[2.2rem] font-black uppercase leading-[0.9] tracking-[-0.08em] text-[#111634] sm:text-[3.5rem] lg:text-[4.9rem]">
                    {service}
                  </h3>
                  <p className="mt-2 max-w-[760px] text-[0.72rem] font-semibold uppercase leading-[1.15] tracking-[-0.03em] text-[#2c3150]/84 sm:text-[0.82rem] lg:max-w-[700px] lg:text-[0.86rem]">
                    OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY
                    EQUIPPED WITH HIGH-END
                  </p>
                </div>

                <div className="justify-self-start lg:justify-self-end">
                  <a
                    href="https://calendly.com/blackcat-test"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[0.95rem] font-black uppercase tracking-[-0.04em] text-[#111634] sm:text-[1.05rem]"
                  >
                    BOOK NOW <span aria-hidden="true">&#9654;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}