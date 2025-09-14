export default function LinkedinSection() {
    return (
        <div className="p-16 bg-[#D9DBDE] flex justify-between items-center">
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

            <h1 className="text-[#243376] font-bold text-4xl">
                KNOW + ABOUT US
            </h1>
        </div>
    );
}