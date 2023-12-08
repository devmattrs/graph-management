"use client";

import {
	Calculator,
	Calendar,
	CreditCard,
	Settings,
	Smile,
	User,
} from "lucide-react";
import * as React from "react";
import * as Icon from "lucide-react";

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@ui/command";
import Link from "next/link";
import { Button } from "src/components";

export function Search() {
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				className="w-fit px-3 flex-row border rounded-md gap-5 items-center pr-2 hidden md:flex"
				variant={"outline"}
			>
				{/* <Input className="text-sm text-muted-foreground border-none w-fit sm:w-64" readOnly placeholder="Search workspace..." /> */}
				Search workspace...
				<kbd>
					<span className="text-xs">⌘</span>K
				</kbd>
			</Button>

			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput
					placeholder="Search still in development..."
					className="focus:ring-0 border-none"
				/>
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Actions">
						<CommandItem>
							<Icon.SortAsc className="mr-2 h-4 w-4" />
							<span>Sort</span>
						</CommandItem>
						<CommandItem>
							<Icon.Camera className="mr-2 h-4 w-4" />
							<span>Switch lens</span>
						</CommandItem>
						<CommandItem>
							<Icon.SearchIcon className="mr-2 h-4 w-4" />
							<span>Search nodes...</span>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Settings">
						<CommandItem>
							<Icon.Sun className="mr-2 h-4 w-4" />
							<span>Change theme</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<Link href={"/settings"}>
							<CommandItem onClick={() => console.log("Clicked settings")}>
								<Settings className="mr-2 h-4 w-4" />
								<span>Settings</span>
								<CommandShortcut>⌘S</CommandShortcut>
							</CommandItem>
						</Link>
						<Link href={"/settings#billing"}>
							<CommandItem>
								<CreditCard className="mr-2 h-4 w-4" />
								<span>Billing</span>
								<CommandShortcut>⌘B</CommandShortcut>
							</CommandItem>
						</Link>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
