'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// Import images
import ArrowIcon from '@/assets/icons/arrow-icon-b.svg'
import CloseIcon from '@/assets/icons/close-icon.svg'
import MenuIcon from '@/assets/icons/menu-burger-icon.svg'
import SearchIcon from '@/assets/icons/search-icon.svg'
import logo from '@/assets/svg/logo.svg'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className='py-[39px] border-b border-[#EAEAEE]'>
			<div className='mx-auto px-4 max-w-[1140px]'>
				<div className='flex justify-between items-center'>
					<Link href={'/'}>
						<Image src={logo} alt='Cast Press' width={80} height={28} />
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden md:block'>
						<ul className='flex items-center gap-[39px]'>
							<li className='flex items-center gap-2'>
								<Link
									href='/episodes'
									className='text-[16px] font-semibold text-[#222222]'
								>
									Episodes
								</Link>
								<Image
									className='mt-[5px]'
									src={ArrowIcon}
									alt='icon'
									width={10}
									height={6}
								/>
							</li>
							<li>
								<Link href='/blog' className='text-[16px] font-semibold text-[#222222]'>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-[16px] font-semibold text-[#222222]'
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href='/donate'
									className='flex items-center gap-[5px] text-[16px] font-semibold text-[#7247CA]'
								>
									<svg
										width='13'
										height='12'
										viewBox='0 0 13 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M6.48649 1.3427C7.23803 0.519074 8.29096 0.0347259 9.40541 0C11.3757 0 12.973 1.59725 12.973 3.56757C12.973 5.90026 10.3798 8.45677 8.8246 9.99004C8.68458 10.1281 8.55298 10.2578 8.43243 10.3784L6.95351 11.8573C6.86237 11.9486 6.73871 11.9999 6.60973 12H6.36324C6.23426 11.9999 6.11061 11.9486 6.01946 11.8573L4.54054 10.3784C4.42 10.2578 4.28839 10.1281 4.14837 9.99004C2.59314 8.45677 0 5.90026 0 3.56757C0 1.59725 1.59725 0 3.56757 0C4.68201 0.0347259 5.73494 0.519074 6.48649 1.3427ZM6.48655 10.4886L7.91358 9.08099C9.23034 7.78369 11.6757 5.35774 11.6757 3.56747C11.6758 2.96197 11.4339 2.38155 11.0039 1.95523C10.574 1.52891 9.99149 1.29201 9.38601 1.2972C8.37756 1.39082 7.46726 1.94035 6.91466 2.78909C6.85276 2.86997 6.75705 2.91783 6.6552 2.91882H6.36331C6.21176 2.91841 6.06859 2.84922 5.97412 2.73072C5.43029 1.91325 4.54543 1.38615 3.56763 1.2972C2.3138 1.2972 1.29736 2.31364 1.29736 3.56747C1.29736 5.35774 3.74277 7.78369 5.05953 9.08099L6.48655 10.4886Z'
											fill='#7247CA'
										/>
									</svg>
									Donate
								</Link>
							</li>
							<li>
								<Image src={SearchIcon} alt='search' width={16} height={16} />
							</li>
						</ul>
					</nav>

					{/* Mobile Menu Button */}
					<button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<Image
							src={isMenuOpen ? CloseIcon : MenuIcon}
							alt='menu'
							width={24}
							height={24}
						/>
					</button>

					{/* Mobile Navigation */}
					{isMenuOpen && (
						<div className='fixed inset-0 top-[97px] bg-white z-50 md:hidden'>
							<nav className='p-4'>
								<ul className='flex flex-col items-center gap-6 pb-[50px] border-b border-[#EAEAEE]'>
									<li className='flex items-center gap-2'>
										<Link
											href='/episodes'
											className='text-[16px] font-semibold text-[#222222]'
											onClick={() => setIsMenuOpen(false)}
										>
											Episodes
										</Link>
										<Image
											className='mt-[5px]'
											src={ArrowIcon}
											alt='icon'
											width={10}
											height={6}
										/>
									</li>
									<li>
										<Link
											href='/blog'
											className='text-[16px] font-semibold text-[#222222]'
											onClick={() => setIsMenuOpen(false)}
										>
											Blog
										</Link>
									</li>
									<li>
										<Link
											href='/contact'
											className='text-[16px] font-semibold text-[#222222]'
											onClick={() => setIsMenuOpen(false)}
										>
											Contact
										</Link>
									</li>
									<li>
										<Link
											href='/donate'
											className='text-[16px] font-semibold text-[#222222]'
											onClick={() => setIsMenuOpen(false)}
										>
											Donate
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
