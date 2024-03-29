'use client'

import { FC, useEffect, useState } from 'react'
import { MdDensityMedium } from 'react-icons/md'
import { MdClose } from 'react-icons/md'

import SidebarLinks from '@/components/layout/sidebar/SidebarLinks'
import Button from '@/components/ui/Button'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import Logo from '../Logo'

const MobileSidebar: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const isNotMobile = useMediaQuery('( min-width: 767px )')

	const sidebarHandler = () => {
		setIsOpen((prev) => !prev)
	}

	useEffect(() => {
		if (!isNotMobile) {
			setIsOpen(false)
		}
	}, [isNotMobile])

	return (
		<div className="md:hidden">
			<Button className="md:hidden p-2" onClick={sidebarHandler}>
				<MdDensityMedium size={24} />
			</Button>
			{isOpen && (
				<div className="bg-gray-700/80 fixed w-full h-screen z-10 top-0 left-0"></div>
			)}
			<div
				className={
					isOpen
						? 'fixed top-0 left-0 w-full sm:w-[300px] h-screen bg-white z-10 duration-300'
						: 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
				}
			>
				<MdClose
					onClick={sidebarHandler}
					size={30}
					className="absolute right-4 top-10 cursor-pointer"
				/>
				<div className="h-full pt-24 pb-8" onClick={sidebarHandler}>
					<Logo className="absolute left-4 top-9 cursor-pointer" />
					<SidebarLinks />
				</div>
			</div>
		</div>
	)
}

export default MobileSidebar
