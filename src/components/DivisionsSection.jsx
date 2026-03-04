import React from 'react';
import { motion } from 'framer-motion';
import { Sofa, Home, Car, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const DivisionsSection = () => {
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
  const divisions = [{
    icon: Sofa,
    title: 'Furniture Custom',
    description: 'Furniture berkualitas premium dengan desain custom sesuai kebutuhan Anda. Dari meja, kursi, lemari, hingga kitchen set dengan material pilihan terbaik.',
    features: ['Desain Custom', 'Material Premium', 'Garansi Kualitas', 'Konsultasi Gratis'],
    cta: 'Lihat Katalog Furniture',
    action: scrollToCatalog,
    gradient: 'from-[hsl(24,35%,39%)] to-[hsl(24,35%,30%)]',
    isExternal: false
  }, {
    icon: Home,
    title: 'Rumah Kayu',
    description: 'Rumah kayu berkualitas tinggi dengan desain modern dan tradisional Kalimantan. Kokoh, estetik, dan ramah lingkungan dengan material kayu bersertifikat.',
    features: ['Desain Eksklusif', 'Kayu Berkualitas', 'Konstruksi Kuat', 'Garansi Struktur'],
    cta: 'Kunjungi Website Rumah Kayu',
    action: () => window.open('https://rumahkayu-ideaborneo.com/', '_blank'),
    gradient: 'from-[hsl(90,18%,41%)] to-[hsl(90,18%,31%)]',
    isExternal: true
  }, {
    icon: Car,
    title: 'Sewa Kendaraan Mobil',
    description: 'Layanan rental mobil dengan armada lengkap dan terawat. Solusi transportasi terpercaya untuk kebutuhan bisnis, wisata, atau keperluan pribadi Anda.',
    features: ['Armada Lengkap', 'Harga Kompetitif', 'Driver Profesional', 'Layanan 24/7'],
    cta: 'Kunjungi Website Rent Car',
    action: () => window.open('https://rentcar.ideaborneo.com', '_blank'),
    gradient: 'from-[hsl(40,49%,57%)] to-[hsl(40,49%,47%)]',
    isExternal: true
  }];
  return <section id="divisions" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[hsl(40,49%,57%)] font-semibold text-sm uppercase tracking-wider">Layanan Kami</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(0,0%,12%)] mt-4 mb-6">IDEABORNEO</h2>
          <p className="text-lg text-[hsl(0,0%,35%)] leading-relaxed">
            Solusi terintegrasi untuk kebutuhan furniture, hunian, dan transportasi Anda dengan standar kualitas terbaik.
          </p>
        </motion.div>

        {/* Division Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => <motion.div key={division.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.15
        }} className="group relative bg-white rounded-2xl border-2 border-[hsl(40,20%,80%)] hover:border-[hsl(24,35%,39%)] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-br ${division.gradient} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  {division.badge && <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {division.badge}
                    </Badge>}
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <division.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{division.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-[hsl(0,0%,35%)] leading-relaxed mb-6">
                  {division.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {division.features.map(feature => <li key={feature} className="flex items-center text-sm text-[hsl(0,0%,12%)]">
                      <div className="w-1.5 h-1.5 bg-[hsl(40,49%,57%)] rounded-full mr-3"></div>
                      {feature}
                    </li>)}
                </ul>

                {/* CTA Button */}
                <Button onClick={division.action} className={`w-full bg-gradient-to-r ${division.gradient} hover:opacity-90 text-white group/btn`} size="lg">
                  {division.cta}
                  {division.isExternal ? <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /> : <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />}
                </Button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(24,35%,39%)] rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default DivisionsSection;