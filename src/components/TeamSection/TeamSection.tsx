import TeamImg1 from '@/assets/img/team-img-1.jpg'
import TeamImg2 from '@/assets/img/team-img-2.jpg'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Container from '../Container/Container'

const teamMembers = [
	{
		name: 'Aida Cave',
		position: 'POSITION',
		image: TeamImg1,
	},
	{
		name: 'Nick Carleton',
		position: 'POSITION',
		image: TeamImg2,
	},
]

export default function TeamSection() {
	return (
		<Container>
			<section className='my-[64px]'>
				<h2 className='text-[26px] font-semibold mb-6'>Team</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{teamMembers.map((member, index) => (
						<div key={index} className='bg-[#F5F5F7] rounded-lg overflow-hidden'>
							<Image
								src={member.image}
								alt={member.name}
								className='w-full h-[300px] object-cover'
							/>
							<div className='p-4'>
								<span className='text-xs text-purple-600 font-semibold'>
									{member.position}
								</span>
								<h3 className='text-lg font-semibold mt-1 mb-[39px]'>{member.name}</h3>
								<div className='flex space-x-3 mt-3 text-gray-600'>
									<a href='https://www.linkedin.com/' target='_blank'>
										<FaLinkedin className='cursor-pointer hover:text-blue-700' />
									</a>
									<a href='https://www.github.com/' target='_blank'>
										<FaGithub className='cursor-pointer hover:text-black' />
									</a>
									<a href='https://www.x.com/' target='_blank'>
										<FaTwitter className='cursor-pointer hover:text-blue-500' />
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</Container>
	)
}
