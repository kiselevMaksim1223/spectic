import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/layout/header/Header'
import MobileSidebar from '@/components/layout/header/mobile-sidebar/MobileSidebar'
import Sidebar from '@/components/layout/sidebar/Sidebar'

import MainProvider from '@/providers/MainProvider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Spectic',
	description: 'Increase your knowledge on Spectic',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<MainProvider>
				<body className={inter.className}>
					<Header>
						<MobileSidebar />
					</Header>
					<div className="flex pt-[80px] min-h-screen">
						<Sidebar />
						{children}
					</div>
				</body>
			</MainProvider>
		</html>
	)
}
