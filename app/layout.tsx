import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({ subsets: ["latin"],
  weight:['300','400','500','600','700']
 });

export const metadata: Metadata = {
  title: "Deal Digger",
  description:
    "Welcome to LowestPriceFinder, the premier web scraping platform designed to help you find the best deals online! Our innovative website scours the internet to bring you the lowest prices for your desired products across multiple e-commerce websites. Whether you’re shopping for electronics, clothing, home goods, or any other product, LowestPriceFinder ensures you never overpay again.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar/>
        {children}

        </main>
        
        </body>
    </html>
  );
}
