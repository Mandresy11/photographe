import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Patrice Wilfrid | Photographe de mariage",
    template: "%s | Patrice Wilfrid",
  },
  description:
    "Photographe de mariage en Guadeloupe. Un style éditorial, spontané et lumineux, pour raconter votre journée telle qu'elle a vraiment été vécue.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
