import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PropCapital — Real estate, reimagined",
  description:
    "PropCapital is a considered way to discover property, with IRA as an AI property assistant. This page is a design preview with sample photography.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
