import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SeasonSection from "@/components/SeasonSection";
import CoachesSection from "@/components/CoachesSection";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import AlumniSection from "@/components/AlumniSection";
import SponsorsSection from "@/components/SponsorsSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SeasonSection />
      <CoachesSection />
      <TeamSection />
      <GallerySection />
      <AlumniSection />
      <SponsorsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}
