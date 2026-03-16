"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "47%",
    label: "Higher prediction accuracy vs. intuition",
    description: "AI models trained on millions of historical SKUs",
  },
  {
    value: "42%",
    label: "Reduction in failed SKUs",
    description: "Identify underperformers before production",
  },
  {
    value: "30%",
    label: "Less overproduction",
    description: "Produce only what the market wants",
  },
  {
    value: "$340K",
    label: "Average margin improvement per season",
    description: "From a mid-market brand pilot",
  },
];

const logos = [
  "Riviera Studios",
  "Maison Nouvelle",
  "Thread & Co",
  "Atelier Mode",
  "Vesper Collective",
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        ref={ref}
        className="relative mx-auto max-w-[1400px] px-6 md:px-12"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-500">
            Results
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tighter text-zinc-900 dark:text-zinc-50 md:text-4xl">
            Proven impact from early adopters
          </h2>
        </motion.div>

        {/* Stats grid - 2x2 on desktop */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="relative rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="font-mono text-4xl font-semibold text-emerald-600 dark:text-emerald-500 md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Logo cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20"
        >
          <p className="mb-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
            Trusted by forward-thinking fashion brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-lg font-medium text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mx-auto mt-20 max-w-3xl rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900 md:p-12"
        >
          <blockquote className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-xl">
            &ldquo;We ran StyleSim on our Fall 2025 collection and identified 8
            SKUs that would have underperformed. We cut them, doubled down on
            the winners, and saw a 23% improvement in full-price sell-through.
            Game changer.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <div
              className="h-12 w-12 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600"
              style={{
                backgroundImage:
                  "url(https://picsum.photos/seed/stylesimceo/100/100)",
                backgroundSize: "cover",
              }}
            />
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-50">
                Margaux Fontaine
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Chief Merchandising Officer, Riviera Studios
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
