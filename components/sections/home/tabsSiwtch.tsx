export default function TabsSwitch() {
  return (
    <div className="flex w-full justify-center items-center p-32 
                    flex-col space-y-4 
                    md:flex-row md:space-y-0 md:space-x-0">
      {/* Tab 1 */}
      <div className="w-full md:flex-1 bg-gray-400 text-center py-4 rounded-lg md:rounded-none">
        <h3 className="text-black text-xl md:text-2xl font-bold uppercase">Mr. Black Cat</h3>
      </div>

      {/* Tab 2 */}
      <div className="w-full md:flex-1 bg-black text-center py-4 rounded-lg md:rounded-none">
        <h3 className="text-white text-xl md:text-2xl font-bold uppercase">Art Vidi</h3>
      </div>
    </div>
  );
}
