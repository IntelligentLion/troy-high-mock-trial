import { Mail } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";
import { Reveal, ClipLines, Eyebrow, ArrowRightGlyph } from "@/components/baseline";

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
    <section id="community" className="bl-band surface px-6 sm:px-10 py-20 sm:py-24">
      <Reveal y={18}>
        <Eyebrow>Beyond the courtroom</Eyebrow>
      </Reveal>
      <ClipLines
        as="h2"
        lines={["More than", "a competition"]}
        className="bl-headline mt-4"
        base={80}
        stagger={120}
        style={{ color: "var(--bl-ink)" }}
      />

      {/* Numbered program list */}
      <ul className="mt-14">
        {pillars.map((p, i) => (
          <Reveal
            key={p.title}
            as="li"
            y={26}
            delay={i * 80}
            className="group"
            style={{
              borderTop: "1px solid var(--bl-hairline)",
              borderBottom: i === pillars.length - 1 ? "1px solid var(--bl-hairline)" : undefined,
            }}
          >
            <div className="flex items-center gap-5 sm:gap-8 py-6 sm:py-7">
              <span
                className="text-sm font-medium w-8 shrink-0"
                style={{ color: "var(--bl-ink-soft)", fontFamily: "'Onest', sans-serif" }}
              >
                {`0${i + 1}`}
              </span>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-2xl sm:text-3xl font-medium uppercase tracking-tight"
                  style={{ fontFamily: "'Onest', sans-serif", color: "var(--bl-ink)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm mt-1 max-w-2xl" style={{ color: "var(--bl-ink-soft)" }}>
                  {p.desc}
                </p>
              </div>
              <span
                className="w-11 h-11 rounded-full shrink-0 hidden sm:flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2"
                style={{ border: "1px solid var(--bl-hairline)", color: "var(--bl-ink)" }}
              >
                <ArrowRightGlyph className="w-4 h-4" />
              </span>
            </div>
          </Reveal>
        ))}
      </ul>

      {/* Join CTA strip */}
      <Reveal
        y={24}
        className="mt-10 rounded-[1.5rem] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        style={{ background: "var(--bl-white)", border: "1px solid var(--bl-hairline)" }}
      >
        <div>
          <h3
            className="text-xl font-medium uppercase tracking-tight mb-2"
            style={{ fontFamily: "'Onest', sans-serif", color: "var(--bl-ink)" }}
          >
            Interested in joining?
          </h3>
          <p className="text-sm max-w-sm" style={{ color: "var(--bl-ink-soft)" }}>
            Open to all Troy High School students. No prior legal experience required.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0 sm:min-w-[200px]">
          <a
            href="mailto:contact@troymocktrial.org?subject=Joining Troy Mock Trial"
            className="bl-pill solid justify-center"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            Email Us
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bl-pill outline justify-center"
          >
            {instagramHandle}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
