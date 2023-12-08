"use client";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Textarea } from "@ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Label } from "@ui/label";

import {
	Card,
	CardHeader,
	CardContent,
	CardTitle,
	CardDescription,
} from "@ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const profileSchema = z.object({
	username: z.string().min(2).max(50),
	about: z.string().min(2).max(50),
});

const ProfileSection = () => {
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
		<Card id="profile">
			<CardHeader>
				<CardTitle>Profile</CardTitle>
				<CardDescription>
					This information will be displayed publicly so be careful what you
					share.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input {...field} type="text" autoComplete="username" />
									</FormControl>
									<FormDescription>
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="about"
							render={({ field }) => (
								<FormItem>
									<FormLabel>About</FormLabel>
									<FormControl>
										<Textarea {...field} />
									</FormControl>
									<FormDescription>
										Brief description of your profile
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="col-span-3">
							<Label>Photo</Label>
							<div className="mt-2 flex items-center">
								<Avatar>
									<AvatarImage src="https://avatars.githubusercontent.com/u/35618549?v=4" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>

								<Button className="ml-5" type="button">
									Change
								</Button>
							</div>
						</div>
						<Button className="w-full mx-auto" type="submit">
							Save
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};
export default ProfileSection;
