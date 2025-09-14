import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen px-16 py-16">
            {/* Contenedor de la imagen con padding */}
            <div className="relative w-full h-full mt-10">
                <Image
                    src="/images/channels-hero.webp"
                    alt="Blackcat hero background"
                    fill
                    className="object-cover rounded-lg"
                    priority
                />

                {/* Overlay opcional */}
                <div className="absolute inset-0 bg-black/20 rounded-lg" />

                {/* Content */}
                <div className="absolute inset-0 flex items-end">
                    <div className="w-full flex justify-between items-end text-white px-10 pb-10">
                        {/* Texto */}
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                                ARTISTA E ILUSIONISTA: EL ARTE QUE CUESTIONA LA REALIDAD
                            </h1>
                            <p className="text-lg font-medium">
                                LEANDRO ERLICH | #85
                            </p>
                        </div>

                        {/* Logo lateral */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/arte-dialogo.webp"
                                alt="Arte en Diálogo logo"
                                width={107}
                                height={107}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
