export interface IInitialState {
	results: {
		[key: number]: boolean
	}
	isCompletedResults: {
		[key: number]: boolean
	}
	isLoading: boolean
	isDisabled: boolean
}

export interface ILessonData {
	lessonId: string
	token: string | null
}

export interface ISubmitLessonData {
	lessonId: number
	value: string
}

export interface IAssignmentData {
	lessonId: number
	task: string
}

export interface ILessonResponse extends IAssignmentData {
	count: number
}

export interface ISubmissionResponseData {
	submissionResult: boolean
}

export interface ISubmissionResponseExtraData extends ISubmissionResponseData {
	lessonId: number
}
