import { Scale, ChevronDown, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "10", label: "Seasons Active" },
  { value: "2nd", label: "JSerra Championship" },
  { value: "~20", label: "Members Per Season" },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center pt-24 pb-20 px-6 min-h-screen overflow-hidden hero-texture"
      style={{ background: "var(--color-navy)" }}
    >
      {/* Two-column layout */}
      <div className="relative w-full max-w-7xl xl:max-w-8xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left — text */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Eyebrow pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8 label-mono"
            style={{
              background: "rgba(201, 168, 76, 0.10)",
              border: "1px solid rgba(201, 168, 76, 0.3)",
              color: "var(--color-gold)",
            }}
          >
            <Scale className="w-3 h-3" aria-hidden="true" />
            Founded 2016 · Fullerton, CA
          </div>

          {/* Main headline */}
          <h1 className="display-xl text-white mb-6">
            Troy High
            <br />
            <span style={{ color: "var(--color-gold)" }}>Mock Trial</span>
          </h1>

          {/* Description */}
          <p
            className="text-base md:text-lg mb-10 max-w-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.58)" }}
          >
            Competing in the Constitutional Rights Foundation's Mock Trial program
            and preparing the next generation of advocates — since 2016.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 justify-center lg:justify-start">
            <Link to="/join" className="btn-primary">
              Join Us
            </Link>
            <Link to="/team/2026-27" className="btn-ghost">
              Meet the Team
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="stat-number">{s.value}</span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — trophy photo */}
        <div className="relative">
          {/* Gold corner accents */}
          <div
            className="absolute -top-3 -right-3 w-20 h-20 rounded-tr-2xl border-t border-r"
            style={{ borderColor: "rgba(201,168,76,0.35)" }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-3 -left-3 w-20 h-20 rounded-bl-2xl border-b border-l"
            style={{ borderColor: "rgba(201,168,76,0.35)" }}
            aria-hidden="true"
          />

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/8 shadow-2xl">
            <img
              src="/assets/images/jserra-trophy.jpg"
              alt="Troy Mock Trial team celebrating 2nd place at the JSerra Catholic Mock Trial Championship"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle overlay gradient at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{ background: "linear-gradient(to top, rgba(13,27,42,0.55), transparent)" }}
              aria-hidden="true"
            />
            {/* Achievement badge */}
            <div
              className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-2.5 rounded-xl backdrop-blur-sm"
              style={{ background: "rgba(13,27,42,0.8)", border: "1px solid rgba(201,168,76,0.3)" }}
            >
              <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)" }}>
                <Trophy className="w-4 h-4" style={{ color: "var(--color-gold)" }} aria-hidden="true" />
              </span>
              <div>
                <p className="text-white text-xs font-semibold leading-tight">2nd Place — JSerra Championship</p>
                <p className="text-xs" style={{ color: "var(--color-gold)", opacity: 0.8, fontFamily: "'DM Sans', sans-serif" }}>March 2026</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer bg-transparent border-0 p-2 transition-colors hover:text-white"
        style={{ color: "rgba(255,255,255,0.3)" }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
