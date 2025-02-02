import Link from 'next/link'
import { FaPlay } from 'react-icons/fa'
import Container from '../Container/Container'

const podcasts = [
	{
		id: 23,
		title: 'How to rapidly test any experience!',
		date: 'Jan 18, 2021',
		category: 'Business',
		isNew: true,
		link: '/episode',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...',
	},
	{
		id: 22,
		title: 'Everything you need to know about mind mapping creation',
		date: 'Jan 18, 2021',
		category: 'Business',
		isNew: false,
		link: '/episode/ne',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
	},
	{
		id: 21,
		title: 'Makemeup Podcast Theme; launch it now !',
		date: 'Jan 18, 2021',
		category: 'Business',
		isNew: false,
		link: '/episode/ww',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
	},
]

export default function PodcastList() {
	return (
		<Container>
			{podcasts.map(podcast => (
				<Link
					href={podcast.link}
					key={podcast.id}
					className='inline-block mb-6 pb-6'
				>
					<div className='flex items-center text-sm text-gray-500 mb-2'>
						{podcast.isNew && (
							<span className='bg-[#F5F5F7] text-[#7247CA] px-[10px] py-[4px] text-[10px] rounded mr-2'>
								NEW
							</span>
						)}
						<span className='font-medium text-[#979797]'>{podcast.category}</span>
						<span className='mx-2 text-[#979797]'>|</span>
						<span className='text-[#979797]'>{podcast.date}</span>
					</div>
					<h2 className='text-lg font-semibold mb-2'>
						{podcast.id} - {podcast.title}
					</h2>
					<p className='text-gray-600 mb-4'>{podcast.description}</p>
					<button className='flex items-center space-x-2 text-purple-600 font-semibold hover:underline'>
						<span className='flex items-center justify-center bg-[#7247CA] text-white w-[24px] h-[24px] text-[9px] rounded-full'>
							<FaPlay />
						</span>{' '}
						<span className='text-[12px] font-semibold'>LISTEN NOW</span>
					</button>
				</Link>
			))}
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
					&gt;
				</button>
			</div>
		</Container>
	)
}
