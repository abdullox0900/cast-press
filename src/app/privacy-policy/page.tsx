import Container from '@/components/Container/Container'

export default function PrivacyPolicy() {
	return (
		<Container>
			<h1 className='text-[26px] font-semibold mb-[42px] mt-[96px] max-[550px]:mt-[46px]'>
				Privacy Policy
			</h1>

			<section className='mb-6'>
				<h2 className='text-[22px] font-semibold mb-2'>Your details and data</h2>
				<p className='text-gray-700'>
					Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
					sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
					pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
					placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
					sodales lectus placerat quis.
				</p>
			</section>

			<section className='mb-6'>
				<h2 className='text-xl font-semibold mb-2'>Security</h2>
				<p className='text-gray-700'>
					Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
					sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
					pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et.
				</p>
			</section>

			<section>
				<h2 className='text-xl font-semibold mb-2'>Cookies</h2>
				<ul className='list-disc list-inside text-gray-700'>
					<li>
						Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem
						ultricies placerat et ac neque. Proin risus eros.
					</li>
					<li>
						Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem
						ultricies placerat et ac neque. Proin risus eros.
					</li>
				</ul>
			</section>
		</Container>
	)
}
