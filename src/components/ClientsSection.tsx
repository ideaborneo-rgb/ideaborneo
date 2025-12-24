import { motion } from "framer-motion";

const clientLogos = [
  "/clients/logo-01.png",
  "/clients/logo-02.png",
  "/clients/logo-03.png",
  "/clients/logo-04.png",
  "/clients/logo-05.png",
  "/clients/logo-06.png",
  "/clients/logo-07.png",
  "/clients/logo-08.png",
  "/clients/logo-09.png",
  "/clients/logo-10.png",
  "/clients/logo-11.png",
  "/clients/logo-12.png",
  "/clients/logo-13.png",
  "/clients/logo-14.png",
  "/clients/logo-15.png",
  "/clients/logo-16.png",
  "/clients/logo-17.png",
  "/clients/logo-18.png",
  "/clients/logo-19.png",
  "/clients/logo-20.png",
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
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Klien & Partner
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Dipercaya oleh Berbagai Institusi
          </h2>
          <p className="text-lg text-muted-foreground">
            Berbagai instansi pemerintah, BUMN, universitas, hingga korporasi swasta
            telah mempercayakan proyek mereka kepada kami.
          </p>
        </motion.div>

        {/* LOGO GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center"
        >
          {clientLogos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="group bg-card/70 backdrop-blur rounded-xl border border-border/60 px-5 py-4 flex items-center justify-center hover:shadow-md transition-all"
            >
              <img
                src={src}
                alt={`Client Logo ${i + 1}`}
                loading="lazy"
                className="h-10 md:h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
