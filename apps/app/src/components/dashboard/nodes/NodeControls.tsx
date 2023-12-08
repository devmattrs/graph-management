import { AppreciateIt } from "@components/elements/AppreciateIt";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { api } from "@utils/api";
import { Node } from "@utils/tree";
import { LucideLoader2 } from "lucide-react";
import { useState } from "react";
import { ToastAction, toast } from "../../";
import { QuickChange } from "./QuickChange";

interface NodeControlsProps {
	node: Node;
}

export const NodeControls = ({ node }: NodeControlsProps) => {
	const [title, setTitle] = useState("");

	const utils = api.useContext();

	const addNode = api.node.add.useMutation({
		onSuccess: () => {
			setTitle("");
			utils.node.all.invalidate();
		},
	});
	const linkMany = api.node.linkMany.useMutation({
		onSuccess() {
			utils.node.all.invalidate();
		},
	});
	const deleteNode = api.node.delete.useMutation({
		onSuccess: async () => {
			utils.node.all.invalidate();
			toast({
				title: "Node Deleted",
				variant: "destructive",
				description: `${node.name} was deleted`,
				action: (
					<ToastAction
						altText="Undo"
						onClick={async () => {
							await addNode.mutateAsync({
								parent: node.parent,
								name: node.name,
							});
						}}
					>
						Undo
					</ToastAction>
				),
			});
		},
	});

	const updateTitle = (e: any) => {
		setTitle(e.target.value);
	};

	const submit = async (e: any) => {
		if (e && e.nativeEvent.code === "Escape") {
			setTitle("");
			return null;
		}

		if (e && e.nativeEvent.type === "keydown" && e.code !== "Enter")
			return null;
		if (title) {
			await addNode.mutateAsync({ parent: node.id, name: title });
			setTitle("");
		}
	};

	const options = [
		{
			label: "Scope to node",
			variant: "default",
			click: async () => {
				toast({
					title: " Under Construction",
					description:
						"Adding scopes soon, hit that thumbs up if you're looking forward to it!",
					action: <AppreciateIt feature="scopes" />,
				});
			},
		},
		{
			variant: "destructive",
			label: "Delete Node",
			click: async () => {
				await deleteNode.mutateAsync(node.id);
			},
		},
	] as any[];
	return (
		<>
			<Input
				autoFocus
				loading={addNode.isLoading}
				placeholder="Enter to add..."
				value={title}
				onInput={updateTitle}
				onKeyDown={(e) => submit(e)}
			/>
			<QuickChange node={node} />
			{options.map((option, idx) => (
				// @ts-ignore
				<Button
					key={idx}
					className={"w-full"}
					size={"default"}
					variant={option.variant}
					onClick={option.click}
				>
					{option.label.includes("Delete") && deleteNode.isLoading ? (
						<LucideLoader2 className="animate-spin" />
					) : (
						option.label
					)}
				</Button>
			))}
		</>
	);
};
