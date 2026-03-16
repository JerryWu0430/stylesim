"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  ChartLineUp,
  Cube,
  Lightning,
  Sparkle,
  TrendUp,
  ShirtFolded,
  Leaf,
} from "@phosphor-icons/react";
import { useRef, useState } from "react";

// Premium spring config
const springConfig = { stiffness: 100, damping: 20 };

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
  },
};

// Magnetic Button Component
function MagneticButton({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

// Floating Nav
function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.5 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40"
      >
        <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-2xl px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
          <a
            href="#"
            className="px-4 py-2 font-medium text-charcoal tracking-tight"
          >
            StyleSim
          </a>
          <div className="hidden md:flex items-center gap-1">
            <a
              href="#features"
              className="px-3 py-2 text-sm text-muted hover:text-charcoal transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="px-3 py-2 text-sm text-muted hover:text-charcoal transition-colors duration-300"
            >
              Process
            </a>
            <a
              href="#pricing"
              className="px-3 py-2 text-sm text-muted hover:text-charcoal transition-colors duration-300"
            >
              Pricing
            </a>
          </div>
          <MagneticButton
            href="#cta"
            className="group flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-white transition-all duration-500"
          >
            <span>Get Early Access</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
              <ArrowRight size={12} weight="bold" />
            </span>
          </MagneticButton>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current origin-left"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-current"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current origin-left"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-30 bg-cream/95 backdrop-blur-3xl md:hidden"
      >
        <motion.div
          className="flex flex-col items-center justify-center h-full gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
        >
          {["Features", "Process", "Pricing"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              variants={itemVariants}
              className="text-3xl font-medium text-charcoal"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center px-4 py-32 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-sage">
                <Sparkle size={14} weight="fill" />
                Fashion Intelligence Platform
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1] text-charcoal mb-8"
            >
              Predict Your
              <br />
              <span className="italic text-sage">Collection&apos;s</span>
              <br />
              Performance
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted leading-relaxed max-w-[55ch] mb-10"
            >
              Simulate market reception, optimize pricing, and reduce overproduction
              before manufacturing begins. Data-driven decisions for conscious fashion.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton
                href="#cta"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-charcoal px-8 py-4 text-base font-medium text-white transition-all duration-500 hover:bg-espresso"
              >
                <span>Request a Demo</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <ArrowRight size={14} weight="bold" />
                </span>
              </MagneticButton>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/10 px-8 py-4 text-base font-medium text-charcoal transition-all duration-300 hover:bg-charcoal/5"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-10 border-t border-charcoal/10 grid grid-cols-3 gap-8"
            >
              {[
                { value: "87%", label: "Prediction Accuracy" },
                { value: "34%", label: "Waste Reduction" },
                { value: "2.4x", label: "ROI Improvement" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-charcoal mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 relative"
          >
            {/* Outer Shell - Double Bezel */}
            <div className="p-2 rounded-[2.5rem] bg-charcoal/5 ring-1 ring-charcoal/5">
              {/* Inner Core */}
              <div className="relative aspect-[4/5] rounded-[calc(2.5rem-0.5rem)] bg-gradient-to-br from-cream-dark to-cream overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
                {/* Fashion imagery placeholder with gradient overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://picsum.photos/seed/fashion-atelier/800/1000')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />

                {/* Floating card overlay */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="rounded-2xl bg-white/90 backdrop-blur-xl p-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-black/5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-wider text-muted">
                        Collection Forecast
                      </span>
                      <span className="flex items-center gap-1 text-sage text-sm font-medium">
                        <TrendUp size={14} weight="bold" />
                        +23.4%
                      </span>
                    </div>
                    <div className="flex gap-1 h-12">
                      {[40, 65, 55, 80, 70, 90, 85, 78].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{
                            delay: 1.4 + i * 0.08,
                            duration: 0.6,
                            ease: [0.32, 0.72, 0, 1],
                          }}
                          className="flex-1 rounded-sm bg-sage/20 origin-bottom"
                          style={{ height: `${h}%` }}
                        >
                          <div
                            className="w-full rounded-sm bg-sage origin-bottom"
                            style={{ height: `${h * 0.7}%` }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      icon: <ChartLineUp size={28} weight="light" />,
      title: "Demand Forecasting",
      description:
        "AI-powered predictions analyzing market trends, social signals, and historical data to forecast collection performance.",
    },
    {
      icon: <Cube size={28} weight="light" />,
      title: "Virtual Showroom",
      description:
        "Present collections digitally to buyers and gather pre-orders before committing to production quantities.",
    },
    {
      icon: <Lightning size={28} weight="light" />,
      title: "Real-time Analytics",
      description:
        "Track engagement, conversion rates, and buyer sentiment as your collection reaches the market.",
    },
    {
      icon: <Leaf size={28} weight="light" />,
      title: "Sustainability Impact",
      description:
        "Calculate and optimize your environmental footprint by producing only what the market demands.",
    },
  ];

  return (
    <section id="features" className="py-32 md:py-40 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-sage mb-6">
            Capabilities
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.15] text-charcoal max-w-2xl">
            Intelligence at every stage of the{" "}
            <span className="italic text-sage">fashion lifecycle</span>
          </h2>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.32, 0.72, 0, 1],
              }}
              className={`${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}
            >
              {/* Double Bezel Card */}
              <div className="h-full p-1.5 rounded-[2rem] bg-charcoal/[0.03] ring-1 ring-charcoal/5">
                <div className="h-full rounded-[calc(2rem-0.375rem)] bg-white p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
                  <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center text-sage mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Upload Your Collection",
      description:
        "Import designs, tech packs, and pricing data. Our system analyzes every detail.",
    },
    {
      num: "02",
      title: "Run Simulations",
      description:
        "Test different scenarios: pricing strategies, color variations, regional preferences.",
    },
    {
      num: "03",
      title: "Analyze Results",
      description:
        "Review demand forecasts, identify best performers, and spot potential issues.",
    },
    {
      num: "04",
      title: "Optimize & Produce",
      description:
        "Make data-backed production decisions. Manufacture with confidence.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-cream-dark"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-sage mb-6">
            The Process
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.15] text-charcoal max-w-2xl mx-auto">
            From concept to confident{" "}
            <span className="italic text-sage">production</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              <div className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-sage/30 mb-6">
                {step.num}
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial / Social Proof
function SocialProof() {
  return (
    <section className="py-32 md:py-40 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Quote */}
          <div>
            <ShirtFolded
              size={48}
              weight="light"
              className="text-sage/40 mb-8"
            />
            <blockquote className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl text-charcoal leading-snug mb-8">
              &ldquo;StyleSim reduced our sample production by 40% while increasing
              sell-through rates. It transformed how we approach seasonal
              planning.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/20" />
              <div>
                <div className="font-medium text-charcoal">
                  Margaux Belmont
                </div>
                <div className="text-sm text-muted">
                  Head of Production, Maison Reverie
                </div>
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="lg:pl-20">
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-8">
              Trusted by forward-thinking brands
            </p>
            <div className="grid grid-cols-3 gap-8 opacity-40">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-8 bg-charcoal/20 rounded"
                  style={{ width: `${60 + Math.random() * 40}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section
      id="cta"
      className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-charcoal"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="text-center"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.1] text-white mb-6">
            Ready to simulate your
            <br />
            <span className="italic text-sage">next collection?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-12">
            Join the waitlist for early access and be among the first to
            transform your production workflow.
          </p>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full bg-white/10 border border-white/10 px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 rounded-full bg-sage px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-sage/90"
            >
              <span>Join Waitlist</span>
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.form>

          <p className="mt-6 text-sm text-white/40">
            No credit card required. Early access is free.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-16 bg-charcoal border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white/40 text-sm">
          2025 StyleSim. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main>
      <FloatingNav />
      <Hero />
      <Features />
      <HowItWorks />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  );
}
