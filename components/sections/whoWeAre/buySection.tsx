import Image from "next/image";

export default function BuySection() {
    return (
        <div className="bg-[#17192C] text-white flex py-16">
            {/* Left Section */}
            <div className="max-w-[40%] text-start flex flex-col justify-end mx-16">
                <p className="text-xl leading-relaxed mb-4 relative">
                    OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY EQUIPPED
                    WITH HIGH-END CAMERAS, PROFESSIONAL AUDIO GEAR, AND DYNAMIC LIGHTING
                    SETUPS, IS AVAILABLE FOR RENTAL AND CREATIVE COLLABORATIONS.
                </p>
                <h3 className="text-[#9199A1] text-4xl font-semibold mb-2">BUY NOW <span>▶</span></h3>
                <h1 className="text-7xl font-bold text-[#CBC5B9]">OUR MERCH</h1>
            </div>
            <div className="relative bg-white p-4 max-w-full w-full flex justify-start">
                <Image
                    src="/images/keagan.webp"
                    alt="Keagan Image"
                    width={532}
                    height={246}
                />
            </div>
        </div>
    )
}