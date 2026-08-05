import { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CardGridSkeleton } from "@/components/CardSkeleton";
import { useSiteContent } from "@/hooks/useSiteContent";
import { useSeo } from "@/hooks/useSeo";

export default function Alumni() {
  const { data, isLoading } = useSiteContent();
  const alumni = data?.alumni ?? [];
  const [query, setQuery] = useState("");

  useSeo({
    title: "Alumni — Troy High School Mock Trial",
    description:
      "An honor wall of every student who has shaped Troy High School Mock Trial since 2016 — and where their paths have led.",
    path: "/alumni",
  });

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return q ? alumni.filter((a) => a.name.toLowerCase().includes(q)) : alumni;
  }, [alumni, query]);

  // Group by first year active; only expose years that have data
  const { byYear, years } = useMemo(() => {
    const map: Record<string, typeof filtered> = {};
    filtered.forEach((a) => {
      const firstYear = a.years[0] ?? "2016-2017";
      if (!map[firstYear]) map[firstYear] = [];
      map[firstYear].push(a);
    });
    const sortedYears = Object.keys(map).sort((a, b) => b.localeCompare(a));
    return { byYear: map, years: sortedYears };
  }, [filtered]);

  const [openYears, setOpenYears] = useState<Set<string>>(() => new Set());

  // openYears tracks *collapsed* years; sections are open by default
  const toggleYear = (y: string) => {
    setOpenYears((prev) => {
      const next = new Set(prev);
      if (next.has(y)) next.delete(y); // re-open
      else next.add(y); // collapse
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page Hero */}
      <header className="relative hero-py px-6 overflow-hidden border-b border-border">
        <div className="max-w-7xl xl:max-w-8xl mx-auto">
          <h1 className="display-xl text-foreground mb-4">
            Those Who Came Before
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            A permanent record of every student who shaped this program since 2016.
            Their names belong on these walls.
          </p>
        </div>
      </header>

      <main className="py-8">
        <div className="max-w-7xl xl:max-w-8xl mx-auto px-6">
          {/* Search */}
          <div className="relative mb-12 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search alumni by name…"
              className="w-full bg-card border border-border rounded-xl pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
              aria-label="Search alumni by name"
            />
          </div>

          {/* Year sections */}
          {isLoading ? (
            <CardGridSkeleton count={6} gridClassName="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" />
          ) : (
          <div className="flex flex-col gap-8">
            {years.map((year) => {
              const people = byYear[year] ?? [];
              const isOpen = !openYears.has(year); // default open

              return (
                <section key={year} aria-labelledby={`year-${year}`}>
                  <button
                    id={`year-${year}`}
                    onClick={() => toggleYear(year)}
                    className="w-full flex items-center justify-between gap-4 group mb-4"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${year}`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <h2 className="font-playfair text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {year}
                      </h2>
                      <span className="label-mono text-muted-foreground text-xs">
                        {people.length} {people.length === 1 ? "member" : "members"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-px flex-1 bg-border mx-4 hidden sm:block" />
                      <ChevronDown
                        className="w-5 h-5 text-muted-foreground transition-transform duration-200"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div id={`panel-${year}`} role="region" aria-labelledby={`year-${year}`}>
                      {people.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {people.map((a, i) => (
                            <article
                              key={i}
                              className="bg-card rounded-xl border border-border p-5 flex flex-col gap-3 hover:border-primary/40 transition-colors group"
                            >
                              <div className="flex items-center gap-3">
                                {a.photo && (
                                  <img
                                    src={a.photo}
                                    alt={a.name}
                                    loading="lazy"
                                    className="w-16 h-16 rounded-full object-cover object-top shrink-0"
                                  />
                                )}
                                <div className="min-w-0">
                                  <h3 className="font-playfair text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {a.name}
                                  </h3>
                                  <span className="label-mono text-primary text-[0.6rem] block">{a.role}</span>
                                  <span className="label-mono text-muted-foreground text-[0.55rem] block">
                                    Class of {a.graduationYear}
                                  </span>
                                </div>
                              </div>

                              {a.college && (
                                <div className="text-xs text-foreground border-l-2 border-primary pl-3">
                                  {a.college}
                                  {a.major && (
                                    <span className="block text-muted-foreground mt-0.5">{a.major}</span>
                                  )}
                                </div>
                              )}

                              {a.achievements.length > 0 && (
                                <ul className="flex flex-col gap-1">
                                  {a.achievements.slice(0, 2).map((ach, j) => (
                                    <li key={j} className="text-[0.7rem] text-muted-foreground flex items-start gap-1.5">
                                      <span className="text-primary shrink-0">—</span>
                                      {ach}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </article>
                          ))}
                        </div>
                      ) : (
                        <div className="border border-dashed border-border rounded-xl p-8 text-center">
                          <p className="text-muted-foreground text-sm">
                            Records for this year are being collected. If you participated in {year}, reach out to be included.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
          )}

          {/* Quote strip */}
          <div
            className="mt-16 bg-card rounded-xl border border-border p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            style={{ borderLeft: "3px solid var(--color-gold)" }}
          >
            <blockquote className="font-playfair text-2xl font-semibold text-foreground">
              "Once a Warrior, Always a Warrior."
            </blockquote>
            <div className="flex flex-col gap-2 text-sm max-w-xs text-muted-foreground">
              <span>Not listed? Reach out — your legacy belongs on this wall.</span>
              <a
                href="https://www.instagram.com/ths_mocktrial/"
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono text-primary hover:text-primary/80 transition-colors text-[0.65rem]"
              >
                @ths_mocktrial →
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
