import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustIndicators } from "@/components/TrustIndicators";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PrefabSection } from "@/components/PrefabSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { LocationsSection } from "@/components/LocationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustIndicators />
        <AboutSection />
        <ServicesSection />
        <PrefabSection />
        <ProjectsSection />
        <ClientsSection />
        <LocationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
