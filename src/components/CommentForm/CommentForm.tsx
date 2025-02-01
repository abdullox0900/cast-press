import Container from '../Container/Container'
import Button from '../UI/Button'

export default function CommentForm() {
	return (
		<Container>
			<h2 className='text-[16px] font-semibold mb-2 mt-[48px]'>Leave a Reply</h2>
			<p className='text-gray-500 text-[14px] mb-[17px]'>
				Required Fields Are Marked *
			</p>

			<form className='space-y-7'>
				<div>
					<label className='block text-[#555555] font-medium mb-3'>Comment</label>
					<textarea className='w-full p-3 h-[150px] rounded-[4px] bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500'></textarea>
				</div>

				<div>
					<label className='block text-[#555555] font-medium mb-3'>Name*</label>
					<input
						type='text'
						className='w-full p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500'
						required
					/>
				</div>

				<div>
					<label className='block text-[#555555] font-medium mb-3'>Email*</label>
					<input
						type='email'
						className='w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500'
						required
					/>
				</div>

				<div>
					<label className='block text-gray-700 font-medium mb-1'>Website*</label>
					<input
						type='url'
						className='w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500'
						required
					/>
				</div>

				<div className='flex items-center space-x-2'>
					<input
						type='checkbox'
						id='save-info'
						className='rounded border-gray-400'
					/>
					<label htmlFor='save-info' className='text-gray-600 text-sm'>
						Save my name, email, and website in this browser for the next time I
						comment
					</label>
				</div>

				<Button>Submit</Button>
			</form>
		</Container>
	)
}
