import type { Metadata } from "next";

import { DirectionProvider } from "@base-ui/react";
import { JetBrains_Mono, Lora, Quicksand } from "next/font/google";

import "./globals.css";
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
  description: "Sector23 is a React component library for building modern web applications.",
  title: "Sector23",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <DirectionProvider direction="ltr">
        <body className="relative flex min-h-full flex-col">
          <ThemeProvider>
            <div className="isolate">{children}</div>
          </ThemeProvider>
        </body>
      </DirectionProvider>
    </html>
  );
}
