import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IInitialState } from './lesson.interface'
import { getLessonAction, submitLessonAction } from './lesson.thunks'

const initialState: IInitialState = {
	lessonData: null,
	isLoading: false,
	isLoadingButton: false,
	isDisabled: true,
	results: {},
	isCompletedResults: {},
}

export const lessonSlice = createSlice({
	name: 'lesson',
	initialState,
	reducers: {
		setIsDisabled: (state, action: PayloadAction<boolean>) => {
			state.isDisabled = action.payload
		},
		setIsCompletedResult: (
			state,
			action: PayloadAction<{ lessonId: number; isCompleted: boolean }>
		) => {
			state.isCompletedResults[action.payload.lessonId] =
				action.payload.isCompleted
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getLessonAction.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getLessonAction.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.lessonData = payload
		})
		builder.addCase(getLessonAction.rejected, (state) => {
			state.isLoading = false
		})

		builder.addCase(submitLessonAction.pending, (state) => {
			state.isLoadingButton = true
		})
		builder.addCase(submitLessonAction.fulfilled, (state, { payload }) => {
			state.isLoadingButton = false
			state.isDisabled = true
			state.results[payload.lessonId] = payload.submissionResult
			state.isCompletedResults[payload.lessonId] = false
		})
		builder.addCase(submitLessonAction.rejected, (state) => {
			state.isLoadingButton = false
		})
	},
})
export const { setIsDisabled, setIsCompletedResult } = lessonSlice.actions
export const lessonReducer = lessonSlice.reducer
