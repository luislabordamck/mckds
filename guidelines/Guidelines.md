# McKesson Design System (@mckmds/ui)

## CRITICAL — Always import styles first
import "@mckmds/ui/styles.css"

## Components

### Button
import { Button } from "@mckmds/ui"

<Button variant="default">Navy blue primary</Button>
<Button variant="secondary">Gray secondary</Button>
<Button variant="outline">Outlined</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Red destructive</Button>

### Input
import { Input } from "@mckmds/ui"

<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />

## Rules
1. ALWAYS import "@mckmds/ui/styles.css" first
2. NEVER use raw <button> or <input> HTML
3. NEVER hardcode colors