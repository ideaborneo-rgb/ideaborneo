import { motion } from "framer-motion";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  external: [
    { label: "Rumah Kayu", href: "https://rumahkayu-ideaborneo.com/" },
    { label: "Furnitur", href: "#", disabled: true },
    { label: "Interior", href: "#", disabled: true },
  ],
};

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-lg">IB</span>
              </div>
              <span className="font-heading font-semibold text-xl">IDEABORNEO</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              PT. IDEA BORNEO NUSANTARA - Solusi rumah kayu, furnitur, dan 
              interior berkualitas tinggi dengan material berkelanjutan 
              dan craftsmanship presisi.
            </p>
            <p className="text-sm text-primary-foreground/60 italic">
              "IDEA FOR LIVING"
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4">Navigasi</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* External Sites */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4">Situs Kami</h4>
            <ul className="space-y-3">
              {footerLinks.external.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 transition-colors ${
                      link.disabled
                        ? "text-primary-foreground/40 cursor-not-allowed"
                        : "text-primary-foreground/70 hover:text-primary-foreground"
                    }`}
                    onClick={(e) => link.disabled && e.preventDefault()}
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-primary-foreground/10"
        >
          <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Tenggarong, Kalimantan Timur</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@ideaborneo.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+62 812 3456 7890</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 PT. IDEA BORNEO NUSANTARA. All rights reserved.</p>
            <p>Crafted with precision and passion 🪵</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
