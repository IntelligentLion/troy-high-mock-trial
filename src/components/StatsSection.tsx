import { Reveal, ClipLines, Eyebrow } from "@/components/baseline";

const cells = [
  { value: "10", label: "Seasons competing" },
  { value: "2nd", label: "JSerra Championship" },
  { value: "~20", label: "Members each season" },
  { value: "2016", label: "Founded in Fullerton" },
];

export default function StatsSection() {
  return (
    <section className="bl-band navy px-6 sm:px-10 py-20">
      <Reveal y={18}>
        <Eyebrow tone="light">By the numbers</Eyebrow>
      </Reveal>
      <ClipLines
        as="h2"
        lines={["A team that", "keeps score"]}
        className="bl-headline mt-4 text-white"
        base={80}
        stagger={120}
      />

      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-16">
        {cells.map((c, i) => (
          <Reveal
            key={c.label}
            y={30}
            delay={i * 110}
            as="div"
            className="pt-5"
            style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
          >
            <dd>
              <span
                className="bl-display block leading-none"
                style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "var(--bl-gold-fill)" }}
              >
                {c.value}
              </span>
              <span
                className="block mt-3 text-sm"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {c.label}
              </span>
            </dd>
            <dt className="sr-only">{c.label}</dt>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
