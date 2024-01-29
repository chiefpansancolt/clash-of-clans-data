import Mode from '@ICommon/traps/mode.interface'

interface Trap {
	name: string
	description: string
	width: number
	height: number
	maxLevel: number
	mode: Mode | Mode[]

	getSize(): string
}

export default Trap
