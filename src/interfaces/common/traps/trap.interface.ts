import Mode from '@ICommon/traps/mode.interface'

interface Defense {
	name: string
	description: string
	width: number
	height: number
	maxLevel: number
	modes: Mode[]

	getSize(): string
}

export default Defense
