import { NextRequest, NextResponse } from 'next/server'

import { delay } from '@/utils/delay'

import prisma from '@/lib/db'

import { ISubmissionResponseData } from '@/types/lesson.types'

export async function POST(
	request: NextRequest,
	{ params }: { params: { lessonId: string } }
) {
	const { lessonId } = params
	const req = await request.json()

	try {
		await delay(2000)
		await prisma.lesson.update({
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

		const submissionData: ISubmissionResponseData = {
			submissionResult: Math.random() < 0.5,
		}

		return Response.json(submissionData)
	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 })
	}
}
