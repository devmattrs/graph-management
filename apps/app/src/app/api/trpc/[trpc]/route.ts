import { appRouter, createTRPCContext } from "@strukt/api";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { cookies } from 'next/headers';
import { Database } from "../../../../../../../packages/supabase";

export const runtime = "nodejs";

/**
 * Configure basic CORS headers
 * You should extend this to match your needs
 */
function setCorsHeaders(res: Response) {
	res.headers.set("Access-Control-Allow-Origin", "*");
	res.headers.set("Access-Control-Request-Method", "*");
	res.headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
	res.headers.set("Access-Control-Allow-Headers", "*");
}

export function OPTIONS() {
	const response = new Response(null, {
		status: 204,
	});
	setCorsHeaders(response);
	return response;
}

async function handler(req: Request) {
	const supabase = createRouteHandlerClient<Database>({ cookies })
	const response = await fetchRequestHandler({
		endpoint: "/api/trpc",
		router: appRouter,
		req,
		createContext: () => createTRPCContext(supabase),
	});

	setCorsHeaders(response);
	return response;
}

export { handler as GET, handler as POST };
