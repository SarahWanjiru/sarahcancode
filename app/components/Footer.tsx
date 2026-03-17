import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

        {/* Top — brand statement */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold">
              SC
            </div>
            <span className="text-3xl font-bold text-text-primary">SarahCanCode</span>
          </div>
          <p className="text-text-secondary max-w-sm">
            Engineering reliable systems from interface to infrastructure.
          </p>
        </div>

        {/* Middle — links + socials */}
        <div className="flex flex-col sm:flex-row justify-between gap-10 mb-12">

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/#about" },
              { label: "Projects", href: "/#projects" },
              { label: "Tech Stack", href: "/#tech-stack" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-text-secondary hover:text-accent text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SarahWanjiru"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub — Sarah Wanjiru"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sarahndungu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn — Sarah Ndungu"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/shirawbedan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter — shirawbedan"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://medium.com/@sarahndungu815"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium — Sarah Ndungu"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-text-secondary text-sm">
          <p>© {new Date().getFullYear()} SarahCanCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
