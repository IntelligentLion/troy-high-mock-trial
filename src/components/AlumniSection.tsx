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
    <section id="alumni" className="section-py border-t border-border">
      <div className="max-w-7xl xl:max-w-8xl mx-auto px-6">
        <h2 className="display-lg text-foreground mb-3">
          Our Founders
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl">
          Troy Mock Trial was founded in 2016 by two students whose vision built everything
          that followed.
        </p>

        {isLoading ? (
          <div className="mb-6">
            <CardGridSkeleton count={2} gridClassName="grid sm:grid-cols-2 gap-6" compact />
          </div>
        ) : (
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {founders.map((a, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 flex flex-col gap-5 group hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-5">
                {a.photo ? (
                  <img
                    src={a.photo}
                    alt={a.name}
                    loading="lazy"
                    className="w-20 h-20 rounded-full object-cover object-top shrink-0"
                  />
                ) : (
                  <MonogramAvatar name={a.name} size={80} />
                )}
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
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
