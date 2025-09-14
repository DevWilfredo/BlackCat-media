import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen">
            {/* Fondo con la imagen */}
            <Image
                src="/images/hero-image.webp"
                alt="Blackcat hero background"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay para dar contraste si lo necesitas */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col h-full justify-end p-4 md:p-16 text-white">
                {/* Footer info */}
                <div className="flex flex-col md:flex-row justify-between text-sm">
                    <div className="max-w-lg">
                        <h2 className="text-lg md:text-2xl font-bold">
                            CREATIVE STUDIO <br />
                            <span className="font-normal text-sm md:text-base">
                                THAT BRINGS IDEAS TO LIFE THROUGH INNOVATIVE STORYTELLING.
                            </span>
                        </h2>
                    </div>
                    <nav className="flex flex-col md:flex-row gap-2 md:gap-4 uppercase mt-4 md:mt-0">
                        <div className="flex flex-col items-start md:items-end">
                            <p className="uppercase text-xs md:text-sm">Based in Madrid</p>
                            <div className="flex flex-wrap gap-2 md:gap-4">
                                <a href="#" className="text-xs md:text-sm">Channels</a>
                                <a href="#" className="text-xs md:text-sm">Careers</a>
                                <a href="#" className="text-xs md:text-sm">Connect</a>
                                <a href="#" className="text-xs md:text-sm">Blog</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
}
