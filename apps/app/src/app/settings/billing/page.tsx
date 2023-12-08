import Link from "next/link";
import { redirect } from "next/navigation";
import {
	Card,
	CardHeader,
	CardContent,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@ui/card";
import {
	getActiveProductsWithPrices,
	getSession,
	getSubscription,
	getUserDetails,
} from "../../supabase-server";
import ManageSubscriptionButton from "./manageSubscriptionButton";
import { Button } from "@ui/button";
import Pricing from "./pricing";

const Page = async () => {
	const [session, user, products, subscription] = await Promise.all([
		getSession(),
		getUserDetails(),
		getActiveProductsWithPrices(),
		getSubscription(),
	]);

	if (!session) {
		return redirect("/auth");
	}

	const subscriptionPrice =
		subscription &&
		new Intl.NumberFormat("en-US", {
			style: "currency",
			//@ts-ignore
			currency: subscription?.prices?.currency,
			minimumFractionDigits: 0,
			//@ts-ignore
		}).format((subscription?.prices?.unit_amount || 0) / 100);

	return (
		<>
			<Pricing
				//@ts-ignore
				user={user}
				session={session}
				products={products}
				subscription={subscription}
			/>
		</>
	);
};

export default Page;

const ManageSub = ({ session, subscription }: any) => (
	<Card id="billing">
		<CardHeader>
			<CardTitle>Subscription</CardTitle>
			<CardDescription>
				{subscription
					? //@ts-ignore
					`You are currently on the ${subscription?.prices?.products?.name} plan.`
					: "You are not currently subscribed to any plan."}
			</CardDescription>
		</CardHeader>
		<CardContent>
			{/*
				<div className="mt-8 mb-4 text-xl font-semibold">
					<Pricing
						session={session}
						user={session?.user}
						products={products}
						subscription={subscription}
					/>
				</div>
				*/}
		</CardContent>
		<CardFooter>
			<ManageSubscriptionButton session={session} />
		</CardFooter>
	</Card>
);
