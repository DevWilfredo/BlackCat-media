import Hero from "@/components/sections/channels/hero";
import ArtVidi from "@/components/sections/channels/twoColumsSection";

export default function Channel() {
    return (
        <>
            <Hero />
            <ArtVidi
                sectionTitle="ART VIDI"
                sectionDescription="OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY EQUIPPED WITH HIGH-END CAMERAS, PROFESSIONAL AUDIO GEAR, AND DYNAMIC LIGHTING SETUPS, IS AVAILABLE FOR RENTAL AND CREATIVE COLLABORATIONS."
                image1Path="/images/connect.webp"
                image2Path="/images/computer.webp"
                styleClasses="bg-gray-900 text-end"
            />
            <ArtVidi
                sectionTitle="MR BLACKCAT"
                sectionDescription="OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY EQUIPPED WITH HIGH-END CAMERAS, PROFESSIONAL AUDIO GEAR, AND DYNAMIC LIGHTING SETUPS, IS AVAILABLE FOR RENTAL AND CREATIVE COLLABORATIONS."
                image1Path="/images/connect.webp"
                image2Path="/images/computer.webp"
                styleClasses="bg-gray-500 text-start"
            />
        </>
    )
}