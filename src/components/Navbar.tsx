import { Scale, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Alumni", to: "/alumni" },
  { label: "Gallery", to: "/gallery" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Contact", to: "/contact" },
];

const teamDropdown = [
  { label: "2026–27", to: "/team/2026-27" },
  { label: "2025–26", to: "/team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isTeamActive =
    location.pathname === "/team" || location.pathname === "/team/2026-27";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setTeamOpen(false);
    setMobileTeamOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setTeamOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background border-b border-border shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center rounded-md bg-primary">
            <Scale className="w-4 h-4 text-primary-foreground" strokeWidth={2} />
          </div>
          <span className="font-playfair font-bold text-base text-foreground tracking-wide">
            Troy Mock Trial
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {/* Home */}
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "text-primary" : "text-foreground/70"}`}
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>

          {/* Team dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setTeamOpen(true)}
            onMouseLeave={() => setTeamOpen(false)}
          >
            <button
              className={`nav-link flex items-center gap-1 bg-transparent border-0 cursor-pointer ${
                isTeamActive ? "text-primary" : "text-foreground/70"
              }`}
              aria-haspopup="true"
              aria-expanded={teamOpen}
              onClick={() => setTeamOpen((v) => !v)}
            >
              Team
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${teamOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {teamOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                role="menu"
              >
                <div className="bg-background border border-border rounded-xl shadow-lg overflow-hidden min-w-[140px]">
                  {teamDropdown.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      role="menuitem"
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-card hover:text-primary ${
                        location.pathname === item.to
                          ? "text-primary bg-card"
                          : "text-foreground/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Remaining links */}
          {navLinks.slice(1).map((l) => (
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
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "text-primary" : "text-foreground/80"}`}
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>

          {/* Mobile Team accordion */}
          <div className="flex flex-col gap-1">
            <button
              className={`nav-link flex items-center justify-between bg-transparent border-0 cursor-pointer w-full text-left ${
                isTeamActive ? "text-primary" : "text-foreground/80"
              }`}
              onClick={() => setMobileTeamOpen((v) => !v)}
              aria-expanded={mobileTeamOpen}
            >
              Team
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileTeamOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {mobileTeamOpen && (
              <div className="ml-4 flex flex-col gap-3 pt-2">
                {teamDropdown.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === item.to ? "text-primary" : "text-foreground/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((l) => (
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
