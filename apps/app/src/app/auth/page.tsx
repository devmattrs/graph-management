"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card";

const Home = () => {
	const supabase = createClientComponentClient();

	return (
		<div className="flex justify-center items-center w-full h-full">
			<Card className="screen-center flex-col gap-9 w-96">
				<CardHeader>
					<CardTitle className="text-3xl text-center">Login</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-5">
					<Button
						className="w-full"
						onClick={() => {
							console.log(process.env.NEXT_PUBLIC_VERCEL_URL);
							supabase.auth.signInWithOAuth({
								provider: "google",
								options: {
									redirectTo: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
										}/auth/callback`,
								},
							});
						}}
					>
						Google
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};
export default Home;
