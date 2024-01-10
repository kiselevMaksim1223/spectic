import { auth } from '@clerk/nextjs'

import Header from '@/components/layout/header/Header'
import MobileSidebar from '@/components/layout/header/mobile-sidebar/MobileSidebar'
import Sidebar from '@/components/layout/sidebar/Sidebar'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { user } = auth()
	console.log(user)

	return (
		<>
			<Header>
				<MobileSidebar />
			</Header>
			<div className="flex pt-[80px] min-h-screen">
				<Sidebar />
				{children}
			</div>
		</>
	)
}
