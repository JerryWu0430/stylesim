"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Check, Spinner } from "@phosphor-icons/react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-zinc-950 py-24 md:py-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-zinc-950 to-zinc-950" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div
        ref={ref}
        className="relative mx-auto max-w-[1400px] px-6 md:px-12"
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold leading-tight tracking-tighter text-white md:text-4xl lg:text-5xl">
              Stop guessing.
              <br />
              <span className="text-emerald-500">Start simulating.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">
              Join the brands that are making smarter production decisions. Get
              a free pilot simulation on your next collection.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-950/50 px-6 py-4 text-emerald-400"
              >
                <Check size={20} weight="bold" />
                <span>Thanks! We&apos;ll be in touch within 24 hours.</span>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="h-12 flex-1 rounded-full border border-zinc-700 bg-zinc-900 px-5 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 text-sm font-medium text-white transition-colors hover:bg-emerald-500 disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {status === "loading" ? (
                    <Spinner size={18} className="animate-spin" />
                  ) : (
                    <>
                      Request Demo
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500"
          >
            {["Free pilot included", "No credit card required", "Setup in 48 hours"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check
                    size={14}
                    weight="bold"
                    className="text-emerald-500"
                  />
                  <span>{item}</span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
