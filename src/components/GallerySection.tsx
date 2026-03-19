import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gallery2526_1 from "@/assets/gallery-2526-1.jpg";
import gallery2425_1 from "@/assets/gallery-2425-1.jpg";
import gallery2324_1 from "@/assets/gallery-2324-1.jpg";

type Season = "2025-26" | "2024-25" | "2023-24" | "2022-23" | "2021-22";

const seasons: { id: Season; label: string }[] = [
  { id: "2025-26", label: "25–26 (Current)" },
  { id: "2024-25", label: "24–25" },
  { id: "2023-24", label: "23–24" },
  { id: "2022-23", label: "22–23" },
  { id: "2021-22", label: "21–22" },
];

type GalleryItem = {
  img?: string;
  caption: string;
  label: string;
  comingSoon?: boolean;
};

const galleryData: Record<Season, { headline: string; items: GalleryItem[] }> = {
  "2025-26": {
    headline: "2025–2026 Season — In Progress",
    items: [
      { img: gallery2526_1, caption: "Regional Qualifier", label: "Nov 2025" },
      { comingSoon: true, caption: "State Championship", label: "Mar 2026" },
      { comingSoon: true, caption: "Team Portrait", label: "Coming Soon" },
      { comingSoon: true, caption: "Awards Banquet", label: "Coming Soon" },
    ],
  },
  "2024-25": {
    headline: "2024–2025 — State Semifinalists",
    items: [
      { img: gallery2425_1, caption: "State Trophy Ceremony", label: "Best Season in Team History" },
      { comingSoon: true, caption: "Team Photo", label: "2024–25" },
      { comingSoon: true, caption: "In the Courtroom", label: "2024–25" },
      { comingSoon: true, caption: "Awards Banquet", label: "2024–25" },
    ],
  },
  "2023-24": {
    headline: "2023–2024 — Regional Champions",
    items: [
      { img: gallery2324_1, caption: "Regional Trophy Ceremony", label: "Spring 2024" },
      { comingSoon: true, caption: "Team Photo", label: "2023–24" },
      { comingSoon: true, caption: "In the Courtroom", label: "2023–24" },
    ],
  },
  "2022-23": {
    headline: "2022–2023 — District Finalists",
    items: [
      { comingSoon: true, caption: "Team Photo", label: "2022–23" },
      { comingSoon: true, caption: "Competition Day", label: "2022–23" },
      { comingSoon: true, caption: "Awards Night", label: "2022–23" },
    ],
  },
  "2021-22": {
    headline: "2021–2022 Season",
    items: [
      { comingSoon: true, caption: "Team Photo", label: "2021–22" },
      { comingSoon: true, caption: "Competition Day", label: "2021–22" },
    ],
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] } },
};

export default function GallerySection() {
  const [activeSeason, setActiveSeason] = useState<Season>("2025-26");
  const data = galleryData[activeSeason];

  return (
    <section id="gallery" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-mono text-primary block mb-4"
        >
          Photo Gallery
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="display-lg text-foreground mb-4"
        >
          Every Season, <span className="text-primary">Documented</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-12 max-w-xl"
        >
          A visual journey through every season since our founding in 2016.
        </motion.p>

        {/* Season selector — sticky segmented control */}
        <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm py-4 mb-12 -mx-6 px-6 border-b border-border">
          <div className="flex flex-wrap gap-2">
            {seasons.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSeason(s.id)}
                className={`season-pill ${activeSeason === s.id ? "active" : ""}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Season headline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeason + "-header"}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="mb-8"
          >
            <h3 className="font-bebas text-3xl text-foreground">{data.headline}</h3>
          </motion.div>
        </AnimatePresence>

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
            {data.items.map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="group relative overflow-hidden border border-border bg-muted">
                {item.comingSoon ? (
                  <div
                    className="aspect-[4/3] flex flex-col items-center justify-center gap-3"
                    style={{ background: "hsl(var(--muted))" }}
                  >
                    <span
                      className="font-bebas text-4xl tracking-widest"
                      style={{ color: "hsl(var(--border))" }}
                    >
                      COMING SOON
                    </span>
                    <span className="label-mono text-muted-foreground text-[0.6rem]">{item.label}</span>
                  </div>
                ) : (
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={item.img}
                      alt={item.caption}
                      className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-sm text-foreground font-medium">{item.caption}</span>
                  <span className="label-mono text-muted-foreground text-[0.6rem]">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="label-mono text-muted-foreground mt-8 text-[0.65rem]">
          * Photo placeholders — replace with actual team photos.
        </p>
      </div>
    </section>
  );
}
