export default function TabsSwitch() {
  return (
    <section className="flex w-full flex-col items-center justify-center space-y-3 bg-[#f0eeed] px-5 py-10 sm:px-8 md:flex-row md:space-x-0 md:space-y-0 lg:px-16 lg:py-12">
      <div className="w-full md:flex-1 bg-gray-400 text-center py-3 rounded md:rounded-none">
        <h3 className="text-black text-[1.05rem] sm:text-[1.2rem] md:text-[1.35rem] font-black uppercase tracking-[-0.03em]">
          Mr. Black Cat
        </h3>
      </div>

      <div className="w-full md:flex-1 bg-black text-center py-3 rounded md:rounded-none">
        <h3 className="text-white text-[1.05rem] sm:text-[1.2rem] md:text-[1.35rem] font-black uppercase tracking-[-0.03em]">
          Art Vidi
        </h3>
      </div>
    </section>
  );
}