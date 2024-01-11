import { FC, memo } from 'react'

const AnswerCheck: FC<{ response: boolean }> = memo(({ response }) => {
	return (
		<p
			className={`self-center text-lg ${
				response ? 'text-green-500' : 'text-red-500'
			}`}
		>
			{response ? 'Correct' : 'Incorrect'}
		</p>
	)
})

AnswerCheck.displayName = 'AnswerCheck'

export default AnswerCheck
