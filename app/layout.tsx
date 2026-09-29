import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
  }),
  geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
  });

export const metadata: Metadata = {
  description: "Sector23 is a React component library for building modern web applications.",
  title: "Sector23",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col">
        <div className="isolate">{children}</div>
      </body>
    </html>
  );
}
