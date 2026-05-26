# Agent Skills Inventory

Tracks which [Vercel Agent Skills](https://vercel.com/docs/agent-resources/skills) are active in this project, and the rationale for what is included or excluded.

> File name note: this is an **inventory document**, distinct from the per-skill `SKILL.md` files that live inside each skill directory under [skills/](skills/).

## Current Setup

- **Vercel Plugin** (`vercel@claude-plugins-official`) — enabled in [settings.json](settings.json).
  Bundles 25+ `vercel:*` skills, 3 specialist agents, and 5 slash commands.
- **Standalone skills** in [skills/](skills/):
  - `web-design-guidelines`
  - `vercel-composition-patterns`
  - `turborepo`
  - `next-best-practices`
  - `building-components`

## Full Directory Coverage

The table below mirrors the official catalog at `vercel.com/docs/agent-resources/skills` and records, for each entry, whether it is provided by the bundled plugin, installed standalone, or intentionally skipped.

| Category | Skill | Source | In Plugin | Standalone | Notes |
|---|---|---|:---:|:---:|---|
| **React / Next.js** | `vercel-react-best-practices` | `vercel-labs/agent-skills` | ✅ | — | Provided by plugin as `react-best-practices` |
| | `vercel-composition-patterns` | `vercel-labs/agent-skills` | ❌ | ✅ | Composition patterns for the shared `@workspace/ui` package |
| | `vercel-react-native-skills` | `vercel-labs/agent-skills` | ❌ | ❌ | No React Native target |
| | `next-best-practices` | `vercel-labs/next-skills` | ❌ | ✅ | Complements plugin `nextjs` skill |
| | `next-cache-components` | `vercel-labs/next-skills` | ✅ | — | |
| | `next-upgrade` | `vercel-labs/next-skills` | ✅ | — | |
| | `cra-to-next-migration` | `vercel-labs/migration-skills` | ❌ | ❌ | Project is already on Next.js |
| | `turborepo` | `vercel/turborepo` | ❌ | ✅ | Repo is a Turborepo monorepo |
| **AI SDK** | `ai-sdk` | `vercel/ai` | ✅ | — | |
| | `ai-elements` | `vercel/ai-elements` | ❌ | ⏸️ | Add when introducing AI chat UI |
| | `streamdown` | `vercel/streamdown` | ❌ | ⏸️ | Add when introducing streaming Markdown |
| **Design / UI** | `web-design-guidelines` | `vercel-labs/agent-skills` | ❌ | ✅ | Aligns with existing Storybook + a11y setup |
| | `building-components` | `vercel/components.build` | ❌ | ✅ | Guidance for building shadcn-style components |
| **Browser automation** | `agent-browser` | `vercel-labs/agent-browser` | ❌ | ⏸️ | Overlaps with existing Playwright + `mcp__playwright__*`; add only if autonomous agent-driven verification is needed |
| **Deployment** | `vercel-deploy` | `vercel-labs/agent-skills` | ❌ | ❌ | Plugin provides `/vercel-plugin:deploy` |
| | `vercel-cli` | `vercel/vercel` | ✅ | — | |
| | `autoship` | `vercel-labs/autoship` | ❌ | ❌ | Separate automation tool, not in scope |
| **Commerce** | `ucp` (Agentic Commerce) | `vercel-labs/agentic-commerce-skills` | ❌ | ❌ | Not a commerce project |
| **Workflow** | `workflow` | `vercel/workflow` | ✅ | — | |
| **JSON Render** | `json-render-core` | `vercel-labs/json-render` | ❌ | ❌ | Generative UI framework not in use |
| | `json-render-react` | `vercel-labs/json-render` | ❌ | ❌ | — |
| | `json-render-react-native` | `vercel-labs/json-render` | ❌ | ❌ | — |
| | `json-render-remotion` | `vercel-labs/json-render` | ❌ | ❌ | — |
| | `remotion-best-practices` | `vercel-labs/json-render` | ❌ | ❌ | Remotion not in use |
| **Utility** | `find-skills` | `vercel-labs/skills` | ❌ | ⏸️ | Useful once skill discovery becomes a frequent task |
| | `before-and-after` | `vercel-labs/before-and-after` | ❌ | ❌ | Visual regression covered by Storybook + Chromatic |

**Legend**
- *In Plugin* — ✅ bundled by `vercel@claude-plugins-official` · ❌ not bundled
- *Standalone* — ✅ installed in [skills/](skills/) · ⏸️ deferred (revisit when the listed condition holds) · ❌ skipped (not relevant) · — not applicable (already provided by plugin)

## Plugin vs Standalone Skills

- **Plugin** — provides session-start context injection hooks, specialist agents, slash commands, and a curated bundle of 25 skills. Claude Code only.
- **Standalone skills** — installed via the `skills` CLI. Compatible with 18+ agents (Claude Code, Cursor, Copilot, etc.). Use these to fill gaps the plugin does not cover.

## Maintenance

- New skills become available in the **next session**; the current session's loaded skill list is fixed at start.
- Standalone skills are checked in under [skills/](skills/) and travel with the repo.
- When the official directory adds a new entry, append a row above and record the decision.
