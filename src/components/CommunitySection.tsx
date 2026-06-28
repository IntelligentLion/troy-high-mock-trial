import { GraduationCap, Scale, Star, BookOpen, Users, Trophy, Mail } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const pillars = [
  { icon: GraduationCap, title: "Mentorship Program", desc: "Senior members mentor newcomers, and alumni return each spring to share their legal journeys and coach current competitors." },
  { icon: Scale, title: "Legal Outreach", desc: "We compete in the CRF Mock Trial program — one of the most respected high school legal competitions in California." },
  { icon: Star, title: "Annual Banquet", desc: "Every season ends with a celebration of coaches, members, and graduates. All are welcome to attend — especially sponsors." },
  { icon: BookOpen, title: "Case Preparation", desc: "Members develop presentation skills, analytic ability, and team cooperation through intensive case preparation each season." },
  { icon: Users, title: "Team Bonding", desc: "From team dinners to study sessions, we invest in the relationships that make us stronger in and out of the courtroom." },
  { icon: Trophy, title: "Alumni Network", desc: "Our growing alumni network spans top universities and law programs — a lifelong community that opens doors for every member." },
];

export default function CommunitySection() {
  const { data } = useSiteContent();
  const instagram = data?.contact?.instagram ?? "https://www.instagram.com/ths_mocktrial/";
  const instagramHandle = data?.contact?.instagramHandle ?? "@ths_mocktrial";

  return (
    <section id="community" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <span className="label-mono text-primary block mb-3">
          Our Community
        </span>
        <h2 className="display-lg text-foreground mb-3">
          Beyond the Courtroom
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Beyond competition — we build bonds, give back, and lift each other up.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 flex flex-col gap-4 group hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl border border-primary/30 flex items-center justify-center bg-primary/10 group-hover:border-primary transition-colors">
                <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA join strip */}
        <div className="bg-card rounded-xl border border-border p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
              Interested in Joining? Contact us.
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              Open to all Troy High School students. No prior legal experience required
              — just curiosity and commitment.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0 min-w-[180px]">
            <a
              href="mailto:contact@troymocktrial.org?subject=Joining Troy Mock Trial"
              className="btn-secondary"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Email Us
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
