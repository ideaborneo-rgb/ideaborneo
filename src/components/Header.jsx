import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Tentang Kami', id: 'about' },
    { label: 'Layanan', id: 'divisions' },
    { label: 'Katalog Furniture', id: 'catalog' },
    { label: 'Testimoni', id: 'testimonials' },
    { label: 'Kontak', id: 'contact' }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/62811533027?text=Halo%20IDEABORNEO%2C%20Saya%20Dari%20Website%20ideaborneo.com%20Ingin%20Konsultasi%20Gratis', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/4359fe99-07f4-4dee-b57d-dcf05c0e62ba/27f1c2e0c2433ff492adccc90d0e887c.png" 
              alt="IDEABORNEO logo" 
              className="h-12 w-auto transform group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col text-left">
              <span className="text-[hsl(24,35%,39%)] font-bold text-lg leading-tight">IDEABORNEO</span>
              <span className="text-[hsl(0,0%,35%)] text-xs leading-tight">Premium Furniture & Interior</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-[hsl(0,0%,12%)] hover:text-[hsl(24,35%,39%)] font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(24,35%,39%)] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              className="border-[hsl(24,35%,39%)] text-[hsl(24,35%,39%)] hover:bg-[hsl(24,35%,39%)] hover:text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Konsultasi Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-[hsl(0,0%,12%)]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-2 pb-4 border-b border-[hsl(40,20%,80%)]">
                  <img 
                    src="https://horizons-cdn.hostinger.com/4359fe99-07f4-4dee-b57d-dcf05c0e62ba/27f1c2e0c2433ff492adccc90d0e887c.png" 
                    alt="IDEABORNEO logo" 
                    className="h-10 w-auto"
                  />
                  <div className="flex flex-col">
                    <span className="text-[hsl(24,35%,39%)] font-bold text-lg leading-tight">IDEABORNEO</span>
                    <span className="text-[hsl(0,0%,35%)] text-xs leading-tight">Premium Furniture</span>
                  </div>
                </div>

                {navLinks.map((link) => (
                  <SheetClose asChild key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-left px-4 py-3 text-[hsl(0,0%,12%)] hover:text-[hsl(24,35%,39%)] hover:bg-[hsl(40,30%,95%)] rounded-lg font-medium transition-all"
                    >
                      {link.label}
                    </button>
                  </SheetClose>
                ))}

                <div className="pt-4 border-t border-[hsl(40,20%,80%)]">
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-[hsl(24,35%,39%)] hover:bg-[hsl(24,35%,30%)] text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Konsultasi Gratis
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;