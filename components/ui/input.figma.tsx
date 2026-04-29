import figma from "@figma/code-connect"
import { Input } from "./input"

figma.connect(
  Input,
  "https://www.figma.com/design/ndwbHKfWbUuqMjsWJCiU3z?node-id=18-32",
  {
    props: {
      disabled: figma.enum("state", {
        disabled: true,
      }),
    },
    example: ({ disabled }) => (
      <Input
        placeholder="Placeholder text"
        disabled={disabled}
      />
    ),
  }
)