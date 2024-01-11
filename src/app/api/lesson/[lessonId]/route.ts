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
				lessonId: Number(lessonId),
			},
		})
		const lessonsCount = (await prisma.lesson.findMany()).length

		const lessonWithCount = { ...lesson, count: lessonsCount }

		await delay(2000)

		if (!lesson) {
			return Response.json('Not found', { status: 404 })
		}

		return Response.json(lessonWithCount, {
			status: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			},
		})
	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 })
	}
}
