import { ClerkProvider } from '@clerk/nextjs'
import { ReactNode } from 'react'

const MainProvider = ({ children }: { children: ReactNode }) => {
	return <ClerkProvider>{children}</ClerkProvider>
}

export default MainProvider
