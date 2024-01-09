import Link from 'next/link'
import { FC } from 'react'

const Logo: FC<{ className?: string }> = ({ className }) => {
	return (
		<Link href={'/'} className={'text-3xl' + ' ' + className}>
			Spectic
		</Link>
	)
}

export default Logo
