
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Villa Modern Minimalis',
      location: 'Balikpapan, Kalimantan Timur',
      category: 'Interior Design',
      image: 'https://images.unsplash.com/photo-1532971728-03b172590d0e',
      description: 'Interior design lengkap dengan furniture custom untuk villa mewah'
    },
    {
      id: 2,
      title: 'Rumah Kayu Tradisional',
      location: 'Samarinda, Kalimantan Timur',
      category: 'Wooden House',
      image: 'https://images.unsplash.com/photo-1636055832732-5869c97a6090',
      description: 'Rumah kayu dengan arsitektur tradisional Kalimantan modern'
    },
    {
      id: 3,
      title: 'Office Interior Premium',
      location: 'Banjarmasin, Kalimantan Selatan',
      category: 'Furniture Custom',
      image: 'https://images.unsplash.com/photo-1551909340-a4ddbbe77882',
      description: 'Furniture kantor custom dengan desain modern dan fungsional'
    },
    {
      id: 4,
      title: 'Restoran Japandi Concept',
      location: 'Pontianak, Kalimantan Barat',
      category: 'Interior Design',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      description: 'Interior restoran dengan konsep Japandi yang elegan'
    },
    {
      id: 5,
      title: 'Rumah Kayu Eco-Friendly',
      location: 'Palangkaraya, Kalimantan Tengah',
      category: 'Wooden House',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      description: 'Rumah kayu ramah lingkungan dengan material bersertifikat'
    },
    {
      id: 6,
      title: 'Living Room Luxury',
      location: 'Tarakan, Kalimantan Utara',
      category: 'Furniture Custom',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea',
      description: 'Set furniture ruang tamu mewah dengan material premium'
    }
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-[hsl(40,50%,93%)]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[hsl(40,49%,57%)] font-semibold text-sm uppercase tracking-wider">Portfolio Proyek</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(0,0%,12%)] mt-4 mb-6">
            Karya Terbaik Kami
          </h2>
          <p className="text-lg text-[hsl(0,0%,35%)] leading-relaxed">
            Lihat berbagai proyek furniture custom, rumah kayu, dan interior design yang telah kami selesaikan dengan sempurna
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.description} di ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <Badge className="absolute top-4 right-4 bg-[hsl(24,35%,39%)] text-white border-0 shadow-lg">
                  <Tag className="w-3 h-3 mr-1" />
                  {project.category}
                </Badge>

                {/* Project Details Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center text-white/90 text-sm">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>

                    {/* View Details Button */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
                        Lihat Detail Proyek
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-[hsl(0,0%,35%)] mb-4">Ingin melihat lebih banyak proyek kami?</p>
          <button className="px-8 py-3 bg-[hsl(24,35%,39%)] hover:bg-[hsl(24,35%,30%)] text-white rounded-xl font-semibold transition-colors">
            Lihat Semua Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
