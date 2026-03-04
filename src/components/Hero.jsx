import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalog');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[hsl(40,50%,93%)] via-white to-[hsl(40,30%,95%)]">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-8">
            <div className="space-y-4">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} className="inline-block">
                <span className="px-4 py-2 bg-[hsl(40,49%,57%)]/20 text-[hsl(24,35%,39%)] rounded-full text-sm font-semibold">Solusi Premium Furniture & Interior</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(0,0%,12%)] leading-tight">
                Wujudkan Hunian Impian dengan{' '}
                <span className="text-[hsl(24,35%,39%)] relative">
                  Sentuhan Kalimantan
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 1 150 1 200 4" stroke="hsl(40,49%,57%)" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[hsl(0,0%,35%)] leading-relaxed max-w-xl">Furniture custom berkualitas premium, rumah kayu estetik, dan interior design yang memadukan keahlian lokal dengan material pilihan terbaik dari Kalimantan Timur.</p>
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToCatalog} size="lg" className="bg-[hsl(24,35%,39%)] hover:bg-[hsl(24,35%,30%)] text-white px-8 py-6 text-lg group">
                Lihat Katalog Furniture
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={scrollToContact} size="lg" variant="outline" className="border-2 border-[hsl(24,35%,39%)] text-[hsl(24,35%,39%)] hover:bg-[hsl(24,35%,39%)] hover:text-white px-8 py-6 text-lg">
                <Phone className="mr-2 w-5 h-5" />
                Hubungi Kami
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.8
          }} className="flex flex-wrap gap-8 pt-8 border-t border-[hsl(40,20%,80%)]">
              <div>
                <div className="text-3xl font-bold text-[hsl(24,35%,39%)]">500+</div>
                <div className="text-sm text-[hsl(0,0%,35%)]">Proyek Selesai</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[hsl(24,35%,39%)]">98%</div>
                <div className="text-sm text-[hsl(0,0%,35%)]">Kepuasan Klien</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[hsl(24,35%,39%)]">15+</div>
                <div className="text-sm text-[hsl(0,0%,35%)]">Tahun Pengalaman</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Collage */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative h-[500px] lg:h-[600px]">
            <div className="grid grid-cols-2 gap-4 h-full">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.6
            }} className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1649185884987-ca09cf76a12e" alt="Modern wooden furniture interior design showcasing premium craftsmanship" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </motion.div>

              <div className="flex flex-col gap-4">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.7
              }} className="relative rounded-2xl overflow-hidden shadow-2xl flex-1">
                  <img src="https://images.unsplash.com/photo-1600499273056-52b8a9f6859f" alt="Elegant wooden house exterior with traditional Kalimantan architecture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.8
              }} className="relative rounded-2xl overflow-hidden shadow-2xl flex-1">
                  <img src="https://images.unsplash.com/photo-1693344653385-f007541fe50d" alt="Custom interior design with natural wood elements and modern aesthetics" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[hsl(40,49%,57%)]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[hsl(24,35%,39%)]/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;