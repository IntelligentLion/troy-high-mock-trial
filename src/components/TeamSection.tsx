import { motion } from "framer-motion";
import { Scale, Trophy, Award } from "lucide-react";

const officers = [
  {
    name: "Alexandra Chen",
    role: "Team Captain",
    grade: "12th Grade",
    awards: ["Best Attorney – Regionals 2025", "All-Star Team 2025"],
  },
  {
    name: "Marcus Thompson",
    role: "Vice Captain / Head Attorney",
    grade: "12th Grade",
    awards: ["Outstanding Witness – State 2025"],
  },
  {
    name: "Priya Patel",
    role: "Secretary",
    grade: "11th Grade",
    awards: ["Best Opening Statement – Classic 2024"],
  },
  {
    name: "Jordan Williams",
    role: "Treasurer",
    grade: "11th Grade",
    awards: [],
  },
];

const members = [
  { name: "Sofia Rodriguez", role: "Attorney", grade: "12th", awards: ["Best Cross Examination – Regionals 2025"] },
  { name: "Ethan Park", role: "Witness", grade: "11th", awards: ["Outstanding Witness – Classic 2024"] },
  { name: "Isabella Nguyen", role: "Attorney", grade: "10th", awards: [] },
  { name: "Liam Foster", role: "Witness", grade: "10th", awards: [] },
  { name: "Amara Jackson", role: "Attorney", grade: "11th", awards: ["Best Closing Argument – State 2025"] },
  { name: "Noah Kim", role: "Witness", grade: "9th", awards: [] },
];

export default function TeamSection() {
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
          The talented individuals who represent us in competition.
        </p>

        {/* Officers */}
        <div className="mb-8">
          <span className="label-mono text-muted-foreground block mb-5">Team Officers</span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {officers.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border p-5 flex flex-col gap-3 hover:border-primary/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg border border-primary/30 flex items-center justify-center bg-primary/10">
                  <Scale className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-foreground">{m.name}</h3>
                  <span className="label-mono text-primary text-[0.65rem]">{m.role}</span>
                  <span className="label-mono text-muted-foreground text-[0.6rem] block">{m.grade}</span>
                </div>
                {m.awards.length > 0 && (
                  <div className="border-t border-border pt-3 flex flex-col gap-1">
                    {m.awards.map((a, j) => (
                      <span key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Trophy className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                        {a}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Members */}
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
                className="bg-card rounded-xl border border-border p-5 flex flex-col gap-2 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                  <h3 className="font-playfair text-base font-semibold text-foreground">{m.name}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="label-mono text-primary text-[0.65rem]">{m.role}</span>
                  <span className="label-mono text-muted-foreground text-[0.6rem]">Gr. {m.grade}</span>
                </div>
                {m.awards.length > 0 && (
                  <p className="text-xs text-muted-foreground pt-1">{m.awards[0]}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
