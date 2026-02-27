"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#tech-stack", label: "Tech Stack" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-bold text-text-primary"
          >
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-sm">
              SC
            </div>
            <span>Sarah Can Code</span>
          </a>

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

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="px-6 py-2 border border-text-primary text-text-primary text-sm font-medium rounded-lg hover:bg-text-primary hover:text-bg-primary transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
