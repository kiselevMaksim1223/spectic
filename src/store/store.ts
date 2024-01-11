import { configureStore } from '@reduxjs/toolkit'

import { lessonReducer } from './lesson/lesson.slice'

export const store = configureStore({
	reducer: { lesson: lessonReducer },
	devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
