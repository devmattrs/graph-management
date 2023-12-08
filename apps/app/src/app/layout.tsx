import "@public/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@ui/toaster";
import { TRPCReactProvider, ThemeProvider } from "./providers";
import { TooltipProvider } from "@ui/tooltip";

const fontSans = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Strukt",
	description: "Work together, work better",
	openGraph: {
		title: "Strukt",
		description: "Work together, work better",
		url: "https://app.strukt.io",
		siteName: "Strukt",
	},
	twitter: {
		card: "summary_large_image",
		site: "@struktio",
		creator: "@matttschroder",
	},
};

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={
					"w-screen h-screen " + ["font-sans", fontSans.variable].join(" ")
				}
			>
				<TRPCReactProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						enableColorScheme
						disableTransitionOnChange
					>
						<TooltipProvider>
							<>
								{props.children}
								<Toaster />
							</>
						</TooltipProvider>
					</ThemeProvider>
				</TRPCReactProvider>
			</body>
		</html>
	);
}
