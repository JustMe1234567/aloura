# AGENTS.md

This file gives Codex and other AI coding agents the context needed to work effectively in this repository.

## Project Overview

- **Type:** Frontend-only luxury jewelry storefront
- **Framework:** Next.js 16 using the App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 plus project-level plain CSS in `app/globals.css` and `app/reference.css`
- **Package manager:** npm
- **Deployment targets:** Vercel and OpenAI Sites/vinext

This is a frontend-only project. There is no backend or server infrastructure to maintain beyond Next.js routing and frontend-oriented server rendering. Do not introduce a database, authentication system, API service, or server infrastructure unless explicitly requested.

Read `DESIGN.md` before creating or changing customer-facing pages, components, product presentation, responsive behavior, brand copy, or RTL layouts.

## Setup Commands

```bash
# Install dependencies
npm install

# Start the local vinext/Sites development server
npm run dev

# Build for OpenAI Sites/vinext
npm run build

# Build for Vercel/standard Next.js
npm run build:vercel

# Start the vinext production build locally
npm start
```

## Code Style & Conventions

- Use functional React components with hooks; do not use class components.
- Prefer TypeScript types and interfaces for props. Avoid `any`.
- Keep components small and colocated with related code where practical.
- Follow Next.js App Router conventions in the `app/` directory. Do not introduce the Pages Router.
- Prefer named exports for reusable components. Page and layout files may use default exports as required by Next.js.
- Keep client components minimal. Add `"use client"` only when browser state, effects, or event handlers require it.
- Preserve the established styling approach. Reuse semantic classes and design tokens before adding new styles.
- Avoid new dependencies when the same result can be achieved with the current stack.
- All product specifications and prices are fixed. Do not introduce configurators, diamond databases, stone customization, dynamic pricing, or appointment booking.

## Directory Structure

```text
app/                         Routes, layouts, components, data, and global CSS
app/components/              Shared storefront components
app/collections/             Collection route
app/products/[slug]/         Product detail route
public/                      Static assets and social preview media
design-system/               Generated design-system reference
DESIGN.md                    Canonical Aloura brand and interface specification
.openai/hosting.json         OpenAI Sites project configuration
next.config.ts               Next.js configuration
vite.config.ts               vinext/OpenAI Sites development configuration
vercel.json                  Vercel build configuration
```

## Testing and Verification

The repository currently has no automated test suite or standalone `typecheck` script. Do not run nonexistent commands.

```bash
# Run ESLint
npm run lint

# Verify the OpenAI Sites/vinext build
npm run build

# Verify the Vercel/Next.js build when deployment-related code changes
npm run build:vercel
```

Before finishing a code task:

- Run `npm run lint` and address actionable errors.
- Run `npm run build` for general storefront changes.
- Also run `npm run build:vercel` when changing routes, metadata, configuration, dependencies, or deployment behavior.
- Ensure there are no TypeScript or build errors.
- Verify relevant responsive and RTL behavior when the task affects the interface.

## Build Requirements

- `npm run build` must succeed before general implementation work is considered complete.
- Vercel-facing changes must also pass `npm run build:vercel` and produce the standard `.next` output.
- Do not change the existing `build` command to `next build`; OpenAI Sites requires the vinext output. Use the dedicated `build:vercel` command for Vercel.
- No TypeScript errors.
- No ESLint errors. Warnings are acceptable only when they do not indicate a real defect.

## Git and PR Conventions

- Use Conventional Commits, such as `feat(home): add editorial collection rail` or `fix(nav): prevent mobile overflow`.
- Keep commits and pull requests focused on a single concern.
- Review staged changes before committing.
- Do not commit `.env` files, credentials, deployment archives, generated build directories, or secrets.
- Preserve user changes and unrelated work already present in the working tree.

## What Not to Do

- Do not add a backend or server framework such as Express.
- Do not add authentication, databases, durable persistence, or server infrastructure unless explicitly requested.
- Do not introduce major dependencies, state-management libraries, or new CSS frameworks without flagging the change first.
- Do not remove or rewrite existing components wholesale when a targeted change is sufficient.
- Do not mix unrelated visual systems or ignore the rules in `DESIGN.md`.
- Do not copy external jewelry retailers' branding, copy, proprietary assets, or exact layouts.

## Notes for Agents

- The repository uses the `app/` App Router exclusively.
- Inspect existing components and styles before creating new files.
- Prefer editing existing files unless a new shared component, route, or document is clearly warranted.
- Use product-specific, realistic content rather than generic placeholders.
- Maintain accessible names, visible focus states, keyboard navigation, 44px touch targets, reduced-motion support, and meaningful image alt text.
- English is the default U.S. experience. Hebrew work must use complete translations and correct RTL behavior as specified in `DESIGN.md`.
