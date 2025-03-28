import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "IIIM - Indukaka Ipcowala Institute of Management | CHARUSAT",
  description:
    "Indukaka Ipcowala Institute of Management (IIIM) is a premier business school and a constituent of Charotar University of Science and Technology (CHARUSAT).",
  keywords:
    "IIIM, Indukaka Ipcowala Institute of Management, CHARUSAT, MBA, BBA, management education, business school, Gujarat",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'