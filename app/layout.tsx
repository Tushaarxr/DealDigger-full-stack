import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deal Digger",
  description: "Welcome to LowestPriceFinder, the premier web scraping platform designed to help you find the best deals online! Our innovative website scours the internet to bring you the lowest prices for your desired products across multiple e-commerce websites. Whether you’re shopping for electronics, clothing, home goods, or any other product, LowestPriceFinder ensures you never overpay again.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
