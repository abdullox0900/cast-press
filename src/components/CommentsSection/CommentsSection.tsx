import Image from 'next/image'

import Img2 from '@/assets/img/team-img-1.jpg'
import Img1 from '@/assets/img/team-img-2.jpg'
import { FaReply } from 'react-icons/fa'
import Container from '../Container/Container'

const comments = [
	{
		id: 1,
		name: 'Mark Newman',
		date: 'Oct 24, 2020',
		avatar: Img1,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat.',
		replies: [
			{
				id: 2,
				name: 'Scarlet Witch',
				date: 'Oct 24, 2020',
				avatar: Img2,
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat.',
			},
		],
	},
	{
		id: 3,
		name: 'Mark Newman',
		date: 'Oct 24, 2020',
		avatar: Img1,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat.',
		replies: [],
	},
]

export default function CommentsSection() {
	return (
		<Container>
			<div className='border-t border-[#EAEAEE] mt-[50px] pt-[68px]'>
				<h2 className='text-[16px] mb-[34px]'>Comments</h2>
				<div className='space-y-6'>
					{comments.map(comment => (
						<div key={comment.id} className=' pb-4 border-[#EAEAEE]'>
							<div className='flex space-x-4 items-start'>
								<Image
									src={comment.avatar}
									alt={comment.name}
									className='w-[50px] h-[50px] rounded-[4px] object-cover'
								/>
								<div className='flex flex-col'>
									<div className='flex items-center gap-[20px]'>
										<p className='text-[#555555]'>{comment.name}</p>
										<p className='text-gray-500 text-sm'>{comment.date}</p>
									</div>
									<p className='text-gray-700 mt-3 leading-relaxed'>{comment.text}</p>
									<button className='flex items-center text-[#979797] mt-3 hover:text-gray-700'>
										<FaReply className='mr-2 text-sm' /> Reply
									</button>
								</div>
							</div>

							{comment.replies.length > 0 && (
								<div className='ml-14 mt-4 pl-4'>
									{comment.replies.map(reply => (
										<div key={reply.id} className='mb-4'>
											<div className='flex space-x-4 items-start'>
												<Image
													src={reply.avatar}
													alt={reply.name}
													className='w-[50px] h-[50px] rounded-[4px] object-cover'
												/>
												<div className='flex flex-col'>
													<p className='font-semibold text-gray-800'>{reply.name}</p>
													<p className='text-gray-500 text-sm'>{reply.date}</p>
													<p className='text-gray-700 mt-3 leading-relaxed'>{reply.text}</p>
													<button className='flex items-center text-[#979797] mt-3 hover:text-gray-700'>
														<FaReply className='mr-2 text-sm' /> Reply
													</button>
												</div>
											</div>
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}
