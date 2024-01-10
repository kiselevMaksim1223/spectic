import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import SidebarLinks from '@/components/ui/SidebarLinks'

const Sidebar: FC = () => {
	return (
		<div className="hidden md:flex w-[15%] min-w-[300px] border-r">
			<SidebarLinks />
		</div>
	)
}

export default Sidebar
