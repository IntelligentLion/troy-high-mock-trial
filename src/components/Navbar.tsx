import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuOverlay from "@/components/MenuOverlay";

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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-6 pb-4 sm:pt-8 sm:pb-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/images/logo-mark.png"
            alt=""
            width={28}
            height={28}
            className="w-7 h-7 rounded-md flex-shrink-0"
          />
          <span className={`font-onest font-medium text-base uppercase tracking-[0.18em] ${overDark ? "text-white" : "text-foreground"}`}>
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
        <Link to="/sponsors" className="hidden md:inline-flex bl-pill light" style={{ padding: "0.55rem 1.25rem", fontSize: "0.72rem" }}>
          Become a Sponsor
        </Link>

        {/* Mobile toggle — opens the fullscreen overlay */}
        <button
          className={`md:hidden grid place-items-center w-10 h-10 rounded-full ${
            overDark ? "text-white" : "text-foreground"
          }`}
          style={overDark ? { background: "rgba(255,255,255,0.14)" } : { background: "rgba(18,39,94,0.06)" }}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="site-menu-overlay"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <div id="site-menu-overlay">
        <MenuOverlay open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}
