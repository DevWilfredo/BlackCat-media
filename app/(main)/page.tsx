import CareersSection from "@/components/sections/home/carrers";
import ConnectSection from "@/components/sections/home/connect";
import Hero from "@/components/sections/home/hero";
import Info from "@/components/sections/home/info";
import Posts from "@/components/sections/home/posts";
import TabsSwitch from "@/components/sections/home/tabsSiwtch";
import WhoWeAre from "@/components/sections/home/whoWeAre";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <TabsSwitch />
      <Posts />
      <Info />
      <ConnectSection />
      <CareersSection />
    </>
  )
}