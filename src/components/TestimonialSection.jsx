
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TestimonialSection = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'Pemilik Villa',
      project: 'Furniture Custom & Interior Design',
      rating: 5,
      text: 'IDEABORNEO benar-benar profesional! Furniture custom untuk villa saya dikerjakan dengan detail sempurna. Material kayu jati yang digunakan sangat berkualitas dan finishing-nya rapi. Highly recommended!',
      avatar: 'BS',
      location: 'Balikpapan'
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      role: 'Pengusaha Restoran',
      project: 'Interior Design Restoran',
      rating: 5,
      text: 'Desain interior restoran saya jadi sangat menarik dengan sentuhan Japandi dari IDEABORNEO. Pelayanan konsultasinya juga sangat membantu, dari awal sampai selesai selalu responsif. Hasilnya melebihi ekspektasi!',
      avatar: 'SN',
      location: 'Pontianak'
    },
    {
      id: 3,
      name: 'Ahmad Hidayat',
      role: 'Direktur Perusahaan',
      project: 'Rumah Kayu Premium',
      rating: 5,
      text: 'Rumah kayu yang dibangun IDEABORNEO sangat kokoh dan estetik. Kombinasi arsitektur tradisional Kalimantan dengan sentuhan modern benar-benar unik. Tim kerjanya profesional dan tepat waktu.',
      avatar: 'AH',
      location: 'Samarinda'
    },
    {
      id: 4,
      name: 'Linda Wijaya',
      role: 'Ibu Rumah Tangga',
      project: 'Kitchen Set & Furniture Rumah',
      rating: 5,
      text: 'Kitchen set dan furniture untuk rumah saya dikerjakan dengan sangat baik. Desainnya sesuai dengan keinginan saya dan kualitas materialnya premium. Harga juga sangat reasonable untuk kualitas yang didapat.',
      avatar: 'LW',
      location: 'Banjarmasin'
    },
    {
      id: 5,
      name: 'Rizky Pratama',
      role: 'Arsitek',
      project: 'Kolaborasi Proyek Interior',
      rating: 5,
      text: 'Sebagai arsitek, saya sering bekerja sama dengan IDEABORNEO untuk proyek-proyek klien. Mereka sangat memahami konsep desain dan eksekusinya selalu memuaskan. Partner yang sangat reliable!',
      avatar: 'RP',
      location: 'Palangkaraya'
    },
    {
      id: 6,
      name: 'Dewi Kartika',
      role: 'Pemilik Cafe',
      project: 'Furniture Custom Cafe',
      rating: 5,
      text: 'Furniture untuk cafe saya dibuat custom oleh IDEABORNEO dengan desain yang unik dan nyaman. Banyak customer yang memuji interior cafe saya. Terima kasih IDEABORNEO atas karya luar biasanya!',
      avatar: 'DK',
      location: 'Tarakan'
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'fill-[hsl(40,49%,57%)] text-[hsl(40,49%,57%)]' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[hsl(40,49%,57%)] font-semibold text-sm uppercase tracking-wider">Testimoni Klien</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(0,0%,12%)] mt-4 mb-6">
            Apa Kata Mereka Tentang Kami
          </h2>
          <p className="text-lg text-[hsl(0,0%,35%)] leading-relaxed">
            Kepuasan klien adalah prioritas utama kami. Simak pengalaman mereka bekerja sama dengan IDEABORNEO
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-[hsl(40,50%,93%)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote className="w-16 h-16 text-[hsl(24,35%,39%)]" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-[hsl(0,0%,12%)] leading-relaxed mb-6 relative z-10">
                      "{testimonial.text}"
                    </p>

                    {/* Project Type */}
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold text-[hsl(24,35%,39%)]">
                        {testimonial.project}
                      </span>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-[hsl(40,20%,80%)]">
                      <Avatar className="w-12 h-12 border-2 border-[hsl(24,35%,39%)]">
                        <AvatarFallback className="bg-gradient-to-br from-[hsl(24,35%,39%)] to-[hsl(24,35%,30%)] text-white font-bold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-[hsl(0,0%,12%)]">{testimonial.name}</div>
                        <div className="text-sm text-[hsl(0,0%,35%)]">{testimonial.role}</div>
                        <div className="text-xs text-[hsl(0,0%,35%)]">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 border-2 border-[hsl(24,35%,39%)] text-[hsl(24,35%,39%)] hover:bg-[hsl(24,35%,39%)] hover:text-white" />
              <CarouselNext className="static translate-y-0 border-2 border-[hsl(24,35%,39%)] text-[hsl(24,35%,39%)] hover:bg-[hsl(24,35%,39%)] hover:text-white" />
            </div>
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-[hsl(24,35%,39%)] w-8'
                    : 'bg-[hsl(40,20%,80%)] hover:bg-[hsl(24,35%,39%)]/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
