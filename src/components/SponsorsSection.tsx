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
    <section id="sponsors" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary block mb-4"
        >
          Partner With Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="display-lg text-foreground mb-4"
        >
          Support Excellence
        </motion.h2>
        <p className="text-muted-foreground mb-16 max-w-xl">
          Your sponsorship directly funds competition fees, travel, materials, and
          uniforms — giving students every opportunity to succeed.
        </p>

        {/* Tiers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-16">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className={`flex flex-col gap-4 p-8 ${
                t.highlight ? "bg-primary" : "bg-background"
              }`}
            >
              <div>
                <h3
                  className={`font-bebas text-2xl tracking-wide ${
                    t.highlight ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {t.name}
                </h3>
                <span
                  className={`label-mono text-sm ${
                    t.highlight ? "text-primary-foreground/80" : "text-primary"
                  }`}
                >
                  {t.amount}
                </span>
              </div>
              <ul className="flex flex-col gap-2 flex-1">
                {t.perks.map((p, j) => (
                  <li
                    key={j}
                    className={`text-xs flex items-start gap-2 ${
                      t.highlight ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}
                  >
                    <span className={t.highlight ? "text-primary-foreground" : "text-primary"}>✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-bebas text-3xl text-foreground mb-4">Get in Touch</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Interested in sponsoring Troy High School Mock Trial? Fill out the form
              and we'll reach out promptly.
            </p>
          </div>
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-primary p-8 bg-muted"
              >
                <h4 className="font-bebas text-2xl text-primary mb-2">Inquiry Received</h4>
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
                      className="bg-muted border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <label className="label-mono text-muted-foreground text-[0.65rem]">Message</label>
                  <textarea
                    rows={3}
                    className="bg-muted border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
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
