export const createCounter = (): (() => number) => {
	let count = 0
	return () => ++count
}
