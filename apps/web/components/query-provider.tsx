"use client"

import { environmentManager, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import * as React from "react"

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, avoid refetching immediately on the client.
        staleTime: 60 * 1000,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (environmentManager.isServer()) {
    // Server: always make a new query client.
    return makeQueryClient()
  }

  // Browser: reuse a single client across renders so suspense during the
  // initial render doesn't discard a partially initialized client.
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient()
  }

  return browserQueryClient
}

interface QueryProviderProps {
  children: React.ReactNode
}

function QueryProvider({ children }: QueryProviderProps) {
  const queryClient = getQueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export { QueryProvider }
