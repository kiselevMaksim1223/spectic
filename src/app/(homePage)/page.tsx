import { auth, currentUser } from '@clerk/nextjs'

import Home from '@/components/screens/home/Home'

import { dbService } from '@/services/db.service'

export default async function HomePage() {
	try {
		const { userId } = auth()
		const user = await currentUser()
		const userEmail = user?.emailAddresses[0].emailAddress

		await dbService.createUserIfNotExist(userId!, userEmail!)

		await dbService.createUserLessonProgress(userId!)
	} catch (error) {
		console.log('error: ', error)
	}

	return <Home />
}
