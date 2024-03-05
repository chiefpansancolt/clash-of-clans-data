import Level from '@ICommon/level.interface'

interface HomeVillageLevel extends Level {
	damagePerSecond?: number
	damagePerShot?: number
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
	pushStrength?: number
	damageWhenDestroyed?: number
	repairPerSecond?: number
	repairPerHit?: number
	shockwaveDamage?: number
	bonusDamagePerShot?: number
	numberOfTargets?: number
	damagePerSecondAfter15?: number
	damagePerSecondAfter525?: number
	damagePerHitAfter15?: number
	damagePerHitAfter525?: number
	damagePerShotMax?: number
	splashDamageMin?: number
	splashDamageMax?: number
	unlocks?: string
	poisonSpellImgUrl?: string
	invisibilitySpellImgUrl?: string
	depletedImgUrl?: string
	attackingImgUrl?: string
	gearImgUrl?: string
	burstImgUrl?: string
	activeImgUrl?: string
	groundDepletedImgUrl?: string
	airGroundImgUrl?: string
	airGroundDepletedImgUrl?: string
}

export default HomeVillageLevel
