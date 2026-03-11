import Brands from "@/components/sections/home/brands";
import CareersSection from "@/components/sections/home/carrers";
import ConnectSection from "@/components/sections/home/connect";
import Hero from "@/components/sections/home/hero";
import Info from "@/components/sections/home/info";
import Posts from "@/components/sections/home/posts";
import StoryCards from "@/components/sections/home/storyCards";
import WhoWeAre from "@/components/sections/home/whoWeAre";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <StoryCards />
      <Brands />
      <ConnectSection />
      <CareersSection />
    </>
  )
}
