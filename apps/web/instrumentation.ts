const IS_API_MOCKING_ENABLED = process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
const IS_NODE_RUNTIME = process.env.NEXT_RUNTIME === "nodejs"

export async function register() {
  if (IS_API_MOCKING_ENABLED) {
    if (IS_NODE_RUNTIME) {
      const { server } = await import("./mocks/node")

      server.listen({ onUnhandledRequest: "bypass" })
    }
  }
}
