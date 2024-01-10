import { createAsyncThunk } from '@reduxjs/toolkit'

import { lessonService } from '@/services/lesson.service'

import {
	ILessonData,
	ILessonResponse,
	ISubmissionResponseData,
	ISubmissionResponseExtraData,
	ISubmitLessonData,
} from './lesson.interface'

// export const getLessonAction = createAsyncThunk<ILessonResponse, ILessonData>(
// 	'lesson/getLesson',
// 	async ({ lessonId, token }, thunkApi) => {
// 		try {
// 			const response = await lessonService.getLesson(lessonId, token)

// 			return response
// 		} catch (error) {
// 			return thunkApi.rejectWithValue(error)
// 		}
// 	}
// )

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
