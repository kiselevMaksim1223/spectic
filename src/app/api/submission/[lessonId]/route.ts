import { currentUser } from '@clerk/nextjs'
import { NextRequest, NextResponse } from 'next/server'

import { delay } from '@/utils/delay'

import { ISubmissionResponseData } from '@/store/lesson/lesson.interface'

import prisma from '@/lib/db'

export async function POST(
	request: NextRequest,
	{ params }: { params: { lessonId: string } }
) {
	const { lessonId } = params
	const user = await currentUser()

	const req = await request.json()

	try {
		await delay(2000)
		await prisma.userLessonAttempt.updateMany({
			where: {
				userId: user?.id!,
				lessonId: Number(lessonId)!,
			},
			data: {
				userAttempt: {
					increment: 1,
				},
			},
		})
		console.log('request value: ', req.value)

		const submissionData: ISubmissionResponseData = {
			submissionResult: Math.random() < 0.5,
		}

		return Response.json(submissionData)
	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 })
	}
}
