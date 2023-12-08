import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";

export const nodeRouter = createTRPCRouter({
	all: publicProcedure.query(async ({ ctx }) => {
		return await ctx.supabase
			.from("nodes")
			.select("*")
			.then((res) => res.data);
	}),
	getById: publicProcedure
		.input(z.number().nullish())
		.query(async ({ ctx, input }) => {
			//@ts-ignore
			return await ctx.supabase
				.from("nodes")
				.select()
				//@ts-ignore
				.eq("id", input)
				.single()
				.then((res) => res.data);
		}),
	link: protectedProcedure
		.input(
			z.object({
				updating: z.number(),
				newParent: z.number().nullish(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			return await ctx.supabase
				.from("nodes")
				.update({ parent: input.newParent })
				.eq("id", input.updating)
				.select();
		}),
	linkMany: protectedProcedure
		.input(
			z.object({
				newParent: z.number(),
				oldParent: z.number(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			return await ctx.supabase
				.from("nodes")
				.update({ parent: input.newParent })
				.eq("parent", input.oldParent)
				.select();
		}),
	delete: publicProcedure
		.input(z.number().nullish())
		.mutation(async ({ ctx, input }) => {
			//@ts-ignore
			return await ctx.supabase
				.from("nodes")
				.delete()
				//@ts-ignore
				.eq("id", input)
				.then((r) => r.data);
		}),
	manyToOne: protectedProcedure
		.input(
			z.object({
				one: z.number(),
				many: z.number(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const { data, error } = await ctx.supabase
				.from("nodes")
				.update({ parent: input.one })
				.eq("parent", input.many);
			return data;
		}),
	add: protectedProcedure
		.input(
			z.object({
				name: z.string(),
				parent: z.number().nullish(),
				first: z.boolean().nullish(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const res = await ctx.supabase
				.from("nodes")
				.insert({
					parent: input.parent,
					name: input.name,
					created_by: ctx.session?.user.id,
				})
				.select()
				.single();
			return res;
		}),
	update: protectedProcedure
		.input(
			z.object({
				id: z.number(),
				parent: z.number().nullish(),
				priority: z.number(),
				status: z.number(),
				progress: z.any().optional(),
				desc: z.string().nullable(),
				name: z.string(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			// create a new date object
			const currentDate = new Date();
			try {
				// convert the date to a string in the format YYYY-MM-DD HH:MI:SS
				const postgresDateTime = currentDate
					.toISOString()
					.replace("T", " ")
					.replace(/\.\d{3}Z$/, "");

				console.log(input);
				const res = await ctx.supabase
					.from("nodes")
					.update({
						parent: input.parent,
						priority: input.priority,
						status: input.status,
						progress: input.progress.toString(),
						desc: input.desc ? input.desc : undefined,
						name: input.name,
						last_updated: postgresDateTime,
					})
					.eq("id", input.id)
					.select();
				console.log(res);
				return res;
			} catch (e) {
				console.log(e);
				return {};
			}
		}),
});
