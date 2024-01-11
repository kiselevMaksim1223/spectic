import { createAsyncThunk } from '@reduxjs/toolkit'

import { lessonService } from '@/services/lesson.service'

import {
	ISubmissionResponseExtraData,
	ISubmitLessonData,
} from './lesson.interface'

export const submitLessonAction = createAsyncThunk<
	ISubmissionResponseExtraData,
	ISubmitLessonData
>('lesson/getLesson', async ({ lessonId, value }, thunkApi) => {
	try {
		const response = await lessonService.submitLesson(lessonId, value)
		const data: ISubmissionResponseExtraData = {
			submissionResult: response.submissionResult,
			lessonId: lessonId,
		}

		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error)
	}
})
