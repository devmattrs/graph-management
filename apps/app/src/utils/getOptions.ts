import { lenses, priority, status } from "@utils/tree";

export const getStatuses = () => {
	return Object.entries(status).map((pair) => {
		const name = pair[0][0]?.toUpperCase() + pair[0].substring(1);
		const val = pair[1];
		return {
			name: name,
			value: val
		}
	})
};

export const getPriorities = () => {
	return Object.entries(priority).map((pair) => {
		const name = pair[0][0]?.toUpperCase() + pair[0].substring(1);
		const val = pair[1];
		return {
			name: name,
			value: val
		}
	})
};

export const options = (lens: string) => {

	let items: { name: string, val: number }[] = []
	for (const [num, str] of lenses.get(lens)?.entries() ?? []) {
		items.push({
			name: str,
			val: num
		})
	}
	return items
}