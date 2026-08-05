import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ClipWords, ClipLines, Reveal, ArrowRightGlyph } from "@/components/baseline";

const stats = [
  { value: "10", label: "Seasons active" },
  { value: "2nd", label: "JSerra Championship" },
  { value: "~20", label: "Members / season" },
];

export default function HeroSection() {
  const plateRef = useRef<HTMLDivElement>(null);

  // Light scroll parallax on the background plate (oversized + shifted so the
  // translate never exposes an edge). Disabled for reduced-motion.
  useEffect(() => {
    const plate = plateRef.current;
    if (!plate) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY * 0.12, 120);
        plate.style.transform = `translateY(${shift}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="bl-band navy relative isolate flex flex-col"
      style={{ minHeight: "calc(100svh - 1.5rem)", minBlockSize: "36rem" }}
    >
      {/* Parallax background plate */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          ref={plateRef}
          className="absolute left-0 right-0"
          style={{ top: "-16%", height: "132%", willChange: "transform" }}
        >
          <img
            src="/assets/images/jserra-trophy.jpg"
            alt="Troy Mock Trial team celebrating 2nd place at the JSerra Catholic Mock Trial Championship"
            fetchPriority="high"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(18,39,94,0.72), rgba(18,39,94,0.45) 42%, rgba(18,39,94,0.86))",
          }}
        />
      </div>

      {/* Content column — full height */}
      <div className="relative z-10 flex flex-1 flex-col px-6 sm:px-10 pt-28 sm:pt-32 pb-8 sm:pb-10">
        {/* Eyebrow + giant title — centered */}
        <div className="flex flex-col items-center text-center">
          {/* Giant title, word-by-word clip-mask */}
          <h1
            className="bl-display text-white mt-5"
            style={{ fontSize: "clamp(2.75rem, 10.5vw, 8.5rem)" }}
          >
            <ClipWords
              text="Troy High Mock Trial"
              base={180}
              stagger={130}
              duration={1000}
              goldWords={[2, 3]}
            />
          </h1>
        </div>

        {/* Bottom row */}
        <div className="mt-auto flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between pt-14">
          {/* Tagline */}
          <ClipLines
            lines={["Show Up,", "Speak Up"]}
            className="bl-display"
            base={380}
            stagger={110}
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.6rem)",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 0.95,
            }}
          />

          {/* Right cluster: description, buttons, achievement card */}
          <div className="flex flex-col gap-6 sm:items-end">
            <Reveal
              y={24}
              delay={500}
              className="max-w-md text-sm sm:text-base sm:text-right"
              style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}
            >
              Competing in the Constitutional Rights Foundation's Mock Trial program
              and preparing the next generation of advocates — since 2016.
            </Reveal>

            <Reveal y={24} delay={620} className="flex flex-wrap gap-3 sm:justify-end">
              <Link to="/join" className="bl-pill light">
                Join Us <ArrowRightGlyph className="w-4 h-4" />
              </Link>
              <Link
                to="/team/2026-27"
                className="bl-pill outline"
                style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
              >
                Meet the Team
              </Link>
            </Reveal>

            {/* Glass achievement card */}
            <Reveal
              y={28}
              delay={760}
              className="glass-navy w-full max-w-xs flex items-center gap-3 rounded-[1.5rem] p-3"
            >
              <div className="min-w-0">
                <p className="text-white text-xs font-medium leading-tight">
                  2nd Place — JSerra Championship
                </p>
                <p className="text-[0.7rem]" style={{ color: "var(--bl-gold-fill)", opacity: 0.9 }}>
                  March 2026
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stat strip */}
        <Reveal
          y={20}
          delay={880}
          className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t pt-6"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span
                className="bl-display leading-none"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--bl-gold-fill)" }}
              >
                {s.value}
              </span>
              <span className="text-[0.72rem]" style={{ color: "rgba(255,255,255,0.6)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
