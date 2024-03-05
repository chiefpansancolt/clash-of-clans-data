import TrapMode from '@ICommon/traps/mode.interface'

interface Mode extends TrapMode {
	damageRadius?: number
	name?: string
	attackType?: string
	attackSpeed?: number
	range?: number
	movementSpeed?: number
	damagePerSecond?: number
	damagePerHit?: number
	hitpoints?: number
}

export default Mode
