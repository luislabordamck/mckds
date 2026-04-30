/**
 * scripts/postinstall.js
 * Runs after: npm install @mckmds/ui
 * Injects McKesson brand tokens into theme.css
 */

const fs   = require('fs')
const path = require('path')

// Walk up from node_modules/@mckmds/ui to project root
const projectRoot = path.join(__dirname, '..', '..', '..')

const targets = [
  path.join(projectRoot, 'src', 'styles', 'theme.css'),
  path.join(projectRoot, 'src', 'styles', 'globals.css'),
  path.join(projectRoot, 'src', 'styles', 'index.css'),
]

// McKesson token overrides to inject
const mckesson = `
/* ── McKesson Brand Tokens (injected by @mckmds/ui) ── */
:root {
  --primary: oklch(0.176 0.048 228.4);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.969 0 0);
  --secondary-foreground: oklch(0.176 0.048 228.4);
  --muted: oklch(0.961 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.944 0.018 228.4);
  --accent-foreground: oklch(0.176 0.048 228.4);
  --destructive: oklch(0.396 0.141 21.6);
  --destructive-foreground: oklch(1 0 0);
  --border: oklch(0.922 0 0);
  --input-background: oklch(0.953 0 0);
  --ring: oklch(0.354 0.072 228.4);
  --radius: 0.5rem;
}
`

let injected = false

for (const target of targets) {
  if (fs.existsSync(target)) {
    const content = fs.readFileSync(target, 'utf8')
    // Only inject if not already there
    if (!content.includes('McKesson Brand Tokens')) {
      fs.appendFileSync(target, mckesson)
      console.log(`✅ @mckmds/ui: McKesson tokens injected → ${path.relative(projectRoot, target)}`)
      injected = true
      break // Only inject into first matching file
    }
  }
}

if (!injected) {
  // Create a standalone token file as fallback
  const tokenFile = path.join(projectRoot, 'src', 'styles', 'mckesson-tokens.css')
  fs.mkdirSync(path.dirname(tokenFile), { recursive: true })
  fs.writeFileSync(tokenFile, mckesson)
  console.log(`✅ @mckmds/ui: Created mckesson-tokens.css`)
  console.log(`   Add to your CSS: @import './mckesson-tokens.css'`)
}