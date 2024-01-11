import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IInitialState } from './lesson.interface'
import { submitLessonAction } from './lesson.thunks'

const initialState: IInitialState = {
	isLoading: false,
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
		builder.addCase(submitLessonAction.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(submitLessonAction.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.isDisabled = true
			state.results[payload.lessonId] = payload.submissionResult
			state.isCompletedResults[payload.lessonId] = false
		})
		builder.addCase(submitLessonAction.rejected, (state) => {
			state.isLoading = false
		})
	},
})
export const { setIsDisabled, setIsCompletedResult } = lessonSlice.actions
export const lessonReducer = lessonSlice.reducer
