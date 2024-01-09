import { FC } from 'react'

const AnswerCheck: FC<{ response: boolean }> = ({ response }) => {
	return (
		<p
			className={`self-center text-lg ${
				response ? 'text-green-500' : 'text-red-500'
			}`}
		>
			{response ? 'Correct' : 'Incorrect'}
		</p>
	)
}

export default AnswerCheck
