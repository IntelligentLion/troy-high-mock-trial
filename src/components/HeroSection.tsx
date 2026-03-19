import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const stats = [
  { value: "9", label: "Seasons Strong" },
  { value: "50+", label: "Awards Won" },
  { value: "100+", label: "Alumni" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden bg-background">
      {/* Background texture lines */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 80px, hsl(var(--foreground)/0.5) 80px, hsl(var(--foreground)/0.5) 81px)",
        }}
      />

      {/* Red accent slash */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, hsl(var(--primary)) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="block w-10 h-px bg-primary" />
          <span className="label-mono text-primary">
            Founded 2016 · Est. Excellence
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="display-xl text-foreground"
            style={{ lineHeight: 0.88 }}
          >
            Troy High
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.19, 1, 0.22, 1] }}
            className="display-xl text-primary"
            style={{ lineHeight: 0.88 }}
          >
            Mock Trial
          </motion.h1>
        </div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="text-muted-foreground text-base max-w-xl mb-10 leading-relaxed"
        >
          "Justice is the foundation of every great society." Preparing the
          next generation of lawyers, advocates, and critical thinkers since
          2016. We compete, we learn, we grow — together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-wrap gap-4 mb-20"
        >
          <a href="#sponsors" className="btn-primary">
            Become a Sponsor
          </a>
          <a href="#about" className="btn-ghost">
            Learn About Us
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid grid-cols-3 border-t border-border pt-8 gap-4"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="stat-number">{s.value}</span>
              <span className="label-mono text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="label-mono text-[0.6rem]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
