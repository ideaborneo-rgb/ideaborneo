import { motion } from "framer-motion";

import logo01 from "@/assets/client1/logo-01.png";
import logo02 from "@/assets/client1/logo-02.png";
import logo03 from "@/assets/client1/logo-03.png";
import logo04 from "@/assets/client1/logo-04.png";
import logo05 from "@/assets/client1/logo-05.png";
import logo06 from "@/assets/client1/logo-06.png";
import logo07 from "@/assets/client1/logo-07.png";
import logo08 from "@/assets/client1/logo-08.png";
import logo09 from "@/assets/client1/logo-09.png";
import logo10 from "@/assets/client1/logo-10.png";
import logo11 from "@/assets/client1/logo-11.png";
import logo12 from "@/assets/client1/logo-12.png";
import logo13 from "@/assets/client1/logo-13.png";
import logo14 from "@/assets/client1/logo-14.png";
import logo15 from "@/assets/client1/logo-15.png";
import logo16 from "@/assets/client1/logo-16.png";
import logo17 from "@/assets/client1/logo-17.png";
import logo18 from "@/assets/client1/logo-18.png";
import logo19 from "@/assets/client1/logo-19.png";
import logo20 from "@/assets/client1/logo-20.png";

const clientLogos = [
  logo01, logo02, logo03, logo04, logo05,
  logo06, logo07, logo08, logo09, logo10,
  logo11, logo12, logo13, logo14, logo15,
  logo16, logo17, logo18, logo19, logo20,
];

export const ClientsSection = () => {
  const perRow = 6;
  const mainCount = Math.floor(clientLogos.length / perRow) * perRow;
  const mainLogos = clientLogos.slice(0, mainCount);
  const restLogos = clientLogos.slice(mainCount);

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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-12 place-items-center">
            {mainLogos.map((src, i) => (
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

          {restLogos.length > 0 && (
            <div className="flex justify-center gap-x-12 gap-y-12 mt-12 flex-wrap">
              {restLogos.map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  alt={`Client Logo ${mainCount + i + 1}`}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  viewport={{ once: true }}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
