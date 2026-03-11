"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

type HomeMenuProps = {
  dark?: boolean;
  tone?: "white" | "black";
};

export default function HomeMenu({ dark = false, tone }: HomeMenuProps) {
  const [open, setOpen] = React.useState(false);

  const menuItems = [
    { label: "HOME", link: "/" },
    { label: "WHO WE ARE", link: "/about" },
    { label: "CHANNELS", link: "/channels" },
    { label: "CAREERS", link: "/carrers" },
    { label: "BLOG", link: "/blogs" },
  ];

  const resolvedTone: "white" | "black" = tone ?? (dark ? "black" : "white");
  const triggerIsWhite = open || resolvedTone === "white";
  const triggerTextClass = triggerIsWhite ? "text-white" : "text-[#17192C]";
  const triggerButtonImage = triggerIsWhite
    ? "/images/header_button_white.png"
    : "/images/header_button_black.png";

  return (
    <Drawer direction="top" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          className={`group h-auto rounded-none border-0 bg-transparent px-0 py-0 shadow-none hover:bg-transparent ${triggerTextClass}`}
        >
          <span className="flex items-center gap-3 text-[1.05rem] font-semibold uppercase tracking-[0.08em]">
            <span>Menu</span>
            <Image
              src={triggerButtonImage}
              alt="Menu button"
              width={38}
              height={18}
              className="h-[18px] w-[38px] object-contain transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </Button>
      </DrawerTrigger>

      <DrawerContent className="bg-[#17192C]">
        <div className="w-full">
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-between">
              <Image
                src="/blackcat-logo.svg"
                alt="Blackcat Logo"
                width={180}
                height={40}
                priority
              />
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerTitle>
          </DrawerHeader>

          <nav className="w-full border border-[#CBC5B9]/30 p-2">
            <ul className="divide-y divide-[#CBC5B9]/30">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-2xl text-[#CBC5B9] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <DrawerFooter>
            <div className="flex justify-end gap-6">
              <a
                href="#"
                aria-label="Twitter"
                className="text-[#CBC5B9] transition-colors hover:text-white"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#CBC5B9] transition-colors hover:text-white"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#CBC5B9] transition-colors hover:text-white"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[#CBC5B9] transition-colors hover:text-white"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
