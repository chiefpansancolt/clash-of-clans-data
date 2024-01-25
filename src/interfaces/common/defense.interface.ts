import DefenseMode from '../common/defenseMode.interface'

interface Defense {
	name: string
	description: string
	width: number
	height: number
	maxLevel: number
	modes: DefenseMode[]

	getSize(): string
}

export default Defense
