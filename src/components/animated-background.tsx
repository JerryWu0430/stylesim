"use client";

import { motion } from "framer-motion";
import { memo } from "react";

const FloatingShape = memo(function FloatingShape({
  className,
  delay = 0,
  duration = 20,
}: {
  className: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-[0.03] pointer-events-none ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
});

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Large floating shapes */}
      <FloatingShape
        className="w-[600px] h-[600px] bg-foreground -top-48 -right-48"
        delay={0}
        duration={25}
      />
      <FloatingShape
        className="w-[400px] h-[400px] bg-foreground top-1/3 -left-32"
        delay={2}
        duration={20}
      />
      <FloatingShape
        className="w-[300px] h-[300px] bg-foreground bottom-1/4 right-1/4"
        delay={4}
        duration={22}
      />
      <FloatingShape
        className="w-[500px] h-[500px] bg-foreground -bottom-32 left-1/3"
        delay={1}
        duration={28}
      />
    </div>
  );
}
