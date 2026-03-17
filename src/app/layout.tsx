import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StyleSim - Simulate Fashion Demand Before You Manufacture",
  description:
    "AI-powered demand simulation for fashion brands. Predict which designs will sell, reduce waste, and maximize revenue.",
  keywords: [
    "fashion demand forecasting",
    "AI fashion",
    "demand simulation",
    "fashion analytics",
    "sustainable fashion",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
