"use client"

import { useQuery } from "@tanstack/react-query"

import { fetchPosts } from "@/mocks/posts"

export function ClientPosts() {
  const { data, isPending, error } = useQuery({
    queryKey: ["posts", "client"],
    queryFn: () => fetchPosts("client"),
    staleTime: 60 * 1000,
  })

  if (isPending) {
    return <p className="text-sm text-muted-foreground">Loading client posts</p>
  }

  if (error) {
    return <p className="text-sm text-destructive">Error: {error.message}</p>
  }

  return (
    <ul className="flex flex-col gap-1 text-sm">
      {data.map((post) => (
        <li key={post.id} className="font-mono">
          [{post.source}] #{post.id} — {post.title}
        </li>
      ))}
    </ul>
  )
}
