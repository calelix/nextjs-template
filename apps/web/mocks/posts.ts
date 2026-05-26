export interface Post {
  id: number
  title: string
  source: "server" | "client"
}

export const POSTS_URL = "https://api.example.com/posts"

export async function fetchPosts(source: Post["source"]): Promise<Post[]> {
  const response = await fetch(`${POSTS_URL}?source=${source}`, {
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`)
  }

  return response.json()
}
