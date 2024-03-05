import TrapMode from '@ICommon/traps/mode.interface'

interface Mode extends TrapMode {
	damageRadius?: number
	aoeRadius?: number
	pushDistance?: number
}

export default Mode
