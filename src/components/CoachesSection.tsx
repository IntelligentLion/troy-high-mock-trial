import { motion } from "framer-motion";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";

const coaches = [
  {
    name: "Coach James Harmon",
    role: "Head Coach — Trial Attorney",
    tenure: "Troy Mock Trial · 2016–Present",
    bio: "James Harmon is a practicing trial attorney with over 18 years of courtroom experience. He founded the Troy Mock Trial program in 2016 and has guided the team to 5 regional championships. His expertise in cross-examination technique and case strategy is the backbone of Troy's competitive program.",
    credentials: ["J.D. — UCLA School of Law", "Bar Admitted — State of California", "Regional Mock Trial Judge (2014–2015)"],
    img: coach1,
  },
  {
    name: "Coach Sandra Reyes",
    role: "Assistant Coach — Public Defender",
    tenure: "Troy Mock Trial · 2019–Present",
    bio: "Sandra Reyes brings the perspective of a public defender to Troy's program — teaching students to argue from both sides of the aisle with equal conviction. Her background in criminal litigation and appellate work has produced some of Troy's most decorated student attorneys.",
    credentials: ["J.D. — USC Gould School of Law", "Public Defender — L.A. County (8 yrs)", "Best Brief Award — State Finals 2023"],
    img: coach2,
  },
];

export default function CoachesSection() {
  return (
    <section id="coaches" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="label-mono text-primary block mb-4"
            >
              Technical Leadership
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="display-lg text-foreground"
            >
              The Coaches
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-sm text-sm leading-relaxed"
          >
            Two legal professionals. One mission. Building the next generation
            of advocates at Troy High School.
          </motion.p>
        </div>

        {/* Coach cards */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {coaches.map((coach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="coach-card group bg-background"
            >
              {/* Photo block */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4", maxHeight: 480 }}>
                <img
                  src={coach.img}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top grayscale transition-transform duration-700 group-hover:scale-105"
                />
                {/* Red overlay on hover */}
                <div className="coach-overlay" />
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-bebas text-3xl text-foreground tracking-wide leading-tight">
                    {coach.name}
                  </h3>
                  <span className="label-mono text-primary text-[0.65rem]">{coach.role}</span>
                </div>
              </div>

              {/* Info block */}
              <div className="p-8 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-px bg-primary" />
                  <span className="label-mono text-muted-foreground text-[0.65rem]">{coach.tenure}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{coach.bio}</p>

                <div className="border-t border-border pt-5">
                  <span className="label-mono text-primary block mb-3 text-[0.65rem]">Credentials</span>
                  <ul className="flex flex-col gap-2">
                    {coach.credentials.map((c, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="text-primary mt-0.5 text-xs shrink-0">—</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
