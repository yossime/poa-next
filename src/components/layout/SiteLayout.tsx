"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

const NAV_ITEMS = [
  { label: "בית", href: "/" },
  { label: "אודות", href: "/about" },
  { label: "פרויקטים", href: "/projects" },
  { label: "צור קשר", href: "/contact" },
];

export default function SiteLayout({ children }: Props) {
  const [language, setLanguage] = useState<"he" | "en">("he");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHebrew = language === "he";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Header */}
      <header
        className={`fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="font-bold tracking-wide">
            {isHebrew ? "פועה – משווקת נדל״ן" : "Poa Real Estate"}
          </div>

          {/* Desktop nav */}
          <nav className="hidden gap-6 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm ${
                    active ? "text-amber-300" : "text-neutral-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Language toggle */}
          <button
            onClick={() =>
              setLanguage((prev) => (prev === "he" ? "en" : "he"))
            }
            className="rounded-full border border-white/20 px-3 py-1 text-xs"
          >
            {isHebrew ? "EN" : "HE"}
          </button>

          {/* Mobile menu button */}
          <button
            className="ml-3 block md:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            ☰
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav className="border-t border-white/10 bg-black/90 px-4 py-2 md:hidden">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-sm ${
                    active ? "text-amber-300" : "text-neutral-200"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </header>

      {/* Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 bg-black/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm md:flex-row">
          <div>
            © {new Date().getFullYear()} פועה – משווקת נדל״ן. כל הזכויות
            שמורות.
          </div>
          <div className="flex gap-4">
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              WhatsApp
            </a>
            <a href="mailto:poa@example.com" className="underline">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
