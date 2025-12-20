import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Rumah Kayu IKN - Wanagama",
    category: "Proyek IKN",
    description: "Rumah kayu yang diresmikan oleh Presiden RI ke-7 di Ibu Kota Nusantara.",
    featured: true,
  },
  {
    title: "Rumah Kayu IKN - MHHT",
    category: "Proyek IKN",
    description: "Proyek rumah kayu prestisius di kawasan IKN.",
    featured: true,
  },
  {
    title: "Pendopo & Fasilitas Publik",
    category: "Fasilitas Umum",
    description: "Desain dan konstruksi pendopo untuk keperluan publik.",
  },
  {
    title: "Eco Resort Villa",
    category: "Hospitality",
    description: "Villa resort ramah lingkungan dengan material kayu berkelanjutan.",
  },
  {
    title: "Cafe & Restaurant",
    category: "Komersial",
    description: "Interior dan eksterior kayu untuk cafe dan restoran premium.",
  },
  {
    title: "Private Residence",
    category: "Residensial",
    description: "Rumah tinggal custom dengan desain arsitektur eksklusif.",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Portofolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Proyek Unggulan Kami
          </h2>
          <p className="text-lg text-muted-foreground">
            Berbagai proyek yang telah kami selesaikan, dari rumah kayu prestisius 
            hingga fasilitas komersial premium.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-xl transition-all duration-300 border border-border/50 hover:border-primary/20 ${
                project.featured ? "md:col-span-1 lg:row-span-1" : ""
              }`}
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-wood-light via-secondary to-wood-medium relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl opacity-50">🏠</span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ArrowUpRight className="w-10 h-10 text-primary-foreground" />
                </div>
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Diresmikan Presiden
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-heading font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
