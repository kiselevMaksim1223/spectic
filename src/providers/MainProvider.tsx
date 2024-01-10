'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/store/store'

const MainProvider = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Provider store={store}>
				<ClerkProvider>{children}</ClerkProvider>
			</Provider>
		</>
	)
}

export default MainProvider
