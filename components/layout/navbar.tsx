"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import HomeMenu from "@/components/layout/Menu";

export default function Navbar({ imagePath }: { imagePath: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const usesDarkChrome = imagePath.includes("black");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070a14]/92 text-white shadow-[0_14px_36px_rgba(0,0,0,0.32)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#070a14]/78"
          : usesDarkChrome
            ? "bg-transparent text-[#17192C]"
            : "bg-transparent text-white"
      }`}
    >
      <div
        className={`relative min-h-[120px] transition-[border-color,background-color] duration-300 ${
          isScrolled ? "border-b border-white/10" : "border-b border-transparent"
        }`}
      >
        <div className="pointer-events-auto absolute left-3 top-8 sm:left-6 sm:top-10 lg:left-12 lg:top-12">
          <Image
            src={imagePath}
            alt="Blackcat Logo"
            width={278}
            height={56}
            priority
            className="h-auto w-[180px] sm:w-[220px] lg:w-[278px]"
          />
        </div>

        <div className="pointer-events-auto absolute right-4 top-8 sm:right-6 sm:top-10 lg:right-12 lg:top-12">
          <HomeMenu dark={usesDarkChrome && !isScrolled} />
        </div>
      </div>
    </header>
  );
}
