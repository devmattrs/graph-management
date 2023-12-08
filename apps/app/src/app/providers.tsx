"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { api } from "@utils/api";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";
import { useState } from "react";
import superjson from "superjson";

const getBaseUrl = () => {
	if (typeof window !== "undefined") return ""; // browser should use relative url
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

	return `http://localhost:3000`; // dev SSR should use localhost
};

export function TRPCReactProvider(props: { children: React.ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 5 * 1000,
						retry: false,
						refetchOnWindowFocus: false
					},

				},
			}),
	);

	const [trpcClient] = useState(() =>
		api.createClient({
			transformer: superjson,
			links: [
				loggerLink({
					enabled: (opts) =>
						process.env.NODE_ENV === "development" ||
						(opts.direction === "down" && opts.result instanceof Error),
				}),
				httpBatchLink({
					url: `${getBaseUrl()}/api/trpc`,
				}),
			],
		}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryStreamedHydration>
				<api.Provider client={trpcClient} queryClient={queryClient}>
					{props.children}
				</api.Provider>
			</ReactQueryStreamedHydration>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
