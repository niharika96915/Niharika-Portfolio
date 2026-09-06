import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto max-w-7xl rounded-full border border-portfolio-border/80 bg-white/85 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-6">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-portfolio-ink sm:text-xl"
          >
            Niharika
            <span className="text-portfolio-orange">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-portfolio-muted transition-colors duration-200 hover:text-portfolio-orange"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Action */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="rounded-full bg-portfolio-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-portfolio-orange"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-portfolio-ink transition hover:bg-portfolio-surface-soft md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-portfolio-border/70 pt-4 md:hidden">
            <div className="flex flex-col gap-1">

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-portfolio-muted transition hover:bg-portfolio-surface-soft hover:text-portfolio-orange"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-portfolio-ink px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-portfolio-orange"
              >
                Let's Talk
              </a>

            </div>
          </div>
        )}
      </nav>
    </header>
  )
}