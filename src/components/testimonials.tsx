"use client";

import { motion } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";

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

export default function Testimonials() {
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
          <p className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight">
            Trusted by leading fashion brands
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-card rounded-3xl border border-border p-8 flex flex-col"
            >
              <Quotes
                size={32}
                weight="fill"
                className="text-foreground/10 mb-6"
              />
              <p className="text-foreground leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted mt-1">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
