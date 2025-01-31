import Link from 'next/link'
import { ReactNode } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface ButtonProps {
	href: string
	children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, href }) => {
	return (
		<Link
			href={href}
			className='flex items-center gap-[8px] px-[16px] py-[8px] text-[14px] text-[#F5F5F7] bg-[#7247CA] rounded-[4px]'
		>
			{children} <IoIosArrowForward />
		</Link>
	)
}

export default Button
