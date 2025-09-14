export default function WhoWeAre() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 w-full h-auto md:h-screen">
            {/* Brand */}
            <div className="relative group overflow-hidden">
                <img
                    src="/images/whoWeAre1.webp"
                    alt="Brand"
                    className="object-cover w-full h-[300px] md:h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-start p-4 md:p-8 text-white">
                    <h3 className="text-sm md:text-lg uppercase tracking-wide text-center">
                        Book Now &gt;
                    </h3>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 text-white text-center">
                    <h2 className="text-lg md:text-2xl font-bold mt-2">Studio</h2>
                    <p className="text-xs md:text-sm mt-4 text-center px-4 md:px-15">
                        Our studio is a shared space with Guava House in Madrid, fully equipped with high-end cameras, professional audio gear, and dynamic lighting setups. <br />
                        <strong className="font-bold">Learn More...</strong>
                    </p>
                    <h1 className="text-6xl md:text-9xl font-bold mt-8">WHO</h1>
                </div>
            </div>

            {/* Services */}
            <div className="relative group overflow-hidden">
                <img
                    src="/images/whoWeAre2.webp"
                    alt="Services"
                    className="object-cover w-full h-[300px] md:h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-start p-4 md:p-8 text-white">
                    <h3 className="text-sm md:text-lg uppercase tracking-wide text-center">
                        Connect &gt;
                    </h3>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 text-white text-center">
                    <h2 className="text-lg md:text-2xl font-bold mt-2">Services</h2>
                    <p className="text-xs md:text-sm mt-4 text-center px-4 md:px-15">
                        We specialise in creating impactful video podcasts, professional photo and video sessions, and tailored social media strategies to amplify your brand. <br />
                        <strong className="font-bold">Learn More...</strong>
                    </p>
                    <h1 className="text-6xl md:text-9xl font-bold mt-8">WE</h1>
                </div>
            </div>

            {/* Brand */}
            <div className="relative group overflow-hidden">
                <img
                    src="/images/whoWeAre3.webp"
                    alt="Brand"
                    className="object-cover w-full h-[300px] md:h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-start p-4 md:p-8 text-white">
                    <h3 className="text-sm md:text-lg uppercase tracking-wide text-center">
                        Buy Now &gt;
                    </h3>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 text-white text-center">
                    <h2 className="text-lg md:text-2xl font-bold mt-2">Brand</h2>
                    <p className="text-xs md:text-sm mt-4 text-center px-4 md:px-15">
                        A space for culture and creativity: from exclusive merchandise drops to curated products by our collaborators. <br />
                        <strong className="font-bold">Learn More...</strong>
                    </p>
                    <h1 className="text-6xl md:text-9xl font-bold mt-8">ARE</h1>
                </div>
            </div>
        </section>
    );
}