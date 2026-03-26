import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SeasonSection from "@/components/SeasonSection";
import CoachesSection from "@/components/CoachesSection";
import AlumniSection from "@/components/AlumniSection";
import SponsorsSection from "@/components/SponsorsSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Index() {
  useEffect(() => {
    document.title = "Home — Troy High Mock Trial";
  }, []);

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
