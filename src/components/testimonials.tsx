"use client";

import { motion, useInView } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "StyleSim completely transformed how we approach production planning. We cut our overstock by 68% in one season.",
    author: "Margot Bellevue",
    role: "Head of Merchandising",
    company: "Maison Riviere",
  },
  {
    quote:
      "The accuracy is remarkable. We now have confidence in our production numbers before committing to manufacturing.",
    author: "Henrik Lindqvist",
    role: "CEO",
    company: "Nordic Essentials",
  },
  {
    quote:
      "Finally, a tool that understands the nuances of fashion demand. The SKU-level insights are invaluable.",
    author: "Priya Chatterjee",
    role: "VP Operations",
    company: "Lumina Studios",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-elegant text-lg text-muted mb-4"
          >
            Testimonials
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
            <span className="font-serif">Trusted by</span>{" "}
            <span className="font-elegant">leading fashion brands</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 perspective-1000"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className="absolute -inset-px bg-gradient-to-b from-foreground/5 to-transparent rounded-[26px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-card rounded-3xl border border-border p-8 flex flex-col h-full transition-all duration-300 group-hover:border-foreground/10 group-hover:shadow-xl group-hover:shadow-foreground/5">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Quotes
                    size={32}
                    weight="fill"
                    className="text-foreground/10 mb-6 transition-colors group-hover:text-foreground/20"
                  />
                </motion.div>
                <p className="font-serif text-foreground text-lg leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <motion.div
                  className="mt-8 pt-6 border-t border-border"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <p className="font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="font-elegant text-sm text-muted mt-1">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
