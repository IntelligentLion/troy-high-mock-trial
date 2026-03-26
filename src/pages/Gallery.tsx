import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSiteContent } from "@/hooks/useSiteContent";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] } },
};

export default function Gallery() {
  const { data } = useSiteContent();
  const gallery = data?.gallery ?? [];

  const seasons = Array.from(new Set(gallery.map((g) => g.season))).sort((a, b) => b.localeCompare(a));
  const [activeSeason, setActiveSeason] = useState<string | "all">("all");

  // Lightbox state
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Gallery — Troy High School Mock Trial";
  }, []);

  const filtered = activeSeason === "all" ? gallery : gallery.filter((g) => g.season === activeSeason);

  const openLightbox = (idx: number, btn: HTMLButtonElement) => {
    triggerRef.current = btn;
    setLightboxIdx(idx);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIdx(null);
    triggerRef.current?.focus();
  }, []);

  const prevPhoto = useCallback(() => {
    setLightboxIdx((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  const nextPhoto = useCallback(() => {
    setLightboxIdx((i) => (i !== null ? (i + 1) % filtered.length : null));
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightboxIdx, closeLightbox, prevPhoto, nextPhoto]);

  // Focus trap
  useEffect(() => {
    if (lightboxIdx !== null && lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, [lightboxIdx]);

  const ALL_SEASONS = ["2016-2017", "2017-2018", "2019-2020", "2024-2025"];
  const displaySeasons = Array.from(new Set([...seasons, ...ALL_SEASONS])).sort((a, b) => b.localeCompare(a));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page Hero */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(160deg, hsl(var(--background)) 60%, hsl(var(--primary) / 0.10))" }}
        />
        <div className="max-w-7xl mx-auto">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="label-mono text-primary block mb-3">
            Photo Gallery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="display-xl text-foreground mb-4"
          >
            Every Season,{" "}
            <span className="gold-text">Documented</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl text-lg"
          >
            A visual journey through every season since our founding in 2016.
          </motion.p>
        </div>
      </header>

      <main>
        {/* Sticky year tab bar */}
        <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-3 overflow-x-auto">
            <div className="flex gap-2 min-w-max" role="tablist" aria-label="Filter by season">
              <button
                role="tab"
                aria-selected={activeSeason === "all"}
                onClick={() => setActiveSeason("all")}
                className={`season-pill ${activeSeason === "all" ? "active" : ""}`}
              >
                All Seasons
              </button>
              {displaySeasons.map((s) => (
                <button
                  key={s}
                  role="tab"
                  aria-selected={activeSeason === s}
                  onClick={() => setActiveSeason(s)}
                  className={`season-pill ${activeSeason === s ? "active" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeSeason}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
              >
                {filtered.map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="group">
                    <button
                      className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                      onClick={(e) => openLightbox(i, e.currentTarget)}
                      aria-label={`View full-size photo: ${item.caption || `Photo ${i + 1}`}`}
                    >
                      <div className="relative overflow-hidden rounded-lg aspect-[4/3] border border-border bg-card">
                        <img
                          src={`/${item.localPath}`}
                          alt={item.caption || `${item.season} photo`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex flex-col items-center justify-center gap-1.5">
                          <ZoomIn className="w-6 h-6 text-white" aria-hidden="true" />
                          <span className="text-white text-xs font-medium tracking-wide">View Photo</span>
                        </div>
                      </div>
                      {item.caption && (
                        <p className="mt-1.5 px-0.5 text-xs text-muted-foreground line-clamp-1 group-hover:text-foreground transition-colors">
                          {item.caption}
                        </p>
                      )}
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border border-dashed border-primary/30 rounded-xl p-12 text-center"
              >
                <p className="text-muted-foreground text-sm">
                  Photos coming soon — contact us to contribute memories from {activeSeason === "all" ? "this season" : activeSeason}.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            ref={lightboxRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
            tabIndex={-1}
            onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIdx}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-4 max-w-4xl w-full px-20"
              >
                <img
                  src={`/${filtered[lightboxIdx].localPath}`}
                  alt={filtered[lightboxIdx].caption || `Photo ${lightboxIdx + 1}`}
                  className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
                />
                {filtered[lightboxIdx].caption && (
                  <p className="text-white/80 text-sm text-center">{filtered[lightboxIdx].caption}</p>
                )}
                <span className="label-mono text-white/40 text-xs">
                  {lightboxIdx + 1} / {filtered.length} · {filtered[lightboxIdx].season}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
