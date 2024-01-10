'use client'

import { useAuth } from '@clerk/nextjs'
import { FC } from 'react'

import GuestHome from './home-content/GuestHome'
import UserHome from './home-content/UserHome'

const Home: FC = () => {
	const { isSignedIn } = useAuth()
	if (isSignedIn) {
		return <UserHome />
	} else {
		return <GuestHome />
	}
}

export default Home
