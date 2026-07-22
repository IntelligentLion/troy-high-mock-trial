import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MonogramAvatar from "@/components/MonogramAvatar";
import { useSeo } from "@/hooks/useSeo";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd1R5LAGbsbXUDEIflfxjKfmNFpfs2NrOf9yQw2JLcFODozGA/viewform?usp=publish-editor";

const leadership: { role: string; name: string; photo?: string }[] = [
  { role: "Co-President", name: "Reanne Elizabeth Del Valle", photo: "/assets/images/members/reanne-del-valle.jpg" },
  { role: "Co-President", name: "Shri Krishna Sivakumar", photo: "/assets/images/members/shri-krishna-sivakumar.jpg" },
  { role: "Vice President", name: "Yatee Nagpal" },
  { role: "Secretary", name: "Ella Xu", photo: "/assets/images/members/ella-xu.jpg" },
  { role: "Treasurer", name: "Annabelle Ye", photo: "/assets/images/members/annabelle-ye.jpg" },
  { role: "Publicity Commissioner", name: "Anny Jiao", photo: "/assets/images/members/anny-jiao.jpg" },
];

export default function TeamRecruit() {
  useSeo({
    title: "2026–27 Team — Troy High School Mock Trial",
    description:
      "Meet the incoming 2026–27 leadership of Troy High School Mock Trial and find out how to join the team for the new season.",
    path: "/team/2026-27",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page Hero */}
      <header className="relative hero-py px-6 overflow-hidden border-b border-border">
        <div className="max-w-7xl xl:max-w-8xl mx-auto">
          <h1 className="display-xl text-foreground mb-4">
            2026–2027 Team
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            Meet the incoming leadership and learn how to join Troy Mock Trial for the 2026–27 season.
          </p>
        </div>
      </header>

      <main>
        {/* Leadership */}
        <section className="section-py border-t border-border" aria-labelledby="leadership-heading">
          <div className="max-w-7xl xl:max-w-8xl mx-auto px-6">
            <h2 id="leadership-heading" className="display-lg text-foreground mb-6">
              Officers
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadership.map((officer, i) => (
                <article
                  key={i}
                  className="bg-card rounded-xl border border-primary/30 p-6 flex items-center gap-4 hover:border-primary/60 transition-colors"
                >
                  {officer.photo ? (
                    <img
                      src={officer.photo}
                      alt={`Headshot of ${officer.name}`}
                      width={80}
                      height={80}
                      loading="lazy"
                      className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <MonogramAvatar name={officer.name} size={80} />
                  )}
                  <div className="min-w-0">
                    <h3 className="font-playfair text-lg font-semibold text-foreground leading-tight">
                      {officer.name}
                    </h3>
                    <span className="label-mono text-primary text-[0.65rem]">{officer.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Recruitment */}
        <section className="section-py border-t border-border" aria-labelledby="recruit-heading">
          <div className="max-w-7xl xl:max-w-8xl mx-auto px-6">
            <h2 id="recruit-heading" className="display-lg text-foreground mb-4">
              Join the Team
            </h2>
            <p className="text-muted-foreground max-w-2xl text-base mb-8">
              Interested in competing with Troy Mock Trial in the 2026–27 season? Fill out our interest
              form and we'll reach out with details about tryouts and informational meetings.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Interest Form
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
