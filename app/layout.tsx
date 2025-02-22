"use client";

import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import { LanguageProvider } from "./contexts/LanguageContext";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <LanguageProvider>
          <LoadingScreen />
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
