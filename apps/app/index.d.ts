
import { Node as reactFlowNode } from "reactflow"
import { Database } from "@stukt/database";


export type NodeModel = Database['public']['Tables']['nodes']['Row']
export interface Node extends NodeModel {
	value: number
}

export const priority = {
	Low: 0,
	Medium: 1,
	High: 2,
	Critical: 3,
} as {
	Low: number,
	Medium: number
	High: number,
	Critical: number,
}

export const status = {
	Archived: 0,
	Backlog: 1,
	Progress: 2,
	Review: 3,
	Complete: 4,
} as {
	Archived: number,
	Backlog: number,
	Progress: number,
	Review: number,
	Complete: number,
}


export interface FlowNode extends Omit<reactFlowNode, 'data'> {
	data: Node
}

export interface Popover<T> {
	event: React.MouseEvent
	data: T
}