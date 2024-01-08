import prisma from '@/lib/db'
import { delay } from '@/utils/delay'
import { NextRequest, NextResponse } from 'next/server'

type SubmissionData = {
	submissionResult: boolean
}
export async function POST(
	request: NextRequest,
	{ params }: { params: { lessonId: string } }
) {
	const { lessonId } = params
	const req = await request.json()

	try {
		await delay(2000)
		const lesson = await prisma.lesson.update({
			where: {
				taskId: lessonId,
			},
			data: {
				userAttempts: {
					increment: 1,
				},
			},
		})
		console.log(req.value)

		const submissionData: SubmissionData = {
			submissionResult: Math.random() < 0.5,
		}

		return Response.json(submissionData)
	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 })
	}
}
