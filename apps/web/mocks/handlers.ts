import { http, HttpResponse } from "msw"

import { POSTS_URL, type Post } from "./posts"

export const handlers = [
  http.get(POSTS_URL, ({ request }) => {
    const url = new URL(request.url)
    const source = (url.searchParams.get("source") as Post["source"]) ?? "server"

    return HttpResponse.json<Post[]>([
      { id: 1, title: "Mocked post #1", source },
      { id: 2, title: "Mocked post #2", source },
      { id: 3, title: "Mocked post #3", source },
    ])
  }),
]
