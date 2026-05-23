import { Button } from "@workspace/ui/components/button"

interface ServerGreetingProps {
  name: string
}

export async function ServerGreeting({ name }: ServerGreetingProps) {
  await new Promise((resolve) => setTimeout(resolve, 0))

  return (
    <div className="flex max-w-md flex-col gap-3 rounded-lg border border-border bg-card p-6 text-card-foreground">
      <h2 className="text-lg font-semibold">Hello, {name}</h2>
      <p className="text-sm text-muted-foreground">React Server Components</p>
      <Button className="self-start">Action</Button>
    </div>
  )
}
