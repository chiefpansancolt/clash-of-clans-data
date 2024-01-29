import Mode from '@ICommon/defenses/mode.interface'

interface Defense {
	name: string
	description: string
	width: number
	height: number
	maxLevel: number
	mode: Mode[] | Mode

	getSize(): string
}

export default Defense
