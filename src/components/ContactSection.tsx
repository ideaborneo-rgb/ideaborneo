import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Building2, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Alamat",
    value: "Tenggarong, Kutai Kartanegara, Kalimantan Timur",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ideaborneo.com",
  },
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "+62 812 3456 7890",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Pesan Terkirim!",
      description: "Tim kami akan menghubungi Anda segera.",
    });

    setFormData({ name: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Hubungi Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Mari Diskusikan Proyek Anda
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Kami siap membantu mewujudkan visi Anda. Hubungi tim kami untuk 
              konsultasi gratis dan penawaran terbaik.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </span>
                    <p className="text-foreground mt-1">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-elegant-lg border border-border/50"
            >
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                Kirim Pesan
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Masukkan nama Anda"
                      className="pl-10"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Perusahaan / Instansi
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Nama perusahaan (opsional)"
                      className="pl-10"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Pesan
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Textarea
                      placeholder="Ceritakan kebutuhan proyek Anda..."
                      className="pl-10 min-h-[120px] resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Mengirim..."
                  ) : (
                    <>
                      Kirim Pesan
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
