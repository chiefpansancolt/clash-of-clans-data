interface Wall {
	name: string
	description: string
	width: number
	height: number
	maxLevel: number
	maxCount: number

	getSize(): string
}

export default Wall
