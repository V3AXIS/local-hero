import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "bg-input/20 border-input/90 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs",
        "transition-colors duration-100 ease-in-out",
        "outline-none focus:border-primary/40 focus:ring-primary/40", 
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}

      {...props}
    />
  )
}

export { Input }
