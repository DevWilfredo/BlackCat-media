import Image from "next/image";

type JobItem = {
  id: number;
  title: string;
  desc: string;
  highlight: boolean;
};

const jobs: JobItem[] = [
  {
    id: 1,
    title: "COMMUNITY MANAGER",
    desc: "A SPACE FOR CULTURE AND CREATIVITY: FROM EXCLUSIVE MERCHANDISE DROPS TO CURATED PRODUCTS BY OUR COLLABORATORS. A SPACE FOR CULTURE AND CREATIVITY: FROM EXCLUSIVE MERCHANDISE DROPS TO CURATED PRODUCTS BY OUR COLLABORATORS.",
    highlight: true,
  },
  {
    id: 2,
    title: "COMMUNITY MANAGER",
    desc: "A SPACE FOR CULTURE AND CREATIVITY: FROM EXCLUSIVE MERCHANDISE DROPS TO CURATED PRODUCTS BY OUR COLLABORATORS. A SPACE FOR CULTURE AND CREATIVITY: FROM EXCLUSIVE MERCHANDISE DROPS TO CURATED PRODUCTS BY OUR COLLABORATORS.",
    highlight: false,
  },
  {
    id: 3,
    title: "COMMUNITY MANAGER",
    desc: "A SPACE FOR CULTURE AND CREATIVITY: FROM EXCLUSIVE MERCHANDISE DROPS TO CURATED PRODUCTS BY OUR COLLABORATORS. A SPACE FOR CULTURE AND CREATIVITY: FROM EXCLUSIVE MERCHANDISE DROPS TO CURATED PRODUCTS BY OUR COLLABORATORS.",
    highlight: false,
  },
  {
    id: 4,
    title: "COMMUNITY MANAGER",
    desc: "A SPACE FOR CULTURE AND CREATIVITY: FROM EXCLUSIVE MERCHANDISE DROPS TO CURATED PRODUCTS BY OUR COLLABORATORS. A SPACE FOR CULTURE AND CREATIVITY: FROM EXCLUSIVE MERCHANDISE DROPS TO CURATED PRODUCTS BY OUR COLLABORATORS.",
    highlight: false,
  },
];

export default function JobsSection() {
  return (
    <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
      <div className="mx-auto flex w-full max-w-[1360px] flex-col divide-y divide-gray-200">
        {jobs.map((job) => (
          <article key={job.id} className="py-6 sm:py-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex max-w-4xl items-start gap-4 sm:gap-6">
                <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#eae7e5] sm:h-[58px] sm:w-[58px]">
                  <Image
                    src="/images/jobCat.png"
                    alt="Job Icon"
                    width={58}
                    height={58}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3
                    className={`text-[1.3rem] font-black leading-none tracking-[-0.03em] sm:text-[1.75rem] lg:text-[2.1rem] ${
                      job.highlight ? "text-[#1a1a1a]" : "text-[#1a1a1a]/40"
                    }`}
                  >
                    {job.title}
                  </h3>

                  <p
                    className={`mt-2 max-w-3xl text-[0.88rem] font-semibold uppercase leading-[1.12] tracking-[-0.02em] sm:text-[0.98rem] lg:text-[1.05rem] ${
                      job.highlight ? "text-[#1a1a1a]/90" : "text-[#1a1a1a]/40"
                    }`}
                  >
                    {job.desc}{" "}
                    {job.highlight && (
                      <span className="font-black text-[#1a1a1a]">READ MORE...</span>
                    )}
                  </p>
                </div>
              </div>

              <a
                href="#"
                className={`inline-flex items-center gap-2 self-start text-[1.02rem] font-black uppercase tracking-[-0.03em] sm:text-[1.2rem] lg:mt-1 ${
                  job.highlight ? "text-[#1a1a1a]" : "text-[#1a1a1a]/30"
                }`}
              >
                APPLY NOW <span aria-hidden="true">&#9654;</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
