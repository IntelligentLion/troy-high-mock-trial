import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSiteContent } from "@/hooks/useSiteContent";

type Season = string;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
  },
};

export default function GallerySection() {
  const { data } = useSiteContent();
  const gallery = data?.gallery ?? [];

  // Derive unique seasons from data, sorted newest first
  const seasons: Season[] = Array.from(
    new Set(gallery.map((g) => g.season))
  ).sort((a, b) => b.localeCompare(a));

  const [activeSeason, setActiveSeason] = useState<Season | "all">("all");

  const filtered =
    activeSeason === "all" ? gallery : gallery.filter((g) => g.season === activeSeason);

  return (
    <section id="gallery" className="py-24 border-t border-border">
      <div className="max-w-7xl xl:max-w-8xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary block mb-3"
        >
          Photo Gallery
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="display-lg text-foreground mb-3"
        >
          Every Season, <span className="gold-text">Documented</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-10 max-w-xl"
        >
          A visual journey through every season since our founding in 2016.
        </motion.p>

        {/* Season selector */}
        <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm py-4 mb-10 -mx-6 px-6 border-b border-border">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSeason("all")}
              className={`season-pill ${activeSeason === "all" ? "active" : ""}`}
            >
              All Seasons
            </button>
            {seasons.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSeason(s)}
                className={`season-pill ${activeSeason === s ? "active" : ""}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeason}
            className="gallery-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
          >
            {filtered.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={`/${item.localPath}`}
                    alt={item.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-sm text-foreground font-medium">{item.caption}</span>
                  <span className="label-mono text-muted-foreground text-[0.6rem]">{item.season}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-muted-foreground text-sm text-center py-12">
            No photos available for this season.
          </p>
        )}
      </div>
    </section>
  );
}
