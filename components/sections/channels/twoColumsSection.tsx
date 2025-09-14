import Image from "next/image";

export default function ArtVidi({ sectionTitle, sectionDescription, image1Path, image2Path, styleClasses }: { 
  sectionTitle: string, 
  sectionDescription: string, 
  image1Path: string, 
  image2Path: string,
  styleClasses: string
}) {
  return (
    <section className="w-full bg-gray-50 py-16 px-8">
      {/* Header */}
      <div className="flex justify-end mb-8 w-full">
        <div className={`w-full ${styleClasses} text-white px-6 py-2 font-bold text-lg`}>
          {sectionTitle}
        </div>
      </div>

      {/* Description */}
      <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
        {sectionDescription}
      </p>

      {/* Grid de tarjetas */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="relative group overflow-hidden">
          <Image
            src={image1Path}
            alt="Agenda 0"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 transition group-hover:opacity-90 flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-bold mb-2">AGENDA 0</h3>
            <p className="text-gray-200 text-sm mb-4 max-w-sm">
              OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY EQUIPPED WITH HIGH-END
            </p>
            <button className="bg-white text-black px-4 py-2 font-semibold text-sm self-start">
              WATCH NOW
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group overflow-hidden">
          <Image
            src={image2Path}
            alt="Agenda 1"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
