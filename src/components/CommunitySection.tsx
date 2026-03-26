import { motion } from "framer-motion";
import { GraduationCap, Scale, Star, BookOpen, Users, Trophy, Mail } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const pillars = [
  { icon: GraduationCap, title: "Mentorship Program", desc: "Senior members mentor newcomers, and alumni return each spring to share their legal journeys and coach current competitors." },
  { icon: Scale, title: "Legal Outreach", desc: "We compete in the CRF Mock Trial program — one of the most respected high school legal competitions in California." },
  { icon: Star, title: "Annual Banquet", desc: "Every season ends with a celebration of coaches, members, and graduates. All are welcome to attend — especially sponsors." },
  { icon: BookOpen, title: "Case Preparation", desc: "Members develop presentation skills, analytic ability, and team cooperation through intensive case preparation each season." },
  { icon: Users, title: "Team Bonding", desc: "From team dinners to study sessions, we invest in the relationships that make us stronger in and out of the courtroom." },
  { icon: Trophy, title: "Alumni Network", desc: "Our growing alumni network spans top universities and law programs — a lifelong community that opens doors for every member." },
];

export default function CommunitySection() {
  const { data } = useSiteContent();
  const instagram = data?.contact?.instagram ?? "https://www.instagram.com/ths_mocktrial/";
  const instagramHandle = data?.contact?.instagramHandle ?? "@ths_mocktrial";

  return (
    <section id="community" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary block mb-3"
        >
          Our Community
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="display-lg text-foreground mb-3"
        >
          Beyond the Courtroom
        </motion.h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Beyond competition — we build bonds, give back, and lift each other up.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-card rounded-xl border border-border p-6 flex flex-col gap-4 group hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg border border-primary/30 flex items-center justify-center bg-primary/10 group-hover:border-primary transition-colors">
                <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA join strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card rounded-xl border border-border p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div>
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
              Interested in Joining? Contact us.
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              Open to all Troy High School students. No prior legal experience required
              — just curiosity and commitment.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0 min-w-[180px]">
            <a
              href="mailto:shrikrishna0219@gmail.com?subject=Joining Troy Mock Trial"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Email Us
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              {instagramHandle}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
