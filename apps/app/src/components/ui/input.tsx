import * as React from "react"

import { cn } from "@utils/shadcn"
import { LucideLoader2 } from "lucide-react"

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	loading?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, loading, ...props }, ref) => {
		return (
			<div className="relative">
				<input
					type={type}
					className={cn(
						"flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
						className
					)}
					ref={ref}
					{...props}
				>
				</input>
				<span className="absolute top-2 right-2">
					{loading && <LucideLoader2 className="animate-spin" />}
				</span>
			</div>
		)
	}
)
Input.displayName = "Input"

export { Input }
