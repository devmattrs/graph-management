"use client";

import { cn } from "@utils/shadcn";
import { Moon, Paintbrush2, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { useState } from "react";
import {
	Button,
	Card,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "src/components";

export function ModeToggle() {
	const { setTheme, resolvedTheme } = useTheme();
	const colors = ["blue", "rose", "green", "orange"];

	const theme = (theme: string) => {
		document.documentElement.setAttribute("class", `${theme} ${resolvedTheme}`);
	};

	return (
		<>
			<div className="mb-8">
				<h3 className="mb-3">Theme</h3>
				<div className="w-1/3 flex flex-row gap-5">
					<Button
						size="lg"
						className="menu-btn"
						onClick={() => setTheme("light")}
					>
						<Sun />
						Light
					</Button>
					<Button
						size="lg"
						className="menu-btn"
						onClick={() => setTheme("dark")}
					>
						<Moon />
						Dark
					</Button>
				</div>
			</div>
			<div>
				<h3 className="mb-3">Accent</h3>
				<div className="flex flex-row gap-12">
					<div className={cn(`${resolvedTheme}`)}>
						<Button
							onClick={() => theme("default")}
							className={cn(
								"!bg-foreground w-16 h-16 rounded-full transition-transform hover:scale-110",
							)}
						/>
					</div>
					{colors.map((color) => (
						<div key={color} className={cn(`${color} ${resolvedTheme}`)}>
							<Button
								onClick={() => theme(color)}
								className={cn(
									`${color} w-16 h-16 rounded-full transition-transform hover:scale-110`,
								)}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
