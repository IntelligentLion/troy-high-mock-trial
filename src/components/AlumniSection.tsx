import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import MonogramAvatar from "@/components/MonogramAvatar";
import { CardGridSkeleton } from "@/components/CardSkeleton";
import { Reveal, ClipLines, Eyebrow, ArrowRightGlyph } from "@/components/baseline";

const FOUNDER_NAMES = ["Ashley Fan", "Hayley Amo"];

export default function AlumniSection() {
  const { data, isLoading } = useSiteContent();
  const founders = (data?.alumni ?? []).filter((a) => FOUNDER_NAMES.includes(a.name));

  return (
    <section id="alumni" className="bl-band white px-6 sm:px-10 py-16 sm:py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <Reveal y={18}>
            <Eyebrow>Where it began</Eyebrow>
          </Reveal>
          <ClipLines
            as="h2"
            lines={["Our", "founders"]}
            className="bl-headline mt-4"
            base={80}
            stagger={120}
            style={{ color: "var(--bl-ink)" }}
          />
        </div>
        <Reveal y={20} delay={140} className="max-w-md text-sm" style={{ color: "var(--bl-ink-soft)", lineHeight: 1.7 }}>
          Troy Mock Trial was founded in 2016 by two students whose vision built everything that followed.
        </Reveal>
      </div>

      {isLoading ? (
        <div className="mt-12">
          <CardGridSkeleton count={2} gridClassName="grid sm:grid-cols-2 gap-4" compact />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {founders.map((a, i) => (
            <Reveal
              key={i}
              y={30}
              delay={i * 120}
              className="rounded-[1.5rem] p-7 flex flex-col gap-5"
              style={{ background: "var(--bl-surface)" }}
            >
              <div className="flex items-center gap-5">
                {a.photo ? (
                  <img
                    src={a.photo}
                    alt={a.name}
                    loading="lazy"
                    className="w-20 h-20 rounded-[1rem] object-cover object-top shrink-0"
                  />
                ) : (
                  <MonogramAvatar name={a.name} size={80} />
                )}
                <div>
                  <h3
                    className="text-xl font-medium"
                    style={{ fontFamily: "'Onest', sans-serif", color: "var(--bl-ink)" }}
                  >
                    {a.name}
                  </h3>
                  <span className="text-[0.7rem] uppercase tracking-[0.14em] font-medium block" style={{ color: "var(--bl-gold)" }}>
                    {a.role}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.14em] block mt-0.5" style={{ color: "var(--bl-ink-soft)" }}>
                    Class of {a.graduationYear}
                  </span>
                </div>
              </div>
              {a.college && (
                <div className="text-sm pl-3" style={{ color: "var(--bl-ink)", borderLeft: "2px solid var(--bl-gold)" }}>
                  {a.college}
                  {a.major && (
                    <span className="block text-xs mt-0.5" style={{ color: "var(--bl-ink-soft)" }}>
                      {a.major}
                    </span>
                  )}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      )}

      <Reveal y={18} className="mt-10">
        <Link
          to="/alumni"
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.06em]"
          style={{ color: "var(--bl-gold)", fontFamily: "'Onest', sans-serif" }}
        >
          View All Alumni
          <ArrowRightGlyph className="w-4 h-4" />
        </Link>
      </Reveal>
    </section>
  );
}
