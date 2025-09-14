import Image from "next/image";
import React from "react";

export default function Posts() {

  return (
    <div className="posts-container flex w-full gap-10 px-20 py-10 bg-[#CBC5B9]">
      <Image src='/images/carouselSection.webp' className="w-full" width={1920} height={589} alt='Section image' />
    </div>
  );
}