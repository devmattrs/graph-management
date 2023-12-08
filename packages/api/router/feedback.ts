import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const feedbackRouter = createTRPCRouter({
	add: protectedProcedure
		.input(z.string())
		.mutation(async ({ ctx, input }) => {
			try {

				let res = await ctx.supabase.from('feature_feedback').insert([{ feature: input, liked_by: ctx.session?.user.id }]).select().single()
				return res;
			} catch (e) {
				console.log(e)
				return {}
			}
		}),

});