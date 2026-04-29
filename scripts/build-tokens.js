/**
 * scripts/build-tokens.js
 *
 * What this does:
 * 1. Reads tokens/Style_tokens.json (McKesson design tokens)
 * 2. Generates app/tokens.css with:
 *    - All raw McKesson tokens as CSS custom properties (--mck-*)
 *    - ShadCN token mappings (--primary, --background, etc.)
 *    - Dark mode (.dark)
 *
 * Run with: npm run tokens
 */

const fs   = require('fs')
const path = require('path')

// ─── Read token file ──────────────────────────────────────────────────────────
const raw = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../tokens/Style_tokens.json'),
    'utf8'
  )
)

const g = raw.global

// ─── Helper: hex → OKLCH ─────────────────────────────────────────────────────
function hexToOklch(hex) {
  if (!hex || !hex.startsWith('#')) return hex
  hex = hex.replace('#', '')
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('')

  const r = parseInt(hex.slice(0,2), 16) / 255
  const gv = parseInt(hex.slice(2,4), 16) / 255
  const b = parseInt(hex.slice(4,6), 16) / 255

  const lin = c => c <= 0.04045 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4)
  const lr = lin(r), lg = lin(gv), lb = lin(b)

  const l = 0.4122214708*lr + 0.5363325363*lg + 0.0514459929*lb
  const m = 0.2119034982*lr + 0.6806995451*lg + 0.1073969566*lb
  const s = 0.0883024619*lr + 0.2817188376*lg + 0.6299787005*lb

  const l_ = Math.cbrt(l), m_ = Math.cbrt(m), s_ = Math.cbrt(s)

  const L  =  0.2104542553*l_ + 0.7936177850*m_ - 0.0040720468*s_
  const a  =  1.9779984951*l_ - 2.4285922050*m_ + 0.4505937099*s_
  const bv =  0.0259040371*l_ + 0.7827717662*m_ - 0.8086757660*s_

  const C = Math.sqrt(a*a + bv*bv)
  let H = Math.atan2(bv, a) * (180/Math.PI)
  if (H < 0) H += 360

  return `oklch(${L.toFixed(3)} ${C.toFixed(3)} ${H.toFixed(1)})`
}

// ─── Build CSS ────────────────────────────────────────────────────────────────
const lines = []

lines.push(`/* =================================================================`)
lines.push(`   McKesson Design System — Generated Tokens`)
lines.push(`   Source:  tokens/Style_tokens.json`)
lines.push(`   Command: npm run tokens`)
lines.push(`   ⚠️  DO NOT EDIT — regenerate with npm run tokens`)
lines.push(`   ================================================================= */`)
lines.push(``)
lines.push(`:root {`)
lines.push(``)

// Primary
lines.push(`  /* ── Primary — McKesson Navy Blue ── */`)
Object.entries(g.Primary).forEach(([key, token]) => {
  lines.push(`  --mck-${key.toLowerCase()}: ${token.value};`)
})

// Secondary
lines.push(``)
lines.push(`  /* ── Secondary — Grays ── */`)
Object.entries(g.Secondary).forEach(([key, token]) => {
  lines.push(`  --mck-${key.toLowerCase()}: ${token.value};`)
})

// Semantic
lines.push(``)
lines.push(`  /* ── Semantic — Feedback Colors ── */`)
Object.entries(g.Semantic).forEach(([key, token]) => {
  lines.push(`  --mck-${key.toLowerCase()}: ${token.value};`)
})

// Tertiary
if (g.Tertiary) {
  lines.push(``)
  lines.push(`  /* ── Tertiary ── */`)
  Object.entries(g.Tertiary).forEach(([key, token]) => {
    lines.push(`  --mck-${key.toLowerCase()}: ${token.value};`)
  })
}

// Utility
if (g.Utility) {
  lines.push(``)
  lines.push(`  /* ── Utility ── */`)
  Object.entries(g.Utility).forEach(([key, token]) => {
    const name = key.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/,'')
    lines.push(`  --mck-utility-${name}: ${token.value};`)
  })
}

// Spacing
lines.push(``)
lines.push(`  /* ── Spacing ── */`)
Object.entries(g.spacing).forEach(([key, token]) => {
  const val = token.value === '0' ? '0px'
    : String(token.value).endsWith('px') ? token.value
    : token.value + 'px'
  lines.push(`  --mck-${key}: ${val};`)
})

// Border radius
lines.push(``)
lines.push(`  /* ── Border Radius ── */`)
Object.entries(g.borderRadius).forEach(([key, token]) => {
  lines.push(`  --mck-${key}: ${token.value};`)
})

// Typography
lines.push(``)
lines.push(`  /* ── Typography ── */`)
lines.push(`  --mck-font-base: ${g.fontFamilies.baseFont.value};`)
lines.push(`  --mck-font-mono: ${g.fontFamilies.monoFont.value};`)
Object.entries(g.fontSize).forEach(([key, token]) => {
  const val = String(token.value).endsWith('px') ? token.value : token.value + 'px'
  lines.push(`  --mck-font-size-${key}: ${val};`)
})

// ─── ShadCN mappings ──────────────────────────────────────────────────────────
const P600  = g.Primary.P600.value    // #003654 darkest navy
const P500  = g.Primary.P500.value    // #004870
const P400  = g.Primary.P400.value    // #005A8C
const P50   = g.Primary.P50.value     // #e5eef3 lightest tint
const white = g.Secondary.White.value // #ffffff
const s400  = g.Secondary.S400.value  // #999999
const s100  = g.Secondary.S100.value  // #e0e0e0
const s75   = g.Secondary.S75.value   // #ebebeb
const s50   = g.Secondary.S50.value   // #f5f5f5
const error = g.Semantic.Error100.value // #B2060A

lines.push(``)
lines.push(`  /* =================================================================`)
lines.push(`     ShadCN Token Mappings — Light Mode`)
lines.push(`     bg-primary, text-foreground, bg-destructive etc. read from here`)
lines.push(`     ================================================================= */`)
lines.push(``)
lines.push(`  --background:             ${white};`)
lines.push(`  --foreground:             ${P600};`)
lines.push(`  --card:                   ${white};`)
lines.push(`  --card-foreground:        ${P600};`)
lines.push(`  --popover:                ${white};`)
lines.push(`  --popover-foreground:     ${P600};`)
lines.push(`  --primary:                ${hexToOklch(P600)};`)
lines.push(`  --primary-foreground:     ${hexToOklch(white)};`)
lines.push(`  --secondary:              ${hexToOklch(s50)};`)
lines.push(`  --secondary-foreground:   ${hexToOklch(P600)};`)
lines.push(`  --muted:                  ${hexToOklch(s75)};`)
lines.push(`  --muted-foreground:       ${hexToOklch(s400)};`)
lines.push(`  --accent:                 ${hexToOklch(P50)};`)
lines.push(`  --accent-foreground:      ${hexToOklch(P600)};`)
lines.push(`  --destructive:            ${hexToOklch(error)};`)
lines.push(`  --destructive-foreground: ${hexToOklch(white)};`)
lines.push(`  --border:                 ${s100};`)
lines.push(`  --input:                  ${s100};`)
lines.push(`  --ring:                   ${hexToOklch(P400)};`)
lines.push(`  --radius:                 ${g.borderRadius.borderRadius8.value};`)
lines.push(`}`)

lines.push(``)
lines.push(`.dark {`)
lines.push(`  /* =================================================================`)
lines.push(`     ShadCN Token Mappings — Dark Mode`)
lines.push(`     ================================================================= */`)
lines.push(``)
lines.push(`  --background:             ${P600};`)
lines.push(`  --foreground:             ${white};`)
lines.push(`  --card:                   ${P500};`)
lines.push(`  --card-foreground:        ${white};`)
lines.push(`  --popover:                ${P500};`)
lines.push(`  --popover-foreground:     ${white};`)
lines.push(`  --primary:                ${hexToOklch(white)};`)
lines.push(`  --primary-foreground:     ${hexToOklch(P600)};`)
lines.push(`  --secondary:              ${hexToOklch(P500)};`)
lines.push(`  --secondary-foreground:   ${hexToOklch(white)};`)
lines.push(`  --muted:                  ${hexToOklch(P500)};`)
lines.push(`  --muted-foreground:       ${hexToOklch(s400)};`)
lines.push(`  --accent:                 ${hexToOklch(P400)};`)
lines.push(`  --accent-foreground:      ${hexToOklch(white)};`)
lines.push(`  --destructive:            ${hexToOklch(error)};`)
lines.push(`  --border:                 ${hexToOklch(P400)};`)
lines.push(`  --input:                  ${hexToOklch(P400)};`)
lines.push(`  --ring:                   ${hexToOklch(P50)};`)
lines.push(`}`)

// ─── Write ────────────────────────────────────────────────────────────────────
fs.writeFileSync(path.join(__dirname, '../app/tokens.css'), lines.join('\n'))

console.log('✅ Tokens built → app/tokens.css')
console.log('')
console.log('McKesson brand colors:')
console.log(`  Primary navy (P600):  ${P600}`)
console.log(`  Mid blue (P400):      ${P400}`)
console.log(`  Light tint (P50):     ${P50}`)
console.log(`  Error red:            ${error}`)
console.log(`  Base font:            ${g.fontFamilies.baseFont.value}`)