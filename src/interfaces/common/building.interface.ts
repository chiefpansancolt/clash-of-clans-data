interface Building {
	name: string
	description: string
	width: number
	height: number
	maxLevel: number

	getSize(): string
}

export default Building
