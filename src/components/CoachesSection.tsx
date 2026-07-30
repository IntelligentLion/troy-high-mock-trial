import { useSiteContent } from "@/hooks/useSiteContent";
import MonogramAvatar from "@/components/MonogramAvatar";
import { CardGridSkeleton } from "@/components/CardSkeleton";
import { Reveal, ClipLines } from "@/components/baseline";

export default function CoachesSection() {
  const { data, isLoading } = useSiteContent();
  const coaches = data?.team?.coaches ?? [];

  return (
    <section id="coaches" className="bl-band surface px-6 sm:px-10 py-16 sm:py-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <ClipLines
            as="h2"
            lines={["Trusted by", "serious advocates"]}
            className="bl-headline mt-4"
            base={80}
            stagger={120}
            style={{ color: "var(--bl-ink)" }}
          />
        </div>
        <Reveal y={20} delay={140} className="max-w-sm text-sm" style={{ color: "var(--bl-ink-soft)", lineHeight: 1.7 }}>
          Legal professionals volunteering their time to build the next generation of advocates at
          Troy High School, Fullerton CA.
        </Reveal>
      </div>

      {isLoading ? (
        <div className="mt-12">
          <CardGridSkeleton count={2} gridClassName="grid md:grid-cols-2 gap-4" />
        </div>
      ) : coaches.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {coaches.map((coach, i) => (
            <Reveal
              key={i}
              y={26}
              delay={i * 90}
              className="rounded-[1.5rem] p-6 flex items-start gap-5"
              style={{ background: "var(--bl-white)", border: "1px solid var(--bl-hairline)" }}
            >
              {coach.photo ? (
                <img
                  src={coach.photo}
                  alt={coach.name}
                  loading="lazy"
                  className="w-24 h-24 rounded-[1rem] object-cover object-center shrink-0"
                />
              ) : (
                <MonogramAvatar name={coach.name} size={96} />
              )}
              <div>
                <h3
                  className="text-xl font-medium mb-1"
                  style={{ fontFamily: "'Onest', sans-serif", color: "var(--bl-ink)" }}
                >
                  {coach.name}
                </h3>
                <span
                  className="text-[0.7rem] uppercase tracking-[0.14em] font-medium block mb-3"
                  style={{ color: "var(--bl-gold)" }}
                >
                  {coach.role}
                </span>
                {coach.bio && (
                  <p className="text-sm leading-relaxed" style={{ color: "var(--bl-ink-soft)" }}>
                    {coach.bio}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div
          className="rounded-[1.5rem] p-10 text-center mt-12"
          style={{ background: "var(--bl-white)", border: "1px solid var(--bl-hairline)" }}
        >
          <p className="text-sm" style={{ color: "var(--bl-ink-soft)" }}>
            Coach information not available in public records. Contact us at{" "}
            <a
              href="https://www.instagram.com/ths_mocktrial/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--bl-gold)" }}
            >
              @ths_mocktrial
            </a>{" "}
            to get in touch.
          </p>
        </div>
      )}
    </section>
  );
}
