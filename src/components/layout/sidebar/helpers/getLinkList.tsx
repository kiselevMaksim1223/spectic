import { ReactNode } from 'react'
import { MdHome, MdSchool } from 'react-icons/md'

interface ISideBarList {
	title: string
	href: string
	icon: ReactNode
}

const sideBarList: ISideBarList[] = [
	{ title: 'Home', href: '/', icon: <MdHome size={25} /> },
	{ title: 'Lessons', href: '/lesson', icon: <MdSchool size={25} /> },
]

export const getLinkList = (isSignedIn: boolean): ISideBarList[] => {
	return isSignedIn ? sideBarList : sideBarList.slice(0, 1)
}
