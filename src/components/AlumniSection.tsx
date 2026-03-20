import { motion } from "framer-motion";

const alumni = [
  { name: "Destiny Moore", role: "Founding Captain", years: "2016–2020", university: "Yale Law School", awards: ["Best Attorney – State 2020", "Founding Member Award"] },
  { name: "James Liu", role: "Founding Member", years: "2016–2019", university: "UC Berkeley, Political Science", awards: ["Outstanding Witness – Regionals 2019"] },
  { name: "Taylor Brooks", role: "Captain 2020–2021", years: "2017–2021", university: "Georgetown University Law", awards: ["Best Attorney – Virtual State 2021", "Spirit Award 2021"] },
  { name: "Nadia Hassan", role: "Head Attorney", years: "2018–2022", university: "Northwestern University", awards: ["Best Cross-Examination – Regionals 2022"] },
  { name: "Kevin Santiago", role: "Captain 2022–2023", years: "2019–2023", university: "Stanford University", awards: ["Best Attorney – Regionals 2023 (x2)", "Academic Excellence Award"] },
  { name: "Chloe Washington", role: "Captain 2023–2024", years: "2020–2024", university: "Harvard University", awards: ["Best Closing Argument – State 2024", "Most Valuable Competitor 2024"] },
];

export default function AlumniSection() {
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
              <div>
                <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {a.name}
                </h3>
                <span className="label-mono text-primary text-[0.65rem]">{a.role}</span>
                <span className="label-mono text-muted-foreground text-[0.6rem] block">{a.years}</span>
              </div>
              <div className="text-sm text-foreground border-l-2 border-primary pl-3">
                {a.university}
              </div>
              {a.awards.length > 0 && (
                <ul className="flex flex-col gap-1">
                  {a.awards.map((aw, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary shrink-0">—</span>
                      {aw}
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
          <blockquote className="font-playfair text-2xl font-bold italic" style={{ color: "hsl(var(--primary-foreground))" }}>
            "Once a Warrior, Always a Warrior."
          </blockquote>
          <div className="flex flex-col gap-2 text-sm max-w-xs" style={{ color: "hsl(var(--primary-foreground) / 0.85)" }}>
            <span>Are you an alumnus not listed? Reach out so we can add your legacy to our honor roll.</span>
            <a href="mailto:mocktrial@westside.edu" className="label-mono underline text-[0.65rem]" style={{ color: "hsl(var(--primary-foreground))" }}>
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
