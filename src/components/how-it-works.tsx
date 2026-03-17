"use client";

import { motion } from "framer-motion";
import { UploadSimple, Cpu, ChartLineUp, CheckCircle } from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    icon: UploadSimple,
    title: "Upload Your Designs",
    description:
      "Share your collection concepts, sketches, or tech packs. Our system accepts images, PDFs, and direct integrations with design tools.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Analyzes Demand",
    description:
      "Our models process your designs against market trends, social sentiment, competitor data, and historical sales patterns.",
  },
  {
    number: "03",
    icon: ChartLineUp,
    title: "Get Demand Forecasts",
    description:
      "Receive detailed predictions for each SKU, including optimal pricing, production quantities, and launch timing.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Optimize Production",
    description:
      "Make data-driven decisions about what to manufacture. Reduce waste, maximize sell-through, and increase margins.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <p className="font-elegant text-lg text-muted mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
            <span className="font-serif">From concept to</span>{" "}
            <span className="font-elegant">confident production</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative text-center lg:text-left"
              >
                <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border mb-6 lg:mb-8">
                  <step.icon size={20} weight="regular" className="text-foreground" />
                </div>
                <p className="font-elegant text-sm text-muted mb-3">
                  Step {step.number}
                </p>
                <h3 className="text-lg font-serif text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
