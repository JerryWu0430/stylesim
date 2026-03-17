"use client";

import { motion, useInView } from "framer-motion";
import {
  Brain,
  Target,
  ChartLine,
  Recycle,
  ShieldCheck,
  Package,
  ArrowUp,
  ArrowDown,
  Fire,
  Users,
} from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { Marquee } from "@/components/ui/marquee";
import BentoCard from "@/components/ui/bento-card";

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
          {demandData[hoveredIndex].predicted}£
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

// Real-time action notifications
const notifications = [
  { icon: ArrowUp, text: "Increase: Wool Coat", change: "+15%", type: "up" as const },
  { icon: Fire, text: "Trending: Oversized Blazer", change: "Hot", type: "hot" as const },
  { icon: ArrowDown, text: "Reduce: Silk Blouse", change: "-20%", type: "down" as const },
  { icon: ArrowUp, text: "Restock: Linen Pants", change: "+8%", type: "up" as const },
  { icon: Fire, text: "Viral: Pleated Skirt", change: "Hot", type: "hot" as const },
];

function RealtimeNotifications() {
  return (
    <AnimatedList delay={2000} className="gap-2">
      {notifications.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 bg-foreground/5 rounded-lg px-3 py-2 text-xs w-full"
        >
          <item.icon
            size={14}
            weight="bold"
            className={cn(
              item.type === "up" && "text-green-600",
              item.type === "down" && "text-red-500",
              item.type === "hot" && "text-orange-500"
            )}
          />
          <span className="text-foreground/80 flex-1 truncate">{item.text}</span>
          <span
            className={cn(
              "font-medium",
              item.type === "up" && "text-green-600",
              item.type === "down" && "text-red-500",
              item.type === "hot" && "text-orange-500"
            )}
          >
            {item.change}
          </span>
        </div>
      ))}
    </AnimatedList>
  );
}

// Persona comments for simulation marquee
const personas = [
  { name: "Gen Z Trendsetter", age: "19", comment: "Love the oversized fit!", avatar: "👧" },
  { name: "Minimalist Mom", age: "34", comment: "Clean lines, perfect for work", avatar: "👩" },
  { name: "Eco-Conscious", age: "28", comment: "Is this sustainable fabric?", avatar: "🧑" },
  { name: "Luxury Shopper", age: "45", comment: "Quality looks premium", avatar: "👨" },
  { name: "Y2K Revivalist", age: "22", comment: "Needs more color tbh", avatar: "👱‍♀️" },
  { name: "Classic Dresser", age: "52", comment: "Timeless silhouette", avatar: "👴" },
  { name: "Streetwear Fan", age: "25", comment: "Would style with sneakers", avatar: "🧔" },
  { name: "Budget Hunter", age: "31", comment: "Great value at this price", avatar: "👩‍🦰" },
];

function PersonaCard({ persona }: { persona: typeof personas[0] }) {
  return (
    <div className="flex flex-col bg-background border border-border rounded-xl p-3 w-[180px] shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{persona.avatar}</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-foreground truncate">{persona.name}</p>
          <p className="text-[10px] text-muted-foreground">Age {persona.age}</p>
        </div>
      </div>
      <p className="text-xs text-foreground/70 italic">&ldquo;{persona.comment}&rdquo;</p>
    </div>
  );
}

function SimulationMarquee() {
  return (
    <div className="relative overflow-hidden">
      <Marquee pauseOnHover className="[--duration:25s]">
        {personas.map((persona, idx) => (
          <PersonaCard key={idx} persona={persona} />
        ))}
      </Marquee>
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
          className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-3"
        >
          {/* Demand Intelligence */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-5 md:row-span-2"
          >
            <BentoCard />
          </motion.div>

          {/* Production Saving */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-3xl bg-card border border-border p-5 hover:border-foreground/20 transition-all duration-300 shadow-xl shadow-primary/5 flex flex-col"
          >
            <div className="mb-3">
              <p className="text-xs text-muted-foreground uppercase">Production Saving</p>
              <h3 className="text-lg sm:text-xl font-medium text-foreground leading-snug">Predict demand, cut costs.</h3>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <DemandChart />
            </div>
          </motion.div>

          {/* Waste Reduction - compact */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-3 group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-foreground/20 transition-all duration-300 shadow-xl shadow-primary/5"
          >
            <WasteReduction />
          </motion.div>

          {/* Real-Time Analytics - stacked right */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-3 group relative overflow-hidden rounded-3xl bg-card border border-border p-5 hover:border-foreground/20 transition-all duration-300 shadow-xl shadow-primary/5"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-muted-foreground uppercase">Real-Time</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live
              </div>
            </div>
            <h3 className="text-base font-medium text-foreground leading-snug mb-3">AI recommendations.</h3>
            <div className="h-[140px] overflow-hidden">
              <RealtimeNotifications />
            </div>
          </motion.div>

          {/* Enterprise Security */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-3 group relative overflow-hidden rounded-3xl bg-foreground text-background p-5 hover:bg-foreground/90 transition-all duration-300 shadow-xl shadow-primary/5"
          >
            <svg
              className="absolute -right-6 -bottom-6 w-32 h-32 text-background/10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.83-3.23 9.13-7 10.36-3.77-1.23-7-5.53-7-10.36V6.3l7-3.12zm-1 5.82v6h2v-6h-2zm0 8v2h2v-2h-2z" />
            </svg>
            <div className="relative z-10">
              <p className="text-xs text-background/60 uppercase">Security</p>
              <h3 className="text-base font-medium leading-snug mt-1">SOC 2 Type II certified.</h3>
              <div className="flex flex-col gap-1.5 mt-3">
                <div className="flex items-center gap-2 bg-background/10 rounded-full px-2.5 py-1 w-fit">
                  <Package size={12} />
                  <span className="text-[11px]">Encrypted</span>
                </div>
                <div className="flex items-center gap-2 bg-background/10 rounded-full px-2.5 py-1 w-fit">
                  <ShieldCheck size={12} />
                  <span className="text-[11px]">SOC 2</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SKU-Level Insights */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-3 group relative overflow-hidden rounded-3xl bg-card border border-border p-5 hover:border-foreground/20 transition-all duration-300 shadow-xl shadow-primary/5"
          >
            <div className="mb-3">
              <p className="text-xs text-muted-foreground uppercase">SKU Insights</p>
              <h3 className="text-base font-medium text-foreground leading-snug">Every style, color & size.</h3>
            </div>
            <SKUGrid />
          </motion.div>

          {/* Audience Simulation - wide bottom */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-6 group relative overflow-hidden rounded-3xl bg-card border border-border p-5 hover:border-foreground/20 transition-all duration-300 shadow-xl shadow-primary/5 flex flex-col"
          >
            <div className="mb-3">
              <p className="text-xs text-muted-foreground uppercase">Audience Simulation</p>
              <h3 className="text-lg font-medium text-foreground leading-snug">See how personas react to your designs.</h3>
            </div>
            <div className="flex-1 flex items-center">
              <SimulationMarquee />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
