import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SeasonSection from "@/components/SeasonSection";
import CoachesSection from "@/components/CoachesSection";
import AlumniSection from "@/components/AlumniSection";
import SponsorsSection from "@/components/SponsorsSection";
import CommunitySection from "@/components/CommunitySection";
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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SeasonSection />
      <CoachesSection />
      <AlumniSection />
      <SponsorsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}
