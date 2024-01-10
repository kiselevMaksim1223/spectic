import { redirect } from 'next/navigation'

import { delay } from '@/utils/delay'

export default async function LessonPage() {
	await delay(500)
	redirect('lesson/1')
}
