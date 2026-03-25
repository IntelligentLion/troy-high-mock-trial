import { motion } from "framer-motion";
import { useSiteContent } from "@/hooks/useSiteContent";
import MonogramAvatar from "@/components/MonogramAvatar";

export default function SeasonSection() {
  const { data } = useSiteContent();
  const current = data?.currentYear;
  const season = current?.season ?? "2025–2026";
  const officers = current?.officers ?? [];

  return (
    <section id="season" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary block mb-3"
        >
          Current Season
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="display-lg text-foreground mb-1"
        >
          {season}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary text-sm mb-3"
        >
          Student Leadership
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-muted-foreground mb-10 max-w-xl text-sm"
        >
          Current season leadership as of 2025-2026.
        </motion.p>

        {/* Officer cards */}
        {officers.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {officers.map((officer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border p-5 flex flex-col gap-3 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {officer.photo ? (
                    <img
                      src={officer.photo}
                      alt={officer.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover object-top shrink-0"
                    />
                  ) : (
                    <MonogramAvatar name={officer.name} size={48} />
                  )}
                  <div>
                    <h3 className="font-playfair text-base font-semibold text-foreground">
                      {officer.name}
                    </h3>
                    <span className="label-mono text-primary text-[0.65rem]">{officer.role}</span>
                  </div>
                </div>
                {officer.description && (
                  <p className="text-muted-foreground text-xs leading-relaxed border-t border-border pt-3">
                    {officer.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Competition resources */}
        {data?.competition?.resources?.length ? (
          <div className="mt-8 bg-card rounded-xl border border-border p-6">
            <span className="label-mono text-muted-foreground block mb-3">Competition Materials</span>
            <ul className="flex flex-col gap-2">
              {data.competition.resources.map((r, i) => (
                <li key={i}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
                  >
                    {r.name}
                  </a>
                  <span className="label-mono text-muted-foreground text-[0.6rem] ml-2">{r.type}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
