'use client'

import Img from '@/assets/img/post-img-2.jpg'
import CommentForm from '@/components/CommentForm/CommentForm'
import CommentsSection from '@/components/CommentsSection/CommentsSection'
import Container from '@/components/Container/Container'
import LatestPosts from '@/components/LatestPosts/LatestPosts'
import TagsAndShare from '@/components/TagsAndShare/TagsAndShare'
import Image from 'next/image'

export default function BlogDetail() {
	return (
		<Container>
			<div className='mx-auto mb-[40px] mt-[96px]'>
				<Image
					src={Img}
					alt='Podcast Cover'
					className='w-[180px] h-[180px] mx-auto rounded-lg mb-6'
				/>
				<h1 className='text-3xl font-semibold text-center mb-2'>
					How to create your own podcast cover art?
				</h1>
				<p className='text-gray-500 text-sm text-center mb-[96px]'>
					Jan 8, 2021 | By VitaThemes
				</p>
				<p className='text-gray-700 leading-relaxed mb-[40px]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
					mollis augue. Cras suscipit sit amet est in aliquam. In vel blandit nunc.
					Donec at dolor in orci tristique bibendum.ligula, sit amet imperdiet purus.
					Vestibulum quis leo nibh.
				</p>
				<h2 className='flex justify-start text-xl font-semibold mb-2 text-start'>
					Makemeup Podcast Theme
				</h2>
				<p className='text-gray-700 leading-relaxed'>
					Vivamus et aliquet neque. Mauris feugiat blandit augue a vestibulum. Class
					aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
					himenaeos. Aliquam a luctus magna, a finibus massa.
				</p>
				<p className='text-gray-700 leading-relaxed mt-4'>
					Proin ultricies, arcu ac dignissim sollicitudin, nibh nibh fermentum eros,
					id consequat nisi odio vestibulum tortor. Cras non interdum ligula, sit
					amet imperdiet purus. Vestibulum quis leo nibh. Class aptent taciti
					sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
					Aliquam a luctus magna, a finibus massa.
				</p>
			</div>
			<TagsAndShare />
			<LatestPosts title='Related Posts' />
			<CommentForm />
			<CommentsSection />
		</Container>
	)
}
