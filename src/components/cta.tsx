"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

export default function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight">
            Ready to stop guessing and start knowing?
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl mx-auto">
            Join 50+ fashion brands already using StyleSim to make smarter
            production decisions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full text-base"
            >
              Get Early Access
              <ArrowRight size={18} weight="bold" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full text-base hover:bg-foreground/5 transition-colors"
            >
              Schedule a Demo
            </motion.a>
          </div>

          <p className="mt-8 text-sm text-muted">
            No credit card required. Free trial for qualified brands.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
