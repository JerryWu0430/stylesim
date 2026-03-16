"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-emerald-50/30 to-zinc-50 dark:from-zinc-950 dark:via-emerald-950/20 dark:to-zinc-950" />

      {/* Content */}
      <div className="relative mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 items-center gap-12 px-6 py-32 md:grid-cols-2 md:gap-8 md:px-12 lg:gap-16">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            Fashion simulation platform
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tighter text-zinc-900 dark:text-zinc-50 md:text-5xl lg:text-6xl">
            Know what sells{" "}
            <span className="text-emerald-600 dark:text-emerald-500">
              before you make it
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Simulate your fashion collection before production. Cut
            overproduction by 40%, reduce markdowns, and make data-driven design
            decisions.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#cta"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Start Free Pilot
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </motion.a>

            <motion.button
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-medium text-zinc-900 backdrop-blur-sm transition-colors hover:border-zinc-300 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Play size={16} weight="fill" />
              Watch Demo
            </motion.button>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-zinc-200 to-zinc-300 dark:border-zinc-900 dark:from-zinc-700 dark:to-zinc-600"
                  style={{
                    backgroundImage: `url(https://picsum.photos/seed/stylesim${i}/100/100)`,
                    backgroundSize: "cover",
                  }}
                />
              ))}
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                47 brands
              </span>{" "}
              already simulating
            </p>
          </div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <SimulationPreview />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-zinc-300 p-2 dark:border-zinc-700"
        >
          <div className="h-2 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SimulationPreview() {
  return (
    <div className="relative">
      {/* Main card */}
      <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/50 bg-white/80 p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-900/80 md:p-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Spring 2026 Collection
            </p>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
              Simulation Results
            </h3>
          </div>
          <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
            Live
          </div>
        </div>

        {/* Design cards */}
        <div className="space-y-3">
          <DesignCard
            name="Oversized Linen Blazer"
            score={87}
            trend="up"
            delay={0}
          />
          <DesignCard
            name="Wide-Leg Trousers"
            score={72}
            trend="up"
            delay={0.1}
          />
          <DesignCard
            name="Cropped Knit Vest"
            score={45}
            trend="down"
            delay={0.2}
          />
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-zinc-100 pt-6 dark:border-zinc-800">
          <StatItem label="Predicted Sell-Through" value="76.3%" />
          <StatItem label="Risk Reduction" value="-42%" />
          <StatItem label="Margin Impact" value="+$340K" />
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -right-4 -top-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 shadow-lg dark:border-emerald-800 dark:bg-emerald-950 md:-right-8 md:-top-8"
      >
        <p className="text-2xl font-semibold text-emerald-700 dark:text-emerald-400">
          +47%
        </p>
        <p className="text-xs text-emerald-600 dark:text-emerald-500">
          accuracy vs. intuition
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-4 -left-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 md:-bottom-8 md:-left-8"
      >
        <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          -30%
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          overproduction
        </p>
      </motion.div>
    </div>
  );
}

function DesignCard({
  name,
  score,
  trend,
  delay,
}: {
  name: string;
  score: number;
  trend: "up" | "down";
  delay: number;
}) {
  const isHigh = score >= 70;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + delay, duration: 0.5 }}
      className="flex items-center justify-between rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800/50"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600" />
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
          {name}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span
          className={`font-mono text-sm font-medium ${
            isHigh
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-amber-600 dark:text-amber-400"
          }`}
        >
          {score}%
        </span>
        <div
          className={`h-4 w-4 rounded-full ${
            trend === "up"
              ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400"
              : "bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400"
          }`}
        >
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className={trend === "down" ? "rotate-180" : ""}
          >
            <path d="M8 4l4 4H4l4-4z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {value}
      </p>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
    </div>
  );
}
