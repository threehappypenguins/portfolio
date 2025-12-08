"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { ResumeToggle } from "./resume-toggle";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handlePortfolioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're on the home page, scroll to portfolio section
    if (pathname === "/") {
      e.preventDefault();
      const portfolioSection = document.querySelector("h2");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      closeMenu();
    }
    // Otherwise, let the Link navigate normally to "/"
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/30 backdrop-blur-md border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold">
              Sarah Poulin
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              onClick={handlePortfolioClick}
              className="hover:text-foreground/70 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="hover:text-foreground/70 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-foreground/70 transition-colors"
            >
              Contact
            </Link>
            <ResumeToggle />
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ResumeToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-foreground/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-foreground/10 bg-background/30 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link
              href="/"
              onClick={handlePortfolioClick}
              className="block py-2 hover:text-foreground/70 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:text-foreground/70 transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:text-foreground/70 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
