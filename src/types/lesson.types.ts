export interface IAssignmentData {
	taskId: string
	task: string
	userAttempts: number
}

export interface ILessonResponse extends IAssignmentData {
	count: number
}

export interface ISubmissionResponseData {
	submissionResult: boolean
}
