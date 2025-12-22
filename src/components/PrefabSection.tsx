import { motion } from "framer-motion";
import { Factory, Clock, Target, Building2 } from "lucide-react";
import prefabBg from "@/assets/prefab-system.jpg";

const benefits = [
  {
    icon: Factory,
    title: "Produksi di Workshop",
    description: "Semua komponen diproduksi di workshop dengan kontrol kualitas tinggi.",
  },
  {
    icon: Clock,
    title: "Instalasi Lebih Cepat",
    description: "Waktu instalasi di lokasi jauh lebih singkat dibanding konstruksi konvensional.",
  },
  {
    icon: Target,
    title: "Presisi Tinggi",
    description: "Akurasi dimensi dan finishing yang konsisten untuk setiap komponen.",
  },
  {
    icon: Building2,
    title: "Fleksibel",
    description: "Cocok untuk berbagai tipe bangunan: hunian, villa, resort, kantor.",
  },
];

export const PrefabSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Card wrapper (penting biar aspect/rounded/shadow jalan) */}
            <div className="relative aspect-[4/5] bg-wood-light rounded-2xl overflow-hidden shadow-elegant-lg">
              {/* Background image layer */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${prefabBg})`, opacity: 0.08 }}
              />

              {/* Optional overlay biar teks kebaca */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-wood-light/80 to-wood-dark/40"
              />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-10 h-10 text-black" />
                  </div>
                  <span className="text-lg font-heading font-semibold text-white drop-shadow-md">
                    Prefab System
                  </span>
                </div>
              </div>

              {/* Decorative grid pattern */}
              <div aria-hidden="true" className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-6 h-full">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="border-l border-foreground/20" />
                  ))}
                </div>
                <div className="absolute inset-0 grid grid-rows-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="border-t border-foreground/20" />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-elegant-lg p-4 border border-border"
            >
              <div className="text-center">
                <span className="text-2xl font-heading font-bold text-primary">70%</span>
                <p className="text-xs text-muted-foreground mt-1">Lebih Cepat</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Sistem Prefabrikasi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Konstruksi Modern, Hasil Maksimal
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sistem prefabrikasi IDEABORNEO memungkinkan pembangunan yang lebih cepat, efisien, dan
              berkualitas tinggi. Semua komponen diproduksi di workshop kami dengan standar ketat
              sebelum dikirim ke lokasi proyek.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
