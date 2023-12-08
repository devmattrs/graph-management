import { Dialog, DialogTrigger, Button } from "src/components";
import { Plus } from "lucide-react";

export const CreateWorkspace = () => {
	const addWorkspace = () => console.log("Adding");
	return (
		<Dialog>
			<DialogTrigger>
				<Button
					variant="ghost"
					onClick={addWorkspace}
					className="w-6 h-6 !p-1 rounded-sm"
					size="icon"
				>
					<Plus className="text-base group-hover/nav:block hidden w-4 h-4" />
				</Button>
			</DialogTrigger>
		</Dialog>
	);
};
