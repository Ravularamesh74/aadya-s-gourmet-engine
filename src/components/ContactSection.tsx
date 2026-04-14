import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";

const ContactSection = () => {
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
    <section id="contact" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-xs font-body uppercase tracking-[0.3em] text-primary mb-4 block">
            Visit Us
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
            Find <span className="text-gradient-gold italic">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className={`rounded-2xl overflow-hidden border border-border h-[400px] transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.4867!3d17.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzAwLjEiTiA3OMKwMjknMTIuMSJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aadya's Restaurant Location"
            />
          </div>

          {/* Info Cards */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}>
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all group">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    4th Floor, Skanda Complex, Skandagiri Temple Lane,<br />
                    Street Number 9, Padmarao Nagar,<br />
                    Hyderabad, Telangana 500020
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all group">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Call Us</h3>
                  <a href="tel:09032720601" className="text-sm font-body text-primary hover:text-gold-light transition-colors">
                    090327 20601
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all group">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-sm font-body text-muted-foreground">
                    Open Daily · Closes at 1:00 AM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://maps.google.com/?q=Aadya's+Restaurant+Padmarao+Nagar+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-xl hover:bg-gold-light transition-all text-sm"
              >
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
              <a
                href="https://swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border border-primary/40 text-primary font-body font-medium rounded-xl hover:bg-primary/10 transition-all text-sm"
              >
                <ExternalLink className="w-4 h-4" /> Order Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
