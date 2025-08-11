import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex  items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium  transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none  [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // default: "text-[13px] text-white bg-gradient-to-b from-violet-500 to-violet-600 hover:from-violet-400 hover:to-violet-500 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2)] transition-all duration-200",
        default: "bg-primary text-primary-foreground shadow-lg  hover:bg-primary/90",
        inverse: "border shadow-none bg-secondary text-secondary-foreground   hover:bg-secondary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-accent border text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        medusa: "text-[13px] font-medium text-white bg-gradient-to-b from-violet-500 to-violet-600 hover:from-violet-400 hover:to-violet-500 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2)] transition-all duration-200",
        dark: "border shadow-none bg-black/90 text-white hover:bg-black/80",
        whatsapp: "bg-green-600 text-white shadow-lg  hover:bg-green-600/90",
      },
      size: {
        default: "h-[30px] px-2.5 [&_svg]:size-4 [&_svg]:opacity-70",
        sm: "h-6 rounded-lg px-2 [&_svg]:size-3.5",
        lg: "h-9 rounded-lg px-6 [&_svg]:size-5",
        xl: "h-8 px-4 [&_svg]:size-3.5 [&_svg]:opacity-70",
        icon: " size-8  [&_svg]:size-4 ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
