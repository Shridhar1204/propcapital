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
  title: "PropCapital — Delhi NCR Property Discovery & Services",
  description:
    "Explore residential and commercial property services across Delhi, Gurugram, Noida and Faridabad, including buyer guidance, NRI services and owner support.",
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
