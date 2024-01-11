import { useAppDispatch } from '@/hooks/useAppDispatch'

import { setIsDisabled } from '@/store/lesson/lesson.slice'
import { submitLessonAction } from '@/store/lesson/lesson.thunks'

export const useSubmitLesson = (lessonId: number) => {
	const dispatch = useAppDispatch()

	const submitLesson = (value: string) => {
		dispatch(submitLessonAction({ lessonId, value }))
	}

	const handleChange = (value: string) => {
		if (value) {
			dispatch(setIsDisabled(false))
		} else {
			dispatch(setIsDisabled(true))
		}
	}

	return { submitLesson, handleChange }
}
