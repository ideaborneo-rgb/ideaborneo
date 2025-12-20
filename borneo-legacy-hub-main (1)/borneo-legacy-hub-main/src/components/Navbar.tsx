import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logoideaborneo.jpg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const externalLinks = [
  { label: "Rumah Kayu", href: "https://rumahkayu-ideaborneo.com/", external: true },
  { label: "Furnitur", href: "#", external: true, placeholder: true },
  { label: "RentCar", href: "#", external: true, placeholder: true },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-background flex items-center justify-center border border-border">
              <img
                src={logo}
                alt="IDEABORNEO"
                className="w-full h-full object-contain p-1"
                />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-semibold text-lg text-foreground">IDEABORNEO</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="w-px h-6 bg-border mx-2" />
            {externalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "px-4 py-2 text-sm font-medium flex items-center gap-1.5 transition-colors",
                  item.placeholder
                    ? "text-muted-foreground/50 cursor-not-allowed"
                    : "text-primary hover:text-primary/80"
                )}
                onClick={(e) => item.placeholder && e.preventDefault()}
              >
                {item.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="default" onClick={() => scrollToSection("#contact")}>
              Konsultasi
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-elegant-lg border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-3 text-left text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-border my-2" />
              {externalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-4 py-3 flex items-center gap-2 rounded-lg transition-colors",
                    item.placeholder
                      ? "text-muted-foreground/50 cursor-not-allowed"
                      : "text-primary hover:bg-secondary"
                  )}
                  onClick={(e) => item.placeholder && e.preventDefault()}
                >
                  {item.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
              <Button
                variant="hero"
                size="lg"
                className="mt-2"
                onClick={() => scrollToSection("#contact")}
              >
                Konsultasi Proyek
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
