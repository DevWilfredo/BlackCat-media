import Image from "next/image";

export default function GuavaSection() {
    return (
        <div className="bg-[#17192C] text-white flex py-16">
            {/* Left Section */}
            <div className="relative bg-white p-4 max-w-full w-full flex justify-end">
                <Image
                    src="/images/keagan.webp"
                    alt="Keagan Image"
                    width={532}
                    height={246}
                />
                <span className="absolute bottom-8 left-64 justify-end text-white text-xl font-bold px-6">
                    MADRID,<br /> SPAIN
                </span>
            </div>

            {/* Right Section */}
            <div className="max-w-[40%] text-end flex flex-col justify-end mx-16">
                <p className="text-xl leading-relaxed mb-4 relative">
                    <Image
                        src="/images/catEyes.png"
                        alt="Cat Eyes"
                        width={112}
                        height={30}
                        className="absolute right-0 bottom-40"
                    />
                    OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY EQUIPPED
                    WITH HIGH-END CAMERAS, PROFESSIONAL AUDIO GEAR, AND DYNAMIC LIGHTING
                    SETUPS, IS AVAILABLE FOR RENTAL AND CREATIVE COLLABORATIONS.
                </p>
                <h3 className="text-[#9199A1] text-4xl font-semibold mb-2">GUAVA</h3>
                <h1 className="text-7xl font-bold text-[#CBC5B9]">THE STUDIO</h1>
            </div>
        </div>
    )
}