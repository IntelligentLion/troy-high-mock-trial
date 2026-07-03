import { Scale, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home",     to: "/",        prefix: false },
  { label: "Team",     to: "/team",    prefix: true  },
  { label: "Alumni",   to: "/alumni",  prefix: false },
  { label: "Gallery",  to: "/gallery", prefix: false },
  { label: "Sponsors", to: "/sponsors",prefix: false },
  { label: "Contact",  to: "/contact", prefix: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isActive = (to: string, prefix: boolean) =>
    prefix
      ? location.pathname === to || location.pathname.startsWith(to + "/")
      : location.pathname === to;

  // Over the dark navy hero (home, unscrolled) the transparent navbar needs light text
  const overDark = location.pathname === "/" && !scrolled;
  const linkColor = (active: boolean) =>
    active
      ? overDark ? "text-gold-fill" : "text-primary"
      : overDark ? "text-white/70" : "text-foreground/70";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-150 ${
        scrolled ? "bg-background border-border shadow-md" : "bg-transparent border-transparent"
      } ${overDark ? "nav-over-hero" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center rounded-md bg-primary">
            <Scale className="w-4 h-4 text-primary-foreground" strokeWidth={2} />
          </div>
          <span className={`font-sans font-semibold text-base tracking-wide ${overDark ? "text-white" : "text-foreground"}`}>
            Troy Mock Trial
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center divide-x ${overDark ? "divide-white/10" : "divide-foreground/10"}`} aria-label="Main navigation">
          {/* Home */}
          <Link
            to="/"
            className={`nav-link px-4 ${linkColor(isActive("/", false))}`}
            aria-current={isActive("/", false) ? "page" : undefined}
          >
            Home
          </Link>

          {/* About Us — explicit so it sits between Home and Team */}
          <Link
            to="/about"
            className={`nav-link px-4 ${linkColor(isActive("/about", false))}`}
            aria-current={isActive("/about", false) ? "page" : undefined}
          >
            About Us
          </Link>

          {/* Team + remaining links from navLinks (skip Home) */}
          {navLinks.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link px-4 ${linkColor(isActive(l.to, l.prefix))}`}
              aria-current={isActive(l.to, l.prefix) ? "page" : undefined}
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
          className={`md:hidden ${overDark ? "text-white" : "text-foreground"}`}
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
          <Link
            to="/"
            className={`nav-link ${isActive("/", false) ? "text-primary" : "text-foreground/80"}`}
            aria-current={isActive("/", false) ? "page" : undefined}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`nav-link ${isActive("/about", false) ? "text-primary" : "text-foreground/80"}`}
            aria-current={isActive("/about", false) ? "page" : undefined}
          >
            About Us
          </Link>

          {navLinks.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${isActive(l.to, l.prefix) ? "text-primary" : "text-foreground/80"}`}
              aria-current={isActive(l.to, l.prefix) ? "page" : undefined}
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
