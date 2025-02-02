import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import Container from '../Container/Container'

const tags = ['Apple', 'Keynote', 'Product']
const socialLinks = [
	{ icon: <FaFacebook />, url: 'https://www.facebook.com/' },
	{ icon: <FaGithub />, url: 'https://www.github.com/' },
	{ icon: <FaTwitter />, url: 'https://www.x.com/' },
]

export default function TagsAndShare() {
	return (
		<Container>
			<div className='flex space-x-6 mb-[24px] mt-[48px]'>
				{tags.map((tag, index) => (
					<span key={index} className='text-[#222222] text-sm'>
						#{tag}
					</span>
				))}
			</div>
			<hr className='mb-[39px] bg-[#EAEAEE]' />
			<div className='flex items-center space-x-5 mb-[40px]'>
				<span className='text-[#222222] text-[16px]'>Share:</span>
				{socialLinks.map((link, index) => (
					<a
						key={index}
						href={link.url}
						className='text-gray-600 text-lg hover:text-black'
					>
						{link.icon}
					</a>
				))}
			</div>
			<hr className='mt-4 bg-[#EAEAEE] mb-[48px]' />
		</Container>
	)
}
