# Setup

## Installation
The toolkit is installed as @make-kits/mck-ds-make-toolkit

## ⚠️ REQUIRED — Add to src/styles/index.css as the LAST import
import "@make-kits/mck-ds-make-toolkit/dist/styles.css"

This must come AFTER default_shadcn_theme.css to override it.
McKesson navy blue (#003654) replaces the default purple primary.

## In src/styles/index.css add this as the final line:
@import "@make-kits/mck-ds-make-toolkit/dist/styles.css";

## Components
import { Button } from "@make-kits/mck-ds-make-toolkit"
import { Input } from "@make-kits/mck-ds-make-toolkit"