"use client";

import { motion, useInView } from "framer-motion";
import { ChartLine, Target, Recycle, Lightning, Brain, ShieldCheck } from "@phosphor-icons/react";
import { useRef } from "react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-elegant text-lg text-muted mb-4"
          >
            Features
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
            <span className="font-serif">Everything you need to</span>{" "}
            <span className="font-elegant">predict demand accurately</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card glow effect on hover */}
              <div className="absolute -inset-px bg-gradient-to-b from-foreground/10 to-transparent rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative bg-card rounded-[24px] border border-border p-8 h-full transition-colors duration-300 group-hover:border-foreground/20 group-hover:bg-card/80">
                <motion.div
                  className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-5 group-hover:bg-foreground/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon
                    size={24}
                    weight="regular"
                    className="text-foreground transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
                <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-foreground transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed group-hover:text-muted/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
