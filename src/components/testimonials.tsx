"use client";

import { TeamSection } from "@/components/ui/team-section-1";
import { LinkedinLogo, XLogo } from "@phosphor-icons/react";
import Grainient from "./grainient";

const teamMembers = [
  {
    name: "Jerry Wu",
    designation: "CEO & Co-founder",
    bio: "CS @ UCL. SWE @ GoodNotes. Grew up in a wholesale fashion family — built this to solve the problems he saw firsthand.",
    imageSrc: "/Jerry.jpeg",
    socialLinks: [
      { icon: LinkedinLogo, href: "https://www.linkedin.com/in/jerrywu0430/" },
    ],
  },
  {
    name: "Ken Wu",
    designation: "CTO & Co-founder",
    bio: "CS @ UWaterloo. Neo Scholar. Multi-hackathon winner. ML researcher. Also from the same fashion wholesale family.",
    imageSrc: "/Ken.jpeg",
    socialLinks: [
      { icon: LinkedinLogo, href: "https://www.linkedin.com/in/kenwuu/" },
    ],
  },
  {
    name: "Myra Lam",
    designation: "CMO & Co-founder",
    bio: "Geography & Economics @ UCL. UCL Investment Fund analyst. Impact Investment Championship winner.",
    imageSrc: "/Myra.jpeg",
    socialLinks: [
      { icon: LinkedinLogo, href: "https://www.linkedin.com/in/myra-lam/" },
    ],
  },
];

export default function Team() {
  return (
    <div className="relative overflow-hidden">
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

      <TeamSection
        title="TEAM"
        description="Jerry and Ken grew up in their family's wholesale fashion business — we've seen firsthand the pain of overproduction and dead inventory. Now we're building the solution."
        members={teamMembers}
        className="bg-transparent relative z-20"
      />
    </div>
  );
}
