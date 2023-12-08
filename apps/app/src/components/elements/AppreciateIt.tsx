"use client";

import { Button } from "@ui/button";
import { toast } from "@ui/use-toast";
import { api } from "@utils/api";
import { ThumbsUp } from "lucide-react";

export const AppreciateIt = ({ feature }: { feature: string }) => {
	const addFeedback = api.feedback.add.useMutation({
		onError: (e) => {
			console.log(e);
		},
	});
	return (
		<Button
			variant={"ghost"}
			size={"icon"}
			onClick={async () => {
				await addFeedback.mutateAsync(feature);
			}}
		>
			<ThumbsUp
				onClick={() => {
					toast({
						title: "Thank you for your feedback!",
					});
				}}
				size={18}
			/>
		</Button>
	);
};
