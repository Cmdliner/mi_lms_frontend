import * as React from "react"
import { cn } from "@/lib/utils"

const Select = React.forwardRef<
    HTMLSelectElement,
    React.ComponentProps<"select">
>(({ className, children, ...props }, ref) => (
    <select
        ref={ref}
        className={cn(
            "flex h-12 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-900 transition-colors focus:border-teal-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        {...props}
    >
        {children}
    </select>
))
Select.displayName = "Select"

export { Select }
