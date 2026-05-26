"use client"

import { useEffect } from "react"

import { Button } from "@workspace/ui/components/button"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-svh flex-col gap-8 p-6">
      <header>
        <h1 className="text-xl font-semibold">MSW Demo</h1>
        <p className="text-sm text-muted-foreground">Failed to load demo data.</p>
      </header>

      <section className="flex max-w-md flex-col gap-4 rounded-lg border border-destructive/40 bg-card p-6 text-card-foreground">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-destructive">Couldn’t reach api.example.com</h2>
          <p className="text-xs text-muted-foreground">Likely causes:</p>
          <ul className="flex list-disc flex-col gap-1 pl-4 text-xs text-muted-foreground">
            <li>
              Mock mode is off. Restart with <code className="font-mono">pnpm dev:mock</code> so MSW intercepts the
              request.
            </li>
            <li>
              HMR re-evaluated <code className="font-mono">mocks/</code> after an edit and MSW lost its request
              interceptor (known MSW + Next.js limitation). Restart the dev server.
            </li>
          </ul>
        </div>

        <pre className="overflow-auto rounded-md bg-muted p-3 font-mono text-xs text-muted-foreground">
          {error.message}
          {error.digest ? `\n\nDigest: ${error.digest}` : ""}
        </pre>

        <div className="flex flex-wrap gap-2">
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </section>
    </div>
  )
}
