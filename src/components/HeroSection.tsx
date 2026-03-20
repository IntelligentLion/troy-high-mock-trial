import { motion } from "framer-motion";
import { Scale, ChevronDown } from "lucide-react";

const stats = [
  { value: "9", label: "Seasons Strong" },
  { value: "50+", label: "Awards Won" },
  { value: "100+", label: "Alumni" },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center pt-24 pb-20 px-4 min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(160deg, hsl(var(--navy)) 0%, hsl(220, 42%, 12%) 60%, hsl(220, 38%, 16%) 100%)",
      }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity: 0.04 }}>
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: "hsl(var(--gold))", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
          style={{ background: "hsl(var(--gold))", filter: "blur(60px)" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          style={{
            background: "rgba(201, 168, 76, 0.15)",
            border: "1px solid rgba(201, 168, 76, 0.4)",
            color: "hsl(var(--gold-light))",
          }}
        >
          <Scale className="w-3.5 h-3.5" />
          Founded 2016 · Est. Excellence
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ color: "hsl(var(--white))", fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Westside High School
          <br />
          <span className="gold-text">Mock Trial Team</span>
        </motion.h1>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-xl md:text-2xl mb-4 font-light italic"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          "Justice is the foundation of every great society."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-base md:text-lg mb-12 max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Preparing the next generation of lawyers, advocates, and critical thinkers
          since 2016. We compete, we learn, we grow — together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-wrap gap-4 justify-center mb-20"
        >
          <a href="#sponsors" className="btn-primary px-8 py-3">
            Become a Sponsor
          </a>
          <a href="#about" className="btn-ghost px-8 py-3">
            Learn About Us
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-3 gap-8"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="stat-number">{s.value}</span>
              <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.4)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
