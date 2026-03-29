import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary block mb-3"
        >
          Partner With Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="display-lg text-foreground mb-3"
        >
          Support Excellence
        </motion.h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Your sponsorship directly funds competition fees, travel, materials, and
          uniforms — giving students every opportunity to succeed.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-xl border border-primary/30 p-10 flex flex-col md:flex-row md:items-center justify-between gap-8"
          style={{ background: "linear-gradient(135deg, hsl(var(--card)), hsl(var(--primary) / 0.08))" }}
        >
          <div className="max-w-lg">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
              Invest in Tomorrow's Advocates
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Sponsoring Troy Mock Trial is an investment in the future of law. Your firm gains
              direct visibility with the next generation of legal professionals — on our website,
              apparel, and social media.
            </p>
            <a
              href="mailto:shrikrishna0219@gmail.com?subject=Sponsorship Inquiry"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              shrikrishna0219@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="/sponsors"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3"
            >
              View Sponsorship Tiers
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="/Troy_Sponsorship_Packet.pdf"
              download="Troy_Sponsorship_Packet.pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-sm font-semibold border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download Prospectus
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
