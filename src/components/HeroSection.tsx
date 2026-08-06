import { useEffect, useRef, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ClipWords, ClipLines, Reveal, ArrowRightGlyph } from "@/components/baseline";

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
      style={
        {
          "--hero-h": "max(36rem, calc(100svh - 1.5rem))",
          minHeight: "var(--hero-h)",
        } as CSSProperties
      }
    >
      {/* Parallax background plate — sized off --hero-h (the section's nominal
          height) rather than a percentage of the section's actual box, so the
          image crop stays stable even if content height nudges the section
          taller than --hero-h at some breakpoint. */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          ref={plateRef}
          className="absolute left-0 right-0"
          style={{
            top: "calc(var(--hero-h) * -0.16)",
            height: "calc(var(--hero-h) * 1.32)",
            willChange: "transform",
          }}
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
        {/* Eyebrow + giant title — centered, and flex-1 so it always claims the
            bulk of the hero's vertical space in the same proportion, instead of
            sitting pinned near the top with a variable empty gap below it that
            grows or shrinks with viewport height. */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
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

          <Reveal
            y={20}
            delay={500}
            className="mt-12 sm:mt-16 font-medium whitespace-normal sm:whitespace-nowrap"
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
              lineHeight: 1.4,
            }}
          >
            Preparing the next generation of advocates — since 2016.
          </Reveal>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between pt-14">
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

          {/* Right cluster: buttons */}
          <div className="flex flex-col gap-6 sm:items-end">
            <div className="flex flex-wrap gap-3 sm:justify-end">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
