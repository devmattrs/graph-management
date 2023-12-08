import { redirect } from "next/navigation";
import Dashboard from "./dashboard";
import { createServerComponentClient } from "./supabase-server";

export const dynamic = "force-dynamic";

export default async function Page() {
	const supabase = createServerComponentClient();

	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (!session) {
		// this is a protected route - only users who are signed in can view this route
		redirect("/auth");
	}

	return <Dashboard />;
}
