import { motion } from "framer-motion";
import { useSiteContent } from "@/hooks/useSiteContent";

export default function TeamSection() {
  const { data } = useSiteContent();
  const members = data?.currentYear?.members ?? [];
  const season = data?.currentYear?.season ?? "2025–2026";

  return (
    <section id="team" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary block mb-3"
        >
          Members
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
          The student members of Troy Mock Trial competing in the {season} season.
        </p>

        {members.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="bg-card rounded-xl border border-border p-5 flex items-center gap-3 hover:border-primary/40 transition-colors"
              >
                {m.photo && (
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                )}
                <div>
                  <h3 className="font-playfair text-sm font-semibold text-foreground">{m.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-xl border border-border p-10 text-center">
            <p className="text-muted-foreground text-sm">
              Roster information for this season is coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
