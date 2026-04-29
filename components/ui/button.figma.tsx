import figma from "@figma/code-connect"
import { Button } from "./button"

figma.connect(
  Button,
  "https://www.figma.com/design/ndwbHKfWbUuqMjsWJCiU3z?node-id=10-122",
  {
    props: {
      variant: figma.enum("variant", {
        default:     "default",
        secondary:   "secondary",
        outline:     "outline",
        ghost:       "ghost",
        destructive: "destructive",
      }),
      size: figma.enum("size", {
        sm:      "sm",
        default: "default",
        lg:      "lg",
      }),
      disabled: figma.enum("state", {
        disabled: true,
      }),
    },
    example: ({ variant, size, disabled }) => (
      <Button variant={variant} size={size} disabled={disabled}>
        Button
      </Button>
    ),
  }
)