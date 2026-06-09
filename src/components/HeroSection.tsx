import { motion } from "framer-motion";
import { Scale, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "10", label: "Seasons Active" },
  { value: "2nd", label: "Place — JSerra Championship" },
  { value: "~20", label: "Members Per Season" },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center pt-24 pb-20 px-6 min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, hsl(var(--navy)) 0%, hsl(220, 42%, 12%) 60%, hsl(220, 38%, 16%) 100%)",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ opacity: 0.04 }}
        aria-hidden="true"
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: "hsl(var(--gold))", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
          style={{ background: "hsl(var(--gold))", filter: "blur(60px)" }}
        />
      </div>

      {/* Two-column layout */}
      <div className="relative w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — text */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
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
            <Scale className="w-3.5 h-3.5" aria-hidden="true" />
            Founded 2016 · Fullerton, CA
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: "hsl(var(--white))", fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Troy High
            <br />
            <span className="gold-text">Mock Trial</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-base md:text-lg mb-10 max-w-lg"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Introducing students to the field of law through real-life trial experience,
            competing in the Constitutional Rights Foundation's Mock Trial program since 2016.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-14 justify-center lg:justify-start"
          >
            <Link to="/join" className="btn-primary px-8 py-3">
              Join Us
            </Link>
            <Link to="/team/2026-27" className="btn-ghost px-8 py-3">
              Meet the Team
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-3 gap-6 w-full max-w-lg"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="stat-number">{s.value}</span>
                <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — trophy photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="relative"
        >
          {/* Gold glow behind photo */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "hsl(var(--gold) / 0.12)",
              filter: "blur(40px)",
              transform: "scale(0.9)",
            }}
            aria-hidden="true"
          />
          {/* Gold accent border lines */}
          <div
            className="absolute -top-3 -right-3 w-24 h-24 rounded-tr-2xl border-t-2 border-r-2"
            style={{ borderColor: "hsl(var(--gold) / 0.5)" }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-3 -left-3 w-24 h-24 rounded-bl-2xl border-b-2 border-l-2"
            style={{ borderColor: "hsl(var(--gold) / 0.5)" }}
            aria-hidden="true"
          />

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">
            <img
              src="/assets/images/jserra-trophy.jpg"
              alt="Troy Mock Trial team celebrating 2nd place at the JSerra Catholic Mock Trial Championship"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle overlay gradient at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20"
              style={{ background: "linear-gradient(to top, rgba(13,27,42,0.6), transparent)" }}
              aria-hidden="true"
            />
            {/* Achievement badge */}
            <div
              className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-2.5 rounded-lg backdrop-blur-sm"
              style={{ background: "rgba(13,27,42,0.75)", border: "1px solid rgba(201,168,76,0.4)" }}
            >
              <span className="text-xl">🏆</span>
              <div>
                <p className="text-white text-xs font-semibold leading-tight">2nd Place — JSerra Championship</p>
                <p className="text-[0.65rem]" style={{ color: "hsl(var(--gold-light))" }}>March 2026</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer bg-transparent border-0 p-2"
        style={{ color: "rgba(255,255,255,0.4)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
