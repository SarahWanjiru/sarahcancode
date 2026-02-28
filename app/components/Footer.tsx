export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-sm font-bold">
                SC
              </div>
              <span className="text-lg font-bold text-text-primary">Sarah Can Code</span>
            </div>
            <p className="text-text-secondary text-sm">
              Crafting digital experiences that merge design, technology, and strategy.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-bold text-text-primary mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-text-primary mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © 2023 Sarah Can Code. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-text-secondary text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
