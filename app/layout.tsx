import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
export const metadata = {
  title: "IIIM - Indukaka Ipcowala Institute of Management | CHARUSAT",
  description:
    "Indukaka Ipcowala Institute of Management (IIIM) is a premier business school and a constituent of Charotar University of Science and Technology (CHARUSAT).",
  keywords:
    "IIIM, Indukaka Ipcowala Institute of Management, CHARUSAT, MBA, BBA, management education, business school, Gujarat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <main className="flex-1 w-full overflow-hidden">
              <div className="mx-auto ">
                <Header />
                {children}
                <Footer />
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
