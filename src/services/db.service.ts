import prisma from '@/lib/db'

export const dbService = {
	createUserIfNotExist: async (userId: string, email: string) => {
		await prisma.user.upsert({
			where: {
				id: userId,
			},
			update: {},
			create: {
				id: userId,
				email,
			},
		})
	},
	createUserLessonProgress: async (userId: string) => {
		const existingUserLessons = await prisma.userLessonAttempt.findMany({
			where: {
				userId: userId!,
			},
		})

		if (!existingUserLessons.length) {
			const lessons = await prisma.lesson.findMany()
			const lessonIds = lessons
				.map((lesson) => lesson.taskId)
				.sort((a, b) => a - b)

			const userLessonProgress = lessonIds.map((lessonId) => {
				return {
					userId: userId!,
					lessonId,
					userAttempt: 0,
				}
			})

			await prisma.userLessonAttempt.createMany({
				data: userLessonProgress,
			})
		}
	},
}
