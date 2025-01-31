import Container from '@/components/Container/Container'
import LinkButton from '@/components/UI/LinkButton'

const page = () => {
	return (
		<Container>
			<div className='pt-[96px]'>
				<h1 className='mb-[40px] text-[32px] font-semibold max-[425px]:text-[26px]'>
					Support CastPress
				</h1>
				<p className='mb-[40px] text-[16px] leading-[25px]'>
					Help us continue to break down silos and spread knowledge through
					CastPress. By being funded, with your valuable donations, we can continue
					to bring you podcast content that is fresh, relevant and helps you grow.
				</p>
				<div className='inline-block'>
					<LinkButton href='/'>Donate Now</LinkButton>
				</div>
			</div>
		</Container>
	)
}

export default page
