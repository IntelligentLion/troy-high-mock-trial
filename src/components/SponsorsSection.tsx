import { motion } from "framer-motion";
import { useState } from "react";

const tiers = [
  {
    name: "Platinum",
    amount: "$2,500+",
    perks: [
      "Premier logo placement on team banner & uniforms",
      "Featured sponsor spotlight on website & social media",
      "Recognition at all competitions and events",
      "Invitation to season banquet",
      "Personalized thank-you letter from the team",
      "Tax-deductible donation receipt",
    ],
    highlight: true,
  },
  {
    name: "Gold",
    amount: "$1,000–$2,499",
    perks: [
      "Logo on team banner & website",
      "Social media shoutout",
      "Recognition at regional competitions",
      "Invitation to season banquet",
      "Tax-deductible donation receipt",
    ],
    highlight: false,
  },
  {
    name: "Silver",
    amount: "$500–$999",
    perks: [
      "Name on team website",
      "Social media mention",
      "Recognition at local events",
      "Tax-deductible donation receipt",
    ],
    highlight: false,
  },
  {
    name: "Bronze",
    amount: "$100–$499",
    perks: [
      "Name on team website",
      "Thank-you recognition at banquet",
      "Tax-deductible donation receipt",
    ],
    highlight: false,
  },
];

export default function SponsorsSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

        {/* Tiers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col gap-4 p-6 rounded-xl border ${
                t.highlight
                  ? "border-primary/60"
                  : "border-border bg-card"
              }`}
              style={
                t.highlight
                  ? { background: "linear-gradient(135deg, hsl(var(--primary)), hsl(43, 80%, 68%))" }
                  : undefined
              }
            >
              <div>
                <h3
                  className={`font-playfair text-xl font-bold ${
                    t.highlight ? "" : "text-foreground"
                  }`}
                  style={t.highlight ? { color: "hsl(var(--primary-foreground))" } : undefined}
                >
                  {t.name}
                </h3>
                <span
                  className={`label-mono text-sm font-semibold ${
                    t.highlight ? "" : "text-primary"
                  }`}
                  style={t.highlight ? { color: "hsl(var(--primary-foreground) / 0.8)" } : undefined}
                >
                  {t.amount}
                </span>
              </div>
              <ul className="flex flex-col gap-2 flex-1">
                {t.perks.map((p, j) => (
                  <li
                    key={j}
                    className={`text-xs flex items-start gap-2`}
                    style={
                      t.highlight
                        ? { color: "hsl(var(--primary-foreground) / 0.9)" }
                        : { color: "hsl(var(--muted-foreground))" }
                    }
                  >
                    <span
                      className="font-bold shrink-0"
                      style={t.highlight ? { color: "hsl(var(--primary-foreground))" } : { color: "hsl(var(--primary))" }}
                    >
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Interested in sponsoring our Mock Trial team? Fill out the form
              and we'll reach out promptly.
            </p>
          </div>
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl border border-primary/40 p-8 bg-card"
              >
                <h4 className="font-playfair text-xl font-bold text-primary mb-2">Inquiry Received</h4>
                <p className="text-muted-foreground text-sm">Thank you! We'll be in touch shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { label: "Full Name *", type: "text", required: true },
                  { label: "Organization / Business", type: "text", required: false },
                  { label: "Email Address *", type: "email", required: true },
                  { label: "Phone Number", type: "tel", required: false },
                ].map((f, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <label className="label-mono text-muted-foreground text-[0.65rem]">{f.label}</label>
                    <input
                      type={f.type}
                      required={f.required}
                      className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <label className="label-mono text-muted-foreground text-[0.65rem]">Message</label>
                  <textarea
                    rows={3}
                    className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary mt-2 self-start">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
