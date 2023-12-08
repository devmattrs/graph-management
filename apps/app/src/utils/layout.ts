import { Edge } from "reactflow";
import * as d3 from "d3-hierarchy";
import { FlowNode, Node } from "./tree";

//@ts-ignore
const average = (array: any[]) => array.reduce((a, b) => a + b) / array.length;

export const getLayout = (
	nodeList: Node[],
	lens: string,
	highToLow = true,
	isHorizontal = true,
) => {
	const nodes: FlowNode[] = [];
	const edges: Edge[] = [];

	// Turns tabular data into json tree
	// @ts-ignore
	const root = d3
		.stratify()
		// @ts-ignore
		.id((d) => d.id)
		// @ts-ignore
		.parentId((d) => d.parent)(nodeList);

	// Compute the value of the node
	// this is designed so as to be customized by the users down the road
	root.eachAfter((node) => {
		// This will eventually be a dynamic list of values created by the user and scoped to a workspace settings table
		const toCompute = ["progress"];

		if (toCompute.includes(lens) && node.children) {
			//@ts-ignore
			node.data.value = Math.floor(
				//@ts-ignore
				average(node.children.map((node) => node.data.value)),
			);
		} else {
			//@ts-ignore
			node.data["value"] = node.data[lens];
		}
	});

	// @ts-ignore
	root.sort((a: FlowNode, b) =>
		//@ts-ignore
		highToLow ? b.data.value - a.data.value : a.data.value - b.data.value,
	);

	// @ts-ignore
	function separation(a, b) {
		return a.parent === b.parent ? 1.2 : 1.2;
	}

	// Compute the layout.
	const dx = isHorizontal ? 120 : 200;
	const dy = isHorizontal ? 250 : 120;
	d3.tree().separation(separation).nodeSize([dx, dy])(root);

	for (const descendant of root) {
		if (descendant.parent)
			edges.push({
				//@ts-ignore
				id: String(`${descendant.id}|${descendant.data.value}`),
				source: String(descendant.parent.id),
				target: String(descendant.id),
				type: "smoothstep",
			});

		nodes.push({
			id: String(descendant.id),
			dragHandle: "drag",
			type: "node",
			data: {
				//@ts-ignore
				...descendant.data,
				isLeaf: descendant.children === undefined,
			},
			position: {
				//@ts-ignore
				x: isHorizontal ? descendant.y : descendant.x,
				//@ts-ignore
				y: isHorizontal ? descendant.x : descendant.y,
			},
		});
	}

	return { nodes, edges };
};
