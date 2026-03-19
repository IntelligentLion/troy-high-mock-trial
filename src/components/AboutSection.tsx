import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap, Heart } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Legal Excellence",
    desc: "We train with real case materials and compete at regional and state levels.",
  },
  {
    icon: Users,
    title: "Team Community",
    desc: "A family built on mutual respect, mentorship, and shared passion.",
  },
  {
    icon: GraduationCap,
    title: "Academic Rigor",
    desc: "We integrate legal studies, rhetoric, and civics into our practice.",
  },
  {
    icon: Heart,
    title: "Giving Back",
    desc: "Alumni return each year to mentor current members and preserve our legacy.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-12 mb-20">
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
              <span className="text-primary">Mock Trial</span>
            </motion.h2>
          </div>

          <div className="md:col-span-7 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              The Troy High School Mock Trial Team was founded in 2016 by a small
              group of passionate students and dedicated coaches who believed in the
              power of legal education. What began as an after-school club has grown
              into one of the most accomplished extracurricular teams in the district.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.19, 1, 0.22, 1] }}
              className="text-muted-foreground leading-relaxed"
            >
              Over nine seasons, we have grown from 8 founding members to a thriving
              program of 20+ competitors, coached by legal professionals who volunteer
              their time to give back to the community.
            </motion.p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-background p-8 flex flex-col gap-4"
            >
              <div className="w-10 h-10 border border-primary/30 flex items-center justify-center">
                <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-bebas text-xl tracking-wide text-foreground">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="mt-px bg-muted p-8 border-l-4 border-primary"
        >
          <span className="label-mono text-primary block mb-3">Our Mission</span>
          <p className="text-foreground leading-relaxed max-w-3xl">
            To empower high school students with the knowledge of legal processes,
            the art of advocacy, and the confidence to stand up and speak — in the
            courtroom, the classroom, and the community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
