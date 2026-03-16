"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Brain, ChartLine, Check } from "@phosphor-icons/react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload designs",
    description:
      "Import sketches, tech packs, or rendered designs. Our AI processes any format.",
  },
  {
    icon: Brain,
    number: "02",
    title: "AI analyzes",
    description:
      "Machine learning evaluates style, trend alignment, price point sensitivity, and market fit.",
  },
  {
    icon: ChartLine,
    number: "03",
    title: "Simulate response",
    description:
      "See predicted sell-through rates, optimal pricing, and risk scores for each SKU.",
  },
  {
    icon: Check,
    number: "04",
    title: "Decide with data",
    description:
      "Produce only what will sell. Cut waste, protect margins, hit sustainability targets.",
  },
];

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900" />

      <div
        ref={ref}
        className="relative mx-auto max-w-[1400px] px-6 md:px-12"
      >
        {/* Header - left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-500">
            The Solution
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tighter text-zinc-900 dark:text-zinc-50 md:text-4xl lg:text-5xl">
            The flight simulator{" "}
            <span className="text-zinc-400 dark:text-zinc-500">
              for fashion collections
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Test 100 designs, produce the top 20. StyleSim predicts market
            response before you commit to manufacturing.
          </p>
        </motion.div>

        {/* Steps - horizontal timeline on desktop */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent md:left-1/2 md:block md:-translate-x-1/2 md:h-px md:w-full md:bg-gradient-to-r" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Step number indicator */}
                <div className="mb-6 flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950">
                    <step.icon
                      size={28}
                      weight="duotone"
                      className="text-emerald-600 dark:text-emerald-400"
                    />
                    {/* Pulse ring */}
                    <div className="absolute -inset-1 animate-pulse-ring rounded-2xl border border-emerald-500/30" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-medium text-zinc-900 dark:text-zinc-50">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual comparison */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {/* Before */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-red-500">
              Without StyleSim
            </p>
            <div className="space-y-3">
              {[
                "Design based on intuition",
                "Produce full collection",
                "Hope it sells",
                "Mark down unsold inventory",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs text-red-600 dark:bg-red-900/30 dark:text-red-400">
                    {i + 1}
                  </span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 dark:border-emerald-800 dark:bg-emerald-950/30">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-500">
              With StyleSim
            </p>
            <div className="space-y-3">
              {[
                "Simulate collection performance",
                "Identify winners and losers",
                "Produce only what will sell",
                "Protect margins, reduce waste",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-zinc-900 dark:text-zinc-50"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
                    <Check size={12} weight="bold" />
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
