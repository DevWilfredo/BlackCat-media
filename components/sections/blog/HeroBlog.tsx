import Image from "next/image";

export default function HeroBlog() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 w-full h-auto lg:h-screen px-6 sm:px-10 lg:px-16 py-10 lg:py-16 bg-[#F0EEED] gap-8 shadow-sm">
      {/* Left Section */}
      <div className="flex flex-col justify-end text-center lg:text-left mt-20">
        <h1 className="text-[#CBC5B9] text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
          THINK OUT OF THE BOX
        </h1>
        <h3 className="text-[#17192C] text-lg sm:text-xl font-semibold flex items-center justify-center lg:justify-start mt-4">
          READ ARTICLE <span className="ml-2">▶</span>
        </h3>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col justify-between text-center lg:text-left">
        <div className="flex justify-center lg:justify-start mt-6 lg:mt-20">
          <h3 className="text-[#17192C] text-sm sm:text-lg font-bold bg-[#17192C] text-white px-4 py-2 w-fit">
            TALK WITH MR. BLACK CAT
          </h3>
        </div>
        <p className="text-[#CBC5B9] text-base sm:text-lg lg:text-xl font-bold leading-relaxed mt-6 lg:mt-0">
          Loremipsum LoremipsumLoremipsumLoremipsumLoremipsum
          LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum
          LoremipsumLoremipsumLoremipsumLoremipsumLoremipsum
          LoremipsumLoremipsumLoremipsumLoremipsumLoremipsumLoremipsu
        </p>
      </div>

      {/* Right Section */}
      <div className="flex justify-center lg:justify-end items-end">
        <Image
          src="/images/martin-baron.webp"
          alt="Martin Baron Image"
          width={665}
          height={804}
          className="rounded-md object-cover max-h-[400px] lg:max-h-full w-auto"
        />
      </div>
    </section>
  );
}
