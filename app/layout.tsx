import "./globals.css";
import type { Metadata } from "next";

import { DirectionProvider } from "@base-ui/react";
import { JetBrains_Mono, Lora, Quicksand } from "next/font/google";

import DocsHeader from "./components/docs/docs-header";
import { ThemeProvider } from "./components/theme-provider";

const fontSans = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Sector23",
    template: "%s | Sector23",
  },
  description:
    "Sector23 is a React component library for building modern web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <DirectionProvider direction="ltr">
        <body className="relative h-dvh">
          <ThemeProvider>
            <div className="isolate h-full min-h-screen [--header-height:3.5rem]">
              <DocsHeader />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </DirectionProvider>
    </html>
  );
}
