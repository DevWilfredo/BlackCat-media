type InfoSectionProps = {
  sectionSpan: string;
  sectionContent: string;
};

export default function InfoSection({ sectionSpan, sectionContent }: InfoSectionProps) {
  return (
    <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
      <div className="mx-auto w-full max-w-[1360px]">
        <h2 className="text-center text-[1.55rem] font-black uppercase leading-[1.02] tracking-[-0.05em] text-[#cbc5b9] sm:text-[2rem] lg:text-[3.5rem]">
          <span className="text-[#6f7fbb]">{sectionSpan}</span> {sectionContent}
        </h2>
      </div>
    </section>
  );
}
