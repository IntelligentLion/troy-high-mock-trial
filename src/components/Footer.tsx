import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import { Reveal, ClipLines } from "@/components/baseline";

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

export default function Footer({ hideCta = false }: { hideCta?: boolean }) {
  const { data } = useSiteContent();
  const contact = data?.contact;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="px-6 sm:px-10 py-14 sm:py-16"
      style={{ background: "var(--bl-navy, #12275E)", color: "#fff", fontFamily: "'Onest', system-ui, sans-serif" }}
    >
      <div className="max-w-7xl xl:max-w-8xl mx-auto">
        {/* CTA band */}
        {!hideCta && (
          <div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-14"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}
          >
            <div>
              <ClipLines
                as="h2"
                lines={["Ready to", "compete?"]}
                className="bl-display mt-4 text-white"
                base={80}
                stagger={110}
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              />
            </div>
            <Reveal y={20} delay={150}>
              <Link to="/join" className="bl-pill light">
                Join the Team
              </Link>
            </Reveal>
          </div>
        )}

        {/* Columns */}
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 py-14">
          {/* Brand */}
          <div className="md:col-span-2 max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/images/logo-mark.png"
                alt=""
                width={34}
                height={34}
                className="w-[34px] h-[34px] rounded-md flex-shrink-0"
              />
              <span className="text-lg font-medium uppercase tracking-[0.2em] text-white">Troy Mock Trial</span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Preparing the next generation of lawyers, advocates, and critical thinkers at Troy High
              School, Fullerton CA — since 2016.
            </p>
            <div className="flex gap-4">
              {contact?.instagram && (
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.14em] transition-colors hover:text-[var(--bl-gold-fill,#FFC53D)]"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Instagram
                </a>
              )}
              {contact?.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.14em] transition-colors hover:text-[var(--bl-gold-fill,#FFC53D)]"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium block mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Navigation
            </span>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm transition-colors hover:text-[var(--bl-gold-fill,#FFC53D)]"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium block mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Contact
            </span>
            <ul className="flex flex-col gap-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
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
                    className="transition-colors hover:text-[var(--bl-gold-fill,#FFC53D)]"
                  >
                    {contact.instagramHandle ?? "@ths_mocktrial"}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.55)" }}
        >
          <span>© {currentYear} Troy High School Mock Trial Team — All rights reserved.</span>
          <span className="uppercase tracking-[0.14em] text-xs">Founded 2016 · Legacy is Earned.</span>
        </div>
      </div>
    </footer>
  );
}
