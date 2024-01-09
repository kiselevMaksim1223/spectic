import { FC } from 'react'

const Lesson: FC<{ lessonId: string }> = ({ lessonId }) => {
	return (
		<>
			<h1>Lesson #{lessonId}</h1>
		</>
	)
}

export default Lesson
