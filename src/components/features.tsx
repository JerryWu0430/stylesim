"use client";

import { motion } from "framer-motion";
import { ChartLine, Target, Recycle, Lightning, Brain, ShieldCheck } from "@phosphor-icons/react";

const features = [
  {
    icon: Brain,
    title: "AI Demand Prediction",
    description:
      "Our models analyze trends, social signals, and historical data to forecast demand with 91% accuracy.",
  },
  {
    icon: Target,
    title: "SKU-Level Insights",
    description:
      "Get granular predictions for every style, color, and size combination in your collection.",
  },
  {
    icon: ChartLine,
    title: "Real-Time Analytics",
    description:
      "Monitor demand shifts as they happen. Adjust production plans on the fly.",
  },
  {
    icon: Recycle,
    title: "Waste Reduction",
    description:
      "Produce only what sells. Our clients reduce overstock waste by an average of 73%.",
  },
  {
    icon: Lightning,
    title: "Fast Integration",
    description:
      "Connect your existing systems in hours. No complex migrations required.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified. Your design data stays yours, always.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight">
            Everything you need to predict demand accurately
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-5 group-hover:bg-foreground/10 transition-colors">
                <feature.icon size={24} weight="regular" className="text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
