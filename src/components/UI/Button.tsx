import { ReactNode } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface ButtonProps {
	children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
	return (
		<button className='flex items-center gap-[8px] px-[16px] py-[8px] text-[14px] text-[#F5F5F7] bg-[#7247CA] rounded-[4px]'>
			{children} <IoIosArrowForward />
		</button>
	)
}

export default Button
