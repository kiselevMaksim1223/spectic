import Link from 'next/link'
import { FC } from 'react'
import { MdHome } from 'react-icons/md'

import Button from '@/components/ui/Button'

const Result: FC = () => {
	return (
		<div className="flex flex-col items-center justify-center text-center w-full gap-4">
			<p className="md:text-3xl text-base ">
				Congratulations you answer on all questions!
			</p>
			<Link href={'/'}>
				<Button
					buttonType="headerButton"
					className={'flex items-center gap-2 p-3'}
				>
					Go to main page
					<MdHome size={20} />
				</Button>
			</Link>
		</div>
	)
}

export default Result
