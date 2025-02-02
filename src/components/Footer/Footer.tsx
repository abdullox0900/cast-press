import Link from 'next/link'
import { FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Container from '../Container/Container'

const Footer = () => {
	return (
		<Container>
			<footer className='border-t border-[#EAEAEE] mt-[65px] mb-[40px] max-[425px]:mt-[50px]'>
				<div className='flex justify-between mt-[64px] max-[550px]:flex-col max-[550px]:gap-[36px]'>
					<ul className='flex flex-col gap-[12px]'>
						<li>
							<Link href='/' className='text-[14px] text-[#555555] font-[600]'>
								Episodes
							</Link>
						</li>
						<li>
							<Link href='/blog' className='text-[14px] text-[#555555] font-[600]'>
								Blog
							</Link>
						</li>
						<li>
							<Link href='/contact' className='text-[14px] text-[#555555] font-[600]'>
								Contact
							</Link>
						</li>
						<li>
							<Link href='/donate' className='text-[14px] text-[#555555] font-[600]'>
								Donate
							</Link>
						</li>
					</ul>
					<div>
						<div className='text-[#222222] text-[16px] font-[600] uppercase mb-[8px]'>
							Newsletter
						</div>
						<div className='text-[12px] text-[#555555] mb-[14px]'>
							Sign up now; get closer to our action.
						</div>
						<div className='relative w-[315px] max-[425px]:w-[280px]'>
							<input
								className='w-full p-[14px] py-[10px] bg-[#F5F5F7] rounded-[5px] outline-none'
								type='text'
								placeholder='Email address...'
							/>
							<button className='absolute top-[3px] right-[3px] flex justify-center items-center w-[36px] h-[36px] text-white text-[24px] rounded-[4px] bg-[#7247CA]'>
								<IoIosArrowRoundForward />
							</button>
						</div>
					</div>
				</div>
				<div className='mt-[90px] text-center text-[#222222] font-medium max-[425px]:mt-[60px]'>
					<p className='max-[425px]:text-[14px]'>
						PodcastTheme by VitaThemes |{' '}
						<Link href={'/privacy-policy'}>Privacy policy</Link>{' '}
					</p>
					<ul className='flex justify-center gap-[23px] mt-[23px]'>
						<li>
							<a href='https://www.facebook.com/' target='_blank'>
								<FaFacebookF />
							</a>
						</li>
						<li>
							<a href='https://www.github.com/' target='_blank'>
								<FaGithub />
							</a>
						</li>
						<li>
							<a href='https://www.x.com/' target='_blank'>
								<FaTwitter />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</Container>
	)
}

export default Footer
