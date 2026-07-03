import { useSiteContent } from "@/hooks/useSiteContent";
import MonogramAvatar from "@/components/MonogramAvatar";
import { CardGridSkeleton } from "@/components/CardSkeleton";

export default function CoachesSection() {
  const { data, isLoading } = useSiteContent();
  const coaches = data?.team?.coaches ?? [];

  return (
    <section id="coaches" className="section-py border-t border-border">
      <div className="max-w-7xl xl:max-w-8xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 flex-wrap gap-6">
          <div>
            <h2 className="display-lg text-foreground">
              The Coaches
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Legal professionals volunteering their time to build the next generation
            of advocates at Troy High School, Fullerton CA.
          </p>
        </div>

        {isLoading ? (
          <CardGridSkeleton count={3} gridClassName="grid md:grid-cols-2 gap-6" />
        ) : coaches.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {coaches.map((coach, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border p-6 flex items-start gap-5 hover:border-primary/40 transition-colors"
              >
                {coach.photo ? (
                  <img
                    src={coach.photo}
                    alt={coach.name}
                    loading="lazy"
                    className="w-24 h-24 rounded-full object-cover object-center shrink-0"
                  />
                ) : (
                  <MonogramAvatar name={coach.name} size={96} />
                )}
                <div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-1">
                    {coach.name}
                  </h3>
                  <span className="label-mono text-primary text-[0.65rem] block mb-3">{coach.role}</span>
                  {coach.bio && (
                    <p className="text-muted-foreground text-sm leading-relaxed">{coach.bio}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-xl border border-border p-10 text-center">
            <p className="text-muted-foreground text-sm">
              Coach information not available in public records.
              Contact us at{" "}
              <a
                href="https://www.instagram.com/ths_mocktrial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                @ths_mocktrial
              </a>{" "}
              to get in touch.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
