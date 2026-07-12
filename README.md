# Next.js Monorepo Template

A Turborepo monorepo template with Next.js 16, React 19, and shadcn/ui.

## Stack

Workspaces are declared in [pnpm-workspace.yaml](./pnpm-workspace.yaml) and orchestrated by Turborepo ([turbo.json](./turbo.json)).

| Workspace                    | Role                  | Highlights                                                                                                |
| ---------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------- |
| `apps/web`                   | Next.js application   | Next.js 16 (App Router, Turbopack), React 19, TanStack Query, Zustand, MSW, Storybook, Vitest, Playwright |
| `packages/ui`                | Shared UI library     | shadcn/ui components, Tailwind CSS v4, `next-themes`, exported as `@workspace/ui`                         |
| `packages/eslint-config`     | Shared ESLint configs | `base`, `next`, `react-internal` presets — `@workspace/eslint-config`                                     |
| `packages/typescript-config` | Shared tsconfigs      | `base`, `nextjs`, `react-library` — `@workspace/typescript-config`                                        |

## Structure

```
template/
├── apps/
│   └── web/                  # Next.js 16 app
├── packages/
│   ├── ui/                   # @workspace/ui — shadcn/ui components
│   ├── eslint-config/        # @workspace/eslint-config
│   └── typescript-config/    # @workspace/typescript-config
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

## Requirements

| Tool | Version    |
| ---- | ---------- |
| Node | ≥ 20       |
| pnpm | 9.15.9     |

## Getting started

| Step              | Command                         |
| ----------------- | ------------------------------- |
| Install           | `pnpm install`                  |
| Start dev servers | `pnpm dev`                      |
| Dev with MSW mock | `pnpm --filter web dev:mock`    |

## Scripts

### Root (Turborepo)

| Command          | Description          |
| ---------------- | -------------------- |
| `pnpm dev`       | Start dev servers    |
| `pnpm build`     | Build all packages   |
| `pnpm lint`      | Lint                 |
| `pnpm lint:fix`  | Lint and autofix     |
| `pnpm typecheck` | TypeScript check     |

### `apps/web` (run with `pnpm --filter web <script>`)

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `dev`               | Next.js dev server (Turbopack)    |
| `dev:mock`          | Dev server with MSW mocks enabled |
| `build`             | Production build                  |
| `start`             | Run the production build          |
| `lint` / `lint:fix` | ESLint (with autofix variant)     |
| `typecheck`         | `tsc --noEmit`                    |
| `test`              | Vitest (browser mode)             |
| `test:e2e`          | Playwright e2e tests              |
| `storybook`         | Storybook dev server (port 6006)  |
| `build-storybook`   | Build Storybook static site       |
| `shadcn`            | Add a shadcn component            |

## shadcn/ui

| Action  | How                                                          |
| ------- | ------------------------------------------------------------ |
| Add     | `pnpm --filter web shadcn button`                            |
| Lands   | `packages/ui/src/components/button.tsx`                      |
| Import  | `import { Button } from "@workspace/ui/components/button"`  |

## API mocking

MSW is wired into both browser and Node runtimes.

| Layer          | Location                       |
| -------------- | ------------------------------ |
| Handlers       | `apps/web/mocks`               |
| Browser worker | `apps/web/public`              |
| Node runtime   | `apps/web/instrumentation.ts`  |

Enable mocks in dev with `pnpm --filter web dev:mock`.

## Notes for AI agents

Per-package rules live next to the code they apply to — e.g. [apps/web/AGENTS.md](./apps/web/AGENTS.md) for Next.js conventions.
