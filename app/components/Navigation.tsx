"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#tech-stack", label: "Tech Stack" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="flex items-center gap-2 text-base sm:text-lg font-bold text-text-primary"
          >
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-sm">
              SC
            </div>
            <span className="hidden sm:inline">Sarah Can Code</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden sm:inline-block px-4 sm:px-6 py-2 border border-text-primary text-text-primary text-sm font-medium rounded-lg hover:bg-text-primary hover:text-bg-primary transition-colors"
            >
              Contact Me
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-text-primary"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 px-4 py-2 border border-text-primary text-text-primary text-sm font-medium rounded-lg text-center hover:bg-text-primary hover:text-bg-primary transition-colors"
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
