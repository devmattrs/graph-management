import { Button } from "@ui/button";
import { cn } from "@utils/shadcn";
import { CreditCard, Bell, UserCircle } from "lucide-react";
import * as Icon from "lucide-react";
import Link from "next/link";

const navigation = [
	{
		name: "Back",
		href: "/",
		icon: Icon.ArrowLeftCircle,
	},
	{
		name: "Profile",
		href: "/settings",
		icon: UserCircle,
	},
	{
		name: "Subscription",
		href: "/settings/billing",
		icon: CreditCard,
	},
	{
		name: "Preferences",
		href: "/settings/preferences",
		icon: Icon.Edit,
	},
];

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<div className="lg:px-32 w-full">
			<div className="mx-auto w-full">
				<div className="w-full relative">
					<div className="w-full md:w-5/6 mx-auto">
						<div className="flex justify-center flex-col-reverse lg:flex-row relative rounded-lg">
							<aside
								className={cn(
									"py-4 lg:border-none bg-background z-10 border-t-foreground border-t-2 px-2 sm:px-6 sticky bottom-0 h-fit",
									"lg:top-0 lg:py-14 lg:px-0",
								)}
							>
								<nav className="flex lg:flex-col flex-row flex-wrap gap-3 justify-center px-1">
									{navigation.map((item) => (
										<Link
											className="lg:w-full w-fit h-fit"
											key={item.name}
											href={item.href}
										>
											<Button
												className="w-full justify-center flex flex-row h-full py-2 items-center"
												variant="ghost"
												key={item.name}
											>
												<item.icon
													className={cn(
														"group-hover:text-accent-foreground",
														"w-min lg:mr-5 text-foreground",
													)}
													aria-hidden="true"
												/>
												<span className="hidden w-full lg:block truncate !mt-0 text-left">
													{item.name}
												</span>
											</Button>
										</Link>
									))}
								</nav>
							</aside>
							<div className="scroll-m-9 flex flex-col py-10 gap-6 px-5  w-full lg:max-w-4xl">
								{props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
