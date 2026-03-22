import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "Partner",
    subtitle: "Gold",
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
    name: "Associate",
    subtitle: "Silver",
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
    name: "Counsel",
    subtitle: "Bronze",
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
    name: "Friend",
    subtitle: "Support",
    amount: "$100–$499",
    perks: [
      "Name on team website",
      "Thank-you recognition at banquet",
      "Tax-deductible donation receipt",
    ],
    highlight: false,
  },
];

export default function Sponsors() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Sponsors — Troy High School Mock Trial";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page Hero */}
      <header
        className="relative pt-32 pb-24 px-6 overflow-hidden"
        style={{ background: "linear-gradient(160deg, hsl(var(--background)) 40%, hsl(var(--primary) / 0.14))" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="label-mono text-primary block mb-3">
            Partnership
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="display-xl text-foreground mb-4"
          >
            Invest in Tomorrow's
            <br />
            <span className="gold-text">Advocates</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl text-lg"
          >
            Troy Mock Trial has produced future lawyers, judges, journalists, and
            civic leaders since 2016. Your sponsorship makes the next cohort possible.
          </motion.p>
        </div>
      </header>

      <main>
        {/* Tiers */}
        <section className="py-20 border-t border-border" aria-labelledby="tiers-heading">
          <div className="max-w-7xl mx-auto px-6">
            <span className="label-mono text-muted-foreground block mb-2">Sponsorship Levels</span>
            <h2 id="tiers-heading" className="display-lg text-foreground mb-12">Choose Your Tier</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col gap-5 p-6 rounded-xl border ${
                    t.highlight ? "border-primary/60" : "border-border bg-card"
                  } relative overflow-hidden`}
                  style={t.highlight
                    ? { background: "linear-gradient(135deg, hsl(var(--primary)), hsl(43, 80%, 68%))" }
                    : undefined}
                >
                  {t.highlight && (
                    <span className="absolute top-4 right-4 label-mono text-[0.6rem] px-2 py-0.5 rounded-full bg-white/20 text-white">
                      Featured
                    </span>
                  )}

                  <div>
                    <h3
                      className="font-playfair text-2xl font-bold"
                      style={{ color: t.highlight ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))" }}
                    >
                      {t.name}
                    </h3>
                    <span
                      className="label-mono text-xs font-semibold"
                      style={{ color: t.highlight ? "hsl(var(--primary-foreground) / 0.75)" : "hsl(var(--primary))" }}
                    >
                      {t.subtitle} · {t.amount}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2.5 flex-1">
                    {t.perks.map((p, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs"
                        style={{ color: t.highlight ? "hsl(var(--primary-foreground) / 0.9)" : "hsl(var(--muted-foreground))" }}
                      >
                        <Check
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: t.highlight ? "hsl(var(--primary-foreground))" : "hsl(var(--primary))" }}
                          aria-hidden="true"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:ths.mocktrial@gmail.com?subject=Sponsorship Inquiry — ${t.name} Tier`}
                    className={`mt-2 text-center py-2.5 rounded-lg text-sm font-medium transition-colors label-mono ${
                      t.highlight
                        ? "bg-white/20 hover:bg-white/30 text-white"
                        : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    Become a {t.name} Sponsor
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Sponsors */}
        <section className="py-16 border-t border-border" aria-labelledby="current-sponsors-heading">
          <div className="max-w-7xl mx-auto px-6">
            <span className="label-mono text-muted-foreground block mb-2">Our Partners</span>
            <h2 id="current-sponsors-heading" className="display-lg text-foreground mb-10">Current Sponsors</h2>
            <div className="border border-dashed border-border rounded-xl p-12 text-center">
              <p className="text-muted-foreground text-sm italic">
                Be the first to partner with us this season.
              </p>
            </div>
          </div>
        </section>

        {/* Contact strip + form */}
        <section className="py-16 border-t border-border" aria-labelledby="sponsor-contact-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="label-mono text-muted-foreground block mb-2">Get in Touch</span>
                <h2 id="sponsor-contact-heading" className="display-md text-foreground mb-4">Questions About Sponsorship?</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Reach out directly to discuss partnership opportunities, custom arrangements, or to learn more about our team's reach and impact.
                </p>
                <a
                  href="mailto:ths.mocktrial@gmail.com?subject=Sponsorship Inquiry"
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Email Us Directly
                </a>
              </div>

              <div>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-xl border border-primary/40 p-8 bg-card"
                  >
                    <h3 className="font-playfair text-xl font-bold text-primary mb-2">Inquiry Received</h3>
                    <p className="text-muted-foreground text-sm">Thank you for your interest! We'll be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="Sponsorship inquiry form">
                    {[
                      { label: "Full Name *", id: "name", type: "text", required: true },
                      { label: "Organization / Business", id: "org", type: "text", required: false },
                      { label: "Email Address *", id: "email", type: "email", required: true },
                      { label: "Phone Number", id: "phone", type: "tel", required: false },
                    ].map((f) => (
                      <div key={f.id} className="flex flex-col gap-1">
                        <label htmlFor={f.id} className="label-mono text-muted-foreground text-[0.65rem]">{f.label}</label>
                        <input
                          id={f.id}
                          type={f.type}
                          required={f.required}
                          className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
                        />
                      </div>
                    ))}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="message" className="label-mono text-muted-foreground text-[0.65rem]">Message</label>
                      <textarea
                        id="message"
                        rows={3}
                        className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all resize-none"
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
      </main>

      <Footer />
    </div>
  );
}
