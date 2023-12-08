"use client";
import { Button } from "@ui/button";
import { Label } from "@ui/label";

import {
	Card,
	CardHeader,
	CardContent,
	CardTitle,
	CardDescription,
} from "@ui/card";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@ui/checkbox";
import { ModeToggle } from "./theme-toggle";

const profileSchema = z.object({
	username: z.string().min(2).max(50),
	about: z.string().min(2).max(50),
});

const Page = () => {
	const form = useForm<z.infer<typeof profileSchema>>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			username: "",
			about: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof profileSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Appearance</CardTitle>
					<CardDescription>
						Provide basic information about the job. Be specific with the job
						title.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ModeToggle />
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Notifications</CardTitle>
					<CardDescription>
						Provide basic information about the job. Be specific with the job
						title.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form action="#" method="POST">
						<fieldset>
							<legend className="text-sm font-semibold leading-6 ">
								By Email
							</legend>
							<div className="mt-4 space-y-1">
								<div className="flex items-start">
									<div className="flex h-6 items-center">
										<Checkbox id="comments" name="comments" />
									</div>
									<div className="ml-3 text-sm mb-5 leading-6">
										<Label htmlFor="comments">Comments</Label>
										<p className="!mt-0">
											Get notified when someones posts a comment on a posting.
										</p>
									</div>
								</div>
								<div>
									<div className="flex items-start">
										<div className="flex h-6 items-center">
											<Checkbox id="candidates" name="candidates" />
										</div>
										<div className="ml-3 text-sm leading-6 mb-5">
											<Label htmlFor="candidates" className="font-medium ">
												Candidates
											</Label>
											<p className="!mt-0">
												Get notified when a candidate applies for a job.
											</p>
										</div>
									</div>
								</div>
								<div>
									<div className="flex items-start">
										<div className="flex h-6 items-center">
											<Checkbox id="offers" name="offers" />
										</div>
										<div className="ml-3 text-sm leading-6 mb-5">
											<Label htmlFor="offers" className="font-medium ">
												Offers
											</Label>
											<p className="!mt-0">
												Get notified when a candidate applies for a job. Get
												notified when a candidate accepts or rejects an offer.
											</p>
										</div>
									</div>
								</div>
							</div>
						</fieldset>
						<Button className="w-full mx-auto" type="submit">
							Save
						</Button>
					</form>
				</CardContent>
			</Card>
		</>
	);
};
export default Page;
