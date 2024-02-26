import BaseMode from '@ICommon/army/mode.interface'

interface Mode extends BaseMode {
	numberOfPulses: number
	timeBetweenPulses: number
}

export default Mode
