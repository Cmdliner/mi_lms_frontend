import * as React from "react"
import { cn } from "@/lib/utils"

const Select = React.forwardRef<
    HTMLSelectElement,
    React.ComponentProps<"select">
>(({ className, children, ...props }, ref) => (
    <select
        ref={ref}
        className={cn(
            "flex h-11 w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-2 text-base text-slate-900 shadow-sm transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        {...props}
    >
        {children}
    </select>
))
Select.displayName = "Select"

export { Select }
