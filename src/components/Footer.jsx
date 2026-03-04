import React from 'react';
import { MapPin, Mail, Phone, Clock, Instagram, Facebook, Linkedin, Sofa, Home, Car } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const divisions = [
    {
      icon: Sofa,
      name: 'Furniture Custom',
      description: 'Katalog furniture premium',
      link: '#catalog'
    },
    {
      icon: Home,
      name: 'Rumah Kayu',
      description: 'Website terpisah',
      link: 'https://rumahkayu-ideaborneo.com',
      external: true
    },
    {
      icon: Car,
      name: 'Rent Car',
      description: 'Website terpisah',
      link: 'https://rentcar.ideaborneo.com',
      external: true
    }
  ];

  const quickLinks = [
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Layanan', href: '#divisions' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Kontak', href: '#contact' }
  ];

  const handleLinkClick = (href, external) => {
    if (external) {
      window.open(href, '_blank');
    } else {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact" className="bg-[hsl(0,0%,12%)] text-[hsl(40,50%,93%)]">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[hsl(24,35%,39%)] to-[hsl(24,35%,30%)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[hsl(40,49%,57%)] font-bold text-xl leading-tight">IDEABORNEO</span>
                <span className="text-[hsl(40,50%,93%)]/70 text-xs leading-tight">Premium Furniture & Interior</span>
              </div>
            </div>
            <p className="text-[hsl(40,50%,93%)]/80 leading-relaxed mb-6">
              PT. IDEA BORNEO NUSANTARA - Solusi terpercaya untuk furniture custom, rumah kayu, dan interior design berkualitas premium di Kalimantan.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/ideaborneo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[hsl(40,49%,57%)] rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ideaborneo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[hsl(40,49%,57%)] rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/ideaborneo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[hsl(40,49%,57%)] rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Navigasi Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href, false)}
                    className="text-[hsl(40,50%,93%)]/80 hover:text-[hsl(40,49%,57%)] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Divisi Kami</h3>
            <ul className="space-y-4">
              {divisions.map((division) => (
                <li key={division.name}>
                  <button
                    onClick={() => handleLinkClick(division.link, division.external)}
                    className="flex items-start gap-3 text-[hsl(40,50%,93%)]/80 hover:text-[hsl(40,49%,57%)] transition-colors group"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(40,49%,57%)] transition-colors">
                      <division.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold">{division.name}</div>
                      <div className="text-xs text-[hsl(40,50%,93%)]/60">{division.description}</div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[hsl(40,49%,57%)] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[hsl(40,50%,93%)]/80 leading-relaxed">
                    Jl. Gunung Belah, Loa Ipuh,<br />
                    Kec. Tenggarong, Kab. Kutai Kartanegara,<br />
                    Kalimantan Timur.<br />
                    75513
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[hsl(40,49%,57%)] flex-shrink-0 mt-1" />
                <a
                  href="mailto:ideaborneo@gmail.com"
                  className="text-[hsl(40,50%,93%)]/80 hover:text-[hsl(40,49%,57%)] transition-colors"
                >
                  ideaborneo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[hsl(40,49%,57%)] flex-shrink-0 mt-1" />
                <a
                  href="https://wa.me/62811533027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(40,50%,93%)]/80 hover:text-[hsl(40,49%,57%)] transition-colors"
                >
                  +62 811-533-027
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[hsl(40,49%,57%)] flex-shrink-0 mt-1" />
                <div className="text-[hsl(40,50%,93%)]/80">
                  <p>Senin - Sabtu: 08:00 - 17:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps Placeholder */}
        <div className="mb-12 rounded-2xl overflow-hidden border-2 border-white/10">
          <div className="bg-[hsl(0,0%,20%)] h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[hsl(40,49%,57%)] mx-auto mb-4" />
              <p className="text-[hsl(40,50%,93%)]/60">Google Maps Embed</p>
              <p className="text-sm text-[hsl(40,50%,93%)]/40">Workshop & Showroom Location</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[hsl(40,50%,93%)]/60 text-sm text-center md:text-left">
              © {currentYear} PT. IDEA BORNEO NUSANTARA. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-[hsl(40,50%,93%)]/60 hover:text-[hsl(40,49%,57%)] transition-colors">
                Privacy Policy
              </button>
              <button className="text-[hsl(40,50%,93%)]/60 hover:text-[hsl(40,49%,57%)] transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;