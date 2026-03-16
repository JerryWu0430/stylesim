"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendUp, Sparkle } from "@phosphor-icons/react";
import SimulationVisual from "./simulation-visual";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-20 md:pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 rounded-full">
              <Sparkle size={16} weight="fill" className="text-foreground" />
              <span className="text-sm font-medium text-foreground">
                AI-Powered Demand Forecasting
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              <span className="font-serif">Simulate fashion demand</span>{" "}
              <span className="font-elegant text-muted">before you manufacture</span>
            </h1>

            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl">
              Stop guessing. StyleSim uses AI to predict which designs will sell,
              helping fashion brands reduce waste and maximize revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full text-base"
              >
                Start Simulating
                <ArrowRight size={18} weight="bold" />
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full text-base hover:bg-foreground/5 transition-colors"
              >
                See How It Works
              </motion.a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <TrendUp size={20} weight="bold" className="text-emerald-600" />
                <span className="text-sm text-muted">
                  <span className="font-semibold text-foreground">73%</span> waste reduction
                </span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span className="text-sm text-muted">
                Trusted by <span className="font-semibold text-foreground">50+</span> brands
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <SimulationVisual />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
