import HomeVillageLevel from '@IHomeVillage/troops/level.interface'

interface Level extends HomeVillageLevel {
	totalHealing: number
	healingPerPulse: number
	totalHealingOnHeros: number
}

export default Level
