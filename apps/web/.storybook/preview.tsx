import "@workspace/ui/globals.css"

import type { Preview } from "@storybook/nextjs-vite"
import { Geist, Geist_Mono } from "next/font/google"

import { cn } from "@workspace/ui/lib/utils"

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

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <div className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}>
        <QueryProvider>
          <ThemeProvider>
            <Story />
          </ThemeProvider>
        </QueryProvider>
      </div>
    ),
  ],
}

export default preview
