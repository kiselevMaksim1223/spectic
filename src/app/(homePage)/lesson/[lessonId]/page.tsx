import { auth } from '@clerk/nextjs'

import Lesson from '@/components/screens/lesson/Lesson'

import { lessonService } from '@/services/lesson.service'

export default async function LessonPage({
	params,
}: {
	params: { lessonId: string }
}) {
	const { lessonId } = params
	const { getToken } = auth()
	const token = await getToken()
	const lesson = await lessonService.getLesson(lessonId, token)

	return <Lesson lesson={lesson} />
}
