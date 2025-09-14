import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 sm:px-10 lg:px-12 py-10 mt-auto">
      {/* Grid principal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Columna izquierda */}
        <div>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link href="#" title="View job opportunities">JOBS</Link>
            </li>
            <li>
              <Link href="#" title="Visit our shop">SHOP</Link>
            </li>
            <li>
              <Link href="#" title="Download our app">APP</Link>
            </li>
            <li>
              <Link href="#" title="Learn about membership">MEMBERSHIP</Link>
            </li>
          </ul>
        </div>

        {/* Columna central */}
        <div className="space-y-6">
          <p className="border-t-2 pt-2 text-sm sm:text-base">MORE A24</p>
          <p className="border-t-2 pt-2 text-sm sm:text-base">WANT MORE A24?</p>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col space-y-6">
          <div>
            <p className="text-sm sm:text-base">
              Get our emails, letters from our filmmakers, new trailers,
              podcasts, merch and more. Not too often — just enough.
            </p>
          </div>
          <div className="w-full max-w-sm">
            <div className="relative">
              <input
                id="email"
                type="email"
                className="w-full bg-transparent border border-slate-200 pl-3 pr-20 py-2 text-sm sm:text-base transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Email Address"
                aria-label="Enter your email address"
              />
              <button
                className="absolute right-1 top-1 bg-slate-800 py-1.5 px-3 border border-transparent text-xs sm:text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 disabled:opacity-50"
                type="button"
                aria-label="Sign up for our newsletter"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 text-gray-400 gap-6">
        <p className="text-xs sm:text-sm max-w-md text-center lg:text-left">
          THIS WEBSITE IS NOT ENDORSED OR APPROVED BY, AND IS NOT IN ANY WAY
          AFFILIATED WITH THE AMERICAN AUTOMOBILE ASSOCIATION, INC. (&quot;AAA&quot;)
        </p>
        <Image
          src="/blackcat-logo.svg"
          alt="Blackcat Logo"
          width={220}
          height={30}
          className="w-40 sm:w-56 lg:w-[220px] h-auto"
        />
      </div>
    </footer>
  );
}
