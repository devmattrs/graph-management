import { publicProcedure, protectedProcedure, createTRPCRouter } from "../trpc";
import { z } from "zod";

export const workspaceRouter = createTRPCRouter({
	add: protectedProcedure.mutation(async ({ ctx, input }) => {
		const res = await ctx.supabase
			.from("workspaces")
			.insert({ owner: ctx.session?.user.id })
			.select()
			.single();
		return res;
	}),
});
