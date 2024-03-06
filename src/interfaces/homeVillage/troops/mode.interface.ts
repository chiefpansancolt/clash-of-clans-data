import ModeMain from '@ICommon/army/mode.interface'

interface Mode extends ModeMain {
	auraRange?: number
	abilityDamageIncrease?: number
	abilityAttackSpeedIncrease?: number
	numberOfTargets?: number
	chainDamageDecay?: number
	auraAttackSpeed?: number
	auraRadius?: number
	freezeRadius?: number
	attackSpeedVsWalls?: number
	summonCooldown?: number
	numberOfPulses?: number
	timeBetweenPulses?: number
}

export default Mode
