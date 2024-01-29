import TrapMode from '@ICommon/traps/mode.interface'

interface Mode extends TrapMode {
	aoeRadius: number
	pushDistance: number
}

export default Mode
