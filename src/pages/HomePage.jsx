
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import DivisionsSection from '@/components/DivisionsSection.jsx';
import FurnitureCatalog from '@/components/FurnitureCatalog.jsx';
import PortfolioSection from '@/components/PortfolioSection.jsx';
import WhyChooseSection from '@/components/WhyChooseSection.jsx';
import TestimonialSection from '@/components/TestimonialSection.jsx';
import ClosingCTA from '@/components/ClosingCTA.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>IDEABORNEO - Premium Furniture, Rumah Kayu & Interior Design Kalimantan</title>
        <meta 
          name="description" 
          content="PT. IDEA BORNEO NUSANTARA menyediakan furniture custom berkualitas premium, rumah kayu estetik, dan interior design profesional di Kalimantan. Konsultasi gratis dengan material pilihan terbaik dan pengerjaan ahli." 
        />
      </Helmet>

      <div className="smooth-scroll">
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <DivisionsSection />
          <FurnitureCatalog />
          <PortfolioSection />
          <WhyChooseSection />
          <TestimonialSection />
          <ClosingCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
