import Lesson from '@/components/screens/lesson/Lesson'

export default function LessonPage({
	params,
}: {
	params: { lessonId: string }
}) {
	const { lessonId } = params
	return <Lesson lessonId={lessonId} />
}
