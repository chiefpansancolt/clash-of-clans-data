import DefenseMode from '@ICommon/defenses/mode.interface'

interface Mode extends DefenseMode {
	numberOfTargets: number
	numberOfRounds: number
}

export default Mode
