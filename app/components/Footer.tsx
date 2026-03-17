import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

        {/* Top — brand statement */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold">
              SC
            </div>
            <span className="text-3xl font-bold text-text-primary">Sarah Can Code</span>
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
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sarahndungu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/shirawbedan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-text-secondary text-sm">
          <p>© {new Date().getFullYear()} Sarah Can Code. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
