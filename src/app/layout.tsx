import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Brisbane Plumbing Co. | Licensed Plumber Brisbane | Same-Day Service",
  description:
    "Brisbane's trusted local plumber. Blocked drains, hot water systems, gas fitting, renovations & emergency plumbing. QBCC licensed, fully insured. Call 0400 000 000.",
  openGraph: {
    title: "Brisbane Plumbing Co. | Licensed Plumber Brisbane",
    description:
      "Brisbane's trusted local plumber. Blocked drains, hot water systems, gas fitting, renovations & emergency plumbing. QBCC licensed, fully insured.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${inter.variable} bg-surface text-on-surface font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
