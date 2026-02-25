'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
     { href: '/projects', label: 'Projects' },
    { href: '/tech-stack', label: 'Tech Stack' },
     { href: '/blog', label: 'Blog' },

  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-text-primary">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-sm">
              SC
            </div>
            <span>Sarah Can Code</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-6 py-2 border border-text-primary text-text-primary text-sm font-medium rounded-lg hover:bg-text-primary hover:text-bg-primary transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

