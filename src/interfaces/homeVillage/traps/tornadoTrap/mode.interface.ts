import TrapMode from '@ICommon/traps/mode.interface'

interface Mode extends TrapMode {
	damagePerSecond: number
	damageRadius: number
}

export default Mode
