import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useRedirect = (path: string) => {
	const { push } = useRouter()
	useEffect(() => {
		push(path)
	}, [path, push])
}
