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
          className="mx-auto max-w-5xl"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-10 items-center justify-items-center">
          {clientLogos.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt={`Client Logo ${i + 1}`}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              viewport={{ once: true }}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
