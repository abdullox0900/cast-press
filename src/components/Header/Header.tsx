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
					<Image src={logo} alt='Cast Press' width={80} height={28} />

					{/* Desktop Navigation */}
					<nav className='hidden md:block'>
						<ul className='flex items-center gap-[39px]'>
							<li className='flex items-center gap-2'>
								<Link href='/' className='text-[16px] font-semibold text-[#222222]'>
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
									href='/about'
									className='text-[16px] font-semibold text-[#222222]'
								>
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
									href='/contact'
									className='text-[16px] font-semibold text-[#222222]'
								>
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
											href='/'
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
											href='/about'
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
											href='/contact'
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
