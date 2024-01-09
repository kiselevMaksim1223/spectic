import { FC } from 'react'

interface ILoader {
	absolute?: boolean
	className?: string
}

const Loader: FC<ILoader> = ({ absolute, className }) => {
	return (
		<div
			className={
				`${
					absolute ? 'absolute top-[50%] left-[50%]' : ''
				} inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]` +
				' ' +
				className
			}
			role="status"
		>
			<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
				Loading...
			</span>
		</div>
	)
}

export default Loader
