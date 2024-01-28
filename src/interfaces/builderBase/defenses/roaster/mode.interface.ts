import DefenseMode from '@ICommon/defenseMode.interface'

interface Mode extends DefenseMode {
	tiles: number
	shotsPerAttackSpeed: number
}

export default Mode
