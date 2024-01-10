export interface IAssignmentData {
	taskId: number
	task: string
}

export interface ILessonResponse extends IAssignmentData {
	count: number
}

export interface ISubmissionResponseData {
	submissionResult: boolean
}
