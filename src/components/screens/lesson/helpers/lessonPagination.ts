export const lessonsPagination = (count: number) => {
	const arr = []
	for (let i = 1; i <= count; i++) {
		arr.push(i)
	}
	return arr
}
