import PostImg1 from '@/assets/img/post-img-1.jpg'
import PostImg2 from '@/assets/img/post-img-2.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import Container from '../Container/Container'

const posts = [
	{
		title: 'How to create your own podcast cover art?',
		date: 'Dec 4, 2019',
		image: PostImg1,
	},
	{
		title: 'How to create your own podcast cover art?',
		date: 'Dec 4, 2019',
		image: PostImg2,
	},
]

interface Text {
	title?: string
}

const LatestPosts: React.FC<Text> = ({ title }) => {
	return (
		<Container>
			<h2 className='text-2xl font-semibold mb-6'>{title}</h2>
			<div className='space-y-6'>
				{posts.map((post, index) => (
					<div
						key={index}
						className='flex gap-[40px] items-start max-[550px]:flex-col max-[550px]:gap-[16px]'
					>
						<Image
							src={post.image}
							alt={post.title}
							className='w-[180px] h-[180px] rounded-[4px] object-cover'
						/>
						<div>
							<h3 className='text-[21px] font-semibold  mb-[16px]'>{post.title}</h3>
							<p className='text-[#979797] text-[14px] mb-[40px] max-[550px]:mb-[16px]'>
								{post.date}
							</p>
							<a href='#' className='text-[#7247CA] font-semibold hover:underline'>
								Read More
							</a>
						</div>
					</div>
				))}
			</div>
			<div className='inline-block'>
				<Link
					href='/blog'
					className='flex items-center gap-[8px] mt-[48px] px-4 py-2 rounded text-[#7247CA] bg-[#F5F5F7] font-semibold hover:bg-purple-100'
				>
					View Blog <IoIosArrowForward />
				</Link>
			</div>
		</Container>
	)
}

export default LatestPosts
