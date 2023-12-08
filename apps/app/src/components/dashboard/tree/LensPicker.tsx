import { MenubarItem } from "@ui/menubar";
import useTreeStore from "@utils/tree";

export const LensPicker = () => {
	const { setPopover, lens, setLens } = useTreeStore((state) => ({
		setPopover: state.setNodePopover,
		lens: state.lens,
		setLens: state.setLens,
	}));
	return (
		<>
			{["priority", "status", "progress"].map((opt) => (
				<MenubarItem
					key={opt}
					onClick={() => setLens(opt)}
					disabled={lens == opt}
				>
					{opt.substring(0, 1).toUpperCase() + opt.substring(1, opt.length)}
				</MenubarItem>
			))}
		</>
	);
};
