import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Award, Wrench, Sparkles, MessageCircle, Layers } from 'lucide-react';

const WhyChooseSection = () => {
  const advantages = [
    {
      icon: Palette,
      title: 'Desain Custom Sesuai Kebutuhan',
      description: 'Kami mendengarkan visi Anda dan mewujudkannya menjadi desain furniture atau interior yang unik dan personal sesuai kebutuhan spesifik Anda.',
      color: 'from-[hsl(24,35%,39%)] to-[hsl(24,35%,30%)]'
    },
    {
      icon: Award,
      title: 'Material Berkualitas Premium',
      description: 'Hanya menggunakan kayu pilihan terbaik dari Kalimantan yang telah tersertifikasi, menjamin kekuatan dan keindahan yang tahan lama.',
      color: 'from-[hsl(40,49%,57%)] to-[hsl(40,49%,47%)]'
    },
    {
      icon: Wrench,
      title: 'Pengerjaan Profesional',
      description: 'Tim pengrajin berpengalaman puluhan tahun dengan keahlian tinggi memastikan setiap detail dikerjakan dengan sempurna dan presisi.',
      color: 'from-[hsl(90,18%,41%)] to-[hsl(90,18%,31%)]'
    },
    {
      icon: Sparkles,
      title: 'Nuansa Lokal & Estetika Kalimantan',
      description: 'Memadukan kearifan lokal Kalimantan dengan desain modern, menciptakan karya yang autentik namun tetap kontemporer dan elegan.',
      color: 'from-[hsl(357,72%,67%)] to-[hsl(357,72%,57%)]'
    },
    {
      icon: MessageCircle,
      title: 'Konsultasi Mudah & Responsif',
      description: 'Layanan konsultasi gratis dengan respons cepat melalui WhatsApp, email, atau kunjungan langsung ke workshop kami.',
      color: 'from-[hsl(24,35%,39%)] to-[hsl(24,35%,30%)]'
    },
    {
      icon: Layers,
      title: 'Layanan Terintegrasi',
      description: 'Satu atap untuk semua kebutuhan: furniture custom, rumah kayu, interior design, hingga rental kendaraan untuk mobilitas Anda.',
      color: 'from-[hsl(40,49%,57%)] to-[hsl(40,49%,47%)]'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-[hsl(40,50%,93%)]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[hsl(40,49%,57%)] font-semibold text-sm uppercase tracking-wider">Keunggulan Kami</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(0,0%,12%)] mt-4 mb-6">
            Mengapa Memilih IDEABORNEO?
          </h2>
          <p className="text-lg text-[hsl(0,0%,35%)] leading-relaxed">
            Komitmen kami adalah memberikan yang terbaik dengan standar kualitas tertinggi di setiap aspek
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                {/* Decorative Circle */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${advantage.color} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-300`}></div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-[hsl(0,0%,12%)] mb-3 group-hover:text-[hsl(24,35%,39%)] transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-[hsl(0,0%,35%)] leading-relaxed">
                  {advantage.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(40,49%,57%)] rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-[hsl(24,35%,39%)] to-[hsl(24,35%,30%)] rounded-3xl p-12 shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Siap Mewujudkan Hunian Impian Anda?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan furniture dan interior Anda dengan tim ahli kami sekarang juga
          </p>
          <button
            onClick={() => window.open('https://wa.me/62811533027?text=Halo%20IDEABORNEO%2C%20Saya%20Dari%20Website%20ideaborneo.com%20Ingin%20Konsultasi%20Gratis', '_blank')}
            className="px-8 py-4 bg-white text-[hsl(24,35%,39%)] rounded-xl font-bold hover:bg-[hsl(40,50%,93%)] transition-colors shadow-lg hover:shadow-xl"
          >
            Konsultasi Gratis Sekarang
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;