import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSliderSection from "@/components/CertificatesSliderSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <CertificatesSliderSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
