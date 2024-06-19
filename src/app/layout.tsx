import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import { Header } from "@/components/pasteHeader/header";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/pasteThemes/themeProvider";
import { Footer } from "@/components/pasteFooter/footer";
import { OpenSideBarProvider } from "@/contexts/openSideBar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s - MModa",
    default: "MModa",
  },
  description: "Generated by create next app",
};

export const size = { width: 16, height: 16 };

type Props = { children: ReactNode };
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/icons/icon2.png"
          type="image/x-icon"
          sizes="40x40"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <OpenSideBarProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </OpenSideBarProvider>
      </body>
    </html>
  );
};

export default RootLayout;