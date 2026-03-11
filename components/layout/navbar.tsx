"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HomeMenu from "@/components/layout/Menu";

type NavbarProps = {
  variant?: "dark" | "light";
};

export default function Navbar({ variant = "light" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isDarkVariant = variant === "dark";
  const isHome = pathname === "/";
  const useWhiteMenuButton = isHome || pathname === "/about";
  const logoPath = isDarkVariant ? "/blackcat-logo.svg" : "/images/blackCat-black.png";

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
          ? isDarkVariant
            ? "bg-[#11163a]/95 text-[#f0eeed] shadow-[0_14px_36px_rgba(0,0,0,0.34)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#11163a]/85"
            : "bg-[#f3f2f0]/96 text-[#17192c] shadow-[0_10px_28px_rgba(8,8,10,0.16)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#f3f2f0]/88"
          : isDarkVariant
            ? isHome
              ? "bg-transparent text-[#f0eeed]"
              : "bg-[#11163a] text-[#f0eeed]"
            : "bg-[#f3f2f0] text-[#17192c]"
      }`}
    >
      <div
        className={`relative min-h-[88px] transition-[border-color,background-color] duration-300 sm:min-h-[102px] lg:min-h-[120px] ${
          isScrolled
            ? isDarkVariant
              ? "border-b border-white/14"
              : "border-b border-[#1a1e3d]/12"
            : "border-b border-transparent"
        }`}
      >
        <div className="pointer-events-auto absolute left-4 top-4 sm:left-6 sm:top-6 lg:left-12 lg:top-9">
          <Image
            src={logoPath}
            alt="Blackcat Logo"
            width={278}
            height={56}
            priority
            className="h-auto w-[150px] sm:w-[215px] lg:w-[278px]"
          />
        </div>

        <div className="pointer-events-auto absolute right-4 top-4 sm:right-6 sm:top-6 lg:right-12 lg:top-9">
          <HomeMenu tone={useWhiteMenuButton ? "white" : "black"} dark={!isDarkVariant} />
        </div>
      </div>
    </header>
  );
}
