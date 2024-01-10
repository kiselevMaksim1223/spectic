import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@/assets/spectic-high-resolution-logo-transparent.svg'

const Logo: FC<{ className?: string }> = ({ className }) => {
	return (
		<Link href={'/'} className={'text-3xl' + ' ' + className}>
			<Image src={logo} alt="logo" width={150} priority />
		</Link>
	)
}

export default Logo
