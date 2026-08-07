import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Alumni", to: "/alumni" },
  { label: "Gallery", to: "/gallery" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Contact", to: "/contact" },
];

const socials: { label: string; href: string }[] = [
  { label: "Instagram", href: "https://www.instagram.com/ths_mocktrial/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/troy-high-mock-trial-46743241b/" },
];

/**
 * Fullscreen navy menu overlay (Baseline "menu overlay"). Client-only, hidden by
 * default so it never lands in the prerender snapshot. Traps nothing heavy but
 * moves focus to the close button on open, restores it on close, locks scroll,
 * and closes on Escape / backdrop click.
 */
export default function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<Element | null>(null);

  useEffect(() => {
    if (open) {
      restoreRef.current = document.activeElement;
      const t = setTimeout(() => closeRef.current?.focus(), 120);
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      return () => {
        clearTimeout(t);
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
        (restoreRef.current as HTMLElement | null)?.focus?.();
      };
    }
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[70] flex flex-col transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      {/* Backdrop */}
      <button
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
        className="absolute inset-0 w-full h-full cursor-default"
        style={{ background: "var(--bl-navy, #12275E)" }}
      />

      {/* Panel */}
      <div
        className="relative flex flex-col h-full px-6 sm:px-10 pt-6 pb-6 sm:pt-8 sm:pb-8 transition-transform duration-300"
        style={{ transform: open ? "translateY(0)" : "translateY(-24px)" }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <img
              src="/assets/images/logo-mark.png"
              alt=""
              width={34}
              height={34}
              className="w-[34px] h-[34px] rounded-md flex-shrink-0"
            />
            <span className="text-base font-medium uppercase tracking-[0.18em] text-white">
              Troy Mock Trial
            </span>
          </span>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "rgba(255,255,255,0.14)", color: "#fff" }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center nav */}
        <nav className="flex flex-col justify-center flex-1 gap-1" aria-label="Overlay navigation">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              tabIndex={open ? 0 : -1}
              onClick={onClose}
              className="block font-medium uppercase tracking-tight text-white transition-[color,transform] duration-500 hover:text-[var(--bl-gold-fill,#FFC53D)]"
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontSize: "clamp(2.25rem, 7vw, 4.5rem)",
                lineHeight: 1.05,
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${open ? 120 + i * 60 : 0}ms`,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
        >
          <Link to="/join" onClick={onClose} tabIndex={open ? 0 : -1} className="bl-pill light self-start">
            Join the Team
          </Link>
          <div className="flex gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="text-sm uppercase tracking-[0.14em] transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
