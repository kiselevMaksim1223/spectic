'use client'

import { useParams, useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'

import { ILessonResponse } from '@/types/lesson.types'

import Form from './lesson-content/Form'

const Lesson: FC<{ lesson: ILessonResponse }> = ({ lesson }) => {
	return (
		<div className="flex flex-col max-w-screen-xl h-full mx-auto">
			<h1 className="text-3xl">Lesson #{lesson?.taskId}</h1>
			<p className="text-lg mt-10 flex-1">
				Read the question carefully. <br />
				Write your answer in the input field below, after answering you will see
				the result.
				<br />
				Good luck!
			</p>

			<p className="text-lg my-10">
				<b className="text-xl">Question: </b>
				<i>{lesson?.task}</i>
			</p>
			<Form lesson={lesson} />
		</div>
	)
}
export default Lesson
