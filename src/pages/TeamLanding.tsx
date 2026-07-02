import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";

const seasons = [
  {
    year: "2026–27",
    label: "Incoming Season",
    description:
      "The incoming leadership has been announced. Learn about the team and find out how to join for the upcoming season.",
    cta: "View Season",
    to: "/team/2026-27",
  },
  {
    year: "2025–26",
    label: "Current Season",
    description:
      "Officers, members, and coaches representing Troy High School Mock Trial in competition this season.",
    cta: "View Roster",
    to: "/team/2025-26",
  },
];

export default function TeamLanding() {
  useSeo({
    title: "Team — Troy High School Mock Trial",
    description:
      "Browse Troy Mock Trial rosters by season — from the incoming 2026–27 leadership to the current 2025–26 team.",
    path: "/team",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page Hero — background image will be placed here */}
      <header className="hero-py px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="display-xl text-foreground mb-3">The Team</h1>
          <p className="text-muted-foreground text-lg">
            Troy High School Mock Trial — Fullerton, CA
          </p>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {seasons.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex flex-col justify-between bg-card rounded-2xl border border-border p-10 md:p-12 min-h-[300px] hover:border-primary/40 transition-colors"
              >
                {/* Year + divider + label */}
                <div>
                  <span className="display-lg text-foreground block mb-6">
                    {s.year}
                  </span>
                  <div
                    className="w-10 h-px mb-6"
                    style={{ background: "var(--color-gold)" }}
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    {s.label}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    {s.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 mt-8 text-sm font-medium text-primary">
                  {s.cta}
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
