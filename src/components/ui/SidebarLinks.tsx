'use client'

import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { getLinkList } from '../layout/sidebar/helpers/getLinkList'
import { isLinkActiveLink } from '../layout/sidebar/helpers/isLinkActiveLink'

const SidebarLinks: FC = () => {
	const path = usePathname()
	const { isSignedIn } = useAuth()

	return (
		<div className="flex flex-col w-full space-y-1.5 p-3">
			{getLinkList(isSignedIn!).map((item, index) => (
				<Link
					key={index}
					href={item.href}
					className={`flex w-full gap-3 text-sm items-center py-3.5 px-3 md:hover:bg-[#f1f5f9] rounded-lg transition-background group text-[#868889] font-medium ${
						isLinkActiveLink(item.href, path) ? 'bg-[#f1f5f9]' : ''
					}`}
				>
					{item.icon}
					{item.title}
				</Link>
			))}
		</div>
	)
}

export default SidebarLinks
