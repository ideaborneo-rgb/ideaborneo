import React from 'react';
import { motion } from 'framer-motion';
import { Award, Hammer, Leaf, Shield, TrendingUp, Users } from 'lucide-react';
const AboutSection = () => {
  const coreValues = [{
    icon: Award,
    title: 'Quality',
    description: 'Material premium pilihan terbaik dengan standar kualitas internasional untuk hasil yang tahan lama.'
  }, {
    icon: Hammer,
    title: 'Craftsmanship',
    description: 'Keahlian tangan terampil dari pengrajin lokal Kalimantan yang berpengalaman puluhan tahun.'
  }, {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Komitmen terhadap kelestarian lingkungan dengan penggunaan kayu bersertifikat dan ramah lingkungan.'
  }, {
    icon: Shield,
    title: 'Trust',
    description: 'Transparansi penuh dalam setiap proses, dari konsultasi hingga garansi purna jual yang terpercaya.'
  }];
  const statistics = [{
    icon: TrendingUp,
    value: '2009',
    label: 'Tahun Berdiri'
  }, {
    icon: Award,
    value: '500+',
    label: 'Proyek Selesai'
  }, {
    icon: Users,
    value: '15+',
    label: 'Area Layanan'
  }, {
    icon: Shield,
    value: '98%',
    label: 'Kepuasan Pelanggan'
  }];
  return <section id="about" className="py-20 lg:py-32 bg-[hsl(40,50%,93%)]">
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
          <span className="text-[hsl(40,49%,57%)] font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(0,0%,12%)] mt-4 mb-6">
            PT. IDEA BORNEO NUSANTARA
          </h2>
          <p className="text-lg text-[hsl(0,0%,35%)] leading-relaxed">Perusahaan terkemuka di Kalimantan Timur yang menghadirkan solusi furniture custom, rumah kayu berkualitas premium, dan interior design yang memadukan estetika modern dengan kearifan lokal. Kami berkomitmen menghadirkan karya terbaik dengan material pilihan dan pengerjaan profesional.</p>
        </motion.div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coreValues.map((value, index) => <motion.div key={value.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-[hsl(24,35%,39%)] to-[hsl(24,35%,30%)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(0,0%,12%)] mb-3">{value.title}</h3>
              <p className="text-[hsl(0,0%,35%)] leading-relaxed">{value.description}</p>
            </motion.div>)}
        </div>

        {/* Statistics */}
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
      }} className="bg-gradient-to-br from-[hsl(24,35%,39%)] to-[hsl(24,35%,30%)] rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[hsl(40,49%,57%)]" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm lg:text-base">{stat.label}</div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;