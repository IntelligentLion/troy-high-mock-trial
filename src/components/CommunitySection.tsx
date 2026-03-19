import { motion } from "framer-motion";
import { GraduationCap, Scale, Star, BookOpen, Users, Trophy } from "lucide-react";

const pillars = [
  { icon: GraduationCap, title: "Mentorship Program", desc: "Senior members mentor newcomers, and alumni return each spring to share their legal journeys and coach current competitors." },
  { icon: Scale, title: "Legal Outreach", desc: "We visit local middle schools to introduce students to mock trial and civic education — growing the next generation of advocates." },
  { icon: Star, title: "Annual Banquet", desc: "Every season ends with a celebration of our athletes, coaches, sponsors, and alumni. All are welcome to attend." },
  { icon: BookOpen, title: "Study Sessions", desc: "Weekly group study sessions keep members sharp on case law, legal reasoning, and trial procedure throughout the year." },
  { icon: Users, title: "Team Bonding", desc: "From escape rooms to team dinners, we invest in the relationships that make us stronger in and out of the courtroom." },
  { icon: Trophy, title: "Alumni Network", desc: "Our growing alumni network spans top universities and law programs — a lifelong community that opens doors for every member." },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary block mb-4"
        >
          Our Community
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="display-lg text-foreground mb-4"
        >
          Beyond the Courtroom
        </motion.h2>
        <p className="text-muted-foreground mb-16 max-w-xl">
          Beyond competition — we build bonds, give back, and lift each other up.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mb-px">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
              className="bg-background p-8 flex flex-col gap-4 group hover:bg-muted transition-colors duration-300"
            >
              <div className="w-10 h-10 border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-bebas text-xl text-foreground tracking-wide">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA join strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="bg-muted border border-border p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div>
            <h3 className="font-bebas text-3xl text-foreground mb-2">Interested in Joining?</h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              Open to all Troy High School students. No prior legal experience required
              — just curiosity and commitment.
            </p>
          </div>
          <a href="mailto:mocktrial@troy.edu" className="btn-primary shrink-0">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
