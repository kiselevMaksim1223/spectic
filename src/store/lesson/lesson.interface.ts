export interface IInitialState {
	lessonData: ILessonResponse | null
	isLoading: boolean
	results: {
		[key: number]: boolean
	}
	isCompletedResults: {
		[key: number]: boolean
	}
	isLoadingButton: boolean
	isDisabled: boolean
}

export interface ILessonData {
	lessonId: string
	token: Promise<string | null>
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
