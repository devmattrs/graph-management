import { Input } from "@ui/input";
import { api } from "@utils/api";
import { Loader2, Plus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "src/components";

export const FirstNode = ({ loading }: { loading: boolean }) => {
	const [name, setName] = useState("");

	// Add node and mutate on success
	const utils = api.useContext();
	const addWorkspace = api.workspace.add.useMutation({
		onSuccess(input) {
			utils.node.all.invalidate();
		},
	});
	const addNode = api.node.add.useMutation({
		onSuccess(input) {
			utils.node.all.invalidate();
			addWorkspace.mutate();
		},
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleKeyDown = (event: any) => {
		if (event.key === "Enter") {
			seedTree();
		}
	};

	const seedTree = async () => {
		await addNode.mutateAsync({ name: name, first: true });
	};

	return (
		<div className={"w-fit h-fit center flex gap-3 "}>
			<Input
				autoFocus
				placeholder={"Workspace name..."}
				value={name}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<Button
				size={"icon"}
				className="h-9 w-9"
				variant={"default"}
				onClick={seedTree}
			>
				{addNode.isLoading || loading ? (
					<Loader2 className={"w-6 h-6 animate-spin"} />
				) : (
					<Plus className={"w-6 h-6"} />
				)}
			</Button>
		</div>
	);
};
