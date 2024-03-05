import DefenseMode from '@ICommon/defenses/mode.interface'

interface Mode extends DefenseMode {
	tiles?: number
	shotsPerAttackSpeed?: number
	triggerRange?: number
	shots?: number
	shotsPerBurst?: number
}

export default Mode
