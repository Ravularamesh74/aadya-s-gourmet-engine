import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Specials", href: "#specials" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-warm-black/95 backdrop-blur-xl shadow-lg border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading text-xl font-bold group-hover:animate-pulse-glow transition-all">
              A
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-foreground tracking-wide">
                Aadya's
              </h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-body">
                Restaurant
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-body text-foreground/70 hover:text-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:09032720601"
              className="flex items-center gap-2 text-sm font-body text-primary hover:text-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              090327 20601
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm font-medium rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[var(--shadow-gold)]"
            >
              Reserve a Table
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-warm-black/98 backdrop-blur-xl ${
          isOpen ? "max-h-96 border-b border-gold/10" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg font-body text-sm transition-all"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-border">
            <a
              href="tel:09032720601"
              className="flex items-center gap-2 px-4 py-3 text-primary font-body text-sm"
            >
              <Phone className="w-4 h-4" /> 090327 20601
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
