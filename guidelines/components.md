# Components

## ⚠️ Required before using any component
Styles are already loaded. Do not add additional CSS imports.

---

## Button

```tsx
import { Button } from "@make-kits/mck-ds-make-toolkit"
```

### Variants
```tsx
<Button variant="default">Primary Action</Button>      // McKesson navy #003654
<Button variant="secondary">Secondary</Button>          // Light gray
<Button variant="outline">Outline</Button>              // Border only
<Button variant="ghost">Ghost</Button>                  // Transparent
<Button variant="destructive">Delete</Button>           // Red #B2060A
<Button variant="link">Link</Button>                    // Text link
```

### Sizes
```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><TrashIcon /></Button>
```

### States
```tsx
<Button disabled>Disabled</Button>
```

### With Icons
```tsx
import { Save, Trash2, Plus } from "lucide-react"

<Button variant="default"><Save /> Save Changes</Button>
<Button variant="destructive"><Trash2 /> Delete</Button>
<Button variant="ghost" size="icon"><Plus /></Button>
```

### As Link
```tsx
<Button asChild variant="outline">
  <a href="/home">Go Home</a>
</Button>
```

---

## Input

```tsx
import { Input } from "@make-kits/mck-ds-make-toolkit"
```

### Types
```tsx
<Input type="text" placeholder="Enter value" />
<Input type="email" placeholder="Email address" />
<Input type="password" placeholder="Password" />
<Input type="search" placeholder="Search..." />
<Input type="number" placeholder="0" />
```

### States
```tsx
<Input disabled placeholder="Disabled field" />
<Input aria-invalid="true" placeholder="Error state" />
```

### With Label (always do this for accessibility)
```tsx
<div className="flex flex-col gap-1">
  <label htmlFor="email">Email</label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>
```

---

## DO / DON'T

### ✅ DO
```tsx
import { Button } from "@make-kits/mck-ds-make-toolkit"
import { Input } from "@make-kits/mck-ds-make-toolkit"

<Button variant="default">Save</Button>
<Input type="email" placeholder="Email" />
```

### ❌ DON'T
```tsx
// Never raw HTML
<button>Save</button>
<input type="email" />

// Never other libraries
import { Button } from "@mui/material"
import { TextField } from "@mui/material"

// Never hardcoded colors
<div style={{ background: "#003654" }}>
```