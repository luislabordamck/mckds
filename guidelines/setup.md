# Setup

## Installation
The toolkit is installed as @make-kits/mck-ds-make-toolkit

## ⚠️ REQUIRED — Add as the LAST line of src/styles/index.css
@import "@make-kits/mck-ds-make-toolkit/dist/styles.css";

This MUST be the last import — it overrides the default ShadCN purple theme
with McKesson navy blue (#003654).

## Verify
Primary buttons should be navy blue #003654.
If purple → the import is missing or not last in index.css.

## Components
import { Button } from "@make-kits/mck-ds-make-toolkit"
import { Input } from "@make-kits/mck-ds-make-toolkit"