import React, { memo, useEffect, useState } from "react";

import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuTrigger,
} from "@ui/context-menu";
import { api } from "@utils/api";
import useTreeStore, { FlowNode } from "@utils/tree";
import { cn } from "@utils/shadcn";
import { useReactFlow, useStoreApi } from "reactflow";
import { Node as NodeUi } from "./Node";
import { NodeControls } from "./NodeControls";

export const NodeContainer = memo((node: FlowNode) => {
	const { lens, selected, setSelected } = useTreeStore((state) => ({
		lens: state.lens,
		selected: state.selected,
		setSelected: state.setSelected,
	}));
	const [holding, setHolding] = useState(false);

	const utils = api.useContext();
	const linkNode = api.node.link.useMutation({
		onSuccess() {
			utils.node.all.invalidate();
		},
	});

	const store = useStoreApi();
	const { setCenter, getZoom } = useReactFlow();

	const focusNode = () => {
		const { nodeInternals } = store.getState();
		const nodes = Array.from(nodeInternals).map(([, node]) => node);

		const n = nodes.find((n) => n.id === node.data.id.toString());

		if (n && n.width && n.height) {
			const x = n.position.x + n.width / 2;
			const y = n.position.y + n.height / 2;

			setCenter(x, y, { zoom: getZoom(), duration: 800 });
		}
	};
	const handle = {
		select: (e: React.MouseEvent) => {
			e.preventDefault();
			if (selected && selected.id === node.data.id) {
				setSelected(undefined);
				setTimeout(() => {
					focusNode();
				}, 500);
			} else {
				setSelected(node.data);
				setTimeout(
					() => {
						focusNode();
					},
					selected ? 0 : 500,
				);
			}
		},
		start: (e: React.DragEvent<HTMLDivElement>) => {
			e.dataTransfer.clearData();
			e.dataTransfer.setData("text/plain", JSON.stringify(node.data));
			setHolding(true);
		},
		end: (e: React.DragEvent<HTMLDivElement>) => {
			setHolding(false);
			e.preventDefault();
		},
		drop: async (e: React.DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			const incoming = JSON.parse(
				e.dataTransfer.getData("text/plain").toString(),
			);
			if (incoming.id !== node.data.id) {
				//Link Node
				await linkNode.mutate({
					updating: incoming.id,
					newParent: node.data.id,
				});
			}
		},
	};

	return (
		<div
			draggable={true}
			onDragStart={handle.start}
			onDragEnd={handle.end}
			onDrop={handle.drop}
			onDragOver={(e) => e.preventDefault()}
			className="group transition-all duration-500"
		>
			<ContextMenu>
				<ContextMenuTrigger>
					<NodeUi
						node={node}
						onClick={handle.select}
						deleting={false}
						className={cn(
							lens === "progress" && "!duration-0 !bg-muted",
							holding ? "border-black shadow-black" : "",
							`bg-${lens}-${node.data.value} dark:bg-opacity-40  border duration-500 relative  p-2 rounded-md text-center transition-all cursor-pointer w-[200px] h-11 justify-center items-center !z-0`,
						)}
					>
						<div className="absolute top-0 left-0 overflow-clip rounded-md w-full h-full">
							<div
								className={cn(
									lens === "progress"
										? "bg-emerald-400 top-0 left-0 h-full dark:bg-opacity-50"
										: "",
									"absolute z-20 transition-width duration-300",
								)}
								style={{
									width: `${node.data.value}%`,
								}}
							/>
						</div>
					</NodeUi>
				</ContextMenuTrigger>
				<ContextMenuContent className="flex flex-col gap-4">
					<NodeControls node={node.data} />
				</ContextMenuContent>
			</ContextMenu>
		</div>
	);
});

NodeContainer.displayName = "NodeContainer";
