import ModeMain from '@ICommon/army/mode.interface'

interface Mode extends ModeMain {
	abilityCooldown?: number
	duration?: number
	movementSpeedDuringAbility?: number
}

export default Mode
