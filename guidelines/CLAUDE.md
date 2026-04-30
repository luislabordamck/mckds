# McKesson Design System (@mckmds/ui)

## Package
@make-kits/mck-ds-make-toolkit (in Figma Make)
@mckmds/ui (in external projects)

## Setup — ALWAYS do this first
Styles are loaded via src/styles/index.css. Do not add additional CSS imports.

## Components

### Button
import { Button } from "@make-kits/mck-ds-make-toolkit"

Variants: default | secondary | outline | ghost | destructive | link
Sizes: xs | sm | default | lg | icon

<Button variant="default">Primary Action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>

### Input
import { Input } from "@make-kits/mck-ds-make-toolkit"

<Input type="email" placeholder="Email address" />
<Input type="password" placeholder="Password" />
<Input type="text" placeholder="Enter value" />
<Input disabled placeholder="Disabled" />

## McKesson Brand Tokens
Primary navy:   #003654 → var(--mck-p600) → bg-primary
Mid blue:       #005A8C → var(--mck-p400)
Light tint:     #e5eef3 → var(--mck-p50)
Error red:      #B2060A → var(--mck-error100) → bg-destructive
Warning orange: #ef8200 → var(--mck-warning300)
Success green:  #5B8E22 → var(--mck-success300)

## Rules — NEVER break these
1. ALWAYS use Button from "@make-kits/mck-ds-make-toolkit"
2. ALWAYS use Input from "@make-kits/mck-ds-make-toolkit"
3. NEVER use raw <button> or <input> HTML elements
4. NEVER use Material UI, Ant Design, or any other component library
5. NEVER hardcode colors — use token classes like bg-primary
6. NEVER import from "@mckmds/ui" inside Figma Make — use "@make-kits/mck-ds-make-toolkit"

## Adding new components
Each new component follows this pattern:
1. npx shadcn@latest add [component]
2. Export from src/index.ts
3. Add to guidelines/components.md
4. Add to this CLAUDE.md
5. npm run build:pkg → npm publish
6. npx figma connect publish