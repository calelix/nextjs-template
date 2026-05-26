import { Suspense } from "react"

import { fetchPosts } from "@/mocks/posts"

import { ClientPosts } from "./_components/client-posts"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col gap-8 p-6">
      <header>
        <h1 className="text-xl font-semibold">MSW Demo</h1>
        <p className="text-sm text-muted-foreground">
          Mock-only demo. Run with <code className="font-mono">pnpm dev:mock</code> to enable mocking — without it,
          requests to <code className="font-mono">api.example.com</code> will fail.
        </p>
      </header>

      <section className="flex max-w-md flex-col gap-3 rounded-lg border border-border bg-card p-6 text-card-foreground">
        <h2 className="text-lg font-semibold">React Server Component</h2>
        <p className="text-xs text-muted-foreground">
          Fetched on the server. <code className="font-mono">msw/node</code> intercepts the outgoing{" "}
          <code className="font-mono">fetch</code> call.
        </p>
        <Suspense fallback={<ServerPostsSkeleton />}>
          <ServerPosts />
        </Suspense>
      </section>

      <section className="flex max-w-md flex-col gap-3 rounded-lg border border-border bg-card p-6 text-card-foreground">
        <h2 className="text-lg font-semibold">React Client Component</h2>
        <p className="text-xs text-muted-foreground">
          Fetched in the browser. <code className="font-mono">msw/browser</code> (Service Worker) intercepts the
          outgoing <code className="font-mono">fetch</code> call.
        </p>
        <ClientPosts />
      </section>
    </div>
  )
}

async function ServerPosts() {
  const serverPosts = await fetchPosts("server")

  return (
    <ul className="flex flex-col gap-1 text-sm">
      {serverPosts.map((post) => (
        <li key={post.id} className="font-mono">
          [{post.source}] #{post.id} — {post.title}
        </li>
      ))}
    </ul>
  )
}

function ServerPostsSkeleton() {
  return <p className="text-sm text-muted-foreground">Loading server posts…</p>
}
