"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TrendUp, TrendDown, Minus, Lightning, Warning, CheckCircle, ArrowUp, ArrowDown } from "@phosphor-icons/react";
import { memo, useState, useEffect } from "react";

const products = [
  { name: "Linen Blazer", demand: 87, trend: "up", color: "#2d2d2d" },
  { name: "Silk Midi Skirt", demand: 64, trend: "up", color: "#6b6b6b" },
  { name: "Cotton Cardigan", demand: 45, trend: "neutral", color: "#8b8b8b" },
  { name: "Wool Coat", demand: 23, trend: "down", color: "#ababab" },
];

const alerts = [
  {
    type: "success",
    icon: ArrowUp,
    title: "Increase Linen Blazer",
    message: "Production +40% recommended",
    color: "accent",
  },
  {
    type: "warning",
    icon: Warning,
    title: "Wool Coat Alert",
    message: "Reduce order by 25 units",
    color: "neutral",
  },
  {
    type: "info",
    icon: Lightning,
    title: "Trending: Silk Midi",
    message: "Social buzz up 156%",
    color: "accent",
  },
  {
    type: "success",
    icon: CheckCircle,
    title: "Price Optimization",
    message: "Blazer margin +12% possible",
    color: "accent",
  },
  {
    type: "warning",
    icon: ArrowDown,
    title: "Cardigan Demand",
    message: "Consider size rebalancing",
    color: "neutral",
  },
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
            <TrendUp size={14} weight="bold" className="text-accent" />
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
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
    </span>
  );
});

const AlertCard = memo(function AlertCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % alerts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const alert = alerts[currentIndex];
  const Icon = alert.icon;

  const colorClasses = {
    accent: {
      bg: "bg-[#B5A191]/10",
      icon: "text-[#B5A191]",
      border: "border-[#B5A191]/20",
    },
    neutral: {
      bg: "bg-foreground/5",
      icon: "text-foreground/70",
      border: "border-foreground/10",
    },
  };

  const colors = colorClasses[alert.color as keyof typeof colorClasses];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute -bottom-4 -right-4 hidden md:block"
    >
      <div className={`bg-card rounded-2xl border border-border p-4 shadow-lg min-w-[220px] overflow-hidden`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-muted">Recommended Action</span>
          <div className="flex gap-1 ml-auto">
            {alerts.map((_, i) => (
              <span
                key={i}
                className={`w-1 h-1 rounded-full transition-colors duration-300 ${
                  i === currentIndex ? "bg-foreground" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-3"
          >
            <div className={`p-2 rounded-xl ${colors.bg} ${colors.border} border`}>
              <Icon size={16} weight="bold" className={colors.icon} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {alert.title}
              </p>
              <p className="text-xs text-muted mt-0.5">
                {alert.message}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
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
          <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full">
            <PulsingDot />
            <span className="text-xs font-medium text-accent">Live Analysis</span>
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
              <p className="text-2xl font-semibold text-accent">+34%</p>
              <p className="text-xs text-muted mt-1">vs Last Season</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">91%</p>
              <p className="text-xs text-muted mt-1">Confidence</p>
            </div>
          </div>
        </div>
      </motion.div>

      <AlertCard />
    </div>
  );
}
