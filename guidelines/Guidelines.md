# McKesson Design System

## CRITICAL — Always import styles first
import "@make-kits/mck-ds-make-toolkit/dist/styles.css"

## Components

### Button
import { Button } from "@make-kits/mck-ds-make-toolkit"

<Button variant="default">Navy blue</Button>
<Button variant="secondary">Gray</Button>
<Button variant="outline">Outlined</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Red</Button>

### Input
import { Input } from "@make-kits/mck-ds-make-toolkit"

<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />

## Rules
1. ALWAYS import "@make-kits/mck-ds-make-toolkit/dist/styles.css" first
2. NEVER use raw <button> or <input> HTML
3. NEVER hardcode colors