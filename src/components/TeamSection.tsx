import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";
import MonogramAvatar from "@/components/MonogramAvatar";

export default function TeamSection() {
  const { data } = useSiteContent();
  const officers = data?.currentYear?.officers ?? [];
  const members = data?.currentYear?.members ?? [];
  const season = data?.currentYear?.season ?? "2021–2022";

  return (
    <section id="team" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary block mb-3"
        >
          Officers & Members
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="display-lg text-foreground mb-3"
        >
          The Team
        </motion.h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          {season} leadership — the individuals who represented Troy in competition.
        </p>

        {/* Officers */}
        {officers.length > 0 && (
          <div className="mb-10">
            <span className="label-mono text-muted-foreground block mb-5">Team Officers</span>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {officers.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-card rounded-xl border border-border p-5 flex items-start gap-4 hover:border-primary/40 transition-colors"
                >
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover object-top shrink-0"
                    />
                  ) : (
                    <MonogramAvatar name={m.name} size={48} />
                  )}
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="font-playfair text-base font-semibold text-foreground truncate">
                      {m.name}
                    </h3>
                    <span className="label-mono text-primary text-[0.65rem]">{m.role}</span>
                    {m.awards.length > 0 && (
                      <span className="flex items-start gap-1.5 text-xs text-muted-foreground mt-1">
                        <Trophy className="w-3 h-3 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        {m.awards[0]}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Members */}
        {members.length > 0 && (
          <div>
            <span className="label-mono text-muted-foreground block mb-5">Team Members</span>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="bg-card rounded-xl border border-border p-5 flex items-center gap-3 hover:border-primary/40 transition-colors"
                >
                  <MonogramAvatar name={m.name} size={36} />
                  <div>
                    <h3 className="font-playfair text-sm font-semibold text-foreground">{m.name}</h3>
                    <span className="label-mono text-primary text-[0.6rem]">{m.role}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {officers.length === 0 && members.length === 0 && (
          <div className="bg-card rounded-xl border border-border p-10 text-center">
            <p className="text-muted-foreground text-sm">
              Roster information is not yet available for this season.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
