// components/JobsSection.jsx
import Image from "next/image";

export default function JobsSection() {
  const jobs = [
    {
      id: 1,
      title: "COMMUNITY MANAGER",
      desc: "A SPACE FOR CULTURE AND CREATIVITY: FROM EXCLUSIVE MERCHANDISE DROPS TO CURATED PRODUCTS BY OUR COLLABORATORS. A SPACE FOR CULTURE AND CREATIVITY: FROM EXCLUSIVE MERCHANDISE DROPS TO CURATED PRODUCTS BY OUR COLLABORATORS.",
      highlight: true, // el primero es el destacado
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

  return (
    <section className="bg-white px-6 lg:px-16 py-12">
      <div className="flex flex-col divide-y divide-gray-200">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex items-start justify-between py-8"
          >
            {/* Icono + contenido */}
            <div className="flex items-start gap-6 max-w-4xl">
              {/* Icono gato */}
              <div className="w-[60px] h-[60px] rounded-full bg-[#EAE7E5] flex items-center justify-center shrink-0">
                <Image
                  src="/images/jobCat.png" // ⚠️ coloca aquí tu ruta real del gato
                  alt="Job Icon"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Texto */}
              <div>
                <h3
                  className={`text-2xl font-extrabold ${
                    job.highlight ? "text-[#1A1A1A]" : "text-[#1A1A1A]/40"
                  }`}
                >
                  {job.title}
                </h3>
                <p
                  className={`mt-1 text-sm max-w-2xl ${
                    job.highlight
                      ? "text-[#1A1A1A]/90"
                      : "text-[#1A1A1A]/40"
                  }`}
                >
                  {job.desc}{" "}
                  {job.highlight && (
                    <span className="font-bold text-[#1A1A1A]">READ MORE...</span>
                  )}
                </p>
              </div>
            </div>

            {/* Botón */}
            <a
              href="#"
              className={`text-lg font-extrabold flex items-center gap-1 ${
                job.highlight
                  ? "text-[#1A1A1A]"
                  : "text-[#1A1A1A]/30"
              }`}
            >
              APPLY NOW <span>▶</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
