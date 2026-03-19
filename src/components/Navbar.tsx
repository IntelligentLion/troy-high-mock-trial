import { motion } from "framer-motion";
import { Scale, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "2025–2026", href: "#season" },
  { label: "Leadership", href: "#coaches" },
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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-7 h-7 flex items-center justify-center bg-primary">
            <Scale className="w-4 h-4 text-primary-foreground" strokeWidth={2} />
          </div>
          <span className="font-bebas text-lg tracking-widest text-foreground">
            Troy Mock Trial
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-muted-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#sponsors" className="hidden md:block btn-primary text-xs px-6 py-3">
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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-5"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#sponsors" className="btn-primary text-center mt-2">
            Become a Sponsor
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
