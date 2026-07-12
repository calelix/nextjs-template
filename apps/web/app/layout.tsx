import "@workspace/ui/globals.css"

import { Geist, Geist_Mono } from "next/font/google"

import { cn } from "@workspace/ui/lib/utils"

import { MSWProvider } from "@/components/msw-provider"
import { QueryProvider } from "@/components/query-provider"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <QueryProvider>
          <ThemeProvider>
            <MSWProvider>{children}</MSWProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
