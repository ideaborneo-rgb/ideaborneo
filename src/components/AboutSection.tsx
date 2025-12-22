import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// ganti sesuai file kamu
import bgRumah from "@/assets/rumah.jpg";
import bg7Tahun from "@/assets/7+tahun.jpg";
import bgProyek from "@/assets/proyek-selesai.jpg";
import bgKayu from "@/assets/kayu.jpg";

const features = [
  "Filosofi craftsmanship tradisional dengan teknologi modern",
  "Komitmen pada keberlanjutan dan material berkualitas",
  "Desain custom & fleksibel sesuai kebutuhan",
  "Layanan end-to-end (desain → produksi → instalasi)",
];

type BgCardProps = {
  bg: string;
  className?: string;
  children: React.ReactNode;
  overlayClassName?: string;
  imgOpacity?: number; // 0 - 1
};

function BgCard({
  bg,
  className = "",
  children,
  overlayClassName,
  imgOpacity = 0.35, // default opacity background image
}: BgCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* background image (opacity di sini) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})`, opacity: imgOpacity }}
        aria-hidden="true"
      />
      {/* overlay biar teks kebaca */}
      <div
        className={
          overlayClassName ??
          "absolute inset-0 bg-gradient-to-br from-black/45 via-black/20 to-black/10"
        }
        aria-hidden="true"
      />
      {/* content */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Tentang Kami
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              PT. IDEA BORNEO NUSANTARA
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              IDEABORNEO adalah perusahaan Indonesia yang berdiri sejak 2017,
              mengkhususkan diri dalam rumah kayu prefabrikasi, furnitur kayu,
              dan desain interior & arsitektur. Kami menggabungkan keahlian
              tradisional dengan teknologi modern, dengan fokus pada keberlanjutan,
              presisi, dan material berkualitas tinggi.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Perusahaan kami telah menangani proyek berskala nasional dan memiliki
              rumah kayu yang telah diresmikan dua kali oleh Presiden RI ke-7 di
              Ibu Kota Nusantara (IKN).
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* kolom kiri */}
              <div className="space-y-4">
                {/* card kiri atas */}
                <BgCard
                  bg={bgRumah}
                  imgOpacity={0.25}
                  className="aspect-[4/5] shadow-elegant-lg"
                >
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-4xl">🏠</span>
                  </div>
                </BgCard>

                {/* card 7+ */}
                <BgCard
                  bg={bg7Tahun}
                  imgOpacity={0.35}
                  className="aspect-square shadow-elegant p-6 flex flex-col justify-center"
                  overlayClassName="absolute inset-0 bg-gradient-to-br from-black/55 via-black/25 to-black/10"
                >
                  <span className="text-4xl font-heading font-bold text-white">
                    7+
                  </span>
                  <span className="text-sm text-white/80 mt-1">
                    Tahun Pengalaman
                  </span>
                </BgCard>
              </div>

              {/* kolom kanan */}
              <div className="space-y-4 pt-8">
                {/* card 50+ */}
                <BgCard
                  bg={bgProyek}
                  imgOpacity={0.3}
                  className="aspect-square shadow-elegant p-6 flex flex-col justify-center"
                  overlayClassName="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-black/10"
                >
                  <span className="text-4xl font-heading font-bold text-white">
                    50+
                  </span>
                  <span className="text-sm text-white/80 mt-1">
                    Proyek Selesai
                  </span>
                </BgCard>

                {/* card kanan bawah */}
                <BgCard
                  bg={bgKayu}
                  imgOpacity={0.4}
                  className="aspect-[4/5] shadow-elegant-lg"
                  overlayClassName="absolute inset-0 bg-gradient-to-br from-black/25 to-black/10"
                >
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-4xl">🪵</span>
                  </div>
                </BgCard>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
