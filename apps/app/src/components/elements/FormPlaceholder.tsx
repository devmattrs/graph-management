// import EditIcon from "@components";

interface IFormPlaceholder {
	onClick?: (e: React.MouseEvent) => void;
	value?: any;
	cx?: string;
}
const defaultClass = ' group text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-1 cursor-pointer justify-between nowrap flex-row flex items-center pr-3'

export const FormPlaceholder = ({ cx, onClick, value }: IFormPlaceholder) => {
	return (
		<div className={cx + defaultClass} onClick={onClick}>
			<p className='mr-5'>{value}</p>
			{/* <EditIcon className="group-hover:block hidden shrink" /> */}
		</div>

	)
}