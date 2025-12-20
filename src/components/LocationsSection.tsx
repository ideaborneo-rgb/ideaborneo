import { motion } from "framer-motion";
import { MapPin, Building, Factory, Globe } from "lucide-react";

const locations = [
  {
    icon: Factory,
    type: "Head Office & Workshop",
    city: "Tenggarong",
    region: "Kalimantan Timur",
    primary: true,
  },
  {
    icon: Building,
    type: "Branch Office",
    city: "Kutai Barat",
    region: "Kalimantan Timur",
  },
  {
    icon: Building,
    type: "Branch Office",
    city: "Jakarta",
    region: "DKI Jakarta",
  },
  {
    icon: Globe,
    type: "International Office",
    city: "Yiwu, Zhejiang",
    region: "China",
  },
];

export const LocationsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Lokasi Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Jangkauan Nasional & Internasional
          </h2>
          <p className="text-lg text-muted-foreground">
            Dengan kantor di berbagai lokasi strategis, kami siap melayani 
            proyek Anda di seluruh Indonesia dan mancanegara.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-card rounded-2xl p-6 shadow-elegant border transition-all duration-300 hover:shadow-elegant-lg ${
                location.primary ? "border-primary/30 ring-1 ring-primary/10" : "border-border/50"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                location.primary ? "bg-primary text-primary-foreground" : "bg-primary/10"
              }`}>
                <location.icon className={`w-6 h-6 ${location.primary ? "" : "text-primary"}`} />
              </div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {location.type}
              </span>
              <h3 className="text-xl font-heading font-semibold text-foreground mt-2">
                {location.city}
              </h3>
              <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {location.region}
              </div>
              {location.primary && (
                <span className="inline-block mt-4 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Kantor Pusat
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
