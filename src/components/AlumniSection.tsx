import { motion } from "framer-motion";
import { useSiteContent } from "@/hooks/useSiteContent";
import MonogramAvatar from "@/components/MonogramAvatar";

export default function AlumniSection() {
  const { data } = useSiteContent();
  const alumni = data?.alumni ?? [];

  return (
    <section id="alumni" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary block mb-3"
        >
          Alumni Honor Roll
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="display-lg text-foreground mb-3"
        >
          Our Legacy
        </motion.h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          We celebrate every graduate who helped build what our program is today.
          Their legacy lives on in every case we argue.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {alumni.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="bg-card rounded-xl border border-border p-6 flex flex-col gap-4 group hover:border-primary/40 transition-colors"
            >
              {/* Photo + name row */}
              <div className="flex items-center gap-3">
                {a.photo ? (
                  <img
                    src={a.photo}
                    alt={a.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover object-top shrink-0 grayscale"
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
                    {a.years.join(", ")} · Class of {a.graduationYear}
                  </span>
                </div>
              </div>

              {/* College */}
              {a.college && (
                <div className="text-sm text-foreground border-l-2 border-primary pl-3">
                  {a.college}
                  {a.major && (
                    <span className="block text-xs text-muted-foreground mt-0.5">{a.major}</span>
                  )}
                </div>
              )}

              {/* Achievements */}
              {a.achievements.length > 0 && (
                <ul className="flex flex-col gap-1">
                  {a.achievements.slice(0, 3).map((ach, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary shrink-0">—</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quote strip */}
        <div
          className="rounded-xl p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(43, 80%, 68%))" }}
        >
          <blockquote
            className="font-playfair text-2xl font-bold italic"
            style={{ color: "hsl(var(--primary-foreground))" }}
          >
            "Once a Warrior, Always a Warrior."
          </blockquote>
          <div
            className="flex flex-col gap-2 text-sm max-w-xs"
            style={{ color: "hsl(var(--primary-foreground) / 0.85)" }}
          >
            <span>Are you an alumnus not listed? Reach out so we can add your legacy to our honor roll.</span>
            <a
              href="https://www.instagram.com/ths_mocktrial/"
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono underline text-[0.65rem]"
              style={{ color: "hsl(var(--primary-foreground))" }}
            >
              @ths_mocktrial →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
