export default function LinkedinSection() {
    return (
        <section className="bg-[#D9DBDE] px-5 py-9 sm:px-8 sm:py-11 lg:px-16 lg:py-14">
          <div className="mx-auto flex w-full max-w-[1360px] flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 24 24"
                fill="#243376"
                className="rounded-full bg-[#243376] p-2"
            >
                <circle cx="12" cy="12" r="12" />
                <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    fill="white"
                />
                <rect width="4" height="12" x="5" y="9" fill="white" />
                <circle cx="7" cy="5" r="2" fill="white" />
            </svg>

            <h1 className="text-[#243376] text-[1.7rem] font-black uppercase leading-none tracking-[-0.03em] sm:text-[2.2rem] lg:text-[2.85rem]">
                KNOW + ABOUT US
            </h1>
          </div>
        </section>
    );
}
