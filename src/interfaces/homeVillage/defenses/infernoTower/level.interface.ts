import HomeVillageLevel from '@IHomeVillage/level.interface'

interface Level extends HomeVillageLevel {
	numberOfTargets: number
	damagePerSecondAfter15: number
	damagePerSecondAfter525: number
	damagePerHitAfter15: number
	damagePerHitAfter525: number
	depletedImgUrl: string
}

export default Level
