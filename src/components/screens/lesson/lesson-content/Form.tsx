'use client'

import { FC, FormEvent, useRef } from 'react'

import Button from '@/components/ui/Button'
import Loader from '@/components/ui/Loader'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'

import { ILessonResponse } from '@/store/lesson/lesson.interface'
import { lessonResultSelector } from '@/store/lesson/lesson.selector'
import { setIsDisabled } from '@/store/lesson/lesson.slice'

import AnswerCheck from './AnswerCheck'
import LessonPagination from './LessonPagination'
import { useRedirectNextPage } from './useRedirectNextPage'
import { useSubmitLesson } from './useSubmitLesson'

const Form: FC<{ lesson: ILessonResponse }> = ({ lesson }) => {
	const lessonResult = useAppSelector(lessonResultSelector)

	const submittedResult = lessonResult.results[lesson.lessonId]
	const isCompletedResult = lessonResult.isCompletedResults[lesson.lessonId]
	const isLoading = lessonResult.isLoading
	const isDisabled = lessonResult.isDisabled

	const ref = useRef<HTMLTextAreaElement>(null)

	const { submitLesson, handleChange } = useSubmitLesson(lesson.lessonId)

	const redirectTime = useRedirectNextPage(
		lesson.lessonId,
		lesson.count,
		submittedResult,
		isCompletedResult
	)

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		if (ref.current) {
			submitLesson(ref.current.value)
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
						disabled={isLoading || isDisabled || isCompletedResult}
						className="btn-submit py-3 px-10 w-auto"
					>
						Submit
					</Button>

					{isLoading && <Loader className="self-center !w-6 !h-6" />}
					{typeof submittedResult === 'boolean' && (
						<AnswerCheck response={submittedResult} />
					)}
				</div>
				<LessonPagination
					lessonCount={lesson.count}
					lessonId={lesson.lessonId}
				/>
			</div>

			<p
				className={`text-xs md:text-sm mt-4 self-end ${
					typeof submittedResult === 'boolean' && !isCompletedResult
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
