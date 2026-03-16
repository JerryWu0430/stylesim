"use client";

import { motion } from "framer-motion";
import { TrendUp, TrendDown, Minus } from "@phosphor-icons/react";
import { memo } from "react";

const products = [
  { name: "Linen Blazer", demand: 87, trend: "up", color: "#2d2d2d" },
  { name: "Silk Midi Skirt", demand: 64, trend: "up", color: "#6b6b6b" },
  { name: "Cotton Cardigan", demand: 45, trend: "neutral", color: "#8b8b8b" },
  { name: "Wool Coat", demand: 23, trend: "down", color: "#ababab" },
];

const DemandBar = memo(function DemandBar({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 + 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{product.name}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">{product.demand}%</span>
          {product.trend === "up" && (
            <TrendUp size={14} weight="bold" className="text-emerald-600" />
          )}
          {product.trend === "down" && (
            <TrendDown size={14} weight="bold" className="text-rose-500" />
          )}
          {product.trend === "neutral" && (
            <Minus size={14} weight="bold" className="text-muted" />
          )}
        </div>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${product.demand}%` }}
          transition={{ delay: index * 0.1 + 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{ backgroundColor: product.color }}
        />
      </div>
    </motion.div>
  );
});

const PulsingDot = memo(function PulsingDot() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
    </span>
  );
});

export default function SimulationVisual() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-foreground">Spring 2026 Collection</h3>
            <p className="text-sm text-muted mt-1">Demand Simulation Results</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
            <PulsingDot />
            <span className="text-xs font-medium text-emerald-700">Live Analysis</span>
          </div>
        </div>

        <div className="space-y-5">
          {products.map((product, index) => (
            <DemandBar key={product.name} product={product} index={index} />
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-semibold text-foreground">2.4M</p>
              <p className="text-xs text-muted mt-1">Projected Units</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-emerald-600">+34%</p>
              <p className="text-xs text-muted mt-1">vs Last Season</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">91%</p>
              <p className="text-xs text-muted mt-1">Confidence</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-4 -right-4 bg-card rounded-2xl border border-border p-4 shadow-lg hidden md:block"
      >
        <p className="text-xs text-muted mb-2">Recommended Action</p>
        <p className="text-sm font-medium text-foreground">Increase Linen Blazer production by 40%</p>
      </motion.div>
    </div>
  );
}
