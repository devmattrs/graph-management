"use client";

import { FirstNode, Loading, Tree } from "@components/index";
import {
	User,
	createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { api } from "@utils/api";
import { useEffect, useState } from "react";
import "reactflow/dist/style.css";

export default function Dashboard() {
	const { data: nodes, isLoading, status } = api.node.all.useQuery();
	const supabase = createClientComponentClient();
	const [user, setUser] = useState<User | null>(null);
	useEffect(() => {
		const getUser = async () => {
			const { data } = await supabase.auth.getUser();
			setUser(data.user);
		};
		getUser();
	}, [setUser, supabase.auth]);

	if (status === "loading")
		return (
			<Loading
				cx={"fixed h-screen w-screen"}
				size={{ width: 450, height: 400 }}
			/>
		);
	return (
		<div className={"relative overflow-clip w-full h-full grow"}>
			{!nodes ||
				(nodes?.length === 0 && (
					<div
						className={
							"absolute w-full h-full flex justify-center items-center"
						}
					>
						<FirstNode loading={isLoading} />
					</div>
				))}
			{nodes && nodes?.length !== 0 && (
				/* @ts-ignore */
				<Tree incoming={nodes} />
			)}
		</div>
	);
}
