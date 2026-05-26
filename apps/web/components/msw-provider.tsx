"use client"

import * as React from "react"

const IS_API_MOCKING_ENABLED = process.env.NEXT_PUBLIC_API_MOCKING === "enabled"

interface MSWProviderProps {
  children: React.ReactNode
}

function MSWProvider({ children }: MSWProviderProps) {
  const [isReady, setIsReady] = React.useState(!IS_API_MOCKING_ENABLED)

  React.useEffect(() => {
    if (!IS_API_MOCKING_ENABLED) {
      return
    }

    let cancelled = false

    const start = async () => {
      const { worker } = await import("@/mocks/browser")

      await worker.start({ onUnhandledRequest: "bypass" })

      if (!cancelled) {
        setIsReady(true)
      }
    }

    void start()

    return () => {
      cancelled = true
    }
  }, [])

  if (!isReady) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p className="text-sm text-muted-foreground">Starting mock service worker</p>
      </div>
    )
  }

  return <>{children}</>
}

export { MSWProvider }
