import { useState, useEffect, useRef } from "react";
import { Flame } from "lucide-react";
import menuKebab from "@/assets/menu-kebab.jpg";
import menuBiryani from "@/assets/menu-biryani.jpg";
import menuFalafel from "@/assets/menu-falafel.jpg";
import menuShawarma from "@/assets/menu-shawarma.jpg";

const categories = ["All", "Mandi", "Kebabs", "Starters", "Fast Food"];

const menuItems = [
  { name: "Chicken Juicy Mandi", category: "Mandi", price: "₹299", image: menuBiryani, popular: true, description: "Tender chicken slow-cooked with aromatic saffron rice" },
  { name: "Mutton Mandi", category: "Mandi", price: "₹399", image: menuBiryani, popular: true, description: "Premium mutton with traditional spice-infused basmati" },
  { name: "Chicken Kebab Platter", category: "Kebabs", price: "₹249", image: menuKebab, popular: false, description: "Chargrilled skewers with mint chutney & fresh naan" },
  { name: "Seekh Kebab Special", category: "Kebabs", price: "₹279", image: menuKebab, popular: true, description: "Hand-minced spiced meat grilled over charcoal" },
  { name: "Falafel Platter", category: "Starters", price: "₹199", image: menuFalafel, popular: false, description: "Crispy falafel with hummus, tahini & warm pita" },
  { name: "Chicken Shawarma", category: "Fast Food", price: "₹149", image: menuShawarma, popular: true, description: "Juicy layered chicken wrap with garlic sauce" },
  { name: "Mutton Shawarma", category: "Fast Food", price: "₹179", image: menuShawarma, popular: false, description: "Succulent mutton roll with special house spices" },
  { name: "Hummus & Pita", category: "Starters", price: "₹149", image: menuFalafel, popular: false, description: "Creamy chickpea dip with warm artisan bread" },
];

const MenuSection = () => {
  const [active, setActive] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-xs font-body uppercase tracking-[0.3em] text-primary mb-4 block">
            Our Menu
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
            Culinary <span className="text-gradient-gold italic">Masterpieces</span>
          </h2>
          <p className="text-foreground/50 font-body text-sm max-w-md mx-auto">
            Each dish is a celebration of authentic Arabian flavors, crafted with love and tradition.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-gold)]"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.name}
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-[var(--shadow-elegant)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {item.popular && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full">
                    <Flame className="w-3 h-3 text-primary" />
                    <span className="text-xs font-body font-medium text-foreground">Popular</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-primary font-heading font-bold text-lg whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs font-body text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-body text-muted-foreground">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className="text-center mt-16">
          <a
            href="https://swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[var(--shadow-gold)] text-sm tracking-wide uppercase"
          >
            Order Online via Swiggy
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
