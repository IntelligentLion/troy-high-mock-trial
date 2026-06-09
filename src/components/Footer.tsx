import { Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";

const navLinks = [
  { label: "Home", to: "/" },
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
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 flex items-center justify-center rounded-md bg-primary">
                <Scale className="w-4 h-4 text-primary-foreground" strokeWidth={2} aria-hidden="true" />
              </div>
              <span className="font-playfair font-bold text-base text-foreground">
                Troy Mock Trial
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-4">
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
                  className="label-mono text-muted-foreground hover:text-primary transition-colors text-[0.65rem]"
                >
                  Instagram
                </a>
              )}
              {contact?.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono text-muted-foreground hover:text-primary transition-colors text-[0.65rem]"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <span className="label-mono text-muted-foreground block mb-4">Navigation</span>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="label-mono text-muted-foreground block mb-4">Contact</span>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
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
                    className="hover:text-primary transition-colors"
                  >
                    {contact.instagramHandle ?? "@ths_mocktrial"}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="label-mono text-muted-foreground text-[0.65rem]">
            © {currentYear} Troy High School Mock Trial Team — All rights reserved.
          </span>
          <span className="label-mono text-muted-foreground text-[0.65rem]">
            Founded 2016 · Legacy is Earned.
          </span>
        </div>
      </div>
    </footer>
  );
}
