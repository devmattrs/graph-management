import { useForm } from "react-hook-form";

import { api } from "@utils/api";
import { options } from "@utils/getOptions";
import { Node } from "@utils/tree";
import { CommentSection } from "./CommentSection";

interface SelectedNodeProps {
	node: Node;
}

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@ui/form";
import { Input } from "@ui/input";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Separator,
	Slider,
	Textarea,
} from "src/components";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	desc: z.string().nullish(),
	priority: z.number(),
	status: z.number(),
	progress: z.number(),
});

export const SelectedNode = ({ node }: SelectedNodeProps) => {
	const utils = api.useContext();

	const form = useForm<z.infer<typeof formSchema>>({
		//@ts-ignore
		resolver: zodResolver(formSchema),
		defaultValues: node,
	});

	const update = api.node.update.useMutation({
		onSuccess(input) {
			utils.node.all.invalidate();
		},
	});
	const onSubmit = async (data: any) => {
		const input = { ...node, ...data };
		const { data: updated } = await update.mutateAsync(input);
	};

	useEffect(() => {
		Object.keys(node).forEach((key) => {
			//@ts-ignore
			form.setValue(key, node[key]);
		});
	}, [node, form]);

	// const getOptions = (lens: string) => {
	// 	const lensOptions = lenses.get(lens) as Map<number, string>;
	// 	const opts: DropdownOption[] = Array.from(lensOptions?.entries()).map(([key, value]) => {
	// 		return {
	// 			value: key,
	// 			name: value,
	// 			additionalInfo: <span className={`inline-block h-2 w-2 flex-shrink-0 rounded-full  bg-${lens}-${key}`}></span>
	// 		}
	// 	})
	// 	return opts
	// }
	const getDateTime = (date: string) => {
		const d = new Date(date);
		return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
	};

	return (
		<div className="px-2">
			{node !== undefined && (
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="desc"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										{/* @ts-ignore */}
										<Textarea {...field} className="bg-background" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="progress"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Progress</FormLabel>
									<FormControl>
										<Slider
											className="bg-background"
											defaultValue={[field.value]}
											max={100}
											onValueChange={(e) => field.onChange(e[0])}
											step={10}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{["status", "priority"].map((lens) => (
								<FormField
									key={lens}
									control={form.control}
									name={
										lens as "name" | "desc" | "priority" | "status" | "progress"
									}
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												{field.name.substring(0, 1).toUpperCase() +
													field.name.substring(1, field.name.length)}
											</FormLabel>
											<Select
												onValueChange={(e) => {
													field.onChange(Number(e));
												}}
												value={field.value?.toString()}
											>
												<FormControl>
													<SelectTrigger className="bg-background">
														<SelectValue placeholder={`Select ${lens}`} />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{options(lens).map((option) => (
														<SelectItem
															key={option.val}
															value={option.val.toString()}
														>
															{option.name}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</FormItem>
									)}
								/>
							))}
						</div>

						<Button type="submit" className="w-full">
							{update.isLoading ? (
								<Loader2 className="animate-spin" />
							) : (
								"Save Changes"
							)}
						</Button>
					</form>
				</Form>
			)}
			<h4 className="mb-3 mt-12">Comments</h4>
			{node && <CommentSection node={node} />}
		</div>
	);
};
