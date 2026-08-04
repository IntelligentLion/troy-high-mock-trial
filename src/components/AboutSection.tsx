import { useSiteContent } from "@/hooks/useSiteContent";
import { Reveal, ClipWords, ClipLines } from "@/components/baseline";

const pillarKeys = ["legalStudies", "competition", "skills"] as const;
const pillarTitles = ["Legal Studies", "Competition", "Advocacy & Communication"];

export default function AboutSection() {
  const { data } = useSiteContent();
  const team = data?.team;

  return (
    <section id="about" className="bl-band white px-6 sm:px-10 py-16 sm:py-24">
      {/* Header row */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-end">
        <div className="md:col-span-6">
          <ClipLines
            as="h2"
            lines={["Built for", "the verdict"]}
            className="bl-headline mt-4"
            base={80}
            stagger={120}
            style={{ color: "var(--bl-ink)" }}
          />
        </div>
        <div className="md:col-span-6">
          <Reveal
            y={20}
            delay={120}
            className="text-sm sm:text-base"
            style={{ color: "var(--bl-ink-soft)", lineHeight: 1.7 }}
          >
            {team?.description ??
              "Troy Mock Trial is aimed at introducing students to the field of law, offering real-life trial experience, and fostering effective communication skills."}
          </Reveal>
        </div>
      </div>

      {/* Full-bleed wordmark banner (decorative) */}
      <div
        className="bl-display mt-14 sm:mt-20 select-none pointer-events-none"
        style={{
          width: "100vw",
          marginLeft: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          // The wordmark is one nowrap line whose rendered width tracks the font
          // size at a fixed ~11.4:1 ratio, so sizing it off (viewport - gutters)
          // keeps a 24px breathing gap at every width instead of running into the
          // screen edge on phones. Matches the section's px-6 gutter, and lands
          // within ~2px of the previous 8.6vw on desktop.
          fontSize: "calc((100vw - 48px) / 11.4)",
          color: "var(--bl-ink)",
          lineHeight: 1.0,
        }}
        aria-hidden="true"
      >
        <ClipWords
          text="Troy High Mock Trial"
          base={0}
          stagger={90}
          duration={700}
          goldWords={[2]}
          nowrap
          style={{ marginRight: "-0.22em" }}
        />
      </div>

      {/* Pillars */}
      {team?.coreValues && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14 sm:mt-20">
          {pillarKeys.map((key, i) => {
            return (
              <Reveal
                key={key}
                y={26}
                delay={i * 90}
                as="article"
                className="group rounded-[1.5rem] p-6 flex flex-col gap-4"
                style={{ background: "var(--bl-surface)" }}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-sm font-medium flex-shrink-0"
                    style={{ color: "var(--bl-ink-soft)", fontFamily: "'Onest', sans-serif" }}
                  >
                    {`0${i + 1}`}
                  </span>
                  <h3
                    className="text-xl font-medium uppercase tracking-tight"
                    style={{ fontFamily: "'Onest', sans-serif", color: "var(--bl-ink)" }}
                  >
                    {pillarTitles[i]}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--bl-ink-soft)" }}>
                  {team.coreValues[key]}
                </p>
              </Reveal>
            );
          })}
        </div>
      )}
    </section>
  );
}
