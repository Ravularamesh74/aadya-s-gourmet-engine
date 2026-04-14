import { useEffect, useRef, useState } from "react";
import { Sparkles, Clock, Truck, Wifi } from "lucide-react";
import heroMandi from "@/assets/hero-mandi.jpg";

const features = [
  { icon: Sparkles, title: "All You Can Eat", desc: "Unlimited Mandi feast experiences available" },
  { icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected while you dine" },
  { icon: Truck, title: "Fast Delivery", desc: "Order online via Swiggy & Zomato" },
  { icon: Clock, title: "Open Late", desc: "Serving till 1 AM every night" },
];

const SpecialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="specials" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={heroMandi} alt="" className="w-full h-full object-cover opacity-10" loading="lazy" />
        <div className="absolute inset-0 bg-warm-black/95" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-xs font-body uppercase tracking-[0.3em] text-primary mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
            The Aadya's <span className="text-gradient-gold italic">Experience</span>
          </h2>
          <p className="text-foreground/50 font-body text-sm max-w-lg mx-auto">
            More than a meal — it's a journey through the rich traditions of Arabian cuisine, right here in Hyderabad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`text-center p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/30 backdrop-blur-sm transition-all duration-500 group hover:shadow-[var(--shadow-gold)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm font-body text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Big CTA Banner */}
        <div className={`mt-20 p-10 md:p-16 rounded-3xl bg-gradient-to-r from-maroon-deep to-maroon border border-primary/20 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <h3 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            ₹200 – ₹400 <span className="text-gradient-gold">Per Person</span>
          </h3>
          <p className="text-foreground/60 font-body text-sm mb-8 max-w-md mx-auto">
            Premium Arabian dining at prices that won't break the bank. Bring the whole family!
          </p>
          <a
            href="tel:09032720601"
            className="inline-flex px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[var(--shadow-gold)] text-sm tracking-wide uppercase"
          >
            Call to Reserve
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
