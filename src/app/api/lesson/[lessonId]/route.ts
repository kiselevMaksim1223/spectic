import prisma from '@/lib/db'
import { delay } from '@/utils/delay'

type AssignmentData = {
	taskId: string
	task: string
	userAttempts: number
}

export async function GET(
	request: Request,
	{ params }: { params: { lessonId: string } }
) {
	const { lessonId } = params
	const lesson = await prisma.lesson.findUnique({
		where: {
			taskId: lessonId,
		},
	})

	await delay(2000)

	if (!lesson) {
		return Response.json('Not found', { status: 404 })
	}

	return Response.json(lesson)
}
