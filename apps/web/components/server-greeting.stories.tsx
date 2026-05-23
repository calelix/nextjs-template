import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ServerGreeting } from "./server-greeting"

const meta = {
  title: "Components/ServerGreeting",
  component: ServerGreeting,
} satisfies Meta<typeof ServerGreeting>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: "World",
  },
}

export const Stranger: Story = {
  args: {
    name: "stranger",
  },
}
