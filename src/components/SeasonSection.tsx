import { Link } from "react-router-dom";
import MonogramAvatar from "@/components/MonogramAvatar";

const leadership2627 = [
  { role: "Co-President", name: "Reanne Elizabeth Del Valle" },
  { role: "Co-President", name: "Shri Krishna Sivakumar" },
  { role: "Vice President", name: "Yatee Nagpal" },
  { role: "Secretary", name: "Ella Xu" },
  { role: "Treasurer", name: "Annabelle Ye" },
  { role: "Publicity Commissioner", name: "Anny Jiao" },
];

export default function SeasonSection() {
  return (
    <section id="season" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="display-lg text-foreground mb-1">
          2026–2027
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl text-sm">
          Incoming leadership for the 2026–27 season.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership2627.map((officer, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-5 flex flex-col gap-3 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MonogramAvatar name={officer.name} size={48} />
                <div>
                  <h3 className="font-playfair text-base font-semibold text-foreground">
                    {officer.name}
                  </h3>
                  <span className="label-mono text-primary text-[0.65rem]">{officer.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/team" className="btn-primary inline-block">
            Learn More &amp; Join
          </Link>
        </div>
      </div>
    </section>
  );
}
