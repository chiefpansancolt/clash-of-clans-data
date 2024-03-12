import ArmyLevel from '@ICommon/army/level.interface'
import AbilityAttributes from '@IHomeVillage/troops/abilityAttributes.interface'
import HeroBoosts from '@IHomeVillage/troops/heroBoosts.interface'

interface Level extends ArmyLevel {
	researchTimeSec?: number
	researchTimeMin?: number
	researchTimeHour?: number
	researchTimeDay?: number
	laboratoryLevelRequired?: number
	townHallLevelRequired?: number
	baseImgUrl: string
	auraHpIncrease?: number
	abilityDamagePerSecond?: number
	damageUponDeath?: number
	auraDamagePerSecond?: number
	auraDamagePerHit?: number
	dpsOnResourceBuildings?: number
	golemitesSpawned?: number
	dpsOnHeroes?: number
	speedDecrease?: number
	attackRateDecrease?: number
	healingPerSecond?: number
	healingPerPulse?: number
	healingPerSecondOnHeroes?: number
	freezeTimeAfterDeathOnOffense?: number
	freezeTimeAfterDeathOnDefense?: number
	lavaPupsOnOffense?: number
	lavaPupsOnDefense?: number
	wallDamagePerSecond?: number
	wallDamagePerHit?: number
	damageVsWalls?: number
	damageWhenDestroyedVsWalls?: number
	skeletonsPerSummon?: number
	maxSkeletonsSummoned?: number
	yetimitesSpawned?: number
	totalHealing?: number
	totalHealingOnHeros?: number
	secondaryChainDamage?: number
	damagePerSecondStage1?: number
	damagePerSecondStage2?: number
	damagePerSecondStage3?: number
	freezeTimeUponDeath?: number
	icePupsSpawnedOnOffense?: number
	icePupsSpawnedOnDefense?: number
	damagePerSecondInitial?: number
	damagePerSecondAfter1_5?: number
	damagePerSecondAfter3?: number
	healthRecovery?: number
	regenTime?: number
	airModeImgUrl?: string
	shinyOreUpgradeCost?: number
	glowyOreUpgradeCost?: number
	starryOreUpgradeCost?: number
	blacksmithLevelRequired?: number
	abilityAttribute?: AbilityAttributes
	heroBoost?: HeroBoosts
	pointBlankDamage?: number
	lifetime?: number
	flameMaxiumDamagePerSecond?: number
	frostmitesPerSummon?: number
	maxFrostmitesSummoned?: number
	stunDuration?: number
	poisonMaxDamagePerSecond?: number
	poisonSpeedDecrease?: number
	poisonAttackRateDecrease?: number
	reviveDuration?: number
	invisibilityDuration?: number
	troopsSpawned?: {
		pekkaCount: number
		wizardCount: number
	}
}

export default Level
