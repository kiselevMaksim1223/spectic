import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import homePicture from '@/assets/logo-no-background.svg'

const GuestHome: FC = () => {
	return (
		<div className="flex flex-col items-center gap-9 text-center w-full p-6">
			<h1 className="text-3xl">Welcome guest!</h1>
			<p className="text-lg mt-10 max-w-[800px]">
				Welcome to our educational platform! We&apos;re thrilled to have you
				here. Get ready to embark on a journey of learning and discovery.
				Please&nbsp;
				<Link href={'/sign-in'} className="text-blue-500">
					log in
				</Link>{' '}
				to access a world of knowledge tailored just for you. Let&apos;s unlock
				your potential together!
			</p>
			<Image src={homePicture} alt={'User home'} width={800} priority />
		</div>
	)
}

export default GuestHome
