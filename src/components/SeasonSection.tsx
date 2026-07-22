import { Link } from "react-router-dom";
import MonogramAvatar from "@/components/MonogramAvatar";
import { Reveal, ClipLines, Eyebrow, ArrowRightGlyph } from "@/components/baseline";

const leadership2627: { role: string; name: string; photo?: string }[] = [
  { role: "Co-President", name: "Reanne Elizabeth Del Valle", photo: "/assets/images/members/reanne-del-valle.jpg" },
  { role: "Co-President", name: "Shri Krishna Sivakumar", photo: "/assets/images/members/shri-krishna-sivakumar.jpg" },
  { role: "Vice President", name: "Yatee Nagpal" },
  { role: "Secretary", name: "Ella Xu", photo: "/assets/images/members/ella-xu.jpg" },
  { role: "Treasurer", name: "Annabelle Ye", photo: "/assets/images/members/annabelle-ye.jpg" },
  { role: "Publicity Commissioner", name: "Anny Jiao" },
];

export default function SeasonSection() {
  return (
    <section id="season" className="bl-band white px-6 sm:px-10 py-16 sm:py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <Reveal y={18}>
            <Eyebrow>2026 – 2027 season</Eyebrow>
          </Reveal>
          <ClipLines
            as="h2"
            lines={["Leading the", "next season"]}
            className="bl-headline mt-4"
            base={80}
            stagger={120}
            style={{ color: "var(--bl-ink)" }}
          />
        </div>
        <Reveal y={20} delay={140} className="max-w-xs text-sm" style={{ color: "var(--bl-ink-soft)" }}>
          Incoming leadership carrying the program forward into the 2026–27 season.
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {leadership2627.map((officer, i) => (
          <Reveal
            key={i}
            y={24}
            delay={i * 70}
            className="rounded-[1.5rem] p-5 flex items-center gap-4"
            style={{ background: "var(--bl-surface)" }}
          >
            {officer.photo ? (
              <img
                src={officer.photo}
                alt={`Headshot of ${officer.name}`}
                width={48}
                height={48}
                loading="lazy"
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
            ) : (
              <MonogramAvatar name={officer.name} size={48} />
            )}
            <div className="min-w-0">
              <h3
                className="text-base font-medium"
                style={{ fontFamily: "'Onest', sans-serif", color: "var(--bl-ink)" }}
              >
                {officer.name}
              </h3>
              <span
                className="text-[0.7rem] uppercase tracking-[0.14em] font-medium"
                style={{ color: "var(--bl-gold)" }}
              >
                {officer.role}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal y={20} className="mt-10">
        <Link to="/team" className="bl-pill solid">
          Learn More &amp; Join <ArrowRightGlyph className="w-4 h-4" />
        </Link>
      </Reveal>
    </section>
  );
}
