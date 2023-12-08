"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@ui/card";
import { Label } from "@ui/label";
import { Input } from "@ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@ui/select";

const personal = z.object({
	first: z.string().min(2).max(50),
	last: z.string().min(2).max(50),
	email: z.string().email(),
	country: z.string(),
	addr: z.string(),
	state: z.string().max(50),
	zip: z.number(),
});

const PersonalSection = () => {
	const form = useForm<z.infer<typeof personal>>({
		resolver: zodResolver(personal),
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof personal>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<Card>
			<CardHeader>
				<CardTitle>Personal Information</CardTitle>
				<CardDescription>
					Use a permanent address where you can recieve mail.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form action="#" method="POST">
					<div className="space-y-6 py-6">
						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 sm:col-span-3">
								<Label htmlFor="first-name">First name</Label>
								<Input
									type="text"
									name="first-name"
									id="first-name"
									autoComplete="given-name"
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<Label htmlFor="last-name">Last name</Label>
								<Input
									type="text"
									name="last-name"
									id="last-name"
									autoComplete="family-name"
								/>
							</div>

							<div className="col-span-6 sm:col-span-4">
								<Label htmlFor="email-address">Email address</Label>
								<Input
									type="text"
									name="email-address"
									id="email-address"
									autoComplete="email"
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<Label htmlFor="country">Country</Label>
								<Select>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Select a country" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Country</SelectLabel>
											<SelectItem value="United States">
												United States
											</SelectItem>
											<SelectItem value="Brazil">Brazil</SelectItem>
											<SelectItem value="Guam">Guam</SelectItem>
											<SelectItem value="Belgium">Belgium</SelectItem>
											<SelectItem value="Mexico">Mexico</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>

							<div className="col-span-6">
								<Label htmlFor="street-address">Street address</Label>
								<Input
									type="text"
									name="street-address"
									id="street-address"
									autoComplete="street-address"
								/>
							</div>

							<div className="col-span-6 sm:col-span-6 lg:col-span-2">
								<Label htmlFor="city">City</Label>
								<Input type="text" name="city" id="city" />
							</div>

							<div className="col-span-6 sm:col-span-3 lg:col-span-2">
								<Label htmlFor="region">State / Province</Label>
								<Input
									type="text"
									name="region"
									id="region"
									autoComplete="address-level1"
								/>
							</div>

							<div className="col-span-6 sm:col-span-3 lg:col-span-2">
								<Label htmlFor="postal-code">ZIP / Postal code</Label>
								<Input
									type="text"
									name="postal-code"
									id="postal-code"
									autoComplete="postal-code"
								/>
							</div>
						</div>
					</div>
					<Button className="w-full mx-auto" type="submit">
						Save
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};
export default PersonalSection;
