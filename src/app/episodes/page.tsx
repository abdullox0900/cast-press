import Container from '@/components/Container/Container'
import PodcastList from '@/components/PodcastList/PodcastList'

const page = () => {
	return (
		<div>
			<Container>
				<h2 className='text-[26px] font-semibold mt-[96px] mb-[42px] max-[550px]:mt-[42px]'>
					Episodes
				</h2>
			</Container>
			<PodcastList />
		</div>
	)
}

export default page
