import { motion } from "framer-motion";
import { Calendar, Award, MapPin, Users, Zap } from "lucide-react";

const indicators = [
  {
    icon: Calendar,
    title: "Berdiri Sejak 2017",
    description: "Pengalaman lebih dari 7 tahun",
  },
  {
    icon: Award,
    title: "2x Diresmikan Presiden",
    description: "Oleh Presiden RI ke-7",
  },
  {
    icon: MapPin,
    title: "Proyek IKN",
    description: "Ibu Kota Nusantara",
  },
  {
    icon: Users,
    title: "Tim Profesional",
    description: "Workshop & craftsman berpengalaman",
  },
  {
    icon: Zap,
    title: "Prefab System",
    description: "Cepat & efisien",
  },
];

export const TrustIndicators = () => {
  return (
    <section className="py-12 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {indicators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
