import DefenseMode from '@ICommon/defenseMode.interface'

interface Mode extends DefenseMode {
	numberOfTargets: number
	numberOfRounds: number
}

export default Mode
