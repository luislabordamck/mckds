/**
 * scripts/postinstall.js
 * 
 * Runs automatically after npm install @mckmds/ui
 * Copies McKesson theme tokens into the project's theme.css
 * so Figma Make and other tools get the correct brand colors.
 */

const fs   = require('fs')
const path = require('path')

// Where we are (inside node_modules/@mckmds/ui)
const pkgDir     = path.join(__dirname, '..')
const tokensFile = path.join(pkgDir, 'dist', 'styles.css')

// Where to write (the consuming project's root)
const projectRoot = path.join(pkgDir, '..', '..')
const targets = [
  path.join(projectRoot, 'src', 'styles', 'theme.css'),
  path.join(projectRoot, 'src', 'styles', 'globals.css'),
]

// Only copy if the target exists — don't create files in wrong places
for (const target of targets) {
  if (fs.existsSync(target)) {
    fs.copyFileSync(tokensFile, target)
    console.log(`✅ @mckmds/ui: copied McKesson tokens → ${target}`)
  }
}

console.log('✅ @mckmds/ui: McKesson brand tokens installed')