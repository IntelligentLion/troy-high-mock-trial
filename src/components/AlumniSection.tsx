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
    <section id="alumni" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary block mb-4"
        >
          Alumni Honor Roll
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="display-lg text-foreground mb-4"
        >
          Our Legacy
        </motion.h2>
        <p className="text-muted-foreground mb-16 max-w-xl">
          We celebrate every graduate who helped build what Troy Mock Trial is today.
          Their legacy lives on in every case we argue.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mb-px">
          {alumni.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.19, 1, 0.22, 1] }}
              className="bg-background p-8 flex flex-col gap-4 group hover:bg-muted transition-colors duration-300"
            >
              <div>
                <h3 className="font-bebas text-2xl text-foreground tracking-wide group-hover:text-primary transition-colors">
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
        <div className="bg-primary p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <blockquote className="font-bebas text-3xl text-primary-foreground tracking-wide">
            "Once a Warrior, Always a Warrior."
          </blockquote>
          <div className="flex flex-col gap-2 text-primary-foreground/80 text-sm max-w-xs">
            <span>Are you an alumnus not listed? Reach out so we can add your legacy to our honor roll.</span>
            <a href="mailto:mocktrial@troy.edu" className="label-mono text-primary-foreground underline text-[0.65rem]">
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
