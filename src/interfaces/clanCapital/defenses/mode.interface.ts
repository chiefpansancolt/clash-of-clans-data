import DefenseMode from '@ICommon/defenses/mode.interface'

interface Mode extends DefenseMode {
	ammoCapacity?: number
	triggerRange?: number
	miniMinionsPerBurst?: number
	shotsPerBurst?: number
	tiles?: number
	ammoCapacity
}

export default Mode
