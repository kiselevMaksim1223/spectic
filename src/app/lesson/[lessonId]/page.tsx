import Lesson from '@/components/screens/lesson/Lesson'

import { lessonService } from '@/services/lesson.service'

export default async function LessonPage({
	params,
}: {
	params: { lessonId: string }
}) {
	const { lessonId } = params

	const lesson = await lessonService.getLesson(lessonId)

	return <Lesson lesson={lesson} />
}
