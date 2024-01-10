import { ILessonResponse, ISubmissionResponseData } from '@/types/lesson.types'

const baseUrl = 'http://localhost:3000/api'

export const lessonService = {
	getLesson: async (
		lessonId: string,
		token: string | null
	): Promise<ILessonResponse> => {
		const res = await fetch(`${baseUrl}/lesson/${lessonId}`, {
			cache: 'no-store',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		}).then((res) => res.json())
		return res
	},
	submitLesson: async (
		lessonId: number,
		value: string
	): Promise<ISubmissionResponseData> => {
		const res = await fetch(`${baseUrl}/submission/${lessonId}`, {
			method: 'POST',
			body: JSON.stringify({ value }),
		}).then((res) => res.json())
		return res
	},
}
