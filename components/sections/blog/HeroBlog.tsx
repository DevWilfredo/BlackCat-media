import Image from "next/image";

const teaserText =
  "Loremipsum LoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsum";

export default function HeroBlog() {
  return (
    <section className="w-full bg-[#f3f2f0] px-6 pb-8 pt-[118px] sm:px-10 sm:pb-10 sm:pt-[128px] lg:px-10 lg:pb-10 lg:pt-[136px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid gap-6 lg:min-h-[640px] lg:grid-cols-[430px_minmax(0,1fr)_470px] lg:gap-8">
          <div className="flex flex-col justify-end pb-5 lg:pb-8">
            <h1 className="text-[2.9rem] font-black uppercase leading-[0.91] tracking-[-0.06em] text-[#cbc5b9] sm:text-[3.5rem] lg:text-[6.15rem]">
              THINK
              <br />
              OUT OF
              <br />
              THE BOX
            </h1>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-4 text-[1.05rem] font-semibold uppercase leading-none tracking-[-0.04em] text-[#17192c] sm:text-[1.3rem] lg:text-[2.1rem]"
            >
              READ ARTICLE <span aria-hidden="true">&#9654;</span>
            </a>
          </div>

          <div className="flex flex-col lg:pt-2">
            <p className="w-fit bg-[#17192c] px-4 py-1.5 text-[1.02rem] font-black uppercase leading-none tracking-[-0.04em] text-[#f0eeed] sm:px-5 sm:text-[1.28rem] lg:text-[1.48rem]">
              TALK WITH MR. BLACK CAT
            </p>

            <p className="mt-auto max-w-[430px] break-all pb-8 text-right text-[1rem] font-medium leading-[1.12] tracking-[-0.03em] text-[#cbc5b9] sm:text-[1.2rem] lg:pb-10 lg:text-[2.9rem]">
              {teaserText}
            </p>
          </div>

          <div className="relative ml-auto h-[560px] w-full max-w-[470px] overflow-hidden bg-black sm:h-[620px] lg:h-[640px]">
            <Image
              src="/images/martin-baron.webp"
              alt="Person at night with city lights"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
