import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sofa, Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ClosingCTA = () => {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalog');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[hsl(24,35%,39%)] via-[hsl(24,35%,35%)] to-[hsl(24,35%,30%)] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[hsl(40,49%,57%)] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(357,72%,67%)] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Heading */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto">
                <Sofa className="w-10 h-10 text-[hsl(40,49%,57%)]" />
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Wujudkan Hunian Impian Anda Bersama IDEABORNEO
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Konsultasikan kebutuhan furniture custom, rumah kayu, atau interior design Anda dengan tim ahli kami. 
              Dapatkan solusi terbaik dengan kualitas premium dan harga yang kompetitif.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(40,49%,57%)] mb-2">15+</div>
              <div className="text-white/80 text-sm">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(40,49%,57%)] mb-2">500+</div>
              <div className="text-white/80 text-sm">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(40,49%,57%)] mb-2">98%</div>
              <div className="text-white/80 text-sm">Kepuasan Klien</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(40,49%,57%)] mb-2">24/7</div>
              <div className="text-white/80 text-sm">Layanan Konsultasi</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingCTA;