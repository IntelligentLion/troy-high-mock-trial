import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";

const pillars = [
  {
    title: "Legal Advocacy",
    desc: "Students argue fully developed cases — plaintiff and defense — before panels of licensed attorney judges. Every examination, objection, and closing argument is coached to a professional standard.",
  },
  {
    title: "Competitive Training",
    desc: "We compete in the Constitutional Rights Foundation's Orange County program and the JSerra Catholic High School Tournament — two of the most competitive high school circuits in California.",
  },
  {
    title: "Professional Development",
    desc: "Members leave with public speaking skills, analytic discipline, and real exposure to courtroom procedure — preparation that carries directly into law school, business, and public service.",
  },
  {
    title: "Alumni Network",
    desc: "Our alumni have gone on to Yale, USC, Georgetown, and UC campuses across California. Many return to coach and mentor — the relationship between alumni and current members is one of the team's defining strengths.",
  },
];

export default function About() {
  useSeo({
    title: "About — Troy High School Mock Trial",
    description:
      "Troy Mock Trial gives students real courtroom experience — competing in the CRF-OC program since 2016 and building the next generation of advocates.",
    path: "/about",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page Hero */}
      <header className="relative hero-py px-6 overflow-hidden border-b border-border">
        <div className="max-w-7xl xl:max-w-8xl mx-auto">
          <h1 className="display-xl text-foreground mb-4">
            About Troy Mock Trial
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            A student-run program giving high schoolers real legal experience
            — from opening statements to closing arguments — since 2016.
          </p>
        </div>
      </header>

      <main>
        {/* Our Story */}
        <section className="section-py border-b border-border" aria-labelledby="story-heading">
          <div className="max-w-7xl xl:max-w-8xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7">
                <h2 id="story-heading" className="display-lg text-foreground mb-6">
                  Built from scratch in 2016
                </h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                  <p>
                    Two Troy High School students started this program with no funding,
                    no tradition, and no roadmap — only the conviction that their peers
                    deserved genuine exposure to law before college. They built the curriculum,
                    recruited the first members, and competed in their inaugural season that year.
                  </p>
                  <p>
                    Nearly a decade later, the program competes annually in the CRF–Orange County
                    circuit and the JSerra Catholic High School Tournament. Alumni have gone on to
                    Yale, USC, Georgetown, and UC campuses. Many return each spring to mentor
                    current members — a cycle the founders put in motion in 2016.
                  </p>
                  <p>
                    The mission has always been the same: make real legal training accessible
                    to every student willing to put in the work.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 grid grid-cols-2 gap-4 md:pt-12">
                {[
                  { value: "2016", label: "Year Founded" },
                  { value: "10", label: "Seasons Competed" },
                  { value: "30+", label: "Alumni" },
                  { value: "2nd", label: "JSerra Championship" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-card rounded-xl border border-border p-5 flex flex-col gap-1"
                  >
                    <span className="stat-number">{s.value}</span>
                    <span className="text-xs text-muted-foreground"
                      style={{ fontFamily: "'Onest', sans-serif" }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="section-py border-b border-border" aria-labelledby="program-heading">
          <div className="max-w-7xl xl:max-w-8xl mx-auto px-6">
            <h2 id="program-heading" className="display-lg text-foreground mb-12">
              What We Do
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {pillars.map((p) => (
                <div key={p.title} className="flex flex-col gap-3 border-t border-border pt-6">
                  <h3 className="font-playfair text-xl font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-py">
          <div className="max-w-7xl xl:max-w-8xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl border border-border p-8 flex flex-col gap-4">
                <h3 className="font-playfair text-2xl font-semibold text-foreground">
                  Join the Team
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  Open to all Troy High School students. No legal background
                  required — just the drive to argue, advocate, and compete.
                </p>
                <Link to="/join" className="btn-primary self-start">
                  See How to Apply
                </Link>
              </div>

              <div className="bg-card rounded-xl border border-border p-8 flex flex-col gap-4"
                style={{ borderLeft: "3px solid var(--color-gold)" }}>
                <h3 className="font-playfair text-2xl font-semibold text-foreground">
                  Become a Sponsor
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  Your sponsorship funds competition fees, travel, and materials —
                  and puts your firm in front of the next generation of legal talent.
                </p>
                <Link to="/sponsors" className="btn-primary self-start">
                  View Sponsorship Tiers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
