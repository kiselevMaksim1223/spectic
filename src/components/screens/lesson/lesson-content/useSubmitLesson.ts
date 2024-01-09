import { useState } from 'react'

import { lessonService } from '@/services/lesson.service'

export const useSubmitLesson = (taskId: string) => {
	const [response, setResponse] = useState<boolean | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isDisabled, setIsDisabled] = useState<boolean>(true)

	const submitLesson = async (value: string) => {
		try {
			setIsLoading(true)
			const res = await lessonService.submitLesson(taskId, value)
			setResponse(res.submissionResult)
			setIsDisabled(true)
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	const handleChange = (value: string) => {
		if (value) {
			setIsDisabled(false)
		} else {
			setIsDisabled(true)
		}
	}

	return { response, isLoading, submitLesson, handleChange, isDisabled }
}
