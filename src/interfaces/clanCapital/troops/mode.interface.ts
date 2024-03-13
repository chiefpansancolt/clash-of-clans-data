import ModeMain from '@ICommon/army/mode.interface'

interface Mode extends ModeMain {
	abilityCooldown?: number
	duration?: number
	movementSpeedDuringAbility?: number
	specialAbility?: string
	rageMovementIncrease?: number
	rageDamageIncrease?: number
	troopCount?: number
	timeBetweenSots?: number
	timeBetweenBursts?: number
}

export default Mode
