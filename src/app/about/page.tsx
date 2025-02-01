import PostImg1 from '@/assets/img/team-img-1.jpg'
import PostImg2 from '@/assets/img/team-img-2.jpg'
import Container from '@/components/Container/Container'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const teamMembers = [
	{
		name: 'Nick Carleton',
		position: 'POSITION',
		image: PostImg2,
		description:
			'Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis.',
	},
	{
		name: 'Aida Cave',
		position: 'POSITION',
		image: PostImg1,
		description:
			'Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis.',
	},
]

export default function AboutPage() {
	return (
		<Container>
			<h1 className='text-[32px] mt-[96px] font-semibold mb-6 max-[550]:mt-[46px]'>
				About
			</h1>

			<section className='mb-6'>
				<h2 className='text-xl font-semibold mb-2'>What, When And How?</h2>
				<p className='text-gray-700'>
					Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
					sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
					pellentesque.
				</p>
			</section>

			<section>
				<h2 className='text-xl font-semibold mb-4'>Team members</h2>
				<div className='space-y-6'>
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className='bg-white overflow-hidden flex space-x-4 max-[550px]:flex-col max-[550px]:space-x-0 max-[550px]:space-y-4'
						>
							<Image
								src={member.image}
								alt={member.name}
								className='w-[300px] h-[300px] rounded-lg object-cover'
							/>
							<div>
								<span className='text-xs text-purple-600 font-semibold'>
									{member.position}
								</span>
								<h3 className='text-lg font-semibold mt-1'>{member.name}</h3>
								<p className='text-gray-600 text-sm mt-2'>{member.description}</p>
								<div className='flex space-x-3 mt-3 text-gray-600'>
									<FaLinkedin className='cursor-pointer hover:text-blue-700' />
									<FaGithub className='cursor-pointer hover:text-black' />
									<FaTwitter className='cursor-pointer hover:text-blue-500' />
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</Container>
	)
}
