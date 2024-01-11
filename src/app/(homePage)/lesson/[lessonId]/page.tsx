'use client'

import { auth, useAuth } from '@clerk/nextjs'
import { useEffect } from 'react'

import Lesson from '@/components/screens/lesson/Lesson'
import Loader from '@/components/ui/Loader'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'

import { lessonService } from '@/services/lesson.service'

import { getLessonAction } from '@/store/lesson/lesson.thunks'
import { RootState } from '@/store/store'

export default function LessonPage({
	params,
}: {
	params: { lessonId: string }
}) {
	const dispatch = useAppDispatch()
	const lesson = useAppSelector((state: RootState) => state.lesson.lessonData)
	const isLoading = useAppSelector((state: RootState) => state.lesson.isLoading)
	const { lessonId } = params
	const { getToken } = useAuth()

	useEffect(() => {
		const token = getToken()
		dispatch(getLessonAction({ lessonId, token }))
	}, [lessonId, dispatch, getToken])
	// const token = await getToken()
	// const lesson = await lessonService.getLesson(lessonId, token)
	if (!lesson || isLoading) {
		return <Loader absolute />
	}

	return <Lesson lesson={lesson} />
}
