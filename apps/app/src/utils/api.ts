import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@strukt/api/router";

export const api = createTRPCReact<AppRouter>();
export type { RouterInputs, RouterOutputs } from '@strukt/api' 
