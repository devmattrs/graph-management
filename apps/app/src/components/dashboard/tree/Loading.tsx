import loading from "public/animations/white-spinner.json";
import Lottie from "lottie-react";

interface IPageLoading {
	cx?: string;
	size?: {
		width: number;
		height: number;
	};
}
export const Loading = ({
	size = { width: 50, height: 50 },
	cx = "w-full h-full",
}: IPageLoading) => {
	return (
		<div className={cx + " flex items-center justify-center"}>
			<Lottie
				animationData={loading}
				loop={true}
				style={{ height: `${size.height}px`, width: `${size.width}px` }}
			/>
		</div>
	);
};
