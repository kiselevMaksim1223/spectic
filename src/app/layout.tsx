import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import MainProvider from '@/providers/MainProvider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Spectic',
	description: 'Increase your knowledge on Spectic',
	icons: {
		icon: '/icon.png',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<MainProvider>
				<body className={inter.className}>{children}</body>
			</MainProvider>
		</html>
	)
}
