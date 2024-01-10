import { NextResponse } from 'next/server'

import { delay } from '@/utils/delay'

import prisma from '@/lib/db'

export async function GET(
	request: Request,
	{ params }: { params: { lessonId: string } }
) {
	const { lessonId } = params

	try {
		const lesson = await prisma.lesson.findUnique({
			where: {
				taskId: lessonId,
			},
		})
		const lessonsCount = (await prisma.lesson.findMany()).length

		const lessonWithCount = { ...lesson, count: lessonsCount }

		await delay(2000)

		if (!lesson) {
			return Response.json('Not found', { status: 404 })
		}

		return Response.json(lessonWithCount)
	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 })
	}
}
