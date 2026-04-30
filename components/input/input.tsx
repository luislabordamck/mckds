import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Luma style — subtle gray background, no border until focused
        "flex h-9 w-full min-w-0 rounded-lg border-0",
        "bg-[#f3f3f5] dark:bg-input/30",
        "px-3 py-1 text-base text-foreground",
        "placeholder:text-muted-foreground",
        "shadow-none outline-none",
        "transition-colors duration-150",
        // Focus — McKesson navy ring
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-[var(--mck-p400)]",
        "focus-visible:bg-background",
        // Error state
        "aria-invalid:ring-2 aria-invalid:ring-destructive",
        "aria-invalid:bg-[var(--mck-error50)]",
        // Disabled
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // File input
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent",
        "file:text-sm file:font-medium file:text-foreground",
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
