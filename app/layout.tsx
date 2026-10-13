import type { Metadata } from "next";

import { DirectionProvider } from "@base-ui/react";
import { JetBrains_Mono, Lora, Quicksand } from "next/font/google";

import "./globals.css";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../registry/sector23/ui/navigation-menu";
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
    template: "Sector23 | %s",
  },
  description:
    "Sector23 is a React component library for building modern web applications.",
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
            <div className="isolate flex min-h-screen flex-col [--header-height:3rem]">
              <header className="sticky top-0 z-10 flex h-(--header-height) items-center border-b border-border bg-muted px-4">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        render={<Link href="/" />}
                        className="px-2 py-1.5 text-sm"
                      >
                        Home
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        render={<Link href="/docs" />}
                        className="px-2 py-1.5 text-sm"
                      >
                        Docs
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </header>
              {children}
              <footer className="mt-auto mb-4 px-4 sm:px-6 lg:px-8">
                <p className="text-sm text-muted-foreground">
                  Powered by{" "}
                  <Link
                    href="https://markdoc.dev/"
                    className="rounded-md font-medium text-primary underline transition-colors outline-none hover:text-primary/80 focus-visible:ring-2 focus-visible:ring-ring/50"
                  >
                    Markdoc
                  </Link>
                </p>
              </footer>
            </div>
          </ThemeProvider>
        </body>
      </DirectionProvider>
    </html>
  );
}
