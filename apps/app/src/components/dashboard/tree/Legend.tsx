import { Card, CardContent } from "@ui/card";
import useTreeStore, { lenses } from "@utils/tree";
import { cn } from "@utils/shadcn";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "src/components";

export const Legend = () => {
	const lens = useTreeStore((state) => state.lens);
	const [items, setItems] = useState<string[]>([]);
	const [open, setOpen] = useState<boolean>(true);

	useEffect(() => {
		const items: string[] = [];
		const current = lenses.get(lens);
		current?.forEach((item: any, idx: number) => {
			items.push(item);
		});
		setItems(items);
	}, [lens]);

	if (["progress"].includes(lens)) return null;
	return (
		<Card className={"w-fit py-1 px-3 text-xs md:text-base"}>
			<CardContent className="p-1 ">
				<div onClick={() => setOpen(!open)} className="text-start">
					<h3 className={"text-xs capitalize relative"}>
						{lens.toUpperCase()}
						<Button
							variant={"ghost"}
							className={cn(
								open ? "rotate-180" : "rotate-0",
								"block w-5 h-5 p-1 absolute transition-transform -top-0.5 -right-1",
							)}
							onClick={() => setOpen(!open)}
						>
							<ChevronDown size={12} />
						</Button>
					</h3>
					<div
						className={cn(
							"flex flex-col transition-[height] mt-2 gap-1 md:!block",
							!open && "h-0 mt-0 overflow-hidden",
						)}
					>
						{items.map((item: any, idx: number) => (
							<div
								key={idx}
								className={" text-xs md:text-sm flex gap-4 items-center"}
							>
								<span
									className={`bg-${lens}-${idx} w-4 h-4 rounded-full`}
								></span>
								<p className={"!m-0"}>{item}</p>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
