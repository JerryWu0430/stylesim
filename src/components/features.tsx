"use client";

import { motion, useInView } from "framer-motion";
import {
  Brain,
  Target,
  ChartLine,
  Recycle,
  Lightning,
  ShieldCheck,
  TrendUp,
  Package,
} from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Analytics Chart Card - shows demand prediction accuracy
function DemandChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(4);
  const chartRef = useRef<SVGSVGElement>(null);

  const demandData = [
    { day: "Mon", predicted: 450, actual: 430 },
    { day: "Tue", predicted: 520, actual: 545 },
    { day: "Wed", predicted: 680, actual: 665 },
    { day: "Thu", predicted: 750, actual: 740 },
    { day: "Fri", predicted: 620, actual: 635 },
    { day: "Sat", predicted: 890, actual: 875 },
    { day: "Sun", predicted: 720, actual: 710 },
  ];

  const maxValue = Math.max(...demandData.flatMap((d) => [d.predicted, d.actual]));
  const chartHeight = 120;
  const chartWidth = 300;
  const padding = { top: 20, bottom: 25, left: 10, right: 10 };

  const getY = (value: number) => {
    return chartHeight - padding.bottom - (value / maxValue) * (chartHeight - padding.top - padding.bottom);
  };

  const getX = (index: number) => {
    return padding.left + (index / (demandData.length - 1)) * (chartWidth - padding.left - padding.right);
  };

  const generatePath = (key: "predicted" | "actual") => {
    const points = demandData.map((d, i) => ({ x: getX(i), y: getY(d[key]) }));
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i - 1] || points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] || p2;
      const tension = 0.35;
      const cp1x = p1.x + (p2.x - p0.x) * tension;
      const cp1y = p1.y + (p2.y - p0.y) * tension;
      const cp2x = p2.x - (p3.x - p1.x) * tension;
      const cp2y = p2.y - (p3.y - p1.y) * tension;
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return path;
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!chartRef.current) return;
    const rect = chartRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const relativeX = (x / rect.width) * chartWidth;
    let closestIndex = 0;
    let closestDist = Number.POSITIVE_INFINITY;
    demandData.forEach((_, i) => {
      const dist = Math.abs(getX(i) - relativeX);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    });
    setHoveredIndex(closestIndex);
  };

  return (
    <div className="relative h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-foreground/80" />
            <span className="text-muted-foreground">Predicted</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-foreground/30" />
            <span className="text-muted-foreground">Actual</span>
          </div>
        </div>
        <div className="text-xs font-medium text-foreground bg-foreground/5 px-2 py-1 rounded-full">
          91% Accuracy
        </div>
      </div>

      <svg
        ref={chartRef}
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        className="w-full flex-1"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredIndex(4)}
      >
        <defs>
          <linearGradient id="demandGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        {demandData.map((_, i) => (
          <line
            key={i}
            x1={getX(i)}
            y1={padding.top}
            x2={getX(i)}
            y2={chartHeight - padding.bottom}
            className="stroke-border"
            strokeWidth="1"
            strokeDasharray="2 4"
            opacity={hoveredIndex === i ? 0.8 : 0.3}
          />
        ))}

        <path d={generatePath("actual")} fill="none" className="stroke-foreground/30" strokeWidth="2" strokeLinecap="round" />
        <path d={generatePath("predicted")} fill="none" className="stroke-foreground" strokeWidth="2.5" strokeLinecap="round" />

        {hoveredIndex !== null && (
          <g>
            <circle cx={getX(hoveredIndex)} cy={getY(demandData[hoveredIndex].predicted)} r="5" className="fill-background stroke-foreground" strokeWidth="2" />
            <circle cx={getX(hoveredIndex)} cy={getY(demandData[hoveredIndex].actual)} r="4" className="fill-background stroke-foreground/30" strokeWidth="2" />
          </g>
        )}

        {demandData.map((d, i) => (
          <text key={i} x={getX(i)} y={chartHeight - 5} textAnchor="middle" className="text-[10px] fill-muted-foreground">
            {d.day}
          </text>
        ))}
      </svg>

      {hoveredIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bg-foreground text-background text-xs px-2 py-1 rounded-lg"
          style={{
            left: `${(getX(hoveredIndex) / chartWidth) * 100}%`,
            top: `${(getY(demandData[hoveredIndex].predicted) / chartHeight) * 100 - 15}%`,
            transform: "translateX(-50%)",
          }}
        >
          {demandData[hoveredIndex].predicted} units
        </motion.div>
      )}
    </div>
  );
}

// SKU Grid Visual - static data to avoid hydration mismatch
// Using lighter backgrounds for better text contrast
const skuData = [
  { id: 0, color: "bg-foreground/15", size: "M" },
  { id: 1, color: "bg-foreground/25", size: "S" },
  { id: 2, color: "bg-foreground/10", size: "L" },
  { id: 3, color: "bg-foreground/35", size: "XS" },
  { id: 4, color: "bg-foreground/20", size: "XL" },
  { id: 5, color: "bg-foreground/30", size: "M" },
  { id: 6, color: "bg-foreground/15", size: "L" },
  { id: 7, color: "bg-foreground/35", size: "S" },
  { id: 8, color: "bg-foreground/10", size: "XL" },
  { id: 9, color: "bg-foreground/25", size: "M" },
  { id: 10, color: "bg-foreground/35", size: "XS" },
  { id: 11, color: "bg-foreground/15", size: "S" },
  { id: 12, color: "bg-foreground/30", size: "L" },
  { id: 13, color: "bg-foreground/10", size: "M" },
  { id: 14, color: "bg-foreground/20", size: "XL" },
  { id: 15, color: "bg-foreground/25", size: "S" },
  { id: 16, color: "bg-foreground/35", size: "L" },
  { id: 17, color: "bg-foreground/15", size: "XS" },
  { id: 18, color: "bg-foreground/20", size: "M" },
  { id: 19, color: "bg-foreground/10", size: "XL" },
];

function SKUGrid() {
  const skus = skuData;

  return (
    <div className="grid grid-cols-5 gap-1.5">
      {skus.map((sku, i) => (
        <motion.div
          key={sku.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.02 }}
          className={cn(
            "aspect-square rounded-lg flex items-center justify-center text-[10px] font-medium transition-all duration-300 hover:scale-110 cursor-pointer text-foreground/70",
            sku.color
          )}
        >
          {sku.size}
        </motion.div>
      ))}
    </div>
  );
}

// Animated waste reduction visual
function WasteReduction() {
  return (
    <div className="flex items-center justify-center h-full relative">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-32 h-32 rounded-full border-4 border-dashed border-foreground/10" />
      </motion.div>
      <div className="text-center relative z-10">
        <motion.div
          className="text-5xl font-serif font-medium text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          73%
        </motion.div>
        <p className="text-sm text-muted-foreground mt-1">Less Waste</p>
      </div>
      <motion.div
        className="absolute top-4 right-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Recycle size={24} className="text-foreground/20" />
      </motion.div>
    </div>
  );
}

// Integration visual
function IntegrationFlow() {
  const integrations = ["Shopify", "SAP", "Oracle", "Custom API"];

  return (
    <div className="flex flex-col gap-2">
      {integrations.map((name, i) => (
        <motion.div
          key={name}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-3 bg-foreground/5 rounded-lg px-3 py-2"
        >
          <div className="w-2 h-2 rounded-full bg-foreground/60" />
          <span className="text-sm text-foreground/80">{name}</span>
          <motion.div
            className="ml-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 + 0.3 }}
          >
            <div className="w-4 h-4 rounded-full bg-foreground/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-foreground" />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
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
            className="font-elegant text-lg text-muted-foreground mb-4"
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
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]"
        >
          {/* AI Demand Prediction - Large card */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-2 group relative overflow-hidden rounded-[24px] bg-card border border-border p-6 hover:border-foreground/20 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center">
                <Brain size={20} className="text-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-foreground">AI Demand Prediction</h3>
                <p className="text-xs text-muted-foreground">Trend analysis & forecasting</p>
              </div>
            </div>
            <div className="h-[calc(100%-80px)]">
              <DemandChart />
            </div>
          </motion.div>

          {/* SKU-Level Insights */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 row-span-2 group relative overflow-hidden rounded-[24px] bg-card border border-border p-6 hover:border-foreground/20 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center">
                <Target size={20} className="text-foreground" />
              </div>
            </div>
            <h3 className="text-lg font-serif text-foreground mb-1">SKU-Level Insights</h3>
            <p className="text-xs text-muted-foreground mb-4">Every style, color & size</p>
            <SKUGrid />
          </motion.div>

          {/* Real-Time Analytics */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 group relative overflow-hidden rounded-[24px] bg-card border border-border p-6 hover:border-foreground/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <ChartLine size={24} className="text-foreground" />
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live
              </div>
            </div>
            <h3 className="text-lg font-serif text-foreground mt-3">Real-Time</h3>
            <p className="text-xs text-muted-foreground">Monitor demand shifts as they happen</p>
            <motion.div
              className="absolute bottom-4 right-4 flex items-center gap-1"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <TrendUp size={16} className="text-foreground/40" />
            </motion.div>
          </motion.div>

          {/* Waste Reduction */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 group relative overflow-hidden rounded-[24px] bg-card border border-border hover:border-foreground/20 transition-all duration-300"
          >
            <WasteReduction />
          </motion.div>

          {/* Fast Integration */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-[24px] bg-card border border-border p-6 hover:border-foreground/20 transition-all duration-300"
          >
            <div className="flex gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Lightning size={20} className="text-foreground" />
                  <h3 className="text-lg font-serif text-foreground">Fast Integration</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-4">Connect in hours, not weeks</p>
                <IntegrationFlow />
              </div>
              <div className="hidden md:flex items-center justify-center w-24">
                <motion.div
                  className="text-4xl font-serif text-foreground/20"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  →
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enterprise Security */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-[24px] bg-foreground text-background p-6 hover:bg-foreground/90 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={20} className="text-background" />
                  <h3 className="text-lg font-serif">Enterprise Security</h3>
                </div>
                <p className="text-sm text-background/70 max-w-xs">
                  SOC 2 Type II certified. Your design data stays yours, always.
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2 bg-background/10 rounded-full px-3 py-1">
                  <Package size={14} />
                  <span className="text-xs">End-to-end encrypted</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 rounded-full px-3 py-1">
                  <ShieldCheck size={14} />
                  <span className="text-xs">SOC 2 Type II</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
