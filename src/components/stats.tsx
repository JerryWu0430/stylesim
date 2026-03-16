"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "91%", label: "Prediction Accuracy" },
  { value: "73%", label: "Waste Reduction" },
  { value: "$2.1M", label: "Avg. Savings / Year" },
  { value: "4.2x", label: "ROI in First Season" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-foreground rounded-[2.5rem] p-8 md:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter leading-tight text-background">
                Results that speak for themselves
              </h2>
              <p className="mt-4 text-background/70 leading-relaxed">
                Fashion brands using StyleSim see dramatic improvements in their
                production efficiency and bottom line.
              </p>
            </div>

            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-center lg:text-left"
                >
                  <p className="text-3xl md:text-4xl font-semibold text-background tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm text-background/60 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
