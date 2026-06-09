import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteContent } from "@/hooks/useSiteContent";
import MonogramAvatar from "@/components/MonogramAvatar";
import { CardGridSkeleton } from "@/components/CardSkeleton";

const FOUNDER_NAMES = ["Ashley Fan", "Hayley Amo"];

export default function AlumniSection() {
  const { data, isLoading } = useSiteContent();
  const founders = (data?.alumni ?? []).filter((a) => FOUNDER_NAMES.includes(a.name));

  return (
    <section id="alumni" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <span className="label-mono text-primary block mb-3">
          Alumni Honor Roll
        </span>
        <h2 className="display-lg text-foreground mb-3">
          Our Founders
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Troy Mock Trial was founded in 2016 by two students whose vision built everything
          that followed.
        </p>

        {isLoading ? (
          <div className="mb-8">
            <CardGridSkeleton count={2} gridClassName="grid sm:grid-cols-2 gap-6" compact />
          </div>
        ) : (
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {founders.map((a, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 flex flex-col gap-4 group hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                {a.photo ? (
                  <img
                    src={a.photo}
                    alt={a.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover object-top shrink-0"
                  />
                ) : (
                  <MonogramAvatar name={a.name} size={48} />
                )}
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {a.name}
                  </h3>
                  <span className="label-mono text-primary text-[0.65rem]">{a.role}</span>
                  <span className="label-mono text-muted-foreground text-[0.6rem] block">
                    Class of {a.graduationYear}
                  </span>
                </div>
              </div>
              {a.college && (
                <div className="text-sm text-foreground border-l-2 border-primary pl-3">
                  {a.college}
                  {a.major && (
                    <span className="block text-xs text-muted-foreground mt-0.5">{a.major}</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        )}

        <Link
          to="/alumni"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
        >
          View All Alumni
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
