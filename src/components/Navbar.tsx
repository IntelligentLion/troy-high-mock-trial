import { Scale, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Team", to: "/team" },
  { label: "Alumni", to: "/alumni" },
  { label: "Gallery", to: "/gallery" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center rounded-sm bg-primary">
            <Scale className="w-4 h-4 text-primary-foreground" strokeWidth={2} />
          </div>
          <span className="font-playfair font-bold text-base text-foreground tracking-wide">
            Troy Mock Trial
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${location.pathname === l.to ? "text-primary" : "text-foreground/70"}`}
              aria-current={location.pathname === l.to ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/sponsors" className="hidden md:block btn-primary text-xs px-5 py-2">
          Become a Sponsor
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-5"
          aria-label="Mobile navigation"
        >
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${location.pathname === l.to ? "text-primary" : "text-foreground/80"}`}
              aria-current={location.pathname === l.to ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/sponsors" className="btn-primary text-center mt-2">
            Become a Sponsor
          </Link>
        </nav>
      )}
    </header>
  );
}
