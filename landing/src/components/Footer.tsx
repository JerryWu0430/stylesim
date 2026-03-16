import {
  LinkedinLogo,
  XLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#" },
    { label: "API", href: "#" },
    { label: "Integrations", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "ROI Calculator", href: "#" },
    { label: "Support", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2">
            <a
              href="#"
              className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              StyleSim
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Fashion collection simulation platform. Test designs, predict
              performance, reduce overproduction.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} />
              </a>
              <a
                href="#"
                className="text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
                aria-label="X (Twitter)"
              >
                <XLogo size={20} />
              </a>
              <a
                href="mailto:hello@stylesim.io"
                className="text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
                aria-label="Email"
              >
                <EnvelopeSimple size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-zinc-900 dark:text-zinc-50">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-zinc-900 dark:text-zinc-50">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-zinc-900 dark:text-zinc-50">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-zinc-900 dark:text-zinc-50">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 md:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            2026 StyleSim. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Made with precision in San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
}
