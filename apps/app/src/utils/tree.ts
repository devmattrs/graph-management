import { Node as reactFlowNode } from "reactflow";
import { create } from "zustand";
import { Database } from "../../../../packages/supabase";


export type NodeModel = Database['public']['Tables']['nodes']['Row']
export interface Node extends NodeModel {
	value: number
}

export const priority = new Map([
	[0, "Low"],
	[1, "Medium"],
	[2, "High"],
	[3, "Critical"],
])

export const status = new Map([
	[0, "Archived"],
	[1, "Backlog"],
	[2, "Progress"],
	[3, "Review"],
	[4, "Complete"],
])

export const lenses = new Map([
	["status", status],
	["priority", priority],
])

export interface FlowNode extends Omit<reactFlowNode, 'data'> {
	data: Node
}

export interface Popover<T> {
	event: React.MouseEvent
	data: T
}


interface TreeStore {
	data: Node[],
	holding: FlowNode | undefined,
	scoped: FlowNode | undefined,
	path: Node[] | undefined,
	lens: string,
	selected: Node | undefined,
	nodePopover: Popover<Node> | undefined,
	isHorizontal: boolean,
	setData: (data: Node[]) => void
	setHolding: (holding: FlowNode | undefined) => void
	setScoped: (scoped: FlowNode | undefined) => void
	setPath: (path: Node[] | undefined) => void
	setLens: (lens: string) => void
	setSelected: (selected: Node | undefined) => void
	setNodePopover: (node: Popover<Node> | undefined) => void
	setIsHorizontal: (isHorizontal: boolean) => void

}

const useTreeStore = create<TreeStore>((set) => ({
	data: [],
	holding: undefined,
	scoped: undefined,
	path: undefined,
	lens: "status",
	selected: undefined,
	nodePopover: undefined,
	isHorizontal: false,
	setData: (data: Node[]) => set(() => ({ data })),
	setHolding: (holding) => set(() => ({ holding })),
	setScoped: (scoped) => set(() => ({ scoped })),
	setPath: (path) => set(() => ({ path })),
	setLens: (lens) => set(() => ({ lens })),
	setSelected: (selected) => set(() => ({ selected })),
	setNodePopover: (context) => set(() => ({ nodePopover: context })),
	setIsHorizontal: (isHorizontal) => set(() => ({ isHorizontal })),

}))

export default useTreeStore;