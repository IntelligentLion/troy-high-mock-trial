import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] },
  }),
};

const pillarIcons = [BookOpen, GraduationCap, Users];
const pillarKeys = ["legalStudies", "competition", "skills"] as const;
const pillarTitles = ["Legal Studies", "Competition", "Advocacy & Communication"];

export default function AboutSection() {
  const { data } = useSiteContent();
  const team = data?.team;

  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="label-mono text-primary block mb-4"
            >
              Who We Are
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="display-md text-foreground"
            >
              Troy High School
              <br />
              <span className="gold-text">Mock Trial</span>
            </motion.h2>
          </div>

          <div className="md:col-span-7 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-muted-foreground leading-relaxed"
            >
              {team?.description ??
                "Troy Mock Trial is aimed at introducing students to the field of law, offering real-life trial experience, and fostering effective communication skills."}
            </motion.p>
          </div>
        </div>

        {/* Pillars from core values */}
        {team?.coreValues && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillarKeys.map((key, i) => {
              const Icon = pillarIcons[i];
              return (
                <motion.div
                  key={key}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="bg-card rounded-xl border border-border p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl border border-primary/30 flex items-center justify-center bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-foreground">
                    {pillarTitles[i]}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {team.coreValues[key]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Mission strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 bg-card rounded-xl border border-primary/30 p-8"
          style={{ borderLeft: "4px solid hsl(var(--primary))" }}
        >
          <span className="label-mono text-primary block mb-3">Competing In</span>
          <p className="text-foreground leading-relaxed max-w-3xl">
            The <strong className="text-primary">Constitutional Rights Foundation – Orange County (CRF-OC)</strong> Mock Trial program and the{" "}
            <strong className="text-primary">JSerra Catholic High School Mock Trial Tournament</strong> — competing annually against teams across Orange, Riverside, and Santa Clara counties.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
