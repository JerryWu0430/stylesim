"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DashboardSquare01Icon,
  UserGroupIcon,
  Message01Icon,
  Folder02Icon,
  Add01Icon,
  CircleArrowUpRight02Icon,
  Search01Icon,
  BarChartIcon,
  Tick01Icon,
  Settings02Icon,
  InformationCircleIcon,
  DatabaseIcon,
  Mail01Icon,
  LeftToRightListDashIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

interface TabConfig {
  id: string;
  label: string;
  icon: any;
  badge?: string;
  header: string;
  description: string;
}

const TABS: TabConfig[] = [
  {
    id: "dashboard",
    label: "Forecast",
    icon: DashboardSquare01Icon,
    header: "Demand Overview",
    description: "Real-time collection performance metrics.",
  },
  {
    id: "management",
    label: "SKUs",
    icon: UserGroupIcon,
    header: "SKU Performance",
    description: "Track every style, color and size.",
    badge: "24",
  },
  {
    id: "threads",
    label: "Actions",
    icon: Message01Icon,
    header: "Recommendations",
    description: "AI-suggested production adjustments.",
    badge: "5",
  },
  {
    id: "resources",
    label: "Reports",
    icon: Folder02Icon,
    header: "Export & Logs",
    description: "Download forecasts and audit trails.",
  },
];

const BentoCard = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const content = useMemo(() => {
    switch (activeTab.id) {
      case "dashboard":
        return <OverviewDashboard />;
      case "management":
        return <ManagementDashboard />;
      case "threads":
        return <ThreadsDashboard />;
      case "resources":
        return <ResourcesDashboard />;
      default:
        return null;
    }
  }, [activeTab.id]);

  return (
    <div className="w-full h-full antialiased">
      <div className="group relative w-full h-full overflow-hidden rounded-3xl border bg-card shadow-2xl shadow-primary/5 transition-all duration-500 hover:shadow-primary/10 hover:-translate-y-1">
        <div className="p-4 sm:p-6 space-y-1.5 z-10 relative">
          <h2 className="text-xs text-muted-foreground uppercase ">
            Demand Intelligence
          </h2>
          <p className="text-lg sm:text-2xl text-foreground font-medium leading-snug max-w-[480px]">
            Forecast demand, optimize production, and eliminate waste — all in one dashboard.
          </p>
        </div>

        <div className="relative w-full h-[260px] sm:h-[300px] overflow-hidden rounded-2xl sm:rounded-[2rem] ">
          <div className="absolute top-16 left-16 w-full h-full bg-muted rounded-3xl border border-border/50  opacity-80" />

          <div className="absolute top-8 left-24 w-full h-full bg-background rounded-tl-3xl shadow-xl flex flex-col overflow-hidden ring-6 ring-border">
            <div className="px-5 py-4 rounded-tl-3xl border-b border-border/70 flex items-center relative backdrop-blur-sm">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/20" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                <span className="text-xs  text-muted-foreground/50  uppercase">
                  Workspace
                </span>
              </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
              <div className="w-36 border-r border-border/30 p-2 flex flex-col gap-1 pt-6 bg-muted/5">
                <LayoutGroup>
                  {TABS.map((tab) => {
                    const isActive = activeTab.id === tab.id;
                    const Icon = tab.icon;

                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                          "relative flex items-center gap-1.5 p-2 rounded-xl text-xs transition-colors cursor-pointer",
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        <HugeiconsIcon
                          icon={Icon}
                          size={14}
                          className="z-20 shrink-0 relative"
                        />
                        <span className="truncate z-20 relative font-medium">
                          {tab.label}
                        </span>
                        {tab.badge && (
                          <span
                            className={cn(
                              "ml-auto text-[8px] leading-none py-0.5 px-1 rounded-md tabular-nums transition-all z-20 relative",
                              isActive
                                ? "bg-primary/10 text-primary border border-primary/20"
                                : "bg-muted text-muted-foreground border border-transparent",
                            )}
                          >
                            {tab.badge}
                          </span>
                        )}

                        {isActive && (
                          <motion.div
                            layoutId="sidebar-pill"
                            className="absolute left-0 w-[2px] h-4 rounded-full bg-primary z-30 border border-primary/20"
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                        )}
                        {isActive && (
                          <motion.div
                            layoutId="backgroundIndicator"
                            className="absolute inset-0 rounded-lg bg-muted border border-border/40"
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </LayoutGroup>
              </div>

              <div className="flex-1 bg-background p-5 pt-6 flex flex-col gap-4 overflow-hidden relative">
                <header className="flex flex-col gap-0.5">
                  <h3 className="text-xs font-semibold text-foreground tracking-tight line-clamp-1 uppercase opacity-60">
                    {activeTab.header}
                  </h3>
                  <p className="text-[10px] text-muted-foreground font-normal leading-tight line-clamp-1">
                    {activeTab.description}
                  </p>
                </header>

                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="flex-1"
                  >
                    {content}
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-background to-transparent pointer-none z-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoCard;

const OverviewDashboard = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="relative p-3.5 rounded-xl border border-border/40 bg-linear-to-br from-background to-muted/20 overflow-hidden">
      <div className="flex flex-col gap-2 relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-medium text-muted-foreground">
            Forecast Accuracy
          </span>
          <HugeiconsIcon
            icon={CircleArrowUpRight02Icon}
            size={12}
            className="text-primary"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-xl font-medium tracking-tight text-foreground">
            91.8%
          </span>
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden mt-1">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "91.8%" }}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </div>
        <span className="text-[9px] text-muted-foreground">
          Spring 2026 Collection predictions
        </span>
      </div>
      <div className="absolute -right-2 -bottom-2 opacity-5 scale-150 rotate-12">
        <HugeiconsIcon icon={BarChartIcon} size={64} />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-2">
      <div className="p-3 rounded-xl border border-border/40 bg-background/50 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-medium text-foreground">2,847</span>
          <span className="text-[8px] text-muted-foreground uppercase font-medium">
            SKUs Tracked
          </span>
        </div>
        <HugeiconsIcon icon={Search01Icon} size={14} className="opacity-20" />
      </div>
      <div className="p-3 rounded-xl border border-border/40 bg-background/50 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-medium text-foreground">-68%</span>
          <span className="text-[8px] text-muted-foreground uppercase font-medium">
            Waste Reduced
          </span>
        </div>
        <HugeiconsIcon
          icon={InformationCircleIcon}
          size={14}
          className="opacity-20"
        />
      </div>
    </div>
  </div>
);

const ManagementDashboard = () => (
  <div className="flex flex-col h-full not-prose">
    <div className="rounded-xl border border-border/40 overflow-hidden flex flex-col h-full bg-background/50">
      <div className="bg-muted/30 px-3 py-2 border-b border-border/40 flex items-center justify-between">
        <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
          Top Performers
        </span>
        <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded-md bg-background border border-border/40">
          <HugeiconsIcon
            icon={Search01Icon}
            size={10}
            className="text-muted-foreground/50"
          />
          <span className="text-[8px] text-muted-foreground font-medium">
            Filter
          </span>
        </div>
      </div>
      <div className="p-1 flex flex-col gap-0.5">
        {[
          {
            name: "Wool Coat - Camel",
            role: "Predicted: 2,340 units",
            status: "Hot",
            color: "bg-orange-400",
          },
          {
            name: "Linen Blazer - Navy",
            role: "Predicted: 1,890 units",
            status: "Rising",
            color: "bg-emerald-400",
          },
          {
            name: "Silk Midi Skirt",
            role: "Predicted: 1,560 units",
            status: "Stable",
            color: "bg-blue-400",
          },
        ].map((sku, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors group"
          >
            <div className="w-6 h-6 rounded-md bg-muted border border-border/40 flex items-center justify-center relative">
              <HugeiconsIcon
                icon={LeftToRightListDashIcon}
                size={10}
                className="text-muted-foreground"
              />
              <div
                className={cn(
                  "absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-background",
                  sku.color,
                )}
              />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[10px] font-medium text-foreground truncate">
                {sku.name}
              </span>
              <span className="text-[8px] text-muted-foreground truncate">
                {sku.role}
              </span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <HugeiconsIcon
                icon={Settings02Icon}
                size={12}
                className="text-muted-foreground"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ThreadsDashboard = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="grid grid-cols-2 gap-3">
      {[
        {
          title: "Increase Production",
          desc: "Wool Coat +15%",
          icon: CircleArrowUpRight02Icon,
        },
        {
          title: "Reduce Order",
          desc: "Silk Blouse -20%",
          icon: Tick01Icon,
        },
      ].map((card, i) => (
        <div
          key={i}
          className="p-3.5 rounded-xl border border-border/40 bg-background/50 flex flex-col gap-3 relative overflow-hidden group"
        >
          <div className="flex flex-col gap-1 z-10">
            <span className="text-[12px] font-medium text-foreground leading-tight">
              {card.title}
            </span>
            <span className="text-[9px] text-muted-foreground leading-tight">
              {card.desc}
            </span>
          </div>
          <button className="w-fit flex items-center gap-1.5 px-2 py-1 rounded-md bg-foreground text-background text-[8px] font-semibold transition-transform active:scale-95 group-hover:bg-primary z-10">
            <HugeiconsIcon icon={Tick01Icon} size={8} strokeWidth={3} />
            Apply
          </button>
        </div>
      ))}
    </div>

    <div className="mt-auto p-3 rounded-xl bg-muted/20 border border-border/30 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="p-1 px-1.5 rounded-md bg-background border border-border/40">
          <HugeiconsIcon
            icon={InformationCircleIcon}
            size={10}
            className="text-muted-foreground"
          />
        </div>
        <span className="text-[9px] text-muted-foreground font-medium">
          3 more suggestions
        </span>
      </div>
      <HugeiconsIcon
        icon={Add01Icon}
        size={12}
        className="text-muted-foreground/50"
      />
    </div>
  </div>
);

const ResourcesDashboard = () => (
  <div className="flex flex-col gap-3 h-full overflow-hidden">
    <div className="flex-1 rounded-xl border border-border/40 flex flex-col bg-background/50 overflow-hidden">
      <div className="bg-muted/30 px-3 py-2 border-b border-border/40 flex items-center justify-between">
        <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
          Recent Exports
        </span>
        <HugeiconsIcon
          icon={DatabaseIcon}
          size={12}
          className="text-muted-foreground/30"
        />
      </div>
      <div className="flex-1 p-1 overflow-y-auto scrollbar-hide">
        {[
          {
            file: "spring_2026_forecast.pdf",
            size: "2.4 MB",
            type: "PDF",
            icon: BarChartIcon,
          },
          {
            file: "sku_performance.xls",
            size: "1.1 MB",
            type: "XLS",
            icon: BarChartIcon,
          },
          {
            file: "production_plan.csv",
            size: "340 KB",
            type: "CSV",
            icon: Folder02Icon,
          },
          {
            file: "audit_log_mar.json",
            size: "4 KB",
            type: "JSON",
            icon: Folder02Icon,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer group"
          >
            <div className="w-6 h-6 rounded-md bg-muted/50 border border-border/40 flex items-center justify-center text-muted-foreground/60 group-hover:text-primary group-hover:bg-primary/5 transition-colors">
              <HugeiconsIcon icon={item.icon} size={12} />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[10px] font-medium text-foreground truncate">
                {item.file}
              </span>
              <span className="text-[8px] text-muted-foreground tabular-nums uppercase">
                {item.size} • {item.type}
              </span>
            </div>
            <HugeiconsIcon
              icon={CircleArrowUpRight02Icon}
              size={10}
              className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);
