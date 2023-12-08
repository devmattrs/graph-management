import useTreeStore, { FlowNode } from "@utils/tree";
import { cn } from "@utils/shadcn";
import React from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";
import clsx from "clsx";

interface NodeProps extends React.HTMLAttributes<HTMLDivElement> {
	node: FlowNode;
	deleting: boolean;
	children?: React.ReactNode;
}

export const Node = ({
	node,
	children,
	deleting,
	...attributes
}: NodeProps) => {
	const updateNodeInternals = useUpdateNodeInternals();

	const isHorizontal = useTreeStore((state) => state.isHorizontal);

	React.useEffect(() => {
		updateNodeInternals(node.id);
	}, [isHorizontal, node.id, updateNodeInternals]);

	return (
		<>
			{node.data.parent !== null && (
				<Handle
					position={isHorizontal ? Position.Left : Position.Top}
					type="target"
					className="invisible"
					id={`${node.data.id}b`}
				/>
			)}
			{!node.data.isLeaf && (
				<Handle
					position={isHorizontal ? Position.Right : Position.Bottom}
					className="invisible"
					type="source"
					id={`${node.data.id}a`}
				/>
			)}

			<div {...attributes} className={`${attributes["className"]} relative`}>
				{deleting ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className={"w-5 h-5 animate-spin mx-auto"}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
						/>
					</svg>
				) : (
					<p
						className={clsx(
							"group-hover:text-xl top-0 group-hover:-translate-y-10 fixed group-hover:!text-foreground",
							"translate-z-2 relative px-2 z-50 max-h-full text-foreground font-medium transition-all duration-150  group-hover:w-fit group-hover:whitespace-pre-wrap whitespace-none mt-1 text-sm mx-auto block",
						)}
					>
						{`${node.data.name}`}
					</p>
				)}
				{children}
			</div>
		</>
	);
};
