"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#features", label: "Features" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="mx-auto max-w-[1400px] px-6 py-4 md:px-12 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            StyleSim
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-600 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {link.label}
              </a>
            ))}
            <MagneticButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-zinc-200/50 bg-white/80 p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-900/80 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                  <a
                    href="#cta"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-medium text-white transition-all hover:bg-emerald-700 active:scale-[0.98]"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

function MagneticButton() {
  return (
    <motion.a
      href="#cta"
      className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-emerald-600 px-5 text-sm font-medium text-white"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span className="relative z-10">Request Demo</span>
      <motion.div
        className="absolute inset-0 bg-emerald-700"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </motion.a>
  );
}
