import { ExternalLink, Scale, Users, Trophy, Mic, BookOpen, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd1R5LAGbsbXUDEIflfxjKfmNFpfs2NrOf9yQw2JLcFODozGA/viewform?usp=publish-editor";

const reasons = [
  {
    icon: Scale,
    title: "Real Legal Experience",
    body: "Work with actual case law, craft opening statements, examine witnesses, and argue before attorney judges — the closest thing to a real courtroom available in high school.",
  },
  {
    icon: Mic,
    title: "Public Speaking & Advocacy",
    body: "Build the confidence to speak persuasively under pressure. Every practice sharpens your ability to think on your feet and communicate with clarity.",
  },
  {
    icon: Trophy,
    title: "Competitive Achievement",
    body: "Compete in the CRF-OC Mock Trial Tournament and the JSerra Catholic High School Tournament, earning recognition that stands out in college applications.",
  },
  {
    icon: BookOpen,
    title: "Critical Thinking",
    body: "Analyze evidence, anticipate opposing arguments, and construct airtight legal reasoning — skills that translate directly to STEM, business, and the humanities.",
  },
  {
    icon: Users,
    title: "A Tight-Knit Community",
    body: "Join a team that practices together, competes together, and supports each other. Alumni go on to top universities and often credit Mock Trial as a defining high school experience.",
  },
  {
    icon: Briefcase,
    title: "Career Pathways",
    body: "Whether you're interested in law, policy, business, or any field that demands persuasion — Mock Trial gives you a head start that few extracurriculars can match.",
  },
];

export default function JoinUs() {
  useSeo({
    title: "Join Us — Troy High School Mock Trial",
    description:
      "Interested in competing with Troy Mock Trial in 2026–27? See why students join — no legal background required — and fill out our interest form.",
    path: "/join",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <header className="relative hero-py px-6 overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="display-xl text-foreground mb-6">
            Join Troy Mock Trial
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg mb-8">
            No legal background required — just the drive to argue, advocate, and win.
          </p>
          <div>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Fill Out the Interest Form
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Why Join Us */}
        <section className="section-py border-t border-border" aria-labelledby="why-heading">
          <div className="max-w-7xl mx-auto px-6">
            <h2 id="why-heading" className="display-lg text-foreground mb-12">
              Why Join Us?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div
                    key={i}
                    className="bg-card rounded-xl border border-border p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{r.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-py border-t border-border">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="display-lg text-foreground mb-4">
              Ready to Make Your Case?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-base mb-8">
              Fill out our interest form and we'll reach out with details about tryouts and
              informational meetings for the 2026–27 season.
            </p>
            <div>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Interest Form
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
