"use client";

import { Button } from "@ui/button";
import { postData } from "@utils/stripe/helpers";

import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface Props {
	session: Session;
}

export default function ManageSubscriptionButton({ session }: Props) {
	const router = useRouter();
	const redirectToCustomerPortal = async () => {
		try {
			const { url } = await postData({
				url: "/api/create-portal-link",
			});
			router.push(url);
		} catch (error) {
			if (error) return alert((error as Error).message);
		}
	};

	return (
		<div className="flex flex-col w-full items-start justify-between sm:items-start">
			<p className="w-full">Manage your subscription on Stripe.</p>
			<br />
			<Button disabled={!session} onClick={redirectToCustomerPortal}>
				Open customer portal
				<ArrowRight className="pl-4 h-9 w-9" />
			</Button>
		</div>
	);
}
