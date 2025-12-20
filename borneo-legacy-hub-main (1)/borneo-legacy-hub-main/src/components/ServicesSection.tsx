import { motion } from "framer-motion";
import { Home, Armchair, PaintBucket, Hammer, Factory } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Rumah Kayu Prefab",
    description: "Rumah kayu prefabrikasi berkualitas tinggi dengan desain modern dan tradisional.",
  },
  {
    icon: Armchair,
    title: "Furnitur Kayu Custom",
    description: "Furnitur custom dengan material kayu pilihan dan finishing premium.",
  },
  {
    icon: PaintBucket,
    title: "Desain Interior",
    description: "Layanan desain interior profesional untuk hunian dan komersial.",
  },
  {
    icon: Hammer,
    title: "Konstruksi & Instalasi",
    description: "Tim konstruksi berpengalaman untuk instalasi di seluruh Indonesia.",
  },
  {
    icon: Factory,
    title: "Workshop Production",
    description: "Fasilitas produksi modern dengan quality control ketat.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Solusi Lengkap untuk Kebutuhan Anda
          </h2>
          <p className="text-lg text-muted-foreground">
            Dari desain hingga instalasi, kami menyediakan layanan end-to-end 
            untuk proyek rumah kayu dan interior Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl p-8 shadow-elegant hover:shadow-elegant-xl transition-all duration-300 border border-border/50 hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
