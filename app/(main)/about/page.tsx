import BuySection from "@/components/sections/whoWeAre/buySection";
import GuavaSection from "@/components/sections/whoWeAre/guavaSection";
import Hero from "@/components/sections/whoWeAre/hero";
import InfoSection from "@/components/sections/whoWeAre/infoSection";
import ServicesSection from "@/components/sections/whoWeAre/servicesSection";

export default function About() {
    return (
        <>
            <Hero />
            <InfoSection sectionContent="THAT BRINGS IDEAS TO LIFE THROUGH INNOVATIVE STORYTELLING." sectionSpan="CREATIVE STUDIO" />
            <GuavaSection />
            <ServicesSection />
            <BuySection/>
            <InfoSection sectionContent="THAT BRINGS IDEAS TO LIFE THROUGH INNOVATIVE STORYTELLING." sectionSpan="CREATIVE STUDIO" />
        </>
    );
}