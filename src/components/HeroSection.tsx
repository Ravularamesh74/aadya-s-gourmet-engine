import { useEffect, useRef } from "react";
import { ChevronDown, MapPin, Star, Clock } from "lucide-react";
import heroImage from "@/assets/hero-mandi.jpg";

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 -top-20">
        <img
          src={heroImage}
          alt="Authentic Mandi - Aadya's Restaurant signature dish"
          width={1920}
          height={1080}
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-black/70 via-warm-black/50 to-warm-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-black/60 via-transparent to-warm-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8 animate-in">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-body text-primary">
                4.1 ★ · 150+ Google Reviews
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6">
              <span className="block text-foreground" style={{ animationDelay: "0.1s" }}>
                Taste the
              </span>
              <span className="block text-gradient-gold italic mt-2" style={{ animationDelay: "0.3s" }}>
                Magic
              </span>
              <span className="block text-foreground text-3xl md:text-4xl lg:text-5xl mt-4 font-normal" style={{ animationDelay: "0.5s" }}>
                of Authentic Mandi
              </span>
            </h1>

            {/* Tagline */}
            <p className="font-arabic text-lg md:text-xl text-foreground/60 max-w-lg mb-10 leading-relaxed">
              Where Mandi dreams come true. Authentic Arab cuisine crafted with passion in the heart of Hyderabad.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#menu"
                onClick={(e) => { e.preventDefault(); document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[var(--shadow-gold)] text-sm tracking-wide uppercase"
              >
                Explore Menu
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-8 py-4 border border-primary/40 text-primary font-body font-medium rounded-full hover:bg-primary/10 transition-all duration-300 text-sm tracking-wide uppercase"
              >
                Reserve Now
              </a>
            </div>

            {/* Info chips */}
            <div className="flex flex-wrap gap-4 text-sm font-body text-foreground/50">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Padmarao Nagar, Hyderabad
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Open · Closes 1 AM
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">₹</span>
                200–400 per person
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs font-body text-foreground/30 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
