import { motion } from "framer-motion";

const clientCategories = [
  {
    category: "Pemerintah",
    clients: ["Pemerintah Provinsi", "Pemerintah Kabupaten", "Kementerian"],
  },
  {
    category: "BUMN",
    clients: ["Perusahaan Negara", "Lembaga Pemerintah"],
  },
  {
    category: "Universitas",
    clients: ["Perguruan Tinggi", "Lembaga Pendidikan"],
  },
  {
    category: "Swasta",
    clients: ["Korporasi", "Developer", "Kontraktor"],
  },
];

export const ClientsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Klien & Partner
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Dipercaya oleh Berbagai Institusi
          </h2>
          <p className="text-lg text-muted-foreground">
            Kami bangga telah bekerja sama dengan berbagai lembaga pemerintah, 
            BUMN, universitas, dan perusahaan swasta terkemuka.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/50 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-primary">
                  {category.category.charAt(0)}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.clients.map((client) => (
                  <li key={client} className="text-sm text-muted-foreground">
                    {client}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Logos placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center"
            >
              <span className="text-muted-foreground text-xs font-medium">Logo {i + 1}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
