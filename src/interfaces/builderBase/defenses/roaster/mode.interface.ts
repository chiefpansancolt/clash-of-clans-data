import DefenseMode from '@ICommon/defenses/mode.interface'

interface Mode extends DefenseMode {
	tiles: number
	shotsPerAttackSpeed: number
}

export default Mode
