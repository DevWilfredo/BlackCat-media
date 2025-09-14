"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function HomeMenu() {
    const [open, setOpen] = React.useState(false)

    const menuItems = [
        { label: "HOME", link: "/" },
        { label: "WHO WE ARE", link: "/about" },
        { label: "CHANNELS", link: "/channels" },
        { label: "CAREERS", link: "/carrers" },
        { label: "BLOG", link: "/blogs" },
    ]

    return (
        <Drawer direction="top" open={open} onOpenChange={setOpen}>
            {/* Botón personalizado */}
            <DrawerTrigger asChild>
                <Button
                    className="bg-[#17192C] text-white hover:bg-[#243376] transition-colors"
                >
                    Menu
                </Button>
            </DrawerTrigger>

            <DrawerContent className="bg-[#17192C]">
                <div className="w-full">
                    {/* Header con logo y botón de cerrar */}
                    <DrawerHeader>
                        <DrawerTitle className="flex justify-between items-center">
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

                    {/* Links */}
                    <nav className="p-2 w-full border border-[#CBC5B9]/30">
                        <ul className="divide-y divide-[#CBC5B9]/30">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.link}
                                        onClick={() => setOpen(false)}
                                        className="block py-2 text-2xl text-[#CBC5B9] hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Footer con redes sociales */}
                    <DrawerFooter>
                        <div className="flex gap-6 justify-end-safe">
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="text-[#CBC5B9] hover:text-white transition-colors"
                            >
                                <Twitter size={24} />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="text-[#CBC5B9] hover:text-white transition-colors"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="text-[#CBC5B9] hover:text-white transition-colors"
                            >
                                <Facebook size={24} />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="text-[#CBC5B9] hover:text-white transition-colors"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
