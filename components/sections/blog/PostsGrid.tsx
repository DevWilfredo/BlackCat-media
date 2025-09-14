import Image from "next/image";

export default function PostsGrid() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 sm:px-10 lg:px-16 mt-10 lg:mt-16 w-full mb-10">
            {/* Left Post */}
            <div className="relative col-span-1 lg:col-span-2">
                <Image
                    src="/images/zero.webp"
                    alt="Street Image"
                    width={1200}
                    height={800}
                    className="rounded-md object-cover w-full h-auto"
                />
                <div className="mt-4">
                    <div className="flex flex-col sm:flex-row justify-between text-sm sm:text-lg font-semibold">
                        <h3 className="text-[#17192C]">TALKING WITH MR. BLACK CAT</h3>
                        <p className="text-gray-400 mt-1 sm:mt-0">AUG/2025</p>
                    </div>
                    <h1 className="text-lg sm:text-2xl font-bold text-[#17192C] mt-2">
                        “HOW WE TURNED A PARTNERSHIP INTO A CULTURAL PLATFORM”
                    </h1>
                </div>
            </div>

            {/* Right Posts */}
            <div className="flex flex-col gap-8">
                {/* Post 1 */}
                <div className="relative">
                    <Image
                        src="/images/channels-hero.webp"
                        alt="Podcast Image"
                        width={600}
                        height={400}
                        className="rounded-md object-cover w-full h-auto"
                    />
                    <div className="mt-4">
                        <div className="flex flex-col sm:flex-row justify-between text-sm sm:text-lg font-semibold">
                            <h3 className="text-[#17192C]">WHAT WE ARE & AND HOW</h3>
                            <p className="text-gray-400 mt-1 sm:mt-0">AUG/2025</p>
                        </div>
                    </div>
                </div>

                {/* Post 2 */}
                <div className="relative">
                    <Image
                        src="/images/computer.webp"
                        alt="Studio Image"
                        width={600}
                        height={400}
                        className="rounded-md object-cover w-full h-auto"
                    />
                    <div className="mt-4">
                        <div className="flex flex-col sm:flex-row justify-between text-sm sm:text-lg font-semibold">
                            <h3 className="text-[#17192C]">WHAT WE ARE & AND HOW</h3>
                            <p className="text-gray-400 mt-1 sm:mt-0">AUG/2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
