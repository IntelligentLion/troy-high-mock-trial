import { Scale, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "2025–2026", href: "#season" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Alumni", href: "#alumni" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center rounded-sm bg-primary">
            <Scale className="w-4 h-4 text-primary-foreground" strokeWidth={2} />
          </div>
          <span className="font-playfair font-bold text-base text-foreground tracking-wide">
            Westside Mock Trial
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-foreground/70">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#sponsors" className="hidden md:block btn-primary text-xs px-5 py-2">
          Become a Sponsor
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-foreground/80"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#sponsors" className="btn-primary text-center mt-2">
            Become a Sponsor
          </a>
        </div>
      )}
    </header>
  );
}
