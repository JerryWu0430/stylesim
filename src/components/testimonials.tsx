"use client";

import { motion, useInView } from "framer-motion";
import { LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import { useRef } from "react";
import Grainient from "./grainient";

const team = [
  {
    name: "Elena Marchetti",
    role: "CEO & Co-founder",
    bio: "Former Head of Analytics at Zara. 10+ years in fashion supply chain optimization.",
    image: "/team/elena.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Chen",
    role: "CTO & Co-founder",
    bio: "Ex-Google ML engineer. Built demand forecasting systems at scale for retail.",
    image: "/team/james.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sofia Andersson",
    role: "Head of Product",
    bio: "Previously led product at Stitch Fix. Passionate about sustainable fashion.",
    image: "/team/sofia.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#F5F5DC"
          color2="#E8DCC4"
          color3="#D4C4A8"
          grainAmount={0.05}
          blendSoftness={0.6}
          timeSpeed={0.5}
          warpStrength={0.2}
        />
      </div>

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-elegant text-lg text-muted-foreground mb-4"
          >
            Our Team
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
            <span className="font-serif">Built by</span>{" "}
            <span className="font-elegant">industry experts</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-b from-foreground/5 to-transparent rounded-[26px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-card rounded-3xl border border-border p-6 flex flex-col h-full transition-all duration-300 group-hover:border-foreground/10 group-hover:shadow-xl group-hover:shadow-foreground/5">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-foreground/10 mb-5 flex items-center justify-center text-2xl font-medium text-foreground/40">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>

                <h3 className="text-xl font-medium text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {member.role}
                </p>

                <p className="text-foreground/70 text-sm mt-4 flex-1 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex gap-3 mt-6 pt-5 border-t border-border">
                  <a
                    href={member.linkedin}
                    className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                  >
                    <LinkedinLogo size={18} className="text-foreground/60" />
                  </a>
                  <a
                    href={member.twitter}
                    className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                  >
                    <TwitterLogo size={18} className="text-foreground/60" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
