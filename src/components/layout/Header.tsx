"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/data/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-glass">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-on-surface font-headline"
        >
          {BUSINESS.name}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-secondary hover:text-on-surface transition-colors duration-300 font-headline font-bold tracking-tight text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={BUSINESS.phoneTel}
            className="hidden lg:block text-primary font-headline font-bold tracking-tight text-sm hover:opacity-80 transition-opacity"
          >
            {BUSINESS.phone}
          </Link>
          <Link
            href="/#contact"
            className="hidden md:block bronze-gradient text-on-primary px-6 py-2.5 rounded-sm font-headline font-bold tracking-tight text-sm transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-on-surface p-1"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav — slide-in panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-surface border-t border-outline-variant/20 px-8 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-on-surface font-headline font-bold tracking-tight py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={BUSINESS.phoneTel}
            onClick={() => setMobileOpen(false)}
            className="block text-primary font-headline font-bold tracking-tight py-2"
          >
            Call {BUSINESS.phone}
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="block bronze-gradient text-on-primary px-6 py-3 rounded-sm font-headline font-bold tracking-tight text-sm text-center mt-4 transition-all duration-300 hover:brightness-110"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
