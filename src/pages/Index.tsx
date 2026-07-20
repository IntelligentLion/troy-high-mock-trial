import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SeasonSection from "@/components/SeasonSection";
import CoachesSection from "@/components/CoachesSection";
import StatsSection from "@/components/StatsSection";
import CommunitySection from "@/components/CommunitySection";
import AlumniSection from "@/components/AlumniSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";

export default function Index() {
  useSeo({
    title: "Troy High School Mock Trial — Fullerton, CA",
    description:
      "Troy Mock Trial introduces students to law through real trial experience, competing in the CRF-OC program since 2016. Meet the team, alumni, and sponsors.",
    path: "/",
  });

  return (
    <div className="bl-page min-h-screen">
      <Navbar />
      {/* The 0.5–0.75rem page inset is what frames each band as a rounded card. */}
      <main className="w-full p-2 sm:p-3" style={{ overflowX: "clip" }}>
        <div className="flex flex-col gap-3">
          <HeroSection />
          <AboutSection />
          <SeasonSection />
          <CoachesSection />
          <StatsSection />
          <CommunitySection />
          <AlumniSection />
          <SponsorsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
