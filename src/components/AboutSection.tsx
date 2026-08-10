import { useState } from "react";
import { useSiteContent } from "@/hooks/useSiteContent";
import { ArrowRightGlyph, Reveal } from "@/components/baseline";

const pillarKeys = ["legalStudies", "skills", "competition"] as const;
const pillarTitles = ["Legal Studies", "Advocacy & Communication", "Competition"];
const slideHeadlines = ["Study the Law", "Become an Advocate", "Compete"];

export default function AboutSection() {
  const { data } = useSiteContent();
  const team = data?.team;
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = pillarKeys.length;

  const goToSlide = (index: number) =>
    setActiveSlide(Math.max(0, Math.min(index, slideCount - 1)));

  if (!team?.coreValues) return null;

  return (
    <section id="about" className="bl-band white flex h-[calc(100dvh-5rem)] md:h-[calc(100dvh-6rem)]">
      <Reveal y={26} className="flex h-full w-full">
        <div className="pillar-slider">
          <div className="pillar-slider-viewport">
            <div
              className="pillar-slider-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {pillarKeys.map((key, index) => (
                <article
                  key={key}
                  id={`pillar-panel-${index}`}
                  role="group"
                  aria-label={pillarTitles[index]}
                  aria-hidden={activeSlide !== index}
                  className="pillar-slider-slide"
                >
                  <div className="relative z-10 flex h-full flex-1 flex-col justify-between p-7 sm:p-10 lg:p-14">
                    <div>
                      <h3 className="bl-display max-w-3xl text-4xl leading-[0.9] text-white sm:text-6xl lg:text-7xl">
                        {slideHeadlines[index]}
                      </h3>
                    </div>
                    <p className="max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: "rgba(255, 255, 255, 0.76)" }}>
                      {team.coreValues[key]}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="pillar-slider-controls">
              <button
                type="button"
                className="pillar-slider-control"
                onClick={() => goToSlide(activeSlide - 1)}
                aria-label="Show previous pillar"
                disabled={activeSlide === 0}
              >
                <ArrowRightGlyph className="h-7 w-7 rotate-180" />
              </button>
              <button
                type="button"
                className="pillar-slider-control is-next"
                onClick={() => goToSlide(activeSlide + 1)}
                aria-label="Show next pillar"
                disabled={activeSlide === slideCount - 1}
              >
                <ArrowRightGlyph className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
