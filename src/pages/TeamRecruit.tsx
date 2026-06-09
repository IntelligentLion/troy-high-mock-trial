import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MonogramAvatar from "@/components/MonogramAvatar";
import { useSeo } from "@/hooks/useSeo";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd1R5LAGbsbXUDEIflfxjKfmNFpfs2NrOf9yQw2JLcFODozGA/viewform?usp=publish-editor";

const leadership = [
  { role: "Co-President", name: "Reanne Elizabeth Del Valle" },
  { role: "Co-President", name: "Shri Krishna Sivakumar" },
  { role: "Vice President", name: "Yatee Nagpal" },
  { role: "Secretary", name: "Ella Xu" },
  { role: "Treasurer", name: "Annabelle Ye" },
  { role: "Publicity Commissioner", name: "Anny Jiao" },
];

export default function TeamRecruit() {
  useSeo({
    title: "2026–27 Team — Troy High School Mock Trial",
    description:
      "Meet the incoming 2026–27 leadership of Troy High School Mock Trial and find out how to join the team for the new season.",
    path: "/team/2026-27",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page Hero */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(160deg, hsl(var(--background)) 60%, hsl(var(--primary) / 0.12))" }}
        />
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="label-mono text-primary block mb-3"
          >
            2026–2027 Season
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="display-xl text-foreground mb-4"
          >
            2026–2027 Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl text-lg"
          >
            Meet the incoming leadership and learn how to join Troy Mock Trial for the 2026–27 season.
          </motion.p>
        </div>
      </header>

      <main>
        {/* Leadership */}
        <section className="py-16 border-t border-border" aria-labelledby="leadership-heading">
          <div className="max-w-7xl mx-auto px-6">
            <span className="label-mono text-muted-foreground block mb-2">Leadership</span>
            <h2 id="leadership-heading" className="display-lg text-foreground mb-10">
              Officers
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadership.map((officer, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-card rounded-xl border border-primary/30 p-6 flex items-center gap-4 hover:border-primary/60 transition-colors"
                >
                  <MonogramAvatar name={officer.name} size={56} />
                  <div className="min-w-0">
                    <h3 className="font-playfair text-lg font-semibold text-foreground leading-tight">
                      {officer.name}
                    </h3>
                    <span className="label-mono text-primary text-[0.65rem]">{officer.role}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recruitment */}
        <section className="py-16 border-t border-border" aria-labelledby="recruit-heading">
          <div className="max-w-7xl mx-auto px-6">
            <span className="label-mono text-muted-foreground block mb-2">Recruitment</span>
            <h2 id="recruit-heading" className="display-lg text-foreground mb-4">
              Join the Team
            </h2>
            <p className="text-muted-foreground max-w-2xl text-base mb-8">
              Interested in competing with Troy Mock Trial in the 2026–27 season? Fill out our interest
              form and we'll reach out with details about tryouts and informational meetings.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Interest Form
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
