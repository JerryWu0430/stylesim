"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto relative"
        >
          {/* Floating sparkles */}
          <motion.div
            className="absolute -top-8 left-1/4 text-foreground/20"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkle size={24} weight="fill" />
          </motion.div>
          <motion.div
            className="absolute top-0 right-1/4 text-foreground/10"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          >
            <Sparkle size={20} weight="fill" />
          </motion.div>

          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <motion.h2
              initial={{ y: 60 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight"
            >
              <span className="font-serif">Ready to stop guessing</span>{" "}
            </motion.h2>
          </motion.div>
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <motion.p
              initial={{ y: 60 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight font-elegant"
            >
              and start knowing?
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg text-muted leading-relaxed max-w-xl mx-auto"
          >
            Join 50+ fashion brands already using StyleSim to make smarter
            production decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full text-base relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative">Get Early Access</span>
              <motion.span
                className="relative"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} weight="bold" />
              </motion.span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(45,45,45,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full text-base transition-colors"
            >
              Schedule a Demo
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 text-sm text-muted"
          >
            No credit card required. Free trial for qualified brands.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
