import LinkButton from '@/components/UI/LinkButton'

export default function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center px-[20px] text-center mt-[96px] max-[550px]:mt-[48px]'>
			<h1 className='text-[144px] font-semibold mb-[21px]'>404</h1>
			<h5 className='text-[26px] leading-[32px] font-semibold mb-[19px]'>
				Page not found!
			</h5>
			<p className='text-[16px] mb-[22px]'>
				This page not found (deleted or never exists). Try a phrase in search box or
				back to home and start again.
			</p>
			<LinkButton href='/'>HOMEPAGE</LinkButton>
		</div>
	)
}
