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
	specialAbility?: string
	rageMovementSpeedIncreased?: number
	rageDamageIncrease?: number
	deathDamageRadius?: number
	timeBetweenShots?: number
	timeBetweenBursts?: number
	numberOfShotsPerBurst?: number
	searchRadius?: number
	abilityDuration?: number
	abilityRadius?: number
	bonusDamage?: number
	areaDamageRadius?: number
	attackingRange?: number
	lifetime?: number
	hitpointDecayPerSecond?: number
	rageDuration?: number
	rageSpeedIncrease?: number
	healingSpeed?: number
}

export default Mode
