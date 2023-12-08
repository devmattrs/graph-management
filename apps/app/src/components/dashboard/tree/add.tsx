"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@ui/button";

export const AddButton = () => {
	const supabase = createClientComponentClient();

	const addNode = async () => {
		const { data: { user } } = await supabase.auth.getUser()
		if (user)
			try {

				const { data, error } = await supabase
					.from('nodes')
					.insert(
						{ name: 'Strukt', created_by: user.id },
					)
			} catch (e) {
				console.log(e)
			}
	}
	return (
		<Button onClick={addNode}>Add New</Button>
	)
}