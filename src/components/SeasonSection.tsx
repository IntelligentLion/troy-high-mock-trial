import { motion } from "framer-motion";

const results = [
  { label: "Fall Scrimmage", status: "Won 2–0", date: "Oct 2025", done: true },
  { label: "Regionals Status", status: "Advanced", date: "Nov 2025", done: true },
  { label: "State Competition", status: "Upcoming", date: "Mar 2026", done: false },
];

const schedule = [
  { date: "Oct 18, 2025", event: "Fall Scrimmage – Roosevelt High School", result: "Won 2-0", done: true },
  { date: "Nov 8, 2025", event: "Regional Qualifier Tournament", result: "Advanced", done: true },
  { date: "Jan 24, 2026", event: "District Regional Championship", result: "Upcoming", done: false },
  { date: "Feb 14, 2026", event: "State Qualifying Round", result: "Upcoming", done: false },
  { date: "Mar 7, 2026", event: "State Championship – Capitol Courthouse", result: "Upcoming", done: false },
];

export default function SeasonSection() {
  return (
    <section id="season" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary block mb-4"
        >
          Current Season
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="display-lg text-foreground mb-4"
        >
          2025–2026
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-muted-foreground mb-16 max-w-xl"
        >
          Follow our journey this year — events, updates, and milestones.
        </motion.p>

        {/* Milestone cards */}
        <div className="grid sm:grid-cols-3 gap-px bg-border mb-px">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="bg-background p-8"
            >
              <span className="label-mono text-muted-foreground block mb-3">{r.date}</span>
              <h3 className="font-bebas text-2xl text-foreground mb-2">{r.label}</h3>
              <span
                className={`label-mono text-sm ${
                  r.done ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {r.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Schedule table */}
        <div className="bg-muted border border-border">
          <div className="px-8 py-4 border-b border-border">
            <span className="label-mono text-muted-foreground">Schedule & Results</span>
          </div>
          {schedule.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.19, 1, 0.22, 1] }}
              className="flex items-center justify-between px-8 py-5 border-b border-border/50 last:border-0 hover:bg-background/50 transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="label-mono text-muted-foreground w-24 shrink-0">{s.date}</span>
                <span className="text-foreground text-sm">{s.event}</span>
              </div>
              <span
                className={`label-mono text-xs shrink-0 ml-4 ${
                  s.done ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {s.done ? `✓ ${s.result}` : s.result}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
