import { useEffect, useRef, useState } from "react";
import { Flame, Users, Award, Utensils } from "lucide-react";
import interiorImage from "@/assets/restaurant-interior.jpg";

const stats = [
  { icon: Flame, value: "5+", label: "Years of Flavor" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Award, value: "4.1★", label: "Google Rating" },
  { icon: Utensils, value: "40+", label: "Signature Dishes" },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 bg-pattern overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={interiorImage}
                alt="Aadya's Restaurant elegant Arabian interior"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-black/60 via-transparent to-transparent" />
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-card/90 backdrop-blur-xl rounded-xl border border-gold/20">
                <p className="font-arabic text-sm text-foreground/80 italic">
                  "Taste the magic at Aadya's Cloud Kitchen Mandi Restaurant where Mandi dreams come true."
                </p>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}>
            <span className="text-xs font-body uppercase tracking-[0.3em] text-primary mb-4 block">
              Our Story
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Legacy of{" "}
              <span className="text-gradient-gold italic">Authentic</span>{" "}
              Arab Flavors
            </h2>
            <div className="space-y-4 text-foreground/60 font-body text-sm leading-relaxed">
              <p>
                Nestled in the vibrant heart of Padmarao Nagar, Hyderabad, Aadya's Restaurant
                is your ultimate destination for authentic Arab cuisine. Our kitchen brings the rich
                traditions of Mandi, Kebabs, and Arabian delicacies to your table.
              </p>
              <p>
                Every dish is crafted with hand-picked spices, slow-cooked meats, and generations
                of culinary wisdom. From our signature Chicken Juicy Mandi to sizzling kebab
                platters — each bite is a journey to the Arabian Peninsula.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300 group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs font-body text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
