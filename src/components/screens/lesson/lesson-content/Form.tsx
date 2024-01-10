'use client'

import { FC, FormEvent, useRef } from 'react'

import Button from '@/components/ui/Button'
import Loader from '@/components/ui/Loader'

import { ILessonResponse } from '@/types/lesson.types'

import AnswerCheck from './AnswerCheck'
import LessonPagination from './LessonPagination'
import { useRedirectNextPage } from './useRedirectNextPage'
import { useSubmitLesson } from './useSubmitLesson'

const Form: FC<{ lesson: ILessonResponse }> = ({ lesson }) => {
	const ref = useRef<HTMLTextAreaElement>(null)

	const { response, isLoading, submitLesson, isDisabled, handleChange } =
		useSubmitLesson(lesson.taskId)
	const redirectTime = useRedirectNextPage(
		lesson.taskId,
		lesson.count,
		response
	)

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		if (ref.current) {
			await submitLesson(ref.current.value)
			ref.current.value = ''
		}
	}

	const onChangeHandler = () => {
		if (ref.current) handleChange(ref.current?.value)
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col">
			<textarea
				ref={ref}
				onChange={onChangeHandler}
				className="w-full border-2 border-black bg-[#fff] rounded-3xl focus:outline-none p-4 h-40"
			/>
			<div className="flex justify-between items-center mt-6">
				<div className="flex gap-4">
					<Button
						type="submit"
						disabled={isLoading || isDisabled}
						className="btn-submit py-3 px-10 w-auto"
					>
						Submit
					</Button>

					{isLoading && <Loader className="self-center !w-6 !h-6" />}
					{response !== null && <AnswerCheck response={response} />}
				</div>
				<LessonPagination lessonCount={lesson.count} lessonId={lesson.taskId} />
			</div>

			<p
				className={`text-xs md:text-sm mt-4 self-end ${
					response !== null ? '' : 'opacity-0'
				}`}
			>
				You will be redirected to the next question in {redirectTime}
				&nbsp;seconds
			</p>
		</form>
	)
}

export default Form
