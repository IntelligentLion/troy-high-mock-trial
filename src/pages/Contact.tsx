import { useState } from "react";
import { Instagram, Linkedin, Mail, MapPin, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useSeo } from "@/hooks/useSeo";

const INTEREST_OPTIONS = [
  { value: "join", label: "Join the Team" },
  { value: "sponsor", label: "Become a Sponsor" },
  { value: "alumni", label: "Alumni — Add Me to the Honor Wall" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const { data } = useSiteContent();
  const contact = data?.contact;
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useSeo({
    title: "Contact — Troy High School Mock Trial",
    description:
      "Get in touch with Troy High School Mock Trial — prospective members, sponsors, and alumni are all welcome to reach out.",
    path: "/contact",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.querySelector("#c-name") as HTMLInputElement)?.value ?? "";
    const email = (form.querySelector("#c-email") as HTMLInputElement)?.value ?? "";
    const interest = (form.querySelector("#c-interest") as HTMLSelectElement)?.value ?? "";
    const message = (form.querySelector("#c-message") as HTMLTextAreaElement)?.value ?? "";

    const subject = encodeURIComponent(`Troy Mock Trial — ${interest}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`);

    setSubmitting(true);
    window.setTimeout(() => {
      window.location.href = `mailto:contact@troymocktrial.org?subject=${subject}&body=${body}`;
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page Hero */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="display-xl text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            Whether you're a prospective member, sponsor, or alumni — we'd love to hear from you.
          </p>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <section aria-labelledby="contact-info-heading">
                <h2 id="contact-info-heading" className="display-md text-foreground mb-6">Reach Out</h2>

                <div className="flex flex-col gap-5">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="label-mono text-muted-foreground text-[0.65rem] block mb-1">Email</span>
                      <a
                        href="mailto:contact@troymocktrial.org"
                        className="text-foreground hover:text-primary transition-colors text-sm"
                      >
                        contact@troymocktrial.org
                      </a>
                    </div>
                  </div>

                  {/* Advisor */}
                  {contact?.advisorName && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="label-mono text-muted-foreground text-[0.65rem] block mb-1">Faculty Advisor</span>
                        <span className="text-foreground text-sm block">{contact.advisorName}</span>
                        {contact.advisorEmail && (
                          <a
                            href={`mailto:${contact.advisorEmail}`}
                            className="text-muted-foreground hover:text-primary transition-colors text-xs"
                          >
                            {contact.advisorEmail}
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="label-mono text-muted-foreground text-[0.65rem] block mb-1">School</span>
                      <span className="text-foreground text-sm">{contact?.address ?? "Troy High School, 2200 Dorothy Ln, Fullerton, CA 92831"}</span>
                    </div>
                  </div>

                  {/* Instagram */}
                  {contact?.instagram && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                        <Instagram className="w-4 h-4 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="label-mono text-muted-foreground text-[0.65rem] block mb-1">Instagram</span>
                        <a
                          href={contact.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors text-sm"
                        >
                          {contact.instagramHandle}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* LinkedIn */}
                  {contact?.linkedin && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                        <Linkedin className="w-4 h-4 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="label-mono text-muted-foreground text-[0.65rem] block mb-1">LinkedIn</span>
                        <a
                          href={contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors text-sm"
                        >
                          Troy High School Mock Trial
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* Map */}
              <section aria-labelledby="map-heading">
                <h2 id="map-heading" className="sr-only">Location Map</h2>
                <div className="rounded-xl overflow-hidden border border-border h-64">
                  <iframe
                    title="Troy High School location map"
                    src="https://maps.google.com/maps?q=Troy+High+School,+2200+Dorothy+Ln,+Fullerton,+CA+92831&output=embed&z=17"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </section>
            </div>

            {/* Interest form */}
            <section aria-labelledby="form-heading">
              <h2 id="form-heading" className="display-md text-foreground mb-6">Send a Message</h2>

              {submitted ? (
                <div className="rounded-xl border border-primary/40 p-10 bg-card text-center">
                  <h3 className="font-playfair text-2xl font-bold text-primary mb-3">Message Sent</h3>
                  <p className="text-muted-foreground text-sm">Your email client should open shortly. We'll respond as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="Contact interest form">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="c-name" className="label-mono text-muted-foreground text-[0.65rem]">Full Name *</label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      className="bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="c-email" className="label-mono text-muted-foreground text-[0.65rem]">Email Address *</label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      className="bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="c-interest" className="label-mono text-muted-foreground text-[0.65rem]">I'm interested in… *</label>
                    <select
                      id="c-interest"
                      required
                      className="bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
                    >
                      <option value="">Select one…</option>
                      {INTEREST_OPTIONS.map((o) => (
                        <option key={o.value} value={o.label}>{o.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="c-message" className="label-mono text-muted-foreground text-[0.65rem]">Message *</label>
                    <textarea
                      id="c-message"
                      rows={5}
                      required
                      className="bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary mt-2 self-start" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
