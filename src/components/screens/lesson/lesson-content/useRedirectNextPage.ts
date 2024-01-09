import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useRedirectNextPage = (
	taskId: string,
	lessonCount: number,
	response: boolean | null
) => {
	const [redirectTime, setRedirectTime] = useState(5)
	const { push } = useRouter()

	useEffect(() => {
		const next = Number(taskId) + 1

		if (response !== null) {
			const timeout = setTimeout(() => {
				if (next > lessonCount) {
					push('/result')
				} else push(`/lesson/${next}`)
			}, redirectTime * 1000)

			return () => {
				clearTimeout(timeout)
			}
		}
	}, [response, push, taskId, redirectTime, lessonCount])

	useEffect(() => {
		if (response !== null) {
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
	}, [response])

	return redirectTime
}
