import Image from "next/image";
import { LinkedinLogo, XLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";

const links = {
  product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#" },
    { name: "Case Studies", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
  ],
};

const socials = [
  { name: "LinkedIn", icon: LinkedinLogo, href: "#" },
  { name: "X", icon: XLogo, href: "#" },
  { name: "Instagram", icon: InstagramLogo, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="StyleSim"
              width={140}
              height={36}
              className="h-8 w-auto"
            />
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              AI-powered demand simulation for fashion brands. Predict what
              sells before you produce.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} weight="regular" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-4">Product</p>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-4">Company</p>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-4">Legal</p>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            2026 StyleSim. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Made with care in San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
}
