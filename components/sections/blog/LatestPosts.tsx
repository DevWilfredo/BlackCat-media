export default function LatestPosts() {
    return (
        <section className="flex flex-col px-6 sm:px-10 lg:px-16 mt-10 lg:mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold">LATEST POSTS</h3>
            <div className="mx-auto text-center px-4 sm:px-10 lg:px-16 mt-8 sm:mt-12">
                <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">
                    “HOW WE TURNED A PARTNERSHIP INTO A CULTURAL PLATFORM”
                </h1>
                <div className="flex flex-col text-center bg-gray-300 py-6 sm:py-8 px-4 sm:px-8 mb-8 rounded-md">
                    <div className="flex flex-col sm:flex-row justify-between text-sm sm:text-lg font-bold">
                        <h2>EXCERPT</h2>
                        <p className="mt-2 sm:mt-0">AUG/2025</p>
                    </div>
                    <p className="text-start font-semibold mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
                        “IT STARTED WITH A CAMERA, A PODCAST MIC, AND THE IDEA THAT ART
                        DESERVES BETTER STORIES. HERE’S HOW BLACK CAT MEDIA EVOLVED FROM A
                        PARTNERSHIP INTO A PLATFORM AMPLIFYING UNDERREPRESENTED VOICES.”
                    </p>
                </div>
            </div>
        </section>
    );
}
