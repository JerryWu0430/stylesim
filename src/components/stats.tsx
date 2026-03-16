"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./animated-counter";

const stats = [
  { value: 91, suffix: "%", label: "Prediction Accuracy" },
  { value: 73, suffix: "%", label: "Waste Reduction" },
  { prefix: "$", value: 2.1, suffix: "M", label: "Avg. Savings / Year", isDecimal: true },
  { value: 4.2, suffix: "x", label: "ROI in First Season", isDecimal: true },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-foreground rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.05, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center relative">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight text-background">
                <span className="font-serif">Results that</span>{" "}
                <span className="font-elegant">speak for themselves</span>
              </h2>
              <p className="mt-4 text-background/70 leading-relaxed">
                Fashion brands using StyleSim see dramatic improvements in their
                production efficiency and bottom line.
              </p>
            </motion.div>

            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-center lg:text-left group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <p className="font-serif text-3xl md:text-4xl text-background tracking-tight">
                      {stat.prefix}
                      {stat.isDecimal ? (
                        <AnimatedCounter
                          value={Math.floor(stat.value)}
                          suffix={`.${String(stat.value).split(".")[1]}${stat.suffix}`}
                          duration={2}
                        />
                      ) : (
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          duration={2}
                        />
                      )}
                    </p>
                    <p className="font-elegant text-sm text-background/60 mt-2">
                      {stat.label}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
