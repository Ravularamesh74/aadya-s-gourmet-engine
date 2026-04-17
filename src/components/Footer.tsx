"use client";

import { Heart, Instagram, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] py-16">

      {/* 🔥 Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* 🔥 TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold">
                A
              </div>
              <h3 className="text-xl font-bold">
                Aadya's Restaurant
              </h3>
            </div>

            <p className="text-sm text-white/60 leading-relaxed">
              Authentic Arabian flavors crafted with passion, tradition, and premium ingredients.
            </p>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <h4 className="text-sm uppercase tracking-widest text-primary">
              Contact
            </h4>

            <div className="flex items-center gap-2 text-sm text-white/60">
              <MapPin className="w-4 h-4 text-primary" />
              Padmarao Nagar, Hyderabad
            </div>

            <div className="flex items-center gap-2 text-sm text-white/60">
              <Phone className="w-4 h-4 text-primary" />
              +91 9XXXXXXXXX
            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-sm uppercase tracking-widest text-primary mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 transition"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* 🔥 DIVIDER */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* 🔥 BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            © {new Date().getFullYear()} Aadya's Restaurant. All rights reserved.
          </motion.p>

          <motion.p
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Made with
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
            in India
          </motion.p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;