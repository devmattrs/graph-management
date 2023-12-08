import { useCallback, useLayoutEffect, useState } from "react";
import ReactFlow, {
	Background,
	BackgroundVariant,
	Panel,
	addEdge,
	useEdgesState,
	useNodesState,
} from "reactflow";
import { AppreciateIt } from "@components/elements/AppreciateIt";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from "@ui/menubar";
import useTreeStore, { Node } from "@utils/tree";
import { cn } from "@utils/shadcn";
import { ArrowRight, PlusCircleIcon, Settings, XIcon } from "lucide-react";
import Link from "next/link";
import {
	Button,
	Legend,
	LensPicker,
	ScrollArea,
	SelectedNode,
	NodeContainer,
	toast,
	CreateWorkspace,
} from "src/components";
import { getLayout } from "@utils/layout";

interface FlowGraphProps {
	incoming: Node[];
}

const nodeTypes = {
	node: NodeContainer,
};

export const Tree = ({ incoming }: FlowGraphProps) => {
	const [htl, sethtl] = useState(true);
	const { lens, selected, setSelected, isHorizontal, setIsHorizontal } =
		useTreeStore((state) => ({
			lens: state.lens,
			selected: state.selected,
			setSelected: state.setSelected,
			isHorizontal: state.isHorizontal,
			setIsHorizontal: state.setIsHorizontal,
		}));

	const [nodes, setNodes, onNodesChange] = useNodesState([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);

	const onConnect = useCallback(
		(params: any) => setEdges((eds) => addEdge(params, eds)),
		[],
	);
	useLayoutEffect(() => {
		const { nodes, edges } = getLayout(incoming, lens, htl, isHorizontal);
		setNodes(nodes);
		setEdges(edges);
	}, [incoming, lens, htl, isHorizontal]);

	return (
		<div
			id="top-level"
			className="flex flex-col-reverse md:flex-col w-full h-full p-2 bg-muted gap-2"
		>
			{/* <nav className='bg-background h-12 w-full rounded-md flex flex-row justify-between items-center p-1'>
				<a href='https://app.strukt.io'>
					<Button variant={'ghost'}>
						<span className='font-mono flex flex-row gap-2'>
							<TreePine className='w-5 h-5' />
							Strukt
						</span>
					</Button>
				</a>
				<Search />
				<aside className='hidden sm:flex text-foreground gap-2'>
					<a href='https://twitter.com/strukt_io'>
						<Button size={'icon'} variant={'ghost'}>
							<Twitter className='w-4 h-4' />
						</Button>
					</a>
					{/* <a href='twitter.com'>
						<Button size={'icon'} variant={'ghost'}>
							<Facebook className='w-4 h-4' />
						</Button>
					</a> 
				</aside>
			</nav> */}
			<div className="w-full h-full flex-col-reverse md:flex-row flex  gap-2">
				<nav
					className={cn(
						"bg-background transition-all h-12 md:h-full w-full md:w-52 rounded-md p-3 group/nav",
						"flex flex-row md:flex-col justify-between duration-500 items-start ",
					)}
				>
					<div
						id="start"
						className="flex flex-row md:flex-col justify-center items-center gap-2 w-full"
					>
						<span className="w-full flex flex-row items-center">
							<text className="ml-2 small w-full opacity-70">Workspaces</text>
							<CreateWorkspace />
						</span>

						<Button
							onClick={() => {
								toast({
									title: " Under Construction",
									description:
										"Adding workspaces soon, give us a thumbs up if you're interested!",
									action: <AppreciateIt feature="workspaces" />,
								});
							}}
							className="menu-btn"
							variant="ghost"
						>
							Workspaces
						</Button>
					</div>
					<div
						id="end"
						className="flex flex-row md:flex-col justify-center items-center gap-2 w-full"
					>
						<Link href={"/settings"} className="w-full">
							<Button variant={"ghost"} className="group menu-btn">
								<Settings className="group-hover:rotate-180 transition-transform duration-500" />
								Settings
							</Button>
						</Link>
					</div>
				</nav>
				<div className="w-full h-full bg-background rounded-md overflow-clip">
					<ReactFlow
						nodes={nodes}
						edges={edges}
						onNodesChange={onNodesChange}
						onEdgesChange={onEdgesChange}
						onConnect={onConnect}
						// @ts-ignore
						nodeTypes={nodeTypes}
						defaultViewport={{ zoom: 0.2, x: 0, y: 0 }}
						fitView
					>
						<Background
							variant={BackgroundVariant.Dots}
							gap={60}
							size={1}
							className="opacity-30"
						/>
						<Panel position={"top-left"}>
							<Menubar>
								<MenubarMenu>
									<MenubarTrigger>Lens</MenubarTrigger>
									<MenubarContent>
										<LensPicker />
										<MenubarItem
											onClick={() => console.log("Adding new lens")}
											className="flex flex-row gap-2"
										>
											<PlusCircleIcon size={15} />
											Add lens
										</MenubarItem>
									</MenubarContent>
								</MenubarMenu>
								<MenubarMenu>
									<MenubarTrigger>Sort</MenubarTrigger>
									<MenubarContent>
										<MenubarItem
											onClick={() => sethtl(true)}
											className="flex flex-row gap-2"
										>
											High <ArrowRight size={11} />
											Low
										</MenubarItem>
										<MenubarItem
											onClick={() => sethtl(false)}
											className="flex flex-row gap-2"
										>
											Low <ArrowRight size={11} />
											High
										</MenubarItem>
									</MenubarContent>
								</MenubarMenu>
								<MenubarMenu>
									<MenubarTrigger>Orientation</MenubarTrigger>
									<MenubarContent>
										<MenubarItem onClick={() => setIsHorizontal(true)}>
											Horizontal
										</MenubarItem>
										<MenubarItem onClick={() => setIsHorizontal(false)}>
											Vertical
										</MenubarItem>
									</MenubarContent>
								</MenubarMenu>
							</Menubar>
						</Panel>
						<Panel position={"top-right"}>
							{nodes && nodes.length !== 0 && <Legend />}
						</Panel>
						{/* <Panel position={'bottom-left'}>
							<div className='flex flex-col gap-2'>
								<ModeToggle />
								<Button variant={'outline'} className='group ' size={'icon'}>
									<Cog className='w-7 h-7 group-hover:rotate-180 transition-transform duration-500' />
								</Button>
							</div>
						</Panel> */}
					</ReactFlow>
				</div>
				<ScrollArea
					className={cn(
						selected
							? "w-full h-[30vh] md:h-full md:w-[40vw]"
							: "w-full h-0 md:h-full md:w-0 !px-0",
						"rounded-md bg-muted  transition-size duration-700 overflow-auto",
					)}
				>
					<div className={cn("px-5 py-10 absolute w-full top-0")}>
						{selected && (
							<>
								<Button
									onClick={() => setSelected(undefined)}
									size={"icon"}
									variant={"ghost"}
									className="absolute top-3 right-3 z-20"
								>
									<XIcon size={16} className="text-foreground" />
								</Button>

								<SelectedNode node={selected} />
							</>
						)}
					</div>
				</ScrollArea>
			</div>
		</div>
	);
};
