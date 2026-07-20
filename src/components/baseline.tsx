/*
 * Baseline reveal + UI primitives.
 *
 * Motion is CSS-driven (see the "BASELINE DESIGN LANGUAGE" block in index.css):
 * these components just toggle an `is-in` class the first time an element scrolls
 * into view via IntersectionObserver, which fires the clip-mask / rise springs.
 * Everything honors prefers-reduced-motion through the CSS layer.
 */
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/** Fire `inView` once, the first time the element enters the viewport. */
export function useInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** starting Y offset in px */
  y?: number;
  /** starting scale */
  scale?: number;
  /** delay in ms */
  delay?: number;
  as?: ElementType;
};

/** Fade + rise (+ optional scale) into view. */
export function Reveal({
  children,
  className = "",
  style,
  y = 28,
  scale = 1,
  delay = 0,
  as: Comp = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Comp
      ref={ref}
      className={`bl-inview ${inView ? "is-in" : ""} ${className}`}
      style={
        {
          "--bl-from-y": `${y}px`,
          "--bl-from-scale": scale,
          transitionDelay: `${delay}ms`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </Comp>
  );
}

type ClipLinesProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  base?: number;
  stagger?: number;
  /** indices (or predicate) of lines to paint gold */
  gold?: number[];
  style?: CSSProperties;
  /** wrapper element — use "h2" so section headings stay semantic */
  as?: ElementType;
};

/** Stacked clip-mask lines that slide up from behind a mask. */
export function ClipLines({
  lines,
  className = "",
  lineClassName = "",
  base = 0,
  stagger = 120,
  gold = [],
  style,
  as: Comp = "span",
}: ClipLinesProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Comp
      ref={ref}
      className={`${inView ? "is-in" : ""} ${className}`}
      style={style}
    >
      {lines.map((line, i) => (
        <span key={i} className="bl-clip" style={{ display: "block" }}>
          <span
            className={`bl-clip-inner ${lineClassName}`}
            style={{
              transitionDelay: `${base + i * stagger}ms`,
              color: gold.includes(i) ? "var(--bl-gold)" : undefined,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Comp>
  );
}

type ClipWordsProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  base?: number;
  stagger?: number;
  /** word indices to paint with the gold fill */
  goldWords?: number[];
  duration?: number;
  style?: CSSProperties;
  nowrap?: boolean;
};

/** Word-by-word clip-mask reveal (hero title, ghost headings). */
export function ClipWords({
  text,
  className = "",
  wordClassName = "",
  base = 0,
  stagger = 140,
  goldWords = [],
  duration,
  style,
  nowrap = false,
}: ClipWordsProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const words = text.split(" ");
  return (
    <span
      ref={ref}
      className={`${inView ? "is-in" : ""} ${className}`}
      style={{ whiteSpace: nowrap ? "nowrap" : undefined, ...style }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="bl-clip"
          style={{ marginRight: "0.22em" }}
        >
          <span
            className={`bl-clip-inner ${wordClassName}`}
            style={{
              transitionDelay: `${base + i * stagger}ms`,
              transitionDuration: duration ? `${duration}ms` : undefined,
              color: goldWords.includes(i) ? "var(--bl-gold-fill)" : undefined,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

/** Word-by-word fade + rise (softer than the clip-mask; used for body copy). */
export function WordFade({
  text,
  className = "",
  base = 250,
  stagger = 28,
  style,
}: {
  text: string;
  className?: string;
  base?: number;
  stagger?: number;
  style?: CSSProperties;
}) {
  const { ref, inView } = useInView<HTMLParagraphElement>();
  const words = text.split(" ");
  return (
    <p
      ref={ref}
      className={`${inView ? "is-in" : ""} ${className}`}
      style={style}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="bl-word"
          style={{ transitionDelay: `${base + i * stagger}ms`, marginRight: "0.26em" }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

/** Small uppercase eyebrow label with a leading dot. */
export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={`bl-eyebrow ${tone === "light" ? "light" : ""} ${className}`}
      style={tone === "dark" ? { color: "var(--bl-ink-soft)" } : undefined}
    >
      {children}
    </span>
  );
}

/** The shared right-arrow glyph (springs on hover via .bl-pill / group styles). */
export function ArrowRightGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
