import Link from 'next/link'
import { FC } from 'react'

import { lessonsPagination } from '../helpers/lessonPagination'

interface ILessonPagination {
	lessonCount: number
	lessonId: string
}

const LessonPagination: FC<ILessonPagination> = ({ lessonCount, lessonId }) => {
	return (
		<div className="flex gap-4 mr-3 self-center">
			{lessonsPagination(lessonCount).map((id) => (
				<Link
					key={id}
					href={`/lesson/${id}`}
					className={`text-lg ${
						lessonId === String(id) ? 'text-blue-400' : ''
					}`}
				>
					{id}
				</Link>
			))}
		</div>
	)
}

export default LessonPagination
