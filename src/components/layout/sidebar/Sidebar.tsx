import { FC } from 'react'

import SidebarLinks from '@/components/layout/sidebar/SidebarLinks'

const Sidebar: FC = () => {
	return (
		<div className="hidden md:flex w-[15%] min-w-[300px] border-r">
			<SidebarLinks />
		</div>
	)
}

export default Sidebar
