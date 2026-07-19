"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const isLandingPage =
    pathname === "/landingpage" || pathname.startsWith("/landingpage/");
  const { language, setLanguage } = useLanguage();

  return (
    <header className="px-8 py-6">
      <div className="mb-4">
        {isLandingPage ? (
          <Link href="/landingpage" aria-label="Go to landingpage">
            <div
              className="w-55 h-24 bg-cover bg-center rounded-xl mb-4"
              style={{ backgroundImage: "url('/damn.png')" }}
            />
          </Link>
        ) : (
          <div
            className="w-55 h-24 bg-cover bg-center rounded-xl mb-4"
            style={{ backgroundImage: "url('/damn.png')" }}
          />
        )}
      </div>

      <div className="flex justify-between items-center">
        <nav className="flex gap-8">
          {isLandingPage ? (
            <>
              <Link href="/landingpage/artworks">Artworks</Link>
              <Link href="/landingpage/exhibitions">Exhibitions</Link>
              <Link href="/landingpage/screens">Screens</Link>
            </>
          ) : (
            <>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </>
          )}
        </nav>

        {!isLandingPage && (
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "de" ? "en" : "de")}
            >
              {language.toUpperCase()}
            </button>

            <Link href="/login">
              <button className="self-start border border-black px-8 py-3 uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-black hover:text-white">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
