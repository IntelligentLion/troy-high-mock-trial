import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 flex items-center justify-center rounded-sm bg-primary">
                <Scale className="w-4 h-4 text-primary-foreground" strokeWidth={2} />
              </div>
              <span className="font-playfair font-bold text-base text-foreground">
                Westside Mock Trial
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Preparing the next generation of lawyers, advocates, and critical thinkers
              since 2016.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <span className="label-mono text-muted-foreground block mb-4">Navigation</span>
            <ul className="flex flex-col gap-2">
              {["About", "2025–2026 Season", "Team", "Gallery", "Alumni", "Sponsors"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/[^a-z]/g, "")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="label-mono text-muted-foreground block mb-4">Contact</span>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>Westside High School</li>
              <li>Mock Trial Program</li>
              <li>
                <a href="mailto:mocktrial@westside.edu" className="hover:text-primary transition-colors">
                  mocktrial@westside.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="label-mono text-muted-foreground text-[0.65rem]">
            © 2025 Westside High School Mock Trial Team — All rights reserved.
          </span>
          <span className="label-mono text-muted-foreground text-[0.65rem]">
            Founded 2016 · Legacy is Earned.
          </span>
        </div>
      </div>
    </footer>
  );
}
