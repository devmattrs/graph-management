import { publicProcedure, protectedProcedure, createTRPCRouter } from "../trpc";
import { z } from "zod";

export const subscriptionsRouter = createTRPCRouter({
	getProducts: protectedProcedure.query(async ({ ctx }) => {
		return await ctx.supabase
			.from('products')
			.select('*, prices(*)')
			.eq('active', true)
			.eq('prices.active', true)
			.order('metadata->index')
			.order('unit_amount', { foreignTable: 'prices' }).then(res => res.data);
	}),
});