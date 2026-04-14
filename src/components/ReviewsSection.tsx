import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Super, delicious 😋🤤 food, good service, reasonable price, full quantity",
    author: "Satisfied Customer",
    rating: 5,
    platform: "Google",
  },
  {
    text: "Best place to visit with friends and family....great place....great food....😍😍😍",
    author: "Food Enthusiast",
    rating: 5,
    platform: "Google",
  },
  {
    text: "Amazing Mandi! The chicken was so tender and the rice was perfectly spiced. Will definitely come back again and again!",
    author: "Regular Visitor",
    rating: 5,
    platform: "Zomato",
  },
  {
    text: "One of the best Arab restaurants in Hyderabad. Authentic flavors, generous portions, and very friendly staff.",
    author: "Arab Food Lover",
    rating: 4,
    platform: "Google",
  },
  {
    text: "The shawarma here is top notch! Crispy, juicy, and loaded with flavor. The garlic sauce is addictive!",
    author: "Shawarma Fan",
    rating: 5,
    platform: "Justdial",
  },
  {
    text: "Perfect spot for late night cravings. The kebabs are fire and the ambiance is great for groups.",
    author: "Night Owl",
    rating: 4,
    platform: "Google",
  },
];

const ReviewsSection = () => {
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

  return (
    <section id="reviews" ref={ref} className="py-24 md:py-32 bg-pattern relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-xs font-body uppercase tracking-[0.3em] text-primary mb-4 block">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient-gold italic">Guests</span> Say
          </h2>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm font-body text-muted-foreground">
            <span>Google: <strong className="text-foreground">4.1/5</strong> (150 reviews)</span>
            <span>Zomato: <strong className="text-foreground">3.7/5</strong></span>
            <span>Justdial: <strong className="text-foreground">4/5</strong></span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="font-body text-sm text-foreground/80 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-sm font-medium text-foreground">{review.author}</p>
                  <p className="text-xs font-body text-muted-foreground">{review.platform}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
