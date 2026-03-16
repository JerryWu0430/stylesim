"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, memo } from "react";
import {
  Sparkle,
  ChartBar,
  Target,
  Gauge,
  Lightning,
  Leaf,
} from "@phosphor-icons/react";

export function BentoFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-zinc-50 py-24 dark:bg-zinc-950 md:py-32"
    >
      <div
        ref={ref}
        className="relative mx-auto max-w-[1400px] px-6 md:px-12"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-500">
            Features
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tighter text-zinc-900 dark:text-zinc-50 md:text-4xl lg:text-5xl">
            Everything you need{" "}
            <span className="text-zinc-400 dark:text-zinc-500">
              to simulate with confidence
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid - Asymmetric */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-6">
          {/* Large card - AI Scoring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/50 bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:border-zinc-800/50 dark:bg-zinc-900 md:col-span-4 md:row-span-2"
          >
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                <Sparkle size={24} weight="duotone" />
              </div>
              <h3 className="mb-2 text-xl font-medium text-zinc-900 dark:text-zinc-50">
                AI-Powered Design Scoring
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Every design gets a predictive score based on style attributes,
                trend alignment, price sensitivity, and historical performance
                data from millions of SKUs.
              </p>
            </div>

            {/* Animated preview */}
            <div className="mt-8">
              <DesignScoreAnimation />
            </div>
          </motion.div>

          {/* Small card - Trend Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/50 bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:border-zinc-800/50 dark:bg-zinc-900 md:col-span-2"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
              <ChartBar size={20} weight="duotone" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-zinc-900 dark:text-zinc-50">
              Trend Analysis
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Real-time trend data from social, search, and runway.
            </p>
          </motion.div>

          {/* Small card - Market Targeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/50 bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:border-zinc-800/50 dark:bg-zinc-900 md:col-span-2"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400">
              <Target size={20} weight="duotone" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-zinc-900 dark:text-zinc-50">
              Market Targeting
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Segment-specific predictions for each market.
            </p>
          </motion.div>

          {/* Wide card - Price Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/50 bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:border-zinc-800/50 dark:bg-zinc-900 md:col-span-3"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-400">
                  <Gauge size={20} weight="duotone" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-zinc-900 dark:text-zinc-50">
                  Price Optimization
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Find the optimal price point for each SKU to maximize margin
                  without sacrificing volume.
                </p>
              </div>
              <PriceGauge />
            </div>
          </motion.div>

          {/* Wide card - Speed + Sustainability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/50 bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:border-zinc-800/50 dark:bg-zinc-900 md:col-span-3"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400">
                  <Lightning size={20} weight="duotone" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-zinc-900 dark:text-zinc-50">
                  Fast Results
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Simulate in hours, not weeks.
                </p>
              </div>
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                  <Leaf size={20} weight="duotone" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-zinc-900 dark:text-zinc-50">
                  Sustainability
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Track waste reduction metrics.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Isolated animated components for performance
const DesignScoreAnimation = memo(function DesignScoreAnimation() {
  const [scores, setScores] = useState([
    { name: "Oversized Blazer", score: 87, color: "emerald" },
    { name: "Wide Trousers", score: 72, color: "emerald" },
    { name: "Knit Vest", score: 45, color: "amber" },
  ]);

  // Shuffle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScores((prev) => {
        const shuffled = [...prev];
        const i = Math.floor(Math.random() * shuffled.length);
        const j = Math.floor(Math.random() * shuffled.length);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        return shuffled;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      {scores.map((item) => (
        <motion.div
          key={item.name}
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex items-center justify-between rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800/50"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600" />
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              {item.name}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-24 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
              <motion.div
                className={`h-full rounded-full ${
                  item.color === "emerald"
                    ? "bg-emerald-500"
                    : "bg-amber-500"
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${item.score}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span
              className={`font-mono text-sm font-medium ${
                item.color === "emerald"
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-amber-600 dark:text-amber-400"
              }`}
            >
              {item.score}%
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
});

const PriceGauge = memo(function PriceGauge() {
  const [value, setValue] = useState(68);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        const next = prev + (Math.random() - 0.5) * 10;
        return Math.max(40, Math.min(90, next));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-zinc-200 dark:text-zinc-700"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="text-violet-500"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: value / 100 }}
            transition={{ duration: 0.5 }}
            style={{
              strokeDasharray: "251.2",
              strokeDashoffset: "0",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            ${Math.round(value)}
          </span>
        </div>
      </div>
      <p className="mt-2 text-xs text-zinc-500">Optimal price</p>
    </div>
  );
});
