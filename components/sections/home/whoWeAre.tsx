import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-[#eeeceb] px-6 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
      <div className="flex min-h-[220px] flex-col justify-between gap-10 lg:min-h-[220px] lg:flex-row lg:items-start">
        <div className="max-w-[640px]">
          <h2 className="max-w-[500px] text-[2.35rem] font-black uppercase leading-[0.96] tracking-[-0.05em] text-[#181c3c]">
            Pitch Your Show,
            <br />
            We&acute;ll Produce It
          </h2>

          <p className="mt-10 text-[1.05rem] font-medium uppercase tracking-[-0.03em] text-[#9ea5af] sm:text-[1.2rem] lg:mt-12 lg:text-[1.42rem]">
            &ldquo;Your platform to express, create and innovate&rdquo;
          </p>
        </div>

        <div className="flex w-full justify-start lg:justify-end lg:pt-10">
          <Link
            href="#"
            className="inline-flex min-w-[160px] items-center justify-center bg-[#e2ddd6] px-7 py-3 text-[1.15rem] font-black uppercase tracking-[-0.03em] text-[#263784] transition-colors hover:bg-[#d8d2ca]"
          >
            Pitch Here
          </Link>
        </div>
      </div>
    </section>
  );
}
