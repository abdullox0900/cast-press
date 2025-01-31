'use client'

import ImgOne from '@/assets/img/img-1.jpg'
import Image from 'next/image'
import { useRef, useState } from 'react'
import {
	FaApple,
	FaPause,
	FaPlay,
	FaSoundcloud,
	FaSpotify,
} from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io'
import Container from '../Container/Container'

export default function AudioPlayer() {
	const [isPlaying, setIsPlaying] = useState(false)
	const audioRef = useRef<HTMLAudioElement>(null)

	const togglePlay = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause()
			} else {
				audioRef.current.play()
			}
			setIsPlaying(!isPlaying)
		}
	}

	return (
		<Container>
			<div className='flex flex-col items-center justify-center py-[96px]'>
				<Image
					src={ImgOne}
					alt='Podcast Cover'
					className='w-[180px] h-[180px] rounded-[4px] mb-[40px]'
				/>
				<h2 className='text-[26px] font-semibold text-center mb-[40px]'>
					How to rapidly test any experience!
				</h2>
				<audio ref={audioRef} src='your-audio-file.mp3' />
				<div className='flex items-center space-x-4 mb-4'>
					<button onClick={togglePlay} className='rounded-full transition'>
						{isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
					</button>
					<span className='flex items-center gap-[10px] text-[#555555]'>
						00:00{' '}
						<input
							className='w-[500px] max-[768px]:w-[280px] max-[500px]:w-[200px] max-[368px]:w-[100px]'
							type='range'
						/>{' '}
						02:45
					</span>
					<button className='rounded-full transition'>
						<IoMdDownload size={18} />
					</button>
				</div>
				<h3 className='text-sm text-black mb-2'>LISTEN ON</h3>
				<div className='flex space-x-4'>
					<FaSpotify
						size={24}
						className='text-black cursor-pointer hover:scale-110 transition'
					/>
					<FaSoundcloud
						size={24}
						className='text-black cursor-pointer hover:scale-110 transition'
					/>
					<FaApple
						size={24}
						className='text-black cursor-pointer hover:scale-110 transition'
					/>
				</div>
			</div>
		</Container>
	)
}
