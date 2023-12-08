import Link from "next/link";
import * as Icon from "lucide-react";

export const GetStarted = () => {
	return (
		<div className={"flex justify-center items-center w-full"}>
			<Link href={"/auth/signin"}>
				<div
					className={
						"py-3 px-5 bg-emerald-400 text-slate-900 font-bold h-fit text-2xl rounded-full shadow-md flex items-center gap-3 transition-colors duration-500 hover:bg-emerald-300 cursor-pointer w-64 text-center justify-evenly"
					}
				>
					<h2>Get Started</h2>
					<Icon.ArrowRight className={"w-7 h-7 text-slate-800"} />
				</div>
			</Link>
		</div>
	);
};
