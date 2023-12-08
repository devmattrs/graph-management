import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";

export const commentRouter = createTRPCRouter({
	all: publicProcedure.query(async ({ ctx }) => {
		try {
			//@ts-ignore
			return await ctx.supabase
				.from("comments")
				.select(`*`)
				.then((res) => res.data);
		} catch (e) {
			console.log(e);
		}
	}),
	getById: publicProcedure
		.input(z.number().nullish())
		.query(async ({ ctx, input }) => {
			//@ts-ignore
			return await ctx.supabase
				.from("comments")
				.select()
				//@ts-ignore
				.eq("id", input)
				.single()
				.then((res) => res.data);
		}),
	delete: publicProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
		return await ctx.supabase.from("comments").delete().eq("id", input);
	}),
	add: protectedProcedure
		.input(
			z.object({
				content: z.string().optional(),
				id: z.number(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			try {
				const res = await ctx.supabase
					.from("comments")
					.insert({
						content: input.content,
						node: input.id,
						created_by: ctx.session?.user.id,
					})
					.select()
					.single();
				return res;
			} catch (e) {
				console.log(e);
				return {};
			}
		}),
	update: protectedProcedure
		.input(
			z.object({
				id: z.number(),
				content: z.string(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			return await ctx.supabase
				.from("comments")
				.update({
					content: input.content,
				})
				.match({ id: input.id })
				.select();
		}),
});
