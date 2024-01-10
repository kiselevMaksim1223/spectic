'use client'

import { UserButton, useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { MdLogin } from 'react-icons/md'

import Button from '@/components/ui/Button'

import Logo from './Logo'

const Header: FC<{
	children?: ReactNode
}> = ({ children }) => {
	const { isSignedIn } = useAuth()

	return (
		<div className="h-[80px] fixed top-0 bottom-0 w-full flex justify-between items-center border-b p-4 bg-white z-10">
			<Logo className="hidden md:block" />

			{children}
			{isSignedIn ? (
				<UserButton afterSignOutUrl="/" />
			) : (
				<Link href={'/sign-in'}>
					<Button
						buttonType="headerButton"
						className="flex items-center gap-2 p-2"
					>
						<MdLogin size={20} />
						<p>Login</p>
					</Button>
				</Link>
			)}
		</div>
	)
}

export default Header
