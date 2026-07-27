import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-900 text-white hover:bg-teal-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200 hover:-translate-y-0.5 shadow-sm",
        primary:
          "bg-neutral-900 text-white hover:bg-teal-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200 hover:-translate-y-0.5 shadow-sm",
        secondary:
          "border border-neutral-200 bg-transparent text-black hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800",
        ghost: 
          "bg-transparent text-neutral-600 hover:text-black hover:bg-neutral-100/50 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-teal-700/50",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:-translate-y-0.5",
        outline:
          "border border-neutral-200 bg-transparent text-black hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-teal-700",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
