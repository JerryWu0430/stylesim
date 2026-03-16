"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trash, TrendDown, Question, Clock } from "@phosphor-icons/react";

const problems = [
  {
    icon: Question,
    title: "Gut-based decisions",
    description:
      "Design teams rely on intuition and outdated trend reports. 35% of inventory goes unsold.",
    stat: "35%",
    statLabel: "unsold inventory",
  },
  {
    icon: Clock,
    title: "18-month lead times",
    description:
      "By the time products hit shelves, trends have shifted. Missed windows mean missed revenue.",
    stat: "18mo",
    statLabel: "average lead time",
  },
  {
    icon: TrendDown,
    title: "Margin erosion",
    description:
      "End-of-season markdowns destroy profitability. Brands lose 20-40% of potential margin.",
    stat: "40%",
    statLabel: "margin erosion",
  },
  {
    icon: Trash,
    title: "Environmental impact",
    description:
      "92 million tons of textile waste annually. Sustainability pressure from regulators and consumers.",
    stat: "92M",
    statLabel: "tons waste/year",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-zinc-950 py-24 md:py-32"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

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
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-500">
            The Problem
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tighter text-white md:text-4xl lg:text-5xl">
            Fashion runs on hope.{" "}
            <span className="text-zinc-500">
              That costs the industry $500B annually.
            </span>
          </h2>
        </motion.div>

        {/* Problem grid - 2x2 asymmetric */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700 ${
                i === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 transition-colors group-hover:bg-emerald-900/50 group-hover:text-emerald-400">
                <problem.icon size={20} weight="duotone" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-medium text-white">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {problem.description}
              </p>

              {/* Stat */}
              <div className="mt-6 border-t border-zinc-800 pt-4">
                <p className="font-mono text-2xl font-semibold text-red-400">
                  {problem.stat}
                </p>
                <p className="text-xs text-zinc-500">{problem.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 border-l-2 border-emerald-600 pl-6"
        >
          <blockquote className="max-w-2xl text-lg text-zinc-400">
            &ldquo;We spend months designing, millions manufacturing, and then
            pray it sells. There has to be a better way.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-zinc-500">
            &mdash; VP Merchandising, Fortune 500 Fashion Brand
          </p>
        </motion.div>
      </div>
    </section>
  );
}
