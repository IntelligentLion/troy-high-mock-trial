import { Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Gallery", to: "/gallery" },
  { label: "Alumni", to: "/alumni" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Join Us", to: "/join" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const { data } = useSiteContent();
  const contact = data?.contact;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16" style={{ background: "var(--color-navy)" }}>
      <div className="max-w-7xl xl:max-w-8xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 flex items-center justify-center rounded-md bg-gold-fill">
                <Scale className="w-4 h-4 text-navy" strokeWidth={2} aria-hidden="true" />
              </div>
              <span className="font-sans font-semibold text-base text-white">
                Troy Mock Trial
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-4">
              Preparing the next generation of lawyers, advocates, and critical thinkers
              at Troy High School, Fullerton CA — since 2016.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {contact?.instagram && (
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono text-white/55 hover:text-gold-fill transition-colors text-[0.65rem]"
                >
                  Instagram
                </a>
              )}
              {contact?.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono text-white/55 hover:text-gold-fill transition-colors text-[0.65rem]"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <span className="label-mono text-white/45 block mb-4">Navigation</span>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/65 hover:text-gold-fill transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="label-mono text-white/45 block mb-4">Contact</span>
            <ul className="flex flex-col gap-2 text-sm text-white/65">
              {contact?.address ? (
                <li>{contact.address}</li>
              ) : (
                <>
                  <li>Troy High School</li>
                  <li>2200 Dorothy Ln, Fullerton, CA 92831</li>
                </>
              )}
              {contact?.instagram && (
                <li>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-fill transition-colors"
                  >
                    {contact.instagramHandle ?? "@ths_mocktrial"}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="label-mono text-white/45 text-[0.65rem]">
            © {currentYear} Troy High School Mock Trial Team — All rights reserved.
          </span>
          <span className="label-mono text-white/45 text-[0.65rem]">
            Founded 2016 · Legacy is Earned.
          </span>
        </div>
      </div>
    </footer>
  );
}
