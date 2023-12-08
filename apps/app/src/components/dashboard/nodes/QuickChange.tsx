import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/select";
import { Slider } from "@ui/slider";
import { api } from "@utils/api";
import useTreeStore, { Node, lenses, priority, status } from "@utils/tree";
import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";

export const QuickChange = ({ node }: { node: Node }) => {
	const [Input, setInput] = useState<JSX.Element>(<>hi</>);
	const [progress, setProgress] = useState<number>(node.progress ?? 0);
	const utils = api.useContext();
	const update = api.node.update.useMutation({
		onSuccess(input) {
			console.log(input);
			utils.node.all.invalidate();
		},
	});
	const { lens, setPopover, popover } = useTreeStore((state) => ({
		setPopover: state.setNodePopover,
		popover: state.nodePopover,
		lens: state.lens,
	}));

	const debouncedChange = useCallback(
		debounce(async (progress: number) => {
			const input = { ...node, progress };
			//@ts-ignore
			setPopover({ ...popover, data: input });
			await update.mutateAsync(input);
		}, 400),
		[],
	);

	const changeProgress = async (e: any) => {
		console.log(e);
		debouncedChange(Number(e));
		setProgress(Number(e));
		console.log(progress);
	};

	const options = (lens: string) => {
		let items: { name: string; val: number }[] = [];
		for (const [num, str] of lenses.get(lens)?.entries() ?? []) {
			items.push({
				name: str,
				val: num,
			});
		}
		return items;
	};

	useEffect(() => {
		switch (lens) {
			case "progress":
				//@ts-ignore
				if (!node.isLeaf) setInput(<></>);
				else
					setInput(
						<>
							<Slider
								defaultValue={[progress]}
								max={100}
								onValueChange={changeProgress}
								step={10}
							/>
						</>,
					);
				break;
			case "status":
				setInput(
					<Select
						onValueChange={async (arg: any) => {
							await update.mutateAsync({
								...node,
								status: arg,
							});
						}}
					>
						<SelectTrigger>
							<SelectValue placeholder={status.get(node.status)} />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{options(lens).map((option: any) => (
									<SelectItem value={option.val} key={option.val}>
										{option.name}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>,
				);
				break;
			case "priority":
				setInput(
					<Select
						onValueChange={async (arg: any) => {
							await update.mutateAsync({
								...node,
								priority: arg,
							});
						}}
					>
						<SelectTrigger>
							<SelectValue placeholder={priority.get(node.priority)} />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{options(lens).map((option: any) => (
									<SelectItem key={option.val} value={option.val}>
										{option.name}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>,
				);

				break;
		}
	}, [lens, progress]);

	return Input;
};
