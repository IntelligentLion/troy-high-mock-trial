import { Download, Mail } from "lucide-react";
import { Reveal, ClipLines, ArrowRightGlyph } from "@/components/baseline";

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="bl-band navy px-6 sm:px-10 py-20 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
        <div>
          <ClipLines
            as="h2"
            lines={["Invest in", "tomorrow's", "advocates"]}
            className="bl-headline mt-4 text-white"
            base={80}
            stagger={110}
          />
          <Reveal
            y={22}
            delay={200}
            className="mt-6 max-w-lg text-sm sm:text-base"
            style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}
          >
            Your sponsorship directly funds competition fees, travel, materials, and uniforms — giving
            students every opportunity to succeed. Your firm gains direct visibility with the next
            generation of legal professionals, on our website, apparel, and social media.
          </Reveal>
          <Reveal y={20} delay={300} className="mt-6">
            <a
              href="mailto:contact@troymocktrial.org?subject=Sponsorship Inquiry"
              className="inline-flex items-center gap-2 text-sm"
              style={{ color: "var(--bl-gold-fill)" }}
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              contact@troymocktrial.org
            </a>
          </Reveal>
        </div>

        <Reveal
          y={28}
          delay={150}
          className="glass-navy rounded-[1.5rem] p-8 flex flex-col gap-4"
        >
          <h3
            className="text-2xl font-medium uppercase tracking-tight text-white"
            style={{ fontFamily: "'Onest', sans-serif" }}
          >
            Become a Sponsor
          </h3>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            Explore sponsorship tiers or download the full prospectus to see how your support reaches
            the courtroom.
          </p>
          <div className="flex flex-col gap-3 mt-2">
            <a href="/sponsors" className="bl-pill light justify-center">
              View Sponsorship Tiers <ArrowRightGlyph className="w-4 h-4" />
            </a>
            <a
              href="/Troy_Sponsorship_Packet.pdf"
              download="Troy_Sponsorship_Packet.pdf"
              className="bl-pill outline justify-center"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download Prospectus
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
