import Hero from "@/components/sections/channels/hero";
import TwoColumnsSection from "@/components/sections/channels/twoColumsSection";

const description =
  "OUR STUDIO IS A SHARED SPACE WITH GUAVA HOUSE IN MADRID, FULLY EQUIPPED WITH HIGH-END CAMERAS, PROFESSIONAL AUDIO GEAR, AND DYNAMIC LIGHTING SETUPS, IS AVAILABLE FOR RENTAL AND CREATIVE";

export default function Channel() {
  return (
    <>
      <Hero />
      <TwoColumnsSection
        sectionTitle="ART VIDI"
        sectionDescription={description}
        image1Path="/images/connect.webp"
        image2Path="/images/computer.webp"
        barClassName="justify-end bg-[#121734]"
      />
      <TwoColumnsSection
        sectionTitle="MR. BLACK CAT"
        sectionDescription={description}
        image1Path="/images/connect.webp"
        image2Path="/images/computer.webp"
        barClassName="justify-start bg-[#98a1ad]"
      />
    </>
  );
}
