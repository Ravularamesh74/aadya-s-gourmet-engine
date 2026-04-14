import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border bg-card/50">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading text-sm font-bold">
            A
          </div>
          <span className="font-heading text-lg font-bold text-foreground">
            Aadya's Restaurant
          </span>
        </div>

        <p className="text-xs font-body text-muted-foreground text-center">
          4th Floor, Skanda Complex, Padmarao Nagar, Hyderabad, Telangana 500020
        </p>

        <p className="text-xs font-body text-muted-foreground flex items-center gap-1">
          Made with <Heart className="w-3 h-3 text-accent fill-accent" /> © {new Date().getFullYear()} Aadya's
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
