import { createTRPCRouter } from "../trpc";
import { commentRouter } from "./comment";
import { feedbackRouter } from "./feedback";
import { nodeRouter } from "./node";
import { subscriptionsRouter } from "./subscriptions";
import { workspaceRouter } from "./workspace";
// import { authRouter } from "./auth";

export const appRouter = createTRPCRouter({
	node: nodeRouter,
	workspace: workspaceRouter,
	comments: commentRouter,
	feedback: feedbackRouter,
	subscription: subscriptionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;