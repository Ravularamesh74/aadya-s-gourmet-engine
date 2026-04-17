"use client";

import { useEffect, useRef, useState } from "react";
import { Flame, Users, Award, Utensils } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import interiorImage from "@/assets/restaurant-interior.jpg";

const stats = [
  { icon: Flame, value: "5+", label: "Years of Flavor" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Award, value: "4.1★", label: "Google Rating" },
  { icon: Utensils, value: "40+", label: "Signature Dishes" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  // 🔥 Parallax Scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-[#0a0a0a]"
    >
      {/* 🔥 Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 blur-[140px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* 🔥 IMAGE SIDE */}
          <motion.div style={{ y: yImage, opacity }}>
            <div className="relative group perspective-[1200px]">

              {/* Glass Border */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/40 via-transparent to-accent/40 blur opacity-40 group-hover:opacity-80 transition duration-500" />

              {/* Main Image */}
              <motion.div
                whileHover={{ rotateY: 8, rotateX: 4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative rounded-2xl overflow-hidden"
              >
                <img
                  src={interiorImage}
                  alt="restaurant"
                  className="w-full h-[520px] object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Floating Quote */}
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 p-5 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10"
                >
                  <p className="text-sm italic text-white/80">
                    “Taste the magic where Mandi dreams come alive.”
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* 🔥 CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[0.4em] text-primary text-xs">
              Our Story
            </span>

            <h2 className="text-5xl font-bold leading-tight mt-4">
              A Legacy of{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent italic">
                Authentic
              </span>{" "}
              Arab Flavors
            </h2>

            <p className="mt-6 text-white/60 text-sm leading-relaxed">
              Nestled in Hyderabad, Aadya's Restaurant delivers authentic Arabian cuisine with rich spices, slow-cooked meats, and generational mastery.
            </p>

            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              From signature Mandi to sizzling kebabs — every bite is crafted for unforgettable flavor.
            </p>

            {/* 🔥 STATS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="relative p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg cursor-pointer"
                >
                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 rounded-xl transition ${
                      hovered === i
                        ? "bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-100"
                        : "opacity-0"
                    }`}
                  />

                  <stat.icon className="w-6 h-6 text-primary mb-3" />

                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;