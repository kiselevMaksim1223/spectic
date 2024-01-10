import Image from 'next/image'
import { FC } from 'react'

import homePicture from '@/assets/logo-no-background.svg'

const UserHome: FC = () => {
	return (
		<div className="flex flex-col items-center gap-9 text-center w-full p-6">
			<h1 className="text-3xl">Welcome friend!</h1>
			<p className="text-lg mt-10 max-w-[800px]">
				Welcome back, esteemed learner! It&apos;s time to dive into your
				learning journey. To begin your educational experience, head over to the
				lessons section. There, you&apos;ll find a treasure trove of knowledge
				waiting for you. Happy learning and enjoy the exploration!
			</p>
			<Image src={homePicture} alt={'User home'} width={800} priority />
		</div>
	)
}

export default UserHome
