import { ILessonResponse, ISubmissionResponseData } from '@/types/lesson.types'

const baseUrl = 'http://localhost:3000/api'

export const lessonService = {
	getLesson: async (lessonId: string): Promise<ILessonResponse> => {
		const res = await fetch(`${baseUrl}/lesson/${lessonId}`, {
			cache: 'no-store',
		}).then((res) => res.json())
		return res
	},
	submitLesson: async (
		lessonId: string,
		value: string
	): Promise<ISubmissionResponseData> => {
		const res = await fetch(`${baseUrl}/submission/${lessonId}`, {
			method: 'POST',
			body: JSON.stringify({ value }),
		}).then((res) => res.json())
		return res
	},
}
