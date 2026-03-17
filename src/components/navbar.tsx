"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "./ui/resizable-navbar";

const navItems = [
  { name: "Features", link: "#features" },
  { name: "How it Works", link: "#how-it-works" },
  { name: "Results", link: "#stats" },
  { name: "Testimonials", link: "#testimonials" },
];

export default function NavbarComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <a href="#" className="relative z-20 flex items-center">
          <Image
            src="/logo.png"
            alt="StyleSim"
            width={140}
            height={36}
            className="h-8 w-auto"
            priority
          />
        </a>
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton variant="dark" href="#cta">
            Get Early Access
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <a href="#" className="flex items-center">
            <Image
              src="/logo.png"
              alt="StyleSim"
              width={120}
              height={32}
              className="h-7 w-auto"
              priority
            />
          </a>
          <MobileNavToggle
            isOpen={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMobileOpen(false)}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 w-full pt-4 border-t border-border">
            <NavbarButton
              variant="dark"
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="w-full"
            >
              Get Early Access
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
