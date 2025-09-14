import Image from "next/image";
import HomeMenu from "@/components/layout/Menu";

export default function Navbar({imagePath} : {imagePath: string}) {
    return (
        <header className="absolute top-0 left-0 w-full z-50 text-white">
            {/* Contenedor principal */}
            <div className="flex justify-between items-start p-6 md:p-10">
                {/* Logo */}
                <Image
                    src={imagePath}
                    alt="Blackcat Logo"
                    width={180}
                    height={40}
                    priority
                />

                {/* Botón menú */}
                <HomeMenu />
            </div>
        </header>
    );
}
