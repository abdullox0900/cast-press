import Container from '@/components/Container/Container'
import Button from '@/components/UI/Button'

const page = () => {
	return (
		<Container>
			<div className='mt-[96px]'>
				<h3 className='mb-[13px] text-[26px] text-[#222222] font-semibold'>
					Contact
				</h3>
				<p className='text-[18px] text-[#222222] mb-[46px]'>
					Love to hear your thoughts, fears & feelings...
				</p>
				<form className='flex flex-col gap-[24px]'>
					<div className='flex flex-col'>
						<label className='mb-[4px] text-[16px] text-[#555555] leading-[25px]'>
							Name*
						</label>
						<input
							className='px-[10px] py-[8px] bg-[#F5F5F7] rounded-[4px]'
							type='text'
							placeholder='Enter your name'
						/>
					</div>
					<div className='flex flex-col'>
						<label className='mb-[4px] text-[16px] text-[#555555] leading-[25px]'>
							Email*
						</label>
						<input
							className='px-[10px] py-[8px] bg-[#F5F5F7] rounded-[4px]'
							type='text'
							placeholder='Enter your email'
						/>
					</div>
					<div className='flex flex-col mb-[40px]'>
						<label className='mb-[4px] text-[16px] text-[#555555] leading-[25px]'>
							Message
						</label>
						<textarea
							className='px-[10px] py-[8px] h-[150px] bg-[#F5F5F7] rounded-[4px]'
							placeholder='Enter your message'
						/>
					</div>
					<div className='inline-block'>
						<Button>Submit</Button>
					</div>
				</form>
			</div>
		</Container>
	)
}

export default page
