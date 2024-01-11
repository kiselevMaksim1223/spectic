import Link from 'next/link'
import { FC, memo } from 'react'

import { lessonsPagination } from '../helpers/lessonPagination'

interface ILessonPagination {
	lessonCount: number
	lessonId: number
}

const LessonPagination: FC<ILessonPagination> = memo(
	({ lessonCount, lessonId }) => {
		return (
			<div className="flex gap-4 mr-3 self-center">
				{lessonsPagination(lessonCount).map((id) => (
					<Link
						key={id}
						href={`/lesson/${id}`}
						className={`text-lg ${lessonId === id ? 'text-blue-400' : ''}`}
					>
						{id}
					</Link>
				))}
			</div>
		)
	}
)
LessonPagination.displayName = 'LessonPagination'

export default LessonPagination
