import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Filosofi craftsmanship tradisional dengan teknologi modern",
  "Komitmen pada keberlanjutan dan material berkualitas",
  "Desain custom & fleksibel sesuai kebutuhan",
  "Layanan end-to-end (desain → produksi → instalasi)",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              PT. IDEA BORNEO NUSANTARA
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              IDEABORNEO adalah perusahaan Indonesia yang berdiri sejak 2017, 
              mengkhususkan diri dalam rumah kayu prefabrikasi, furnitur kayu, 
              dan desain interior & arsitektur. Kami menggabungkan keahlian 
              tradisional dengan teknologi modern, dengan fokus pada keberlanjutan, 
              presisi, dan material berkualitas tinggi.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Perusahaan kami telah menangani proyek berskala nasional dan memiliki 
              rumah kayu yang telah diresmikan dua kali oleh Presiden RI ke-7 
              di Ibu Kota Nusantara (IKN).
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] bg-wood-light rounded-2xl overflow-hidden shadow-elegant-lg">
                  <div className="w-full h-full bg-gradient-to-br from-wood-light to-wood-medium flex items-center justify-center">
                    <span className="text-4xl">🏠</span>
                  </div>
                </div>
                <div className="aspect-square bg-secondary rounded-2xl p-6 shadow-elegant flex flex-col justify-center">
                  <span className="text-4xl font-heading font-bold text-primary">7+</span>
                  <span className="text-sm text-muted-foreground mt-1">Tahun Pengalaman</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square bg-primary/10 rounded-2xl p-6 shadow-elegant flex flex-col justify-center">
                  <span className="text-4xl font-heading font-bold text-primary">50+</span>
                  <span className="text-sm text-muted-foreground mt-1">Proyek Selesai</span>
                </div>
                <div className="aspect-[4/5] bg-wood-light rounded-2xl overflow-hidden shadow-elegant-lg">
                  <div className="w-full h-full bg-gradient-to-br from-wood-medium to-wood-dark flex items-center justify-center">
                    <span className="text-4xl">🪵</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
