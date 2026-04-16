import "./globals.css";
import type { Metadata } from "next";
// Fix: Import React to resolve namespace error
import React from "react";

export const metadata: Metadata = {
  title: "OmniFlow",
  description: "WhatsApp Automation Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
      ;
    </html>
  );
}
