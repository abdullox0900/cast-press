'use client'

import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Container from '../Container/Container'

export default function PodcastSummary() {
	const [showTranscript, setShowTranscript] = useState(false)

	return (
		<Container>
			<p className='text-[#555555] mb-[39px]'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
				mollis augue. Cras suscipit sit amet est in aliquam. In vel blandit nunc.
				Donec at dolor in orci tristique bibendum. Cras non interdum ligula, sit
				amet imperdiet purus. Vestibulum quis leo nibh.
			</p>
			<h2 className='text-xl font-semibold mb-3'>Makemeup Podcast Theme</h2>
			<p className='text-[#555555] mb-[48px]'>
				Vivamus et aliquet neque. Mauris feugiat blandit augue a vestibulum. Class
				aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
				himenaeos. Aliquam a luctus magna, a finibus massa. Proin ultricies, arcu ac
				dignissim sollicitudin, nibh nibh fermentum eros, id consequat nisi odio
				vestibulum tortor. Cras non interdum ligula, sit amet imperdiet purus.
				Vestibulum quis leo nibh.
			</p>
			<div className='border border-[#EAEAEE] p-4 bg-transparent mt-6'>
				<div className='flex justify-between items-center max-[415px]:flex-col max-[415px]:items-start'>
					<span className='font-semibold'>Listening time: 86 minutes</span>
					<button
						onClick={() => setShowTranscript(!showTranscript)}
						className='text-purple-600 font-semibold flex items-center space-x-1 hover:underline'
					>
						<span>View transcript</span>
						<FaArrowRight />
					</button>
				</div>
				{showTranscript && (
					<div className='mt-4 py-[10px] max-h-[300px] overflow-y-auto'>
						<p className='mb-[20px]'>
							Per Axbom
							<br />
							{"Hello, I'm Per Axbom."}
						</p>
						<p className='mb-[20px]'>
							ames Royal-Lawson
							<br />
							{"And I'm James Royal-Lawson."}
						</p>
						<p className='mb-[20px]'>
							Per Axbom
							<br />
							Vivamus et aliquet neque. Mauris feugiat blandit augue a vestibulum.
							Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
							inceptos himenaeos. Aliquam a luctus magna, a finibus massa. Proin
							ultricies, arcu ac dignissim sollicitudin, nibh nibh fermentum eros, id
							consequat nisi odio vestibulum tortor. Cras non interdum ligula, sit amet
							imperdiet purus. Vestibulum quis leo nibh.
						</p>
					</div>
				)}
			</div>
		</Container>
	)
}
