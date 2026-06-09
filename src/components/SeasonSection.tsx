import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MonogramAvatar from "@/components/MonogramAvatar";

const leadership2627 = [
  { role: "Co-President", name: "Reanne Elizabeth Del Valle" },
  { role: "Co-President", name: "Shri Krishna Sivakumar" },
  { role: "Vice President", name: "Yatee Nagpal" },
  { role: "Secretary", name: "Ella Xu" },
  { role: "Treasurer", name: "Annabelle Ye" },
  { role: "Publicity Commissioner", name: "Anny Jiao" },
];

export default function SeasonSection() {
  return (
    <section id="season" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary block mb-3"
        >
          Incoming Season
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="display-lg text-foreground mb-1"
        >
          2026–2027
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary text-sm mb-3"
        >
          Student Leadership
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-muted-foreground mb-10 max-w-xl text-sm"
        >
          Incoming leadership for the 2026–27 season.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {leadership2627.map((officer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-card rounded-xl border border-border p-5 flex flex-col gap-3 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MonogramAvatar name={officer.name} size={48} />
                <div>
                  <h3 className="font-playfair text-base font-semibold text-foreground">
                    {officer.name}
                  </h3>
                  <span className="label-mono text-primary text-[0.65rem]">{officer.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <Link to="/team/2026-27" className="btn-primary inline-block">
            Learn More &amp; Join
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
