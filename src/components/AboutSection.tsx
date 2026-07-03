import { BookOpen, Users, GraduationCap } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const pillarIcons = [BookOpen, GraduationCap, Users];
const pillarKeys = ["legalStudies", "competition", "skills"] as const;
const pillarTitles = ["Legal Studies", "Competition", "Advocacy & Communication"];

export default function AboutSection() {
  const { data } = useSiteContent();
  const team = data?.team;

  return (
    <section id="about" className="section-py border-t border-border">
      <div className="max-w-7xl xl:max-w-8xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-10 mb-10">
          <div className="md:col-span-5">
            <h2 className="display-md text-foreground">
              Troy High School
              <br />
              <span className="gold-text">Mock Trial</span>
            </h2>
          </div>

          <div className="md:col-span-7 flex flex-col justify-end">
            <p className="text-muted-foreground leading-relaxed">
              {team?.description ??
                "Troy Mock Trial is aimed at introducing students to the field of law, offering real-life trial experience, and fostering effective communication skills."}
            </p>
          </div>
        </div>

        {/* Pillars from core values */}
        {team?.coreValues && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillarKeys.map((key, i) => {
              const Icon = pillarIcons[i];
              return (
                <div
                  key={key}
                  className="bg-card rounded-xl border border-border p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl border border-primary/30 flex items-center justify-center bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-foreground">
                    {pillarTitles[i]}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {team.coreValues[key]}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Mission strip */}
        <div
          className="mt-8 bg-card rounded-xl border border-border p-8"
          style={{ borderLeft: "3px solid var(--color-gold)" }}
        >
          <p className="text-foreground leading-relaxed max-w-3xl">
            The <strong>Constitutional Rights Foundation – Orange County (CRF-OC)</strong> Mock Trial program and the{" "}
            <strong>JSerra Catholic High School Mock Trial Tournament</strong> — competing annually against teams across Orange, Riverside, and Santa Clara counties.
          </p>
        </div>
      </div>
    </section>
  );
}
