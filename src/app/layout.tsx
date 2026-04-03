import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalConfig } from "@/config/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${personalConfig.name} — Portfolio`,
  description: `${personalConfig.tagline}. ${personalConfig.bio.slice(0, 120)}...`,
  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    personalConfig.name,
    "web development",
    "React",
    "Next.js",
  ],
  authors: [{ name: personalConfig.name }],
  openGraph: {
    title: `${personalConfig.name} — Portfolio`,
    description: personalConfig.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
