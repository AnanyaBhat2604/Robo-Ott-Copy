import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Providers from "@/packages/Providers/Providers";
import FooterBlock from "@/packages/FooterBlock/FooterBlock";

export const metadata: Metadata = {
  title: "Robo OTT App",
  description: "OTT Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Providers>
<Header />
          {children}
        
        </Providers>
      </body>
    </html>
  );
}
