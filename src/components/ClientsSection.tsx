import { motion } from "framer-motion";

const clientLogos = [
  "/client1/logo-01.png",
  "/client1/logo-02.png",
  "/client1/logo-03.png",
  "/client1/logo-04.png",
  "/client1/logo-05.png",
  "/client1/logo-06.png",
  "/client1/logo-07.png",
  "/client1/logo-08.png",
  "/client1/logo-09.png",
  "/client1/logo-10.png",
  "/client1/logo-11.png",
  "/client1/logo-12.png",
  "/client1/logo-13.png",
  "/client1/logo-14.png",
  "/client1/logo-15.png",
  "/client1/logo-16.png",
  "/client1/logo-17.png",
  "/client1/logo-18.png",
  "/client1/logo-19.png",
  "/client1/logo-20.png",
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
          className="mx-auto max-w-5xl flex justify-center"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-12 place-items-center">
          {clientLogos.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt={`Client Logo ${i + 1}`}
              loading={i < 6 ? "eager" : "lazy"}
              decoding="async"
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
