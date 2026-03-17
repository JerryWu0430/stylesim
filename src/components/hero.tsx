"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, TrendUp, Sparkle } from "@phosphor-icons/react";
import SimulationVisual from "./simulation-visual";
import { useRef } from "react";
import Grainient from "./grainient";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] pt-20 md:pt-24 overflow-hidden">
      {/* Grainient Background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#F5F5DC"
          color2="#E8DCC4"
          color3="#D4C4A8"
          color4="#C9B896"
          darkenTop={false}
          grain={0.07}
          grainBlending={0.5}
          speed={0.8}
          softness={0.6}
          warp={0.3}
        />
      </div>
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div style={{ y, opacity }} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 backdrop-blur-sm rounded-full border border-foreground/20"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkle size={16} weight="fill" className="text-foreground" />
              </motion.div>
              <span className="text-sm font-medium text-foreground">
                AI-Powered Demand Forecasting
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-foreground"
              >
                <span className="font-serif">Simulate fashion demand</span>{" "}
              </motion.h1>
            </div>
            <div className="overflow-hidden -mt-6">
              <motion.p
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] font-elegant text-foreground/70"
              >
                before you manufacture
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-xl"
            >
              Stop guessing. StyleSim uses AI to predict which designs will sell,
              helping fashion brands reduce waste and maximize revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full text-base relative overflow-hidden shadow-lg"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative">Start Simulating</span>
                <motion.span
                  className="relative"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} weight="bold" />
                </motion.span>
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(20,20,20,0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground/30 text-foreground font-medium rounded-full text-base transition-colors"
              >
                See How It Works
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6 pt-4"
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TrendUp size={20} weight="bold" className="text-foreground" />
                </motion.div>
                <span className="text-sm text-foreground/60">
                  <span className="font-semibold text-foreground">73%</span> waste reduction
                </span>
              </motion.div>
              <div className="h-4 w-px bg-foreground/30" />
              <span className="text-sm text-foreground/60">
                Trusted by <span className="font-semibold text-foreground">50+</span> brands
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <SimulationVisual />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade - removed since gradient extends */}
    </section>
  );
}
