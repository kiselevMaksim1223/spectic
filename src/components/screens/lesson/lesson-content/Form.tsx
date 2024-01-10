'use client'

import { FC, FormEvent, useRef } from 'react'

import Button from '@/components/ui/Button'
import Loader from '@/components/ui/Loader'

import { useAppSelector } from '@/hooks/useAppSelector'

import { ILessonResponse } from '@/store/lesson/lesson.interface'

import AnswerCheck from './AnswerCheck'
import LessonPagination from './LessonPagination'
import { useRedirectNextPage } from './useRedirectNextPage'
import { useSubmitLesson } from './useSubmitLesson'

const Form: FC<{ lesson: ILessonResponse }> = ({ lesson }) => {
	const res = useAppSelector((state) => state.lesson)
	const submissionResult = res.results[lesson.lessonId]
	const isCompleted = res.isCompletedResults[lesson.lessonId]

	console.log(res)

	const isLoading = useAppSelector((state) => state.lesson.isLoading)
	const isDisabled = useAppSelector((state) => state.lesson.isDisabled)

	const ref = useRef<HTMLTextAreaElement>(null)

	const { submitLesson, handleChange } = useSubmitLesson(lesson.lessonId)

	const redirectTime = useRedirectNextPage(
		lesson.lessonId,
		lesson.count,
		submissionResult,
		isCompleted
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
						disabled={isLoading || isDisabled || isCompleted}
						className="btn-submit py-3 px-10 w-auto"
					>
						Submit
					</Button>

					{isLoading && <Loader className="self-center !w-6 !h-6" />}
					{typeof submissionResult === 'boolean' && (
						<AnswerCheck response={submissionResult} />
					)}
				</div>
				<LessonPagination
					lessonCount={lesson.count}
					lessonId={lesson.lessonId}
				/>
			</div>

			<p
				className={`text-xs md:text-sm mt-4 self-end ${
					typeof submissionResult === 'boolean' && !isCompleted
						? ''
						: 'opacity-0'
				}`}
			>
				You will be redirected to the next question in {redirectTime}
				&nbsp;seconds
			</p>
		</form>
	)
}

export default Form
