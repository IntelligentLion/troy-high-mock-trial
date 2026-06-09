import { useState } from "react";
import { Check, Download, Mail, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";

const PROSPECTUS_PATH = "/Troy_Sponsorship_Packet.pdf";

const tiers = [
  {
    name: "Platinum",
    subtitle: "Top Tier",
    amount: "$5,000+",
    perks: [
      "Direct meetings with students",
      "Find out talent before your competitors",
      "Recognition in all press releases",
      "3 dedicated social media posts",
      "Promotional video feature",
      "Logo on team apparel",
      "Logo on team website",
      "Recognition on social media",
    ],
    highlight: true,
  },
  {
    name: "Gold",
    subtitle: "Partner",
    amount: "$2,000–$5,000",
    perks: [
      "3 dedicated social media posts",
      "Promotional video feature",
      "Logo on team apparel",
      "Logo on team website",
      "Recognition on social media",
    ],
    highlight: false,
  },
  {
    name: "Silver",
    subtitle: "Associate",
    amount: "$1,000–$2,000",
    perks: [
      "Promotional video feature",
      "Logo on team apparel",
      "Logo on team website",
      "Recognition on social media",
    ],
    highlight: false,
  },
  {
    name: "Bronze",
    subtitle: "Supporter",
    amount: "Under $1,000",
    perks: [
      "Logo on team apparel",
      "Logo on team website",
      "Recognition on social media",
    ],
    highlight: false,
  },
];

export default function Sponsors() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useSeo({
    title: "Sponsors — Troy High School Mock Trial",
    description:
      "Partner with Troy High School Mock Trial and invest in the next generation of advocates. View sponsorship tiers and download the prospectus.",
    path: "/sponsors",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
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
          <span className="label-mono text-primary block mb-3">
            Partnership
          </span>
          <h1 className="display-xl text-foreground mb-4">
            Invest in Tomorrow's
            <br />
            <span className="gold-text">Advocates</span>
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            Troy Mock Trial has produced future lawyers, judges, journalists, and
            civic leaders since 2016. Your sponsorship makes the next cohort possible.
          </p>
        </div>
      </header>

      <main>
        {/* Sponsorship Prospectus */}
        <section className="py-20 border-t border-border" aria-labelledby="prospectus-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <span className="label-mono text-muted-foreground block mb-2">2025–26 Season</span>
                <h2 id="prospectus-heading" className="display-lg text-foreground">Sponsorship Prospectus</h2>
              </div>
              <a
                href={PROSPECTUS_PATH}
                download="Troy_Sponsorship_Packet.pdf"
                className="inline-flex items-center gap-2 btn-primary shrink-0 self-start sm:self-auto"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download PDF
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <iframe
                src={PROSPECTUS_PATH}
                title="Troy Mock Trial Sponsorship Prospectus 2025–26"
                className="w-full"
                style={{ height: "780px" }}
              />
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section className="py-20 border-t border-border" aria-labelledby="tiers-heading">
          <div className="max-w-7xl mx-auto px-6">
            <span className="label-mono text-muted-foreground block mb-2">Sponsorship Levels</span>
            <h2 id="tiers-heading" className="display-lg text-foreground mb-12">Choose Your Tier</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((t, i) => (
                <div
                  key={i}
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
                    href={`mailto:shrikrishna0219@gmail.com?subject=Sponsorship Inquiry — ${t.name} Tier`}
                    className={`mt-2 text-center py-2.5 rounded-full text-sm font-medium transition-colors label-mono ${
                      t.highlight
                        ? "bg-white/20 hover:bg-white/30 text-white"
                        : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    Become a {t.name} Sponsor
                  </a>
                </div>
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
                  href="mailto:shrikrishna0219@gmail.com?subject=Sponsorship Inquiry"
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Email Us Directly
                </a>
              </div>

              <div>
                {submitted ? (
                  <div className="rounded-xl border border-primary/40 p-8 bg-card">
                    <h3 className="font-playfair text-xl font-bold text-primary mb-2">Inquiry Received</h3>
                    <p className="text-muted-foreground text-sm">Thank you for your interest! We'll be in touch shortly.</p>
                  </div>
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
                          className="bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
                        />
                      </div>
                    ))}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="message" className="label-mono text-muted-foreground text-[0.65rem]">Message</label>
                      <textarea
                        id="message"
                        rows={3}
                        className="bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-primary mt-2 self-start" disabled={submitting}>
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                          Submitting…
                        </>
                      ) : (
                        "Submit Inquiry"
                      )}
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
