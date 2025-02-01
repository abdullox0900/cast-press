import Image from 'next/image'

import PostImg1 from '@/assets/img/post-img-1.jpg'
import PostImg2 from '@/assets/img/post-img-2.jpg'
import Container from '@/components/Container/Container'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

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
	{
		title: 'How to create your own podcast cover art?',
		date: 'Dec 4, 2019',
		image: PostImg1,
	},
]

export default function BlogPage() {
	return (
		<Container>
			<h2 className='text-2xl font-semibold mb-[41px] mt-[96px]'>Blog</h2>
			<div className='space-y-6 mb-[64px]'>
				{posts.map((post, index) => (
					<Link
						key={index}
						href={'blog/' + index}
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
					</Link>
				))}
			</div>
			<div className='flex space-x-2 mt-6'>
				{[1, 2, 3, '...'].map((page, index) => (
					<button
						key={index}
						className='flex items-center justify-center px-3 py-1 text-[12px] bg-[#F5F5F7] rounded text-[#555555] hover:bg-gray-200'
					>
						{page}
					</button>
				))}
				<button className='px-3 py-1 rounded text-gray-600 hover:bg-gray-200'>
					<IoIosArrowForward />
				</button>
			</div>
		</Container>
	)
}
