import ModeMain from '@ICommon/army/mode.interface'

interface Mode extends ModeMain {
	numberOfTargets: number
	chainDamageDecay: number
}

export default Mode
