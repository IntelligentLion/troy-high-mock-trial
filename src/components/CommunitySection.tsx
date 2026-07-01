import { Mail } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const pillars = [
  { title: "Mentorship", desc: "Senior members mentor newcomers, and alumni return each spring to share their paths." },
  { title: "Legal Outreach", desc: "We compete in the CRF Mock Trial program — one of the most respected high school legal competitions in California." },
  { title: "Annual Banquet", desc: "Every season closes with a celebration of coaches, members, and graduates." },
  { title: "Case Preparation", desc: "Members develop presentation skills and analytic ability through intensive preparation each season." },
  { title: "Team Community", desc: "From team dinners to study sessions, we invest in the relationships that make us stronger in and out of the courtroom." },
  { title: "Alumni Network", desc: "Our alumni span top universities and law programs — a lifelong community that opens doors." },
];

export default function CommunitySection() {
  const { data } = useSiteContent();
  const instagram = data?.contact?.instagram ?? "https://www.instagram.com/ths_mocktrial/";
  const instagramHandle = data?.contact?.instagramHandle ?? "@ths_mocktrial";

  return (
    <section id="community" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="display-lg text-foreground mb-3">
          Beyond the Courtroom
        </h2>
        <p className="text-muted-foreground mb-14 max-w-lg">
          Competition is the headline. Community is what keeps members coming back.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-14">
          {pillars.map((p, i) => (
            <div key={i} className="flex flex-col gap-2 border-t border-border pt-6">
              <h3 className="font-playfair text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="bg-card rounded-xl border border-border p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
              Interested in Joining?
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              Open to all Troy High School students. No prior legal experience required.
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
