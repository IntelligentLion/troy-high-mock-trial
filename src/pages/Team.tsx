import { Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MonogramAvatar from "@/components/MonogramAvatar";
import { CardGridSkeleton } from "@/components/CardSkeleton";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useSeo } from "@/hooks/useSeo";

export default function Team() {
  const { data, isLoading } = useSiteContent();
  const officers = data?.currentYear?.officers ?? [];
  const members = data?.currentYear?.members ?? [];
  const coaches = data?.team?.coaches ?? [];
  const season = data?.currentYear?.season ?? "2025–2026";

  useSeo({
    title: "Team — Troy High School Mock Trial",
    description:
      "Meet the 2025–26 officers, members, coaches, and faculty advisors representing Troy High School Mock Trial in competition.",
    path: "/team",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page Hero */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(160deg, hsl(var(--background)) 60%, hsl(var(--primary) / 0.12))" }}
        />
        <div className="max-w-7xl mx-auto">
          <span className="label-mono text-primary block mb-3">
            {season} Season
          </span>
          <h1 className="display-xl text-foreground mb-4">
            2025–2026 Team
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            Meet the officers and members representing Troy High School in competition this season.
          </p>
        </div>
      </header>

      <main>
        {/* Officers */}
        <section className="py-16 border-t border-border" aria-labelledby="officers-heading">
          <div className="max-w-7xl mx-auto px-6">
            <span className="label-mono text-muted-foreground block mb-2">Leadership</span>
            <h2 id="officers-heading" className="display-lg text-foreground mb-10">Officers</h2>

            {isLoading ? (
              <CardGridSkeleton count={6} />
            ) : officers.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {officers.map((m, i) => (
                  <article
                    key={i}
                    className="bg-card rounded-xl border border-primary/30 p-6 flex flex-col gap-4 hover:border-primary/60 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        {m.photo ? (
                          <img
                            src={m.photo}
                            alt={m.name}
                            loading="lazy"
                            className="w-16 h-16 rounded-full object-cover object-top shrink-0 ring-2 ring-primary/60"
                          />
                        ) : (
                          <MonogramAvatar name={m.name} size={64} />
                        )}
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <h3 className="font-playfair text-xl font-semibold text-foreground">{m.name}</h3>
                        <span className="label-mono text-primary text-[0.65rem]">{m.role}</span>
                      </div>
                    </div>

                    {m.competitions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {m.competitions.map((c, j) => (
                          <span key={j} className="px-2 py-0.5 rounded-full bg-background border border-border text-[0.65rem] label-mono text-muted-foreground">
                            {c}
                          </span>
                        ))}
                      </div>
                    )}

                    {m.awards.length > 0 && (
                      <ul className="flex flex-col gap-1.5">
                        {m.awards.map((aw, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Trophy className="w-3 h-3 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                            {aw}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-card rounded-xl border border-border p-10 text-center">
                <p className="text-muted-foreground text-sm">Officer information for this season is coming soon.</p>
              </div>
            )}
          </div>
        </section>

        {/* Members */}
        <section className="py-16 border-t border-border" aria-labelledby="members-heading">
          <div className="max-w-7xl mx-auto px-6">
            <span className="label-mono text-muted-foreground block mb-2">Roster</span>
            <h2 id="members-heading" className="display-lg text-foreground mb-10">Team Members</h2>

            {isLoading ? (
              <CardGridSkeleton count={8} gridClassName="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" compact />
            ) : members.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {members.map((m, i) => (
                  <article
                    key={i}
                    className="bg-card rounded-xl border border-border p-4 flex items-center gap-3 hover:border-primary/40 transition-colors"
                  >
                    <MonogramAvatar name={m.name} size={40} />
                    <div className="min-w-0">
                      <h3 className="font-playfair text-sm font-semibold text-foreground truncate">{m.name}</h3>
                      <span className="label-mono text-primary text-[0.6rem]">{m.role}</span>
                      {m.awards.length > 0 && (
                        <span className="flex items-center gap-1 text-[0.6rem] text-muted-foreground mt-0.5">
                          <Trophy className="w-2.5 h-2.5 text-primary" aria-hidden="true" />
                          {m.awards[0]}
                        </span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-card rounded-xl border border-border p-10 text-center">
                <p className="text-muted-foreground text-sm">Roster information for this season is coming soon.</p>
              </div>
            )}
          </div>
        </section>

        {/* Coaches & Faculty Advisors */}
        <section className="py-16 border-t border-border" aria-labelledby="coaches-heading">
          <div className="max-w-7xl mx-auto px-6">
            <span className="label-mono text-muted-foreground block mb-2">Program Support</span>
            <h2 id="coaches-heading" className="display-lg text-foreground mb-10">
              Coaches &amp; Faculty Advisors
            </h2>

            {isLoading ? (
              <CardGridSkeleton count={3} gridClassName="grid md:grid-cols-2 gap-6" compact />
            ) : coaches.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {coaches.map((coach, i) => (
                  <article
                    key={i}
                    className="bg-card rounded-xl border border-border p-6 flex items-start gap-5 hover:border-primary/40 transition-colors"
                  >
                    {coach.photo ? (
                      <img
                        src={coach.photo}
                        alt={coach.name}
                        loading="lazy"
                        className="w-16 h-16 rounded-full object-cover object-top shrink-0"
                      />
                    ) : (
                      <MonogramAvatar name={coach.name} size={64} />
                    )}
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-foreground mb-1">{coach.name}</h3>
                      <span className="label-mono text-primary text-[0.65rem] block">{coach.role}</span>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-card rounded-xl border border-border p-10 text-center">
                <p className="text-muted-foreground text-sm">Coach information is coming soon.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
