import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useAppDispatch } from '@/hooks/useAppDispatch'

import { setIsCompletedResult } from '@/store/lesson/lesson.slice'

export const useRedirectNextPage = (
	lessonId: number,
	lessonCount: number,
	submissionResult: boolean | null,
	isCompleted: boolean
) => {
	const [redirectTime, setRedirectTime] = useState(5)
	const { push } = useRouter()
	const dispatch = useAppDispatch()

	useEffect(() => {
		const next = lessonId + 1

		if (typeof submissionResult === 'boolean' && !isCompleted) {
			const timeout = setTimeout(() => {
				if (next > lessonCount) {
					push('/result')
				} else push(`/lesson/${next}`)
				dispatch(setIsCompletedResult({ lessonId, isCompleted: true }))
			}, redirectTime * 1000)

			return () => {
				clearTimeout(timeout)
			}
		}
	}, [
		submissionResult,
		push,
		lessonId,
		redirectTime,
		lessonCount,
		isCompleted,
		dispatch,
	])

	useEffect(() => {
		if (typeof submissionResult === 'boolean' && !isCompleted) {
			const timer = setInterval(() => {
				setRedirectTime((prevTime) => {
					if (prevTime <= 1) {
						clearInterval(timer)
						return 0
					}
					return prevTime - 1
				})
			}, 1000)

			return () => clearInterval(timer)
		}
	}, [submissionResult, isCompleted])

	return redirectTime
}
