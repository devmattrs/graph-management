import { Textarea } from "@ui/textarea";
import { api } from "@utils/api";
import { Node } from "@utils/tree";
import { Loader2, Send } from "lucide-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@ui/button";
import { CommentList } from "./CommentList";

interface CommentSectionProps {
	node: Node;
}
export const CommentSection = ({ node }: CommentSectionProps) => {
	const utils = api.useContext();
	const ref = useRef<HTMLFormElement>(null);
	const addComment = api.comments.add.useMutation({
		onSuccess(input) {
			console.log(input);
			utils.comments.all.invalidate();
		},
	});
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const sendData = async (data: any) => {
		await addComment.mutateAsync({ content: data.comment, id: node.id });
		reset();
	};
	return (
		<>
			<form ref={ref} action="#" onSubmit={handleSubmit(sendData)}>
				<label htmlFor="comment" className="sr-only">
					Comment
				</label>
				<div className="flex flex-row gap-3 bg-background rounded-md p-1">
					<Textarea
						className="inline-block bg-background border-none shadow-none resize-none"
						rows={4}
						{...register("comment")}
						placeholder="Add comment..."
					/>
					<Button
						className="w-12 h-32 bg-background my-auto hover:bg-background"
						variant={"ghost"}
						type="submit"
					>
						{addComment.isLoading ? (
							<Loader2 className="animate-spin" />
						) : (
							<Send />
						)}
					</Button>
				</div>
			</form>
			<CommentList node={node} />
		</>
	);
};
